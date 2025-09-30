import React from 'react';
import { TreePine, Target, Users, Leaf, QrCode, Heart, Globe, Award } from 'lucide-react';

/**
 * About page component providing details about GreenStep organization
 * Features mission statement, QR code system explanation, and team information
 */
const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-card border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/10 rounded-2xl">
              <Heart className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-6">About GreenStep</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're a community-driven organization dedicated to creating sustainable urban forests 
            through collaborative tree plantation initiatives and innovative technology.
          </p>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                GreenStep exists to combat climate change and strengthen communities through strategic 
                tree plantation programs. We believe that every tree planted today creates a better 
                tomorrow for future generations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our approach combines environmental science, community engagement, and modern technology 
                to ensure maximum impact and long-term sustainability of our urban forest initiatives.
              </p>
            </div>
            
            <div className="card-nature">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Environmental Impact</h3>
                    <p className="text-sm text-muted-foreground">Carbon sequestration & air purification</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Community Building</h3>
                    <p className="text-sm text-muted-foreground">Bringing neighbors together for a common cause</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Long-term Legacy</h3>
                    <p className="text-sm text-muted-foreground">Creating lasting positive change</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* QR Code System Section */}
        <div className="mb-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <QrCode className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Innovative QR Code System</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each tree in our network has a unique QR code that connects the digital and physical worlds, 
              making tree information accessible to everyone in the community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Instant Access</h3>
              <p className="text-sm text-muted-foreground">
                Scan any tree's QR code to instantly view its complete information, 
                growth history, and environmental impact.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Track Growth</h3>
              <p className="text-sm text-muted-foreground">
                Monitor each tree's development over time, including height measurements, 
                health status, and carbon offset calculations.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">Community Engagement</h3>
              <p className="text-sm text-muted-foreground">
                Share tree information with friends and family, fostering greater 
                awareness and participation in our environmental mission.
              </p>
            </div>
          </div>
        </div>
        
        {/* How It Works Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">How GreenStep Works</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Community Planning</h3>
              <p className="text-sm text-muted-foreground">
                We work with local communities to identify optimal locations for tree planting 
                based on environmental needs and community input.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Tree Selection</h3>
              <p className="text-sm text-muted-foreground">
                Our experts select appropriate tree species based on local climate, 
                soil conditions, and long-term environmental goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Planting & QR Code</h3>
              <p className="text-sm text-muted-foreground">
                Trees are planted with community involvement, and each receives a unique 
                QR code for easy identification and tracking.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Long-term Care</h3>
              <p className="text-sm text-muted-foreground">
                We provide ongoing maintenance, monitoring, and community education 
                to ensure each tree thrives for decades to come.
              </p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 lg:p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Growing Community</h2>
          <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
            Every tree planted through GreenStep represents hope for a sustainable future. 
            Together, we're building greener communities one tree at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@greenstep.org"
              className="px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors duration-300"
            >
              Get Involved
            </a>
            <a
              href="#"
              className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;