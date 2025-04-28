import React, { useState } from 'react';
import { Brain, Lightbulb, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ValidationForm from './ValidationForm';
import ResultCard from './ResultCard';
import type { ValidationResult } from '../types';

const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export default function MainApp() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ValidationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const validateIdea = async (businessIdea: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are a startup advisor and business analyst created by Harsh Shirke. Analyze this business idea and provide a detailed response in the following JSON format:
              {
                "marketAnalysis": "detailed market analysis with growth potential, trends, and market size",
                "swot": {
                  "strengths": ["list", "of", "strengths"],
                  "weaknesses": ["list", "of", "weaknesses"],
                  "opportunities": ["list", "of", "opportunities"],
                  "threats": ["list", "of", "threats"]
                },
                "similarProducts": [
                  {
                    "name": "Product Name",
                    "description": "Brief description of the similar product"
                  }
                ],
                "mvpSuggestions": [
                  {
                    "name": "Feature Name",
                    "description": "Description of the MVP feature"
                  }
                ],
                "roadmap": {
                  "phase1": {
                    "title": "Foundation (Months 1-3)",
                    "tasks": ["list", "of", "tasks"]
                  },
                  "phase2": {
                    "title": "Growth (Months 4-6)",
                    "tasks": ["list", "of", "tasks"]
                  },
                  "phase3": {
                    "title": "Scaling (Months 7-12)",
                    "tasks": ["list", "of", "tasks"]
                  }
                },
                "fundingGuidance": {
                  "sources": [
                    {
                      "name": "Funding Source Name",
                      "description": "Description of the funding source"
                    }
                  ],
                  "strategies": [
                    {
                      "name": "Strategy Name",
                      "description": "Description of the funding strategy"
                    }
                  ]
                },
                "metrics": {
                  "user": [
                    {
                      "name": "Metric Name",
                      "description": "Description of the user metric"
                    }
                  ],
                  "business": [
                    {
                      "name": "Metric Name",
                      "description": "Description of the business metric"
                    }
                  ]
                }
              }

              Business idea: ${businessIdea}

              IMPORTANT: Respond ONLY with the JSON object, no additional text or formatting.`
            }]
          }]
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.candidates || !Array.isArray(data.candidates) || data.candidates.length === 0) {
        throw new Error('Invalid response structure: missing candidates array');
      }

      const candidate = data.candidates[0];
      if (!candidate.content || !candidate.content.parts || !Array.isArray(candidate.content.parts)) {
        throw new Error('Invalid response structure: missing content or parts');
      }

      const text = candidate.content.parts[0]?.text;
      if (!text) {
        throw new Error('Invalid response structure: missing text content');
      }

      try {
        const cleanedText = text.trim().replace(/```json|```/g, '').trim();
        const aiResponse = JSON.parse(cleanedText);
        
        // Validate the parsed response has the expected structure
        if (!aiResponse.marketAnalysis || !aiResponse.swot || !aiResponse.roadmap) {
          throw new Error('Invalid response format: missing required fields');
        }
        setResult(aiResponse);
      } catch (parseError) {
        console.error('Failed to parse API response. Raw response:', text);
        throw new Error('Failed to parse API response as JSON. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'An unexpected error occurred');
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0118] text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
        <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl animate-pulse -top-20 -left-20" />
        <div className="absolute w-96 h-96 bg-purple-500/30 rounded-full filter blur-3xl animate-pulse -bottom-20 -right-20" />
      </div>

      <div className="relative container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <Brain className="w-16 h-16 text-blue-500" />
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full animate-pulse" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            AI Startup Validator by Harsh Shirke
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transform your business concept into actionable insights using our advanced AI analysis engine.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-8 max-w-4xl mx-auto">
          <ValidationForm onSubmit={validateIdea} loading={loading} />
          
          {error && (
            <div className="w-full p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
              <p className="text-center">{error}</p>
            </div>
          )}

          {loading && (
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-blue-500 animate-pulse" />
                </div>
              </div>
              <p className="text-gray-400">Analyzing your idea...</p>
            </div>
          )}

          {result && !loading && <ResultCard result={result} />}
        </div>
      </div>

      {/* Footer */}
      <footer className="relative container mx-auto px-4 py-8 text-center text-gray-400">
        <p>© 2025 Startup Validator | Created by Harsh Shirke</p>
      </footer>
    </div>
  );
}