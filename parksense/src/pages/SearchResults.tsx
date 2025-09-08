import React from 'react';

const mockResults = [
  { 
    name: "Union Square Garage", 
    address: "333 Post St, San Francisco, CA",
    hourlyRate: "$4.50",
    estimatedCost: "$9.00",
    availability: "Likely Available",
    availabilityClass: "high",
    distance: "0.2 miles",
    walkTime: "3 min walk",
    aiConfidence: "85% likely available",
    amenities: ["Covered", "EV Charging", "24/7 Access"]
  },
  { 
    name: "Stockton Street Parking", 
    address: "Stockton St between Bush & Pine",
    hourlyRate: "$3.25",
    estimatedCost: "$6.50",
    availability: "Moderately Busy",
    availabilityClass: "medium",
    distance: "0.1 miles",
    walkTime: "2 min walk",
    aiConfidence: "62% likely available",
    amenities: ["Metered", "Free evenings"]
  },
  { 
    name: "Powell Street Garage", 
    address: "432 Powell St, San Francisco, CA",
    hourlyRate: "$5.75",
    estimatedCost: "$11.50",
    availability: "Limited Availability",
    availabilityClass: "low",
    distance: "0.3 miles",
    walkTime: "5 min walk",
    aiConfidence: "34% likely available",
    amenities: ["Valet Service", "Security", "Covered"]
  },
  { 
    name: "Grant Avenue Meters", 
    address: "Grant Ave between Post & Sutter",
    hourlyRate: "$2.75",
    estimatedCost: "$5.50",
    availability: "Likely Available",
    availabilityClass: "high",
    distance: "0.2 miles",
    walkTime: "4 min walk",
    aiConfidence: "78% likely available",
    amenities: ["Metered", "Affordable"]
  }
];

const SearchResults: React.FC = () => {
  return (
    <div className="landing-container modern-bg">
        <main className="centered-hero">
            <div className="search-container-wide">
                <input 
                    className="search-input" 
                    type="text" 
                    placeholder="Desired Parking Location" 
                />
                <button className="search-btn" aria-label="Search">Search</button>
            </div>
            <div className="results-panel">
                <h2 className="result-title">Search Results</h2>
                <div className="result-list">
                    {mockResults.map((result) => (
                        <div key={result.name} className="parking-card">
                            <div className="parking-card-header">
                                <h3 className="parking-name">{result.name}</h3>
                                <span className={`availability-tag ${result.availabilityClass}`}>
                                    {result.availability}
                                </span>
                            </div>
                            <p className="parking-address">{result.address}</p>
                            
                            <div className="parking-metrics">
                                <div className="metric-group">
                                    <div className="metric-item">
                                        <span className="metric-label">DISTANCE</span>
                                        <span className="metric-value">{result.distance}</span>
                                    </div>
                                    <div className="metric-item">
                                        <span className="metric-label">WALK TIME</span>
                                        <span className="metric-value">{result.walkTime}</span>
                                    </div>
                                </div>
                                
                                <div className="metric-group">
                                    <div className="metric-item">
                                        <span className="metric-label">ESTIMATED COST</span>
                                        <span className="metric-value cost">{result.estimatedCost}</span>
                                    </div>
                                    <div className="metric-item">
                                        <span className="metric-label">HOURLY RATE</span>
                                        <span className="metric-value">{result.hourlyRate}</span>
                                    </div>
                                </div>
                                
                                <div className="ai-confidence">
                                    <span className="metric-label">AI CONFIDENCE SCORE</span>
                                    <span className="metric-value">{result.aiConfidence}</span>
                                    <div className={`confidence-bar ${result.availabilityClass}`}>
                                        <div 
                                            className="confidence-fill" 
                                            style={{ width: result.aiConfidence.split('%')[0] + '%' }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="parking-amenities">
                                {result.amenities.map((amenity, index) => (
                                    <span key={index} className="amenity-tag">{amenity}</span>
                                ))}
                            </div>
                            
                            <div className="parking-actions">
                                <button className="btn-primary reserve-btn">Reserve Spot</button>
                                <button className="btn-secondary directions-btn">Directions</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    </div>
  );
};

export default SearchResults;
