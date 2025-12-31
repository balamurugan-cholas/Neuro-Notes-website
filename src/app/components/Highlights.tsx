import { Download, Shield, Zap, HardDrive } from 'lucide-react';

const highlights = [
  {
    icon: Shield,
    label: '100% Private',
    description: 'All data stays local'
  },
  {
    icon: Zap,
    label: 'Fast & Responsive',
    description: 'Built with Electron'
  },
  {
    icon: HardDrive,
    label: 'Offline-First',
    description: 'No internet required'
  },
  {
    icon: Download,
    label: 'Production Ready',
    description: 'Real desktop app'
  }
];

export function Highlights() {
  return (
    <section className="px-6 py-16 border-y border-border bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((highlight) => {
            const Icon = highlight.icon;
            return (
              <div key={highlight.label} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold">{highlight.label}</p>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
