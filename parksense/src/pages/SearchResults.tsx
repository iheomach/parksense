import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchResults: React.FC = () => {
  const location = useLocation();
  const [results, setResults] = useState<any[]>(location.state?.results || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // If results are not passed, fetch from backend using lat/lon/radius
  useEffect(() => {
    if (results.length > 0 || !location.state?.location) return;
    const fetchResults = async () => {
      setLoading(true);
      setError(null);
      try {
        const { lat, lon, radius } = location.state.location;
        const res = await axios.get(`http://localhost:8080/parkableAreasInRadius`, {
          params: { lat, lon, radius }
        });
        setResults(res.data);
      } catch (err) {
        setError('Failed to fetch results.');
      } finally {
        setLoading(false);
      }
    };
    fetchResults();
  }, [location.state, results.length]);

  return (
    <div className="landing-container modern-bg">
      <main className="centered-hero">
        <div className="search-container-wide">
          <input
            className="search-input"
            type="text"
            placeholder="Desired Parking Location"
            value={location.state?.search || ''}
            readOnly
          />
          <button className="search-btn" aria-label="Search" disabled>Search</button>
        </div>
        <div className="results-panel">
          <h2 className="result-title">Search Results</h2>
          {loading && <div>Loading...</div>}
          {error && <div style={{color:'red'}}>{error}</div>}
          <div className="result-list">
            {results.map((result, idx) => (
              <div key={idx} className="parking-card">
                <div className="parking-card-header">
                  <h3 className="parking-name">{(result.name && !/^random area$/i.test(result.name)) ? result.name : `Parking Area at (${result.lat.toFixed(5)}, ${result.lon.toFixed(5)})`}</h3>
                  <span className="availability-tag high">Rating: {result.rating}</span>
                </div>
                <p className="parking-address">Lat: {result.lat}, Lon: {result.lon}</p>
                <div className="parking-metrics">
                  <div className="metric-group">
                    <div className="metric-item">
                      <span className="metric-label">RADIUS</span>
                      <span className="metric-value">{result.radius}</span>
                    </div>
                  </div>
                </div>
                <div className="parking-comments">{result.comments}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SearchResults;
