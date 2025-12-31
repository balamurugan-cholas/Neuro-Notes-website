import { User, Github, Linkedin, Globe, Instagram } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import userImage from '../../assets/user.jpeg'

export function About() {
  return (
    <section className="px-6 py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-border">
            <User className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">About the Developer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Built by Bala Murugan</h2>
        </div>

        <Card className="border-2">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <img
                src={userImage}
                alt="Bala Murugan"
                className="w-full h-full object-cover rounded-full"
              />
              </div>
              <div>
                <CardTitle>Bala Murugan</CardTitle>
                <p className="text-sm text-muted-foreground">Fresher / AI Developer</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-sm max-w-none">
              <p className="text-foreground/80 leading-relaxed">
                Neuro Notes is a passion project born from a desire to create a truly private, 
                offline-first note-taking application powered by local AI. As a developer entering 
                the industry, I wanted to build something that demonstrates real-world software 
                engineering skills while solving a genuine problem.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                This project showcases desktop application development, local LLM integration, 
                privacy-focused architecture, and a clean, user-friendly interface. Every feature 
                was carefully designed and implemented to create a production-ready application 
                that I'm proud to share with recruiters and the developer community.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Neuro Notes represents my commitment to building software that respects user privacy 
                while delivering powerful, AI-enhanced functionality. It's a testament to what can be 
                achieved when combining modern desktop technologies with local machine learning models.
              </p>
            </div>

            {/* Contact Links */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm font-medium mb-4">Connect with me:</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" className="gap-2 pt-1">
                  <Github className="w-4 h-4 -me-1 -mt-1" />
                  <a href="https://github.com/balamurugan-cholas/" target="_blank" rel="noopener noreferrer">GitHub</a>
                </Button>
                <Button variant="outline" size="sm" className="gap-2 pt-1">
                  <Linkedin className="w-4 h-4 -me-1 -mt-1" />
                  <a href="https://in.linkedin.com/in/balamurugandev" target="_blank" rel="noopener noreferrer">Linkedin</a>
                </Button>
                <Button variant="outline" size="sm" className="gap-2 pt-1">
                  <Globe className="w-4 h-4 -me-1 -mt-1" />
                  <a href="https://balamurugan-cholas.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Portfolio</a>
                </Button>
                <Button variant="outline" size="sm" className="gap-2 pt-1">
                  <Instagram className="w-4 h-4 -me-1 -mt-1" />
                  <a href="https://www.instagram.com/post_maram?igsh=MWltZ3YyMDVxdnoyYQ==" target="_blank" rel="noopener noreferrer">Instagram</a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
