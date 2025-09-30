/**
 * TypeScript interface for Tree data structure
 * Represents a tree in the GreenStep community plantation project
 */
export interface Tree {
  id: string;
  commonName: string;
  scientificName: string;
  location: string;
  plantedDate: string;
  age: number;
  height: string;
  description: string;
  benefits: string[];
  carbonOffset: string;
  maintenanceNotes: string;
}