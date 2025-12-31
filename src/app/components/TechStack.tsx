import { Code2, Layers, Cpu, Package } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const techStack = [
  {
    category: 'Desktop Framework',
    icon: Package,
    technologies: ['Electron', 'React', 'TypeScript']
  },
  {
    category: 'AI & ML',
    icon: Cpu,
    technologies: ['Phi-3-mini-4k-instruct-q4', 'ONNX Runtime', 'Local LLM Integration']
  },
  {
    category: 'UI & Styling',
    icon: Layers,
    technologies: ['Tailwind CSS', 'Radix UI', 'Custom Components']
  },
  {
    category: 'Storage',
    icon: Code2,
    technologies: ['Local File System']
  }
];

export function TechStack() {
  return (
    <section className="px-6 py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-border">
            <Code2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Technical Details</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Built with Modern Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Production-grade architecture and industry-standard tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {techStack.map((stack) => {
            const Icon = stack.icon;
            return (
              <Card key={stack.category}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{stack.category}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted rounded-full text-sm text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-8 p-6 bg-card border border-border rounded-xl">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-2xl font-bold text-primary">~50 - 100MB</p>
              <p className="text-sm text-muted-foreground mt-1">App Size (excluding model)</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">&lt;100ms</p>
              <p className="text-sm text-muted-foreground mt-1">Startup Time</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">0 KB/s</p>
              <p className="text-sm text-muted-foreground mt-1">Network Usage (Offline)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
