# Smart Parking Finder

## AI-Enhanced Low-Cost Parking Recommendation System

---

## 👥 Team
- **Richard Omorotionmwan** - Backend & AI/ML Focus
- **Shannon Mante-Green** - Frontend & API Integrations

---

## 🎯 Project Overview

Smart Parking Finder is a web application that helps users locate the most cost-effective and convenient parking options near their current location. The app combines live traffic data from the Mapbox API, parking availability data, and AI-powered insights from the OpenAI API to provide intelligent parking recommendations.

### Key Features
- **AI-Powered Availability Predictions** - Uses OpenAI API for contextual reasoning about parking availability
- **Cost Estimation** - Generates approximate parking cost predictions 
- **Traffic Integration** - Real-time traffic data via Mapbox API
- **Intelligent Ranking** - Ranks nearby parking spots using geolocation and multiple criteria
- **Interactive Map Interface** - OpenStreetMap-based UI with traffic overlays

---

## 🚗 Use Cases

### 1. Concert/Sports Game Parking
A driver heading to a concert or sports game in San Francisco uses the app to request the five most cost-effective parking options within one mile of the venue. The system combines Mapbox data with OpenAI reasoning to assess likely availability around high-demand event areas, factors in estimated parking costs, and presents the driver with a ranked list of the best low-cost options.

### 2. Everyday Commuting
A commuter driving to work wants the lowest-cost parking near their office. The app uses Mapbox to identify congestion, applies OpenAI reasoning to determine intuitive availability, and shows the cheapest viable spots within walking distance.

---

## 🛠️ Technology Stack

### Backend
- **Framework**: Java Spring Boot
- **Database**: PostgreSQL (primary), Redis (caching)
- **APIs**: Mapbox API, OpenAI API
- **Deployment**: Railway

### Frontend
- **Framework**: React + TypeScript
- **Map Visualization**: OpenStreetMap
- **Deployment**: Vercel

### Development & Operations
- **Version Control**: GitHub
- **CI/CD**: GitHub Actions
- **Testing**: JUnit (Backend), Jest (Frontend)

---

## 📋 Required Features

### Backend (Spring Boot)
- ✅ Retrieves and processes traffic data from Mapbox API
- ✅ Queries OpenAI API for contextual reasoning about parking availability and cost
- ✅ Uses OpenAI API for contextual reasoning to rank and return "Top N" recommended locations
- ✅ REST API endpoints to support frontend queries
- ✅ Database storage for queried parking and traffic data

### Frontend (React + TypeScript)  
- ✅ Map-based UI using OpenStreetMap showing parking spots and traffic overlays
- ✅ Location input functionality with geolocation support
- ✅ Displays ranked parking recommendations with cost estimates and traffic context
- ✅ Responsive design for mobile and desktop

---

## 🏗️ System Architecture

### Backend Components
- **API Foundation** - Spring Boot application with REST endpoints
- **Mapbox Integration** - Traffic data retrieval and processing
- **OpenAI Integration** - AI-powered availability predictions and cost estimation
- **Database Layer** - PostgreSQL with JPA entities for parking, traffic, and search history
- **Caching Layer** - Redis for performance optimization

### Frontend Components
- **Map Interface** - Interactive OpenStreetMap with parking markers
- **Location Services** - Address input, geolocation, and manual selection
- **Parking Display** - Marker clustering, availability indicators, detailed information
- **Recommendation Panel** - Ranked parking suggestions with filtering options
- **Traffic Overlay** - Real-time traffic visualization

---

## 📅 Development Timeline

### Phase 1 (Weeks 1-2) - Foundation
**Richard:**
- User Story 1.3: OpenAI Integration
- User Story 3.1: Map Interface Foundation

**Shannon:**
- User Story 1.1: API Foundation
- User Story 1.2: Mapbox Integration
- User Story 1.4: Database Setup
- User Story 2.1: Location Processing

### Phase 2 (Weeks 3-4) - Core Features (October 7 Milestone)
**Richard:**
- User Story 2.3: AI-Powered Availability Prediction
- User Story 3.3: Parking Display
- Begin User Story 4.1: Ranking Algorithm

**Shannon:**
- User Story 2.2: Parking Data Retrieval
- User Story 3.2: Location Input

### Phase 3 (Weeks 5-6) - Advanced Features
**Richard:**
- Complete User Story 4.1: Ranking Algorithm
- User Story 2.4: Cost Estimation
- User Story 4.2: Street Parking Recommendation Panel

**Shannon:**
- User Story 3.4: Traffic Overlay
- User Story 4.3: Caching and Performance (Optional)
- Frontend-backend integration polish

### Phase 4 (Weeks 7-8) - Polish & Deploy
**Richard:**
- User Story 5.1: CI/CD Pipeline

**Both:**
- Final integration testing
- Bug fixes and performance optimization
- Documentation and presentation prep

---

## 🎯 Milestone Goals

### October 7 Progress Milestone (~50% of project)
- ✅ Backend service in Java that integrates with Mapbox API
- ✅ Integration with OpenAI API for reasoning about location context
- ✅ Minimal React frontend with search bar and map component
- ✅ Basic parking/traffic results display (no ranking yet)

### November 7 Final Product
- ✅ Complete ranking logic for recommendations
- ✅ Full traffic + parking data retrieval endpoints  
- ✅ Complete, aesthetic UI with all planned features
- ✅ Advanced cost + availability reasoning using OpenAI and collected data

---

## 🔧 Getting Started

### Prerequisites
- Java 17+
- Node.js 18+
- PostgreSQL 14+
- Mapbox API Key
- OpenAI API Key

### Backend Setup
```bash
# Clone repository
git clone [repository-url]
cd smart-parking-finder/backend

# Configure application.properties
cp application.properties.example application.properties
# Add your API keys and database configuration

# Run application
./mvnw spring-boot:run
```

### Frontend Setup
```bash
# Navigate to frontend directory
cd smart-parking-finder/frontend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env.local
# Add your API endpoints and keys

# Start development server
npm run dev
```

---

## 📊 Project Metrics

### Team Task Distribution

**Richard (iheomach):**
- User Story 5.1: CI/CD Pipeline
- User Story 4.2: Street Parking Recommendation Panel  
- User Story 4.1: Ranking Algorithm
- User Story 3.3: Parking Display
- User Story 3.1: Map Interface Foundation
- User Story 2.4: Cost Estimation
- User Story 2.3: AI-Powered Availability Prediction
- User Story 1.3: OpenAI Integration

**Shannon (shannon-kmg):**
- User Story 4.3: Caching and Performance (Optional)
- User Story 3.4: Traffic Overlay
- User Story 3.2: Location Input
- User Story 2.2: Parking Data Retrieval
- User Story 2.1: Location Processing
- User Story 1.4: Database Setup
- User Story 1.2: Mapbox Integration
- User Story 1.1: API Foundation

**Shared**: Testing, integration, documentation, deployment coordination

### Epic Breakdown
- **Epic 1**: Backend Core Infrastructure (4 user stories)
- **Epic 2**: Backend Business Logic (4 user stories)  
- **Epic 3**: Frontend Core (4 user stories)
- **Epic 4**: Advanced Features (3 user stories)
- **Epic 5**: Deployment and DevOps (2 user stories)

---

## 🤝 Contributing

### Development Workflow
1. Create feature branch from `main`
2. Implement user story tasks
3. Write unit tests
4. Submit pull request
5. Code review and merge

### Code Standards
- **Backend**: Follow Spring Boot best practices, comprehensive JavaDoc
- **Frontend**: TypeScript strict mode, component documentation
- **Testing**: Minimum 80% code coverage
- **API**: RESTful design principles

---

## 📄 License

This project is developed as part of an academic assignment and is not intended for commercial use.

---

## 📞 Contact

For questions or collaboration inquiries, please contact the development team through the course instructor or via GitHub issues.