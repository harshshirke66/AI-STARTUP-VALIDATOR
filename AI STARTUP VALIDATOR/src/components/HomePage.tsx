import React from 'react';
import { ArrowRight, Rocket, Target, Lightbulb, TrendingUp, Brain, Cpu, Zap, BarChart as ChartBar, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0118] text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
        <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl animate-pulse -top-20 -left-20" />
        <div className="absolute w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse -bottom-20 -right-20" />
      </div>

      {/* Hero Section */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-lg">
              <Cpu className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-sm">AI-Powered Analysis by Harsh Shirke</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Validate Your
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400">
                Startup Idea
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Get comprehensive insights into your startup idea with our advanced AI analysis. From market potential to execution strategy, we've got you covered.
            </p>
            <div className="flex items-center gap-4">
              <Link 
                to="/validate" 
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                Analyze Your Idea
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-3xl transform rotate-6"></div>
            <img 
              src="https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Startup Analysis"
              className="rounded-3xl shadow-2xl transform hover:-rotate-2 transition-transform duration-500 relative z-10"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            Comprehensive Startup Analysis
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Get detailed insights and actionable recommendations for your startup idea
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Globe className="w-8 h-8 text-blue-400" />}
            title="Market Analysis"
            description="Deep dive into market size, trends, and growth potential using real-time data and AI insights."
          />
          <FeatureCard 
            icon={<Users className="w-8 h-8 text-purple-400" />}
            title="Competitor Analysis"
            description="Identify key competitors, their strengths, and opportunities for differentiation."
          />
          <FeatureCard 
            icon={<ChartBar className="w-8 h-8 text-pink-400" />}
            title="Financial Projections"
            description="Get estimated startup costs, revenue potential, and key financial metrics."
          />
          <FeatureCard 
            icon={<Target className="w-8 h-8 text-green-400" />}
            title="Target Market"
            description="Define your ideal customer segments and understand their needs and behaviors."
          />
          <FeatureCard 
            icon={<Lightbulb className="w-8 h-8 text-yellow-400" />}
            title="Innovation Score"
            description="Evaluate your idea's uniqueness and innovation potential in the market."
          />
          <FeatureCard 
            icon={<Rocket className="w-8 h-8 text-red-400" />}
            title="Launch Strategy"
            description="Get a customized roadmap for successful market entry and growth."
          />
        </div>
      </div>

      {/* How It Works Section */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
            How It Works
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <StepCard 
            number="1"
            title="Describe Your Idea"
            description="Share your startup concept and vision with our AI analyzer."
          />
          <StepCard 
            number="2"
            title="AI Analysis"
            description="Our AI processes your idea through multiple analysis frameworks."
          />
          <StepCard 
            number="3"
            title="Get Insights"
            description="Receive comprehensive insights and actionable recommendations."
          />
        </div>
      </div>

      {/* Success Metrics */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <MetricCard number="10+" label="Ideas Analyzed" />
            <MetricCard number="98%" label="Accuracy Rate" />
            <MetricCard number="24/7" label="AI Analysis" />
            <MetricCard number="0" label="Success Stories" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative container mx-auto px-4 py-8 text-center text-gray-400">
        <p>© 2025 Startup Validator | Created by Harsh Shirke</p>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all transform hover:-translate-y-1 border border-white/10 hover:border-white/20">
      <div className="mb-4 transform group-hover:scale-110 transition-transform">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function StepCard({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="relative bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10">
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl font-bold">
        {number}
      </div>
      <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function MetricCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
        {number}
      </div>
      <div className="text-gray-400">{label}</div>
    </div>
  );
}