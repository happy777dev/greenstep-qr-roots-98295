import React from 'react';
import { X, MapPin, Calendar, Ruler, Leaf, QrCode } from 'lucide-react';
import { Tree } from '../types/Tree';
import { generateQRCodeUrl } from '../services/mockAPI';

interface TreeModalProps {
  tree: Tree;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Modal component to display detailed tree information
 * Features QR code generation and comprehensive tree data
 */
const TreeModal: React.FC<TreeModalProps> = ({ tree, isOpen, onClose }) => {
  if (!isOpen) return null;
  
  const qrCodeUrl = generateQRCodeUrl(tree.id);
  
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Leaf className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-card-foreground">{tree.commonName}</h2>
              <p className="text-muted-foreground italic">{tree.scientificName}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-full transition-colors duration-300"
          >
            <X className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">About This Tree</h3>
            <p className="text-muted-foreground leading-relaxed">{tree.description}</p>
          </div>
          
          {/* Tree Details Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Tree Information</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium text-card-foreground">{tree.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Planted Date</p>
                    <p className="font-medium text-card-foreground">
                      {new Date(tree.plantedDate).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Ruler className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Current Height</p>
                    <p className="font-medium text-card-foreground">{tree.height}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Leaf className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Age</p>
                    <p className="font-medium text-card-foreground">{tree.age} year{tree.age !== 1 ? 's' : ''}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-card-foreground mb-4">Environmental Impact</h3>
              <div className="space-y-3">
                <div className="p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm text-muted-foreground">Carbon Offset</p>
                  <p className="font-semibold text-primary text-lg">{tree.carbonOffset}</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Environmental Benefits</p>
                  <div className="flex flex-wrap gap-2">
                    {tree.benefits.map((benefit, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-accent/20 text-accent-foreground rounded-full text-sm"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* QR Code Section */}
          <div className="border-t border-border pt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <QrCode className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-card-foreground">Tree QR Code</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-3">
                  Scan this QR code to quickly access this tree's information from your mobile device. 
                  Perfect for field visits and sharing with other community members.
                </p>
                <p className="text-xs text-muted-foreground">
                  QR Code links to: greenstep-app.com/tree/{tree.id}
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <div className="p-4 bg-white rounded-xl border border-border">
                  <img
                    src={qrCodeUrl}
                    alt={`QR code for ${tree.commonName}`}
                    className="w-32 h-32 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4IiBmaWxsPSIjRjBGOUYwIi8+CjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9Ijk2IiBoZWlnaHQ9Ijk2IiBzdHJva2U9IiMyRDVBMkQiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIvPgo8dGV4dCB4PSI2NCIgeT0iNzAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMyRDVBMkQiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiI+UVIgQ29kZTwvdGV4dD4KPC9zdmc+';
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Maintenance Notes */}
          {tree.maintenanceNotes && (
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Maintenance Notes</h3>
              <p className="text-muted-foreground text-sm">{tree.maintenanceNotes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TreeModal;