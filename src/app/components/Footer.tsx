import { Shield, Brain } from 'lucide-react';
import letterN from '../../assets/letter-n.png';

export function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-border bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                <img
                  src={letterN}
                  alt="Neuro Notes logo"
                  className="w-4 h-4 object-contain"
                />
              </div>
              <span className="font-semibold">Neuro Notes</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Offline-first AI note-taking powered by local LLMs
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Shield className="w-4 h-4" />
              <span>100% Privacy-Focused</span>
            </div>
          </div>

          {/* Info */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Version 1.0.0</li>
              <li>Windows Desktop Application</li>
              <li>Built with Electron & React</li>
              <li>Local LLM: Phi-3-mini-4k-instruct-q4</li>
            </ul>
          </div>

          {/* Privacy Statement */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Privacy Commitment</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              All data stays on your device. No telemetry, no cloud sync, no external API calls. 
              Your notes are yours alone.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Bala Murugan. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <span>Built with</span>
            <Brain className="w-4 h-4 text-primary"/>
            <span>for privacy-conscious users</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
