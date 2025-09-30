import React, { useState, useEffect } from 'react';
import { Search, TreePine, Loader2, AlertCircle, Eye } from 'lucide-react';
import { Tree } from '../types/Tree';
import { fetchTrees } from '../services/mockAPI';
import TreeModal from './TreeModal';

/**
 * Tree information page with search functionality and modal details
 * Features loading states, error handling, and responsive grid layout
 */
const TreeInfoPage: React.FC = () => {
  // State management for trees data and UI
  const [trees, setTrees] = useState<Tree[]>([]);
  const [filteredTrees, setFilteredTrees] = useState<Tree[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTree, setSelectedTree] = useState<Tree | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Fetch trees data on component mount
  useEffect(() => {
    const loadTrees = async () => {
      try {
        setLoading(true);
        setError(null);
        const treeData = await fetchTrees();
        setTrees(treeData);
        setFilteredTrees(treeData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load trees data');
      } finally {
        setLoading(false);
      }
    };
    
    loadTrees();
  }, []);
  
  // Filter trees based on search query
  useEffect(() => {
    const filtered = trees.filter(tree =>
      tree.commonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tree.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tree.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTrees(filtered);
  }, [searchQuery, trees]);
  
  // Handle tree selection for modal
  const handleTreeSelect = (tree: Tree) => {
    setSelectedTree(tree);
    setIsModalOpen(true);
  };
  
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedTree(null);
  };
  
  // Retry functionality for error states
  const handleRetry = () => {
    const loadTrees = async () => {
      try {
        setLoading(true);
        setError(null);
        const treeData = await fetchTrees();
        setTrees(treeData);
        setFilteredTrees(treeData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load trees data');
      } finally {
        setLoading(false);
      }
    };
    
    loadTrees();
  };
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-2xl">
                <TreePine className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Our Community Trees</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover the trees planted by our community. Each tree contributes to a greener, 
              healthier future for everyone.
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search trees by name, species, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-card border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all duration-300"
            />
          </div>
          {searchQuery && (
            <p className="text-center text-muted-foreground mt-2">
              {filteredTrees.length} tree{filteredTrees.length !== 1 ? 's' : ''} found
            </p>
          )}
        </div>
        
        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-16">
            <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Loading Trees...</h3>
            <p className="text-muted-foreground">Fetching tree data from our database</p>
          </div>
        )}
        
        {/* Error State */}
        {error && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="p-4 bg-destructive/10 rounded-full mb-4">
              <AlertCircle className="h-12 w-12 text-destructive" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Unable to Load Trees</h3>
            <p className="text-muted-foreground mb-4 text-center max-w-md">{error}</p>
            <button
              onClick={handleRetry}
              className="btn-earth"
            >
              Try Again
            </button>
          </div>
        )}
        
        {/* Trees Grid */}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTrees.map((tree) => (
              <div key={tree.id} className="card-nature group cursor-pointer">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <TreePine className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    ID: {tree.id}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground mb-2">
                  {tree.commonName}
                </h3>
                <p className="text-muted-foreground italic text-sm mb-3">
                  {tree.scientificName}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Location:</span>
                    <span className="text-card-foreground font-medium">{tree.location}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Height:</span>
                    <span className="text-card-foreground font-medium">{tree.height}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">CO₂ Offset:</span>
                    <span className="text-primary font-semibold">{tree.carbonOffset}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => handleTreeSelect(tree)}
                  className="w-full bg-primary/10 hover:bg-primary hover:text-primary-foreground text-primary font-medium py-2 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  <Eye className="h-4 w-4" />
                  <span>View Details</span>
                </button>
              </div>
            ))}
          </div>
        )}
        
        {/* No Results State */}
        {!loading && !error && filteredTrees.length === 0 && searchQuery && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="p-4 bg-muted rounded-full mb-4">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No Trees Found</h3>
            <p className="text-muted-foreground text-center max-w-md">
              We couldn't find any trees matching "{searchQuery}". Try searching with different keywords.
            </p>
          </div>
        )}
      </div>
      
      {/* Tree Details Modal */}
      {selectedTree && (
        <TreeModal
          tree={selectedTree}
          isOpen={isModalOpen}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default TreeInfoPage;