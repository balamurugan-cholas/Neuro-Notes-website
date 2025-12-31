import { Download, Github, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export function CTA() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 border border-border rounded-2xl p-12 md:p-16 shadow-lg">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to experience privacy-focused note-taking?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download Neuro Notes and start taking intelligent notes with AI—completely offline.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a href="#">
              <Button size="lg" className="gap-2 min-w-[200px] group">
                <Download className="w-5 h-5" />
                Download for Windows
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              </a>

              <a href="https://github.com/balamurugan-cholas/Neuro-Note.git" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="gap-2 min-w-[200px]">
                <Github className="w-5 h-5" />
                View Source Code
              </Button>
              </a>
            </div>

            <p className="text-xs text-muted-foreground pt-4">
              Windows 10/11 • ~2.5GB Download • Version 1.0.0
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
