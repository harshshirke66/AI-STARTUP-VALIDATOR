import React from 'react';
import { Target, TrendingUp, Search, Lightbulb, BarChart, Rocket, DollarSign } from 'lucide-react';
import type { ValidationResult } from '../types';

interface Props {
  result: ValidationResult;
}

export default function ResultCard({ result }: Props) {
  return (
    <div className="w-full bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
      <div className="p-8 space-y-8">
        <section>
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-6 h-6 text-blue-400" />
            <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Market Analysis
            </h3>
          </div>
          <p className="text-gray-300 leading-relaxed">{result.marketAnalysis}</p>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-purple-400" />
            <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              SWOT Analysis
            </h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {Object.entries(result.swot).map(([category, items]) => (
              <div key={category} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="capitalize text-lg font-medium text-white mb-3 flex items-center gap-2">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {items.map((item, index) => (
                    <li key={index} className="text-gray-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Search className="w-6 h-6 text-pink-400" />
            <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400">
              Similar Products
            </h3>
          </div>
          <ul className="space-y-2">
            {result.similarProducts.map((product, index) => (
              <li key={index} className="text-gray-300 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2" />
                <div>
                  <span className="font-medium">{product.name}</span>
                  <p className="text-gray-400">{product.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Lightbulb className="w-6 h-6 text-yellow-400" />
            <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
              MVP Suggestions
            </h3>
          </div>
          <ul className="space-y-2">
            {result.mvpSuggestions.map((suggestion, index) => (
              <li key={index} className="text-gray-300 flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2" />
                <div>
                  <span className="font-medium">{suggestion.name}</span>
                  <p className="text-gray-400">{suggestion.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <Rocket className="w-6 h-6 text-green-400" />
            <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
              Development Roadmap
            </h3>
          </div>
          <div className="grid gap-6">
            {Object.entries(result.roadmap).map(([phase, { title, tasks }]) => (
              <div key={phase} className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-medium text-white mb-3">{title}</h4>
                <ul className="space-y-2">
                  {tasks.map((task, index) => (
                    <li key={index} className="text-gray-300 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="w-6 h-6 text-blue-400" />
            <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Funding Guidance
            </h3>
          </div>
          <div className="grid gap-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-medium text-white mb-3">Potential Funding Sources</h4>
              <ul className="space-y-2">
                {result.fundingGuidance.sources.map((source, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                    <div>
                      <span className="font-medium">{source.name}</span>
                      <p className="text-gray-400">{source.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-medium text-white mb-3">Funding Strategies</h4>
              <ul className="space-y-2">
                {result.fundingGuidance.strategies.map((strategy, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                    <div>
                      <span className="font-medium">{strategy.name}</span>
                      <p className="text-gray-400">{strategy.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-4">
            <BarChart className="w-6 h-6 text-pink-400" />
            <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-red-400">
              Key Success Metrics
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-medium text-white mb-3">User Metrics</h4>
              <ul className="space-y-2">
                {result.metrics.user.map((metric, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2" />
                    <div>
                      <span className="font-medium">{metric.name}</span>
                      <p className="text-gray-400">{metric.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h4 className="text-lg font-medium text-white mb-3">Business Metrics</h4>
              <ul className="space-y-2">
                {result.metrics.business.map((metric, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2" />
                    <div>
                      <span className="font-medium">{metric.name}</span>
                      <p className="text-gray-400">{metric.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}