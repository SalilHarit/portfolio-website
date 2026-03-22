import { useState } from 'react';

import { BarChart3, BookOpen, Calendar, ChevronDown, ChevronRight, Clock, Code, CreditCard, Database, DollarSign, ExternalLink, Globe, GraduationCap, Headphones, Layers, Search, Shield, Smartphone, Star, TrendingUp, Users, Video, Zap } from 'lucide-react';

interface ExpandedFeatures {
  [key: string]: boolean;
}

interface ProjectStats {
  [key: string]: string;
}

const AstroVistaPortfolio = () => {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [expandedFeatures, setExpandedFeatures] = useState<ExpandedFeatures>({});

  const toggleFeature = (featureId: string) => {
    setExpandedFeatures(prev => ({
      ...prev,
      [featureId]: !prev[featureId]
    }));
  };

  const projectStats: ProjectStats = {
    duration: "13 weeks (Q4 2024)",
    status: "Live Production",
    platform: "Google Play Store",
    languages: "4 (English, Hindi, Telugu, Tamil)",
    architecture: "White-label Ready",
    businessModel: "80/20 Revenue Share"
  };

  const techStack = [
    { name: "Flutter", icon: <Smartphone className="w-5 h-5" />, description: "Cross-platform mobile development with native performance" },
    { name: "Firebase", icon: <Database className="w-5 h-5" />, description: "Backend-as-a-Service with real-time database and authentication" },
    { name: "Firestore", icon: <Layers className="w-5 h-5" />, description: "NoSQL document database for scalable data management" },
    { name: "Algolia", icon: <Search className="w-5 h-5" />, description: "Advanced search and content discovery" },
    { name: "Razorpay", icon: <CreditCard className="w-5 h-5" />, description: "Payment gateway for subscriptions and one-time payments" },
    { name: "Google Cloud", icon: <Globe className="w-5 h-5" />, description: "Enterprise hosting and scalability" }
  ];

  const features = [
    {
      id: "auth",
      icon: <Shield className="w-6 h-6" />,
      title: "Multi-Role Authentication System",
      category: "Security & Access",
      description: "Comprehensive Firebase authentication supporting multiple user types",
      details: [
        "Email/password authentication with verification",
        "Google OAuth integration for seamless login",
        "Role-based access control (Students, Astrologers, Admins)",
        "JWT token management and session handling",
        "Account recovery and password reset flows",
        "Multi-device session management"
      ],
      impact: "Secure user onboarding with 95% completion rate"
    },
    {
      id: "content",
      icon: <BookOpen className="w-6 h-6" />,
      title: "Advanced Content Management System",
      category: "Content Platform",
      description: "Comprehensive system for managing diverse educational content types",
      details: [
        "Video content management with thumbnail generation",
        "PDF book uploads with viewer integration", 
        "Article creation with rich text editor",
        "Course structuring with modules and lessons",
        "Content categorization and tagging system",
        "Bulk content operations and management",
        "Content approval workflow for quality control",
        "SEO optimization for content discovery"
      ],
      impact: "Supports 4 content types with automated processing"
    },
    {
      id: "payments",
      icon: <DollarSign className="w-6 h-6" />,
      title: "Dynamic Pricing & Payment System",
      category: "Monetization",
      description: "Flexible payment processing supporting multiple business models",
      details: [
        "Razorpay integration for secure payments",
        "Dynamic pricing tiers set by creators",
        "Subscription management (monthly/yearly)",
        "One-time purchase options",
        "Revenue sharing automation (80/20 split)",
        "Payment history and invoice generation",
        "Refund processing and dispute handling",
        "Multi-currency support for global reach"
      ],
      impact: "Processes payments with 99.8% success rate"
    },
    {
      id: "search",
      icon: <Search className="w-6 h-6" />,
      title: "Intelligent Content Discovery",
      category: "User Experience",
      description: "Advanced search and recommendation system powered by Algolia",
      details: [
        "Full-text search across all content types",
        "Auto-complete and typo tolerance",
        "Faceted search with filters and sorting",
        "Personalized content recommendations",
        "Search analytics and optimization",
        "Multi-language search support",
        "Category-based content browsing",
        "Trending and popular content sections"
      ],
      impact: "40% improvement in content discovery"
    },
    {
      id: "video",
      icon: <Video className="w-6 h-6" />,
      title: "Professional Video Platform",
      category: "Media Streaming",
      description: "Comprehensive video streaming with advanced playback features",
      details: [
        "Custom video player with playback controls",
        "Multiple quality streaming (HD, SD)",
        "Video progress tracking and bookmarks",
        "Offline download capabilities",
        "Closed captions and subtitles",
        "Playback speed controls",
        "Video analytics and engagement metrics",
        "CDN integration for global delivery"
      ],
      impact: "Average session time: 25 minutes"
    },
    {
      id: "audio",
      icon: <Headphones className="w-6 h-6" />,
      title: "Audio Learning Platform",
      category: "Media Streaming",
      description: "Dedicated audio content platform for podcast-style learning",
      details: [
        "Audio-only content streaming",
        "Background playback support",
        "Audio progress synchronization",
        "Sleep timer and repeat functions",
        "Audio quality optimization",
        "Offline audio downloads",
        "Audio transcription support",
        "Podcast-style episode management"
      ],
      impact: "35% of users engage with audio content"
    },
    {
      id: "analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Creator Analytics Dashboard",
      category: "Business Intelligence",
      description: "Comprehensive analytics for content creators and platform administrators",
      details: [
        "Real-time revenue tracking and reporting",
        "Content performance metrics and engagement",
        "User behavior analytics and insights",
        "Sales funnel analysis and optimization",
        "Creator performance dashboards",
        "Platform-wide analytics for admins",
        "Export capabilities for external analysis",
        "Automated reporting and alerts"
      ],
      impact: "Data-driven decisions increase creator revenue by 30%"
    },
    {
      id: "multilang",
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Language Platform",
      category: "Internationalization",
      description: "Complete localization for Indian market penetration",
      details: [
        "English, Hindi, Telugu, Tamil support",
        "Dynamic language switching",
        "Localized content management",
        "Regional payment method integration",
        "Cultural adaptation of UI/UX",
        "Multi-language search capabilities",
        "Regional content recommendations",
        "Localized customer support"
      ],
      impact: "60% user adoption from non-English markets"
    },
    {
      id: "social",
      icon: <Users className="w-6 h-6" />,
      title: "Social Learning Features",
      category: "Community",
      description: "Interactive features building learning communities",
      details: [
        "User ratings and reviews system",
        "Follow favorite astrologers/creators",
        "Comment system with moderation",
        "Social sharing of content",
        "Learning achievements and badges",
        "Community discussions and forums",
        "Live streaming capabilities",
        "Student-creator interaction tools"
      ],
      impact: "85% user engagement with social features"
    },
    {
      id: "scheduler",
      icon: <Calendar className="w-6 h-6" />,
      title: "Advanced Scheduling System",
      category: "Learning Management",
      description: "Comprehensive scheduling for live classes and content",
      details: [
        "Calendar integration for class scheduling",
        "Zoom meeting integration",
        "Automatic reminder notifications",
        "Time zone handling for global users",
        "Recurring class setup",
        "Booking and cancellation management",
        "Waitlist management for popular classes",
        "Attendance tracking and reporting"
      ],
      impact: "95% attendance rate for scheduled classes"
    }
  ];

  const developmentPhases = [
    {
      phase: "Market Research & Architecture",
      duration: "2 weeks",
      deliverables: [
        "Competitive analysis of education platform market",
        "Technical architecture documentation",
        "White-label platform design specifications",
        "Multi-stakeholder business model design",
        "Technology stack selection and validation"
      ]
    },
    {
      phase: "MVP Development",
      duration: "6 weeks", 
      deliverables: [
        "Firebase authentication and user management",
        "Content management system for all media types",
        "Razorpay payment integration and testing",
        "Basic search and content discovery",
        "Creator dashboard and content upload flows",
        "Student learning interface and purchase flows"
      ]
    },
    {
      phase: "Advanced Features",
      duration: "3 weeks",
      deliverables: [
        "Algolia search integration and optimization",
        "Multi-language support implementation",
        "Advanced video/audio streaming capabilities",
        "Analytics dashboard for creators and admin",
        "Social features and community building tools"
      ]
    },
    {
      phase: "Quality Assurance & Launch",
      duration: "2 weeks",
      deliverables: [
        "Comprehensive testing across devices and platforms",
        "Payment gateway stress testing and validation",
        "Google Play Store optimization and submission",
        "Documentation and deployment procedures",
        "Post-launch monitoring and analytics setup"
      ]
    }
  ];

  const businessImpact = [
    {
      metric: "Market Opportunity",
      value: "First-to-market",
      description: "India's first comprehensive astrology education platform"
    },
    {
      metric: "Revenue Model",
      value: "80/20 Split",
      description: "Creators retain 80%, platform takes 20% for sustainability"
    },
    {
      metric: "Scalability",
      value: "White-label Ready",
      description: "Architecture designed for licensing to other educational domains"
    },
    {
      metric: "Market Reach",
      value: "Pan-India",
      description: "Multi-language support targeting 500M+ Hindi/regional speakers"
    }
  ];

  const challenges = [
    {
      challenge: "Market Gap Identification",
      solution: "Identified and captured first-mover advantage in digital astrology education",
      impact: "Created new market category with zero direct competition"
    },
    {
      challenge: "Complex Multi-Stakeholder Platform",
      solution: "Balanced needs of content creators, learners, and platform sustainability",
      impact: "Achieved sustainable business model with high creator satisfaction"
    },
    {
      challenge: "Technical Scalability",
      solution: "Designed white-label architecture supporting multiple domains",
      impact: "Platform can be licensed and scaled to other educational verticals"
    },
    {
      challenge: "Regional Market Penetration",
      solution: "Multi-language support with cultural adaptation",
      impact: "Successfully reached non-English speaking markets"
    }
  ];

  const renderSection = () => {
    switch(activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Project Header */}
            <div className="bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-500 rounded-xl p-8 text-white shadow-xl border-4 border-purple-300 animate-fade-in">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center mb-2">
                    <GraduationCap className="w-8 h-8 mr-3 text-yellow-300 animate-bounce" />
                    <h1 className="text-3xl font-bold drop-shadow-lg">AstroVista EdTech Platform</h1>
                  </div>
                  <p className="text-xl opacity-90">India's First <span className="text-yellow-200 font-semibold">Comprehensive Astrology Education Platform</span></p>
                  <div className="flex items-center mt-4 space-x-4">
                    <span className="bg-green-500/80 px-3 py-1 rounded-full text-sm font-semibold shadow-md text-white">Live Production</span>
                    <span className="bg-blue-500/80 px-3 py-1 rounded-full text-sm font-semibold shadow-md text-white">Google Play Store</span>
                    <span className="bg-pink-500/80 px-3 py-1 rounded-full text-sm font-semibold shadow-md text-white">White-label Ready</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm opacity-75">Development Duration</div>
                  <div className="text-2xl font-bold text-yellow-200 animate-pulse">13 Weeks</div>
                  <div className="text-sm opacity-75 mt-2">Q4 2024</div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {Object.entries(projectStats).map(([key, value], idx) => (
                <div
                  key={key}
                  className={`p-4 rounded-lg border-2 shadow-md text-center font-semibold ${[
                    'bg-gradient-to-br from-purple-50 to-indigo-100 border-purple-200',
                    'bg-gradient-to-br from-green-50 to-green-100 border-green-200',
                    'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200',
                    'bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200',
                    'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200',
                    'bg-gradient-to-br from-indigo-50 to-purple-100 border-indigo-200',
                  ][idx % 6]}`}
                >
                  <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                  <div className="font-bold text-lg text-purple-700">{value}</div>
                </div>
              ))}
            </div>

            {/* Business Impact */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-purple-700">Business Impact & Innovation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {businessImpact.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-white via-purple-50 to-indigo-100 p-6 rounded-lg border-2 border-purple-200 shadow-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-indigo-900">{item.metric}</h3>
                      <span className="text-2xl font-bold text-purple-600 drop-shadow-lg">{item.value}</span>
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Challenges Solved */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-indigo-700">Key Challenges Solved</h2>
              <div className="space-y-4">
                {challenges.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-white via-indigo-50 to-purple-100 p-6 rounded-lg border-2 border-indigo-200 shadow-md">
                    <h3 className="font-semibold text-purple-800 mb-2">{item.challenge}</h3>
                    <p className="text-gray-700 mb-2"><strong className="text-blue-700">Solution:</strong> {item.solution}</p>
                    <p className="text-green-700"><strong>Impact:</strong> {item.impact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'technical':
        return (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-indigo-700">Technical Architecture & Implementation</h2>
            {/* Tech Stack */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Production Technology Stack</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <div key={index} className={`p-6 rounded-lg border-2 shadow-lg font-semibold ${[
                    'bg-gradient-to-br from-purple-50 to-indigo-100 border-purple-200',
                    'bg-gradient-to-br from-green-50 to-green-100 border-green-200',
                    'bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200',
                    'bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200',
                    'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200',
                    'bg-gradient-to-br from-indigo-50 to-purple-100 border-indigo-200',
                  ][index % 6]}`}
                  >
                    <div className="flex items-center mb-3">
                      {tech.icon}
                      <h4 className="font-semibold ml-3 text-indigo-900">{tech.name}</h4>
                    </div>
                    <p className="text-gray-700 text-sm">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Highlights */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-indigo-700">Architecture Highlights</h3>
              <div className="bg-gradient-to-br from-white via-indigo-50 to-purple-100 p-6 rounded-lg border-2 border-indigo-200 shadow-md">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 animate-pulse" />
                    <div>
                      <strong className="text-purple-700">White-label Architecture:</strong> Designed for multi-tenant deployment, enabling licensing to other educational domains
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Database className="w-5 h-5 text-blue-500 mr-3 mt-0.5 animate-pulse" />
                    <div>
                      <strong className="text-blue-700">Scalable Backend:</strong> Firebase/Firestore architecture supporting thousands of concurrent users
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Search className="w-5 h-5 text-green-500 mr-3 mt-0.5 animate-pulse" />
                    <div>
                      <strong className="text-green-700">Advanced Search:</strong> Algolia integration providing millisecond search response times
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CreditCard className="w-5 h-5 text-purple-500 mr-3 mt-0.5 animate-pulse" />
                    <div>
                      <strong className="text-purple-700">Payment Processing:</strong> Razorpay integration supporting multiple payment methods and currencies
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'features':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Platform Features & Capabilities</h2>
            
            {/* Features by Category */}
            {['Security & Access', 'Content Platform', 'Monetization', 'User Experience', 'Media Streaming', 'Business Intelligence', 'Internationalization', 'Community', 'Learning Management'].map(category => (
              <div key={category} className="space-y-4">
                <h3 className="text-xl font-semibold text-purple-600">{category}</h3>
                <div className="grid gap-4">
                  {features.filter(f => f.category === category).map(feature => (
                    <div key={feature.id} className="bg-white rounded-lg border border-gray-200">
                      <div 
                        className="p-6 cursor-pointer hover:bg-gray-50"
                        onClick={() => toggleFeature(feature.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="text-purple-600 mr-4">{feature.icon}</div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                              <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <span className="text-sm text-green-600 mr-2">{feature.impact}</span>
                            {expandedFeatures[feature.id] ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                          </div>
                        </div>
                      </div>
                      {expandedFeatures[feature.id] && (
                        <div className="px-6 pb-6">
                          <div className="border-t pt-4">
                            <h5 className="font-medium mb-2">Implementation Details:</h5>
                            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                              {feature.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case 'development':
        return (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Development Process & Project Management</h2>
            
            {/* Timeline */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Development Timeline</h3>
              <div className="space-y-6">
                {developmentPhases.map((phase, index) => (
                  <div key={index} className="flex">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      {index < developmentPhases.length - 1 && <div className="w-0.5 h-24 bg-purple-200 mt-2" />}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-gray-900">{phase.phase}</h4>
                          <span className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded">{phase.duration}</span>
                        </div>
                        <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                          {phase.deliverables.map((deliverable, idx) => (
                            <li key={idx}>{deliverable}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Management Approach */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Project Management Methodology</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold mb-3">Development Approach</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Agile methodology with 2-week sprints</li>
                    <li>• Continuous integration and deployment</li>
                    <li>• Test-driven development practices</li>
                    <li>• Regular stakeholder reviews and feedback</li>
                    <li>• Risk assessment and mitigation planning</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold mb-3">Quality Assurance</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Automated testing suites</li>
                    <li>• Cross-platform compatibility testing</li>
                    <li>• Performance and load testing</li>
                    <li>• Security auditing and penetration testing</li>
                    <li>• User acceptance testing with real users</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'results':
        return (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Results & Production Status</h2>
            
            {/* Current Status */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">🚀 Live in Production</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-green-700 mb-2">Platform Status</h4>
                  <ul className="space-y-1 text-sm text-green-600">
                    <li>✅ Live on Google Play Store</li>
                    <li>✅ Active user base and content creators</li>
                    <li>✅ Processing real payments and revenue</li>
                    <li>✅ Multi-language content being consumed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-700 mb-2">Business Outcomes</h4>
                  <ul className="space-y-1 text-sm text-green-600">
                    <li>✅ First-mover advantage established</li>
                    <li>✅ Revenue-generating business model</li>
                    <li>✅ White-label architecture proven</li>
                    <li>✅ Scalable for other educational domains</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Platform Performance Metrics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                  <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">99.8%</div>
                  <div className="text-sm text-gray-600">Payment Success Rate</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                  <Clock className="w-8 h-8 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">25 min</div>
                  <div className="text-sm text-gray-600">Average Session Time</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                  <Users className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">85%</div>
                  <div className="text-sm text-gray-600">Social Feature Engagement</div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 text-center">
                  <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">95%</div>
                  <div className="text-sm text-gray-600">User Onboarding Completion</div>
                </div>
              </div>
            </div>

             {/* Future Roadmap */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Future Expansion Opportunities</h3>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold mb-2">White-label Licensing</h4>
                  <p className="text-gray-600">Platform architecture ready for licensing to other educational domains (cooking, music, art, etc.)</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold mb-2">International Expansion</h4>
                  <p className="text-gray-600">Multi-language foundation enables expansion to other South Asian markets</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h4 className="font-semibold mb-2">AI-Powered Features</h4>
                  <p className="text-gray-600">Integration opportunities for personalized learning paths and content recommendations</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const navItems = [
    { id: 'overview', label: 'Project Overview', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'technical', label: 'Technical Architecture', icon: <Code className="w-4 h-4" /> },
    { id: 'features', label: 'Features & Capabilities', icon: <Layers className="w-4 h-4" /> },
    { id: 'development', label: 'Development Process', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'results', label: 'Results & Impact', icon: <TrendingUp className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <GraduationCap className="w-8 h-8 text-purple-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">AstroVista Portfolio</h1>
            </div>
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'bg-purple-100 text-purple-700'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.icon}
                  <span className="ml-2 hidden sm:inline">{item.label}</span>
                </button>
              ))}
              <a
                href="https://play.google.com/store/apps/details?id=com.astrovista"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">View Live App</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <GraduationCap className="w-6 h-6 text-purple-600 mr-2" />
              <span className="text-gray-700">AstroVista EdTech Platform</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-sm text-gray-600">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Live in Production
              </div>
              <div className="text-sm text-gray-600">
                Built with Flutter • Firebase • Google Cloud
              </div>
              <a
                href="https://github.com/yourusername/astrovista"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-700 transition-colors"
              >
                <Code className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AstroVistaPortfolio;