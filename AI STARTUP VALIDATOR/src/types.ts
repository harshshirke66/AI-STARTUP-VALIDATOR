export interface ValidationResult {
  marketAnalysis: string;
  swot: {
    strengths: string[];
    weaknesses: string[];
    opportunities: string[];
    threats: string[];
  };
  similarProducts: {
    name: string;
    description: string;
  }[];
  mvpSuggestions: {
    name: string;
    description: string;
  }[];
  roadmap: {
    phase1: {
      title: string;
      tasks: string[];
    };
    phase2: {
      title: string;
      tasks: string[];
    };
    phase3: {
      title: string;
      tasks: string[];
    };
  };
  fundingGuidance: {
    sources: {
      name: string;
      description: string;
    }[];
    strategies: {
      name: string;
      description: string;
    }[];
  };
  metrics: {
    user: {
      name: string;
      description: string;
    }[];
    business: {
      name: string;
      description: string;
    }[];
  };
}

export interface ValidationRequest {
  businessIdea: string;
}