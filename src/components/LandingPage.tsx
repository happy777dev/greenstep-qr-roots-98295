import React from 'react';
import { Link } from 'react-router-dom';
import { TreePine, Leaf, Heart, Users, ArrowRight, Sprout } from 'lucide-react';

/**
 * Landing page component - immersive hero section for GreenStep
 * Features nature-focused design with clear call-to-action buttons
 */
const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 animate-pulse">
            <TreePine className="h-32 w-32 text-white" />
          </div>
          <div className="absolute top-40 right-20 animate-pulse delay-300">
            <Leaf className="h-24 w-24 text-white" />
          </div>
          <div className="absolute bottom-40 left-1/4 animate-pulse delay-700">
            <Sprout className="h-20 w-20 text-white" />
          </div>
          <div className="absolute bottom-20 right-1/3 animate-pulse delay-500">
            <TreePine className="h-28 w-28 text-white" />
          </div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <TreePine className="h-20 w-20 text-white mx-auto mb-6" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Green<span className="text-nature-green">Step</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Building greener communities, one tree at a time. Join our mission to create sustainable urban forests 
            through community-driven tree plantation initiatives.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/trees"
              className="btn-hero flex items-center space-x-2 group"
            >
              <span>Explore Our Trees</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link
              to="/about"
              className="px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-lg font-medium transition-all duration-300 border border-white/30 hover:border-white/50 backdrop-blur-sm"
            >
              Learn Our Mission
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why GreenStep Matters
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every tree planted through GreenStep contributes to a healthier planet and stronger communities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-nature text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Environmental Impact</h3>
              <p className="text-muted-foreground">
                Each tree absorbs CO₂, purifies air, and creates habitats for wildlife, 
                contributing to a healthier ecosystem.
              </p>
            </div>
            
            <div className="card-nature text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Community Building</h3>
              <p className="text-muted-foreground">
                Tree planting brings neighbors together, fostering connections and shared 
                responsibility for our environment.
              </p>
            </div>
            
            <div className="card-nature text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <TreePine className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Legacy Creation</h3>
              <p className="text-muted-foreground">
                Plant a tree today, and watch it grow for generations, leaving a lasting 
                positive impact on the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;