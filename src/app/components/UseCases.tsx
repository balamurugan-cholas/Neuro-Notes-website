import { BookOpen, Briefcase, GraduationCap, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const useCases = [
  {
    icon: GraduationCap,
    title: 'Students & Researchers',
    description: 'Take lecture notes and get AI-powered summaries without compromising your research data privacy.',
    benefits: ['Summarize study materials', 'Generate key points', 'Ask questions about notes']
  },
  {
    icon: Briefcase,
    title: 'Professionals',
    description: 'Keep meeting notes and work documents secure on your device while using AI assistance.',
    benefits: ['Meeting summaries', 'Task extraction', 'Privacy-safe AI help']
  },
  {
    icon: BookOpen,
    title: 'Writers & Creators',
    description: 'Draft, edit, and refine your creative work with AI writing tools that work offline.',
    benefits: ['Improve writing quality', 'Expand ideas', 'Refine content']
  },
  {
    icon: FileText,
    title: 'Privacy-Conscious Users',
    description: 'Anyone who values data privacy can benefit from local-only AI processing.',
    benefits: ['No cloud dependency', 'Complete data control', 'Zero telemetry']
  }
];

export function UseCases() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Perfect For Everyone</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From students to professionals, Neuro Notes adapts to your workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase) => {
            const Icon = useCase.icon;
            return (
              <Card key={useCase.title} className="hover:shadow-lg transition-all hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="mb-2">{useCase.title}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">
                        {useCase.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {benefit}
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
