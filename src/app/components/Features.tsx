import { Sparkles, MessageSquare, Star, Trash2, Search, WifiOff } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const features = [
  {
    icon: Sparkles,
    title: 'AI Writing Tools (Local LLM)',
    description: 'Enhance your writing with AI-powered tools',
    capabilities: [
      'Summarize notes',
      'Improve writing quality',
      'Generate key points',
      'Expand ideas',
      'Works fully offline using a local LLM'
    ]
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbot for Notes',
    description: 'Intelligent conversation about your content',
    capabilities: [
      'Ask questions about the currently opened note',
      'Context-aware responses',
      'Fully offline, privacy-safe',
      'Interactive assistance'
    ]
  },
  {
    icon: Star,
    title: 'Powerful Note Management',
    description: 'Complete control over your notes',
    capabilities: [
      'Pin notes to top',
      'Mark notes as favourites',
      'Dedicated favourites view',
      'Move notes to trash',
      'Trash view with restore and permanent delete options'
    ]
  },
  {
    icon: Search,
    title: 'Advanced Find',
    description: 'Quickly locate content within your notes',
    capabilities: [
      'Find text inside notes',
      'Keyboard shortcut: Ctrl + F',
      'Highlighted results',
      'Fast and responsive search'
    ]
  }
];

export function Features() {
  return (
    <section id="features" className="px-6 py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-border">
            <WifiOff className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">100% Offline & Private</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Core Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for intelligent, privacy-focused note-taking
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
