import React, { useState } from 'react';
import Toolbar from "../components/common/Toolbar.tsx";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  // Call OpenAI API to get lat/lon/radius from user text
  const getLocationFromText = async (text: string) => {
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    if (!apiKey) {
      alert('OpenAI API key is missing. Please set REACT_APP_OPENAI_API_KEY in your .env file and restart the dev server.');
      throw new Error('Missing OpenAI API key');
    }
    // Improved prompt to force JSON only
    const prompt = `Return ONLY a JSON array with one object containing the best guess for lat, lon, and radius in miles. Do not include any explanation or text. Query: ${text}`;
    try {
      const openaiRes = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo',
          messages: [
            { role: 'system', content: 'You are a helpful assistant that converts parking search queries into latitude, longitude, and radius.' },
            { role: 'user', content: prompt }
          ],
          max_tokens: 100
        },
        {
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
          }
        }
      );
      const content = openaiRes.data.choices[0].message.content;
      console.log('OpenAI raw response:', content); // Debug log
      // Extract first JSON array from the response
      const match = content.match(/\[.*?\]/s);
      if (!match) throw new Error('No JSON array found in OpenAI response');
      let parsed;
      try {
        parsed = JSON.parse(match[0]);
      } catch {
        throw new Error('Could not parse OpenAI response');
      }
      if (Array.isArray(parsed) && parsed.length > 0) {
        const result = parsed[0];
        // Map radius_miles or radiusMiles to radius for backend compatibility
        return {
          lat: result.lat,
          lon: result.lon,
          radius: result.radius ?? result.radius_miles ?? result.radiusMiles ?? 0.01 // fallback if needed
        };
      } else {
        throw new Error('No location found');
      }
    } catch (err: any) {
      if (err.response && err.response.status === 401) {
        alert('OpenAI API key is invalid or missing.');
      }
      throw err;
    }
  };

  // Helper to get a descriptive name from OpenAI
  const getDescriptiveName = async (query, lat, lon, radius) => {
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    if (!apiKey) throw new Error('Missing OpenAI API key');
    const prompt = `You are a system that converts a latitude, longitude, and radius into a short natural-language location description to pair with a user query.\n\nRules:\n- Output ONLY a string in the form: \"<Query> near <Landmark or Neighborhood>\".\n- The landmark/neighborhood should be the most recognizable 1–2 word description of the coordinates.\n- Do not include the radius in the output.\n- Be concise, never add extra explanation.\n\nExample:\nInput:\n  query: \"Coffee\"\n  lat: 37.7694\n  lon: -122.4862\n  radius: 0.01\nOutput:\n  \"Coffee near Golden Gate Park\"\n\n---\n\nNow convert:\n\nInput:\n  query: \"${query}\"\n  lat: ${lat}\n  lon: ${lon}\n  radius: ${radius}`;
    const openaiRes = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 40
      },
      {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        }
      }
    );
    // The response should be a single string
    let content = openaiRes.data.choices[0].message.content.trim();
    // Remove any quotes if present
    if (content.startsWith('"') && content.endsWith('"')) {
      content = content.slice(1, -1);
    }
    return content;
  };

  const handleSearch = async () => {
    setLoading(true);
    try {
      // 1. Get lat/lon/radius from OpenAI
      const location = await getLocationFromText(search);
      // 2. Get a descriptive name for the result
      const descriptiveName = await getDescriptiveName(search, location.lat, location.lon, location.radius);
      // 3. Use those values to call your backend for parkable areas
      const backendRes = await axios.get('http://localhost:8080/parkableAreasInRadius', {
        params: {
          lat: location.lat,
          lon: location.lon,
          radius: location.radius
        }
      });
      // 4. Inject the descriptive name into the results if needed
      const resultsWithName = backendRes.data.map((r) => ({
        ...r,
        name: (!r.name || /^random area$/i.test(r.name)) ? descriptiveName : r.name
      }));
      // 5. Navigate to /search with the results and search text
      navigate('/search', { state: { search, location, results: resultsWithName } });
    } catch (err: any) {
      alert(err.message || 'An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="landing-container modern-bg">
      <Toolbar />
      <main className="centered-hero">
          <div style={{ height: '2rem' }} />
        <h1 className="big-title">Let's make your parking easy.</h1>
        <h2 className="big-subtitle">Find the best spot, save money, skip the traffic.</h2>

        <div className="search-container">
          <input 
            className="search-input" 
            type="text" 
            placeholder="Where do you want to park?" 
            value={search}
            onChange={e => setSearch(e.target.value)}
            disabled={loading}
          />
          <button className="search-btn" aria-label="Search" onClick={handleSearch} disabled={loading || !search.trim()}>
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
        
        <div className="quick-suggestions">
          <span>Popular searches:</span>
          <button className="suggestion-btn">Concert Venue</button>
          <button className="suggestion-btn">Downtown</button>
          <button className="suggestion-btn">Airport</button>
        </div>
        
        <div className="features-row">
          <div className="feature-card modern-feature">
            <span className="feature-icon" role="img" aria-label="AI">🤖</span>
            <h3 className="feature-title">AI-Powered Availability</h3>
            <p className="feature-desc">Smart predictions for open spots near you using advanced machine learning.</p>
          </div>
          <div className="feature-card modern-feature">
            <span className="feature-icon" role="img" aria-label="Cost">💸</span>
            <h3 className="feature-title">Cost Estimation</h3>
            <p className="feature-desc">See estimated prices before you park and compare options instantly.</p>
          </div>
          <div className="feature-card modern-feature">
            <span className="feature-icon" role="img" aria-label="Traffic">🚦</span>
            <h3 className="feature-title">Live Traffic Data</h3>
            <p className="feature-desc">Avoid congestion and find the fastest route to your destination.</p>
          </div>
        </div>
      </main>
      
      <footer className="main-footer translucent-footer">
        <span>© 2025 Smart Parking Finder. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default HomePage;