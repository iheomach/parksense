# Smart Parking Finder - Frontend Architecture

## Project Structure
```
src/
├── components/
│   ├── common/
│   ├── map/
│   ├── location/
│   ├── parking/
│   ├── traffic/
│   └── ui/
├── pages/
├── services/
├── hooks/
├── types/
├── utils/
├── constants/
└── styles/
```

## Core Pages
### `pages/HomePage.tsx`
- Main application page containing the map interface
- Orchestrates all major components
- Handles overall application state management

### `pages/LoadingPage.tsx`
- Initial loading screen while app initializes
- Shows app logo and loading indicators

## Map Components (`components/map/`)

### `MapContainer.tsx`
- Main map wrapper component using OpenStreetMap
- Handles map initialization, zoom, and pan functionality
- Manages map viewport state
- Responsive design for mobile/desktop

### `MapMarkers.tsx`
- Renders parking spot markers on the map
- Different marker styles based on availability likelihood
- Handles marker clustering for dense areas
- Manages marker click events

### `ParkingMarker.tsx`
- Individual parking spot marker component
- Color-coded based on availability prediction
- Popup functionality for detailed information

### `TrafficOverlay.tsx`
- Traffic data visualization layer
- Toggle-able traffic display
- Color-coded traffic flow (green/yellow/red)
- Real-time traffic updates

### `MapControls.tsx`
- Zoom in/out buttons
- Toggle switches for traffic overlay
- Map style selector
- User location button

### `MapLegend.tsx`
- Legend explaining marker colors and traffic colors
- Parking availability indicators
- Traffic flow explanation

## Location Components (`components/location/`)

### `LocationInput.tsx`
- Address search bar with autocomplete
- Integration with geocoding services
- Input validation and error handling

### `LocationSearch.tsx`
- Autocomplete dropdown for address suggestions
- Recent searches functionality
- Search history management

### `GeolocationButton.tsx`
- "Use My Location" functionality
- Handles browser geolocation API
- Loading states and error handling

### `LocationPicker.tsx`
- Manual location selection by clicking on map
- Displays selected coordinates
- Confirmation controls

## Parking Components (`components/parking/`)

### `ParkingList.tsx`
- List view of nearby parking options
- Sortable by distance, cost, availability
- Pagination for large results

### `ParkingCard.tsx`
- Individual parking spot information card
- Shows distance, estimated cost, availability
- Quick action buttons (directions, save)

### `ParkingDetails.tsx`
- Detailed information popup/modal
- Parking restrictions, time limits, rates
- User reviews and ratings

### `RecommendationPanel.tsx`
- Sidebar panel showing top N recommendations
- Ranked list with detailed street information
- Comparison view for multiple options
- Navigation integration

### `ParkingFilters.tsx`
- Filter controls for parking search
- Price range, distance, parking type
- Availability likelihood threshold
- Time-based filtering

### `AvailabilityIndicator.tsx`
- Visual indicator for parking availability likelihood
- Confidence score display
- Color-coded probability meter

## UI Components (`components/ui/`)

### `Button.tsx`
- Reusable button component
- Various styles (primary, secondary, outline)
- Loading states and disabled states

### `Input.tsx`
- Reusable input field component
- Validation states and error messages
- Different input types support

### `Modal.tsx`
- Reusable modal/dialog component
- Backdrop and close functionality
- Responsive sizing

### `LoadingSpinner.tsx`
- Loading indicator component
- Different sizes and styles
- Used throughout the app

### `ErrorBoundary.tsx`
- Error boundary component
- Graceful error handling and display
- Fallback UI for crashes

### `Toast.tsx`
- Notification/toast message component
- Success, error, warning, info types
- Auto-dismiss functionality

### `Tooltip.tsx`
- Reusable tooltip component
- Hover and click triggers
- Positioning logic

## Common Components (`components/common/`)

### `Header.tsx`
- Application header with branding
- Navigation elements (if needed)
- User preferences toggle

### `Sidebar.tsx`
- Collapsible sidebar for recommendations
- Responsive behavior for mobile
- Contains RecommendationPanel

### `SearchBar.tsx`
- Main search interface component
- Combines location input and search controls
- Quick search suggestions

### `NavigationHelper.tsx`
- Integration with external navigation apps
- Direction buttons and links
- Platform detection (iOS/Android)

## Services (`services/`)

### `api.ts`
- Main API client configuration
- Base URL and headers setup
- Request/response interceptors

### `parkingService.ts`
- Parking data retrieval functions
- Search and filter operations
- Cache management

### `locationService.ts`
- Geocoding and reverse geocoding
- Location validation
- Coordinate conversions

### `mapService.ts`
- Map-related API calls
- Traffic data retrieval
- Map tile management

### `aiService.ts`
- OpenAI integration functions
- Availability predictions
- Cost estimations

## Custom Hooks (`hooks/`)

### `useGeolocation.ts`
- Custom hook for browser geolocation
- Permission handling
- Error states and loading

### `useMap.ts`
- Map state management hook
- Viewport control and event handling
- Marker management

### `useParkingSearch.ts`
- Parking search functionality
- State management for search results
- Debounced search execution

### `useLocalStorage.ts`
- Local storage management
- Preferences and search history
- Error handling for storage

### `useDebounce.ts`
- Debouncing utility hook
- Used for search input optimization
- Configurable delay

## Types (`types/`)

### `parking.types.ts`
```typescript
interface ParkingSpot {
  id: string;
  location: Coordinates;
  address: string;
  availabilityScore: number;
  estimatedCost: CostEstimate;
  restrictions: ParkingRestrictions;
  distance: number;
}

interface CostEstimate {
  hourly: number;
  daily: number;
  range: { min: number; max: number };
}
```

### `map.types.ts`
```typescript
interface MapViewport {
  latitude: number;
  longitude: number;
  zoom: number;
}

interface Coordinates {
  lat: number;
  lng: number;
}
```

### `api.types.ts`
```typescript
interface APIResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
}
```

## Utils (`utils/`)

### `mapUtils.ts`
- Distance calculations
- Coordinate transformations
- Map-related helper functions

### `formatters.ts`
- Data formatting utilities
- Currency, distance, time formatting
- Consistent display formats

### `validators.ts`
- Input validation functions
- Location validation
- Form validation helpers

### `constants.ts`
- Application constants
- API endpoints
- Configuration values

## State Management

### Context Providers
- `MapContext.tsx` - Map state and actions
- `LocationContext.tsx` - User location state
- `ParkingContext.tsx` - Parking search state
- `UIContext.tsx` - UI state (modals, notifications)

### State Structure
```typescript
interface AppState {
  map: MapState;
  location: LocationState;
  parking: ParkingState;
  ui: UIState;
}
```

## Component Hierarchy
```
HomePage
├── Header
├── SearchBar
│   ├── LocationInput
│   └── GeolocationButton
├── MapContainer
│   ├── TrafficOverlay
│   ├── MapMarkers
│   │   └── ParkingMarker[]
│   ├── MapControls
│   └── MapLegend
├── Sidebar
│   └── RecommendationPanel
│       ├── ParkingFilters
│       └── ParkingList
│           └── ParkingCard[]
└── Toast
```

## Mobile Responsiveness Strategy
- Mobile-first design approach
- Collapsible sidebar for mobile
- Touch-friendly controls and markers
- Responsive map sizing
- Swipe gestures for recommendation panel

## Performance Considerations
- Lazy loading for non-critical components
- Virtualization for large parking lists
- Debounced search inputs
- Memoized expensive calculations
- Optimized re-renders with React.memo

This architecture supports all the user stories from your project plan and provides a scalable foundation for the Smart Parking Finder application.