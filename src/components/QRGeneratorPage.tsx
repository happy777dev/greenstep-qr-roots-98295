import React from 'react';
import { QrCode } from 'lucide-react';

/**
 * QR Code Generator page component
 * Placeholder for embedding external QR generation API
 */
const QRGeneratorPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-2xl">
              <QrCode className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-6">QR Code Generator</h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Generate custom QR codes for your trees and community projects. 
            API integration coming soon.
          </p>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="card-nature text-center">
          <QrCode className="h-16 w-16 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-card-foreground mb-4">
            QR Generation API Integration
          </h2>
          <p className="text-muted-foreground">
            This section will contain the embedded QR code generation API interface.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QRGeneratorPage;