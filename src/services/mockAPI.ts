import { Tree } from '../types/Tree';

/**
 * Mock tree data representing a real database
 * In production, this would be replaced with actual API calls to a backend database
 */
const mockTreeData: Tree[] = [
  {
    id: 'tree-001',
    commonName: 'Oak Tree',
    scientificName: 'Quercus robur',
    location: 'Central Park Section A-12',
    plantedDate: '2023-03-15',
    age: 1,
    height: '2.5 feet',
    description: 'A majestic oak tree planted as part of our urban reforestation initiative.',
    benefits: ['Air purification', 'Wildlife habitat', 'Carbon sequestration', 'Soil erosion prevention'],
    carbonOffset: '50 lbs CO2/year',
    maintenanceNotes: 'Regular watering required. Pruning scheduled for winter.'
  },
  {
    id: 'tree-002',
    commonName: 'Maple Tree',
    scientificName: 'Acer saccharum',
    location: 'Riverside Trail Marker 15',
    plantedDate: '2023-04-10',
    age: 1,
    height: '3.0 feet',
    description: 'Beautiful sugar maple that will provide stunning fall colors and maple syrup potential.',
    benefits: ['Shade provision', 'Autumn beauty', 'Carbon absorption', 'Syrup production'],
    carbonOffset: '48 lbs CO2/year',
    maintenanceNotes: 'Mulching completed. Monitor for pest activity.'
  },
  {
    id: 'tree-003',
    commonName: 'Pine Tree',
    scientificName: 'Pinus strobus',
    location: 'Hillside Grove Plot 7',
    plantedDate: '2023-02-28',
    age: 1,
    height: '4.2 feet',
    description: 'Eastern White Pine providing year-round greenery and wildlife shelter.',
    benefits: ['Evergreen coverage', 'Wind protection', 'Wildlife shelter', 'Air quality improvement'],
    carbonOffset: '55 lbs CO2/year',
    maintenanceNotes: 'Excellent growth rate. No maintenance needed currently.'
  },
  {
    id: 'tree-004',
    commonName: 'Cherry Blossom',
    scientificName: 'Prunus serrulata',
    location: 'Community Garden East',
    plantedDate: '2023-03-22',
    age: 1,
    height: '2.8 feet',
    description: 'Ornamental cherry tree that will bloom beautiful pink flowers each spring.',
    benefits: ['Aesthetic beauty', 'Pollinator support', 'Community morale', 'Seasonal interest'],
    carbonOffset: '40 lbs CO2/year',
    maintenanceNotes: 'Fertilized last month. Watch for cherry fruit fly.'
  },
  {
    id: 'tree-005',
    commonName: 'Birch Tree',
    scientificName: 'Betula papyrifera',
    location: 'Wetland Restoration Area',
    plantedDate: '2023-05-01',
    age: 0,
    height: '1.8 feet',
    description: 'Paper birch known for its distinctive white bark and ecological importance.',
    benefits: ['Wetland restoration', 'Water filtration', 'Native species support', 'Erosion control'],
    carbonOffset: '35 lbs CO2/year',
    maintenanceNotes: 'Recently planted. Monitor soil moisture levels.'
  },
  {
    id: 'tree-006',
    commonName: 'Redwood Sapling',
    scientificName: 'Sequoia sempervirens',
    location: 'Memorial Grove Section B',
    plantedDate: '2023-01-15',
    age: 1,
    height: '5.5 feet',
    description: 'Young coast redwood that will grow to be one of the tallest trees in our park.',
    benefits: ['Carbon sequestration champion', 'Longevity symbol', 'Educational value', 'Climate resilience'],
    carbonOffset: '85 lbs CO2/year',
    maintenanceNotes: 'Exceptional growth. Protected area established around base.'
  }
];

/**
 * Simulates an external database API call to fetch all trees
 * @returns Promise<Tree[]> - Array of all trees in the database
 */
export const fetchTrees = async (): Promise<Tree[]> => {
  // Simulate network delay that would occur with a real API call
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Simulate potential API failure (5% chance)
  if (Math.random() < 0.05) {
    throw new Error('Database connection failed. Please try again.');
  }
  
  // Return a copy of the data to prevent direct mutations
  return [...mockTreeData];
};

/**
 * Simulates an external QR code generation service
 * In production, this would call a QR code generation API or service
 * @param treeId - Unique identifier for the tree
 * @returns string - URL to the generated QR code image
 */
export const generateQRCodeUrl = (treeId: string): string => {
  // Create a unique URL for each tree that would link to its detail page
  const treeDetailUrl = `https://greenstep-app.com/tree/${treeId}`;
  
  // Use QR Server API to generate QR code
  // In production, you might use services like qr-server.com, QRickit, or your own QR service
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(treeDetailUrl)}&bgcolor=f0f9f0&color=2d5a2d`;
  
  return qrCodeUrl;
};

/**
 * Simulates fetching a single tree by ID from external database
 * @param id - Tree identifier
 * @returns Promise<Tree | null> - Tree data or null if not found
 */
export const fetchTreeById = async (id: string): Promise<Tree | null> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const tree = mockTreeData.find(tree => tree.id === id);
  return tree || null;
};