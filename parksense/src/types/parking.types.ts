export interface ParkingSpot {
  id: string;
  location: Coordinates;
  address: string;
  availabilityScore: number;
  estimatedCost: CostEstimate;
  restrictions: ParkingRestrictions;
  distance: number;
}

export interface CostEstimate {
  hourly: number;
  daily: number;
  range: { min: number; max: number };
}

export interface ParkingRestrictions {
  // Define restriction fields here
}

export interface Coordinates {
  lat: number;
  lng: number;
}
