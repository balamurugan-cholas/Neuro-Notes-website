import { Download, Github, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 pt-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/30 -z-10" />
      
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Version Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-medium">v1.0.0</span>
        </div>

        {/* Main heading */}
        <div className="space-y-4 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Neuro Notes
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Offline-first AI notes powered by local LLMs.
          </p>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          Neuro Notes is a privacy-focused desktop note-taking app that uses local large language models to enhance writing, summarize content, and answer questions — all without sending data to the cloud.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
          <a href="https://drive.google.com/file/d/1dvSYlJB_wnDnfMhTzQPgOR_8TQIVInI6/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="gap-2 min-w-[200px] transition-transform duration-300">
            <Download className="w-5 h-5" />
            Download for Windows
          </Button>
          </a>
          
          <a href="https://github.com/balamurugan-cholas/Neuro-Note.git" target="_blank" rel="noopener noreferrer">
          <Button size="lg" variant="outline" className="gap-2 min-w-[200px] transition-transform duration-300">
            <Github className="w-5 h-5" />
            View GitHub
          </Button>
          </a>
        </div>

        {/* Secondary CTA */}
        <button
          onClick={scrollToFeatures}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mt-8 animate-fade-in-up"
          style={{animationDelay: '0.3s'}}
        >
          <span className="text-sm font-medium">See Features</span>
          <ChevronDown className="w-4 h-4 animate-bounce mt-1" />
        </button>
      </div>
    </section>
  );
}
