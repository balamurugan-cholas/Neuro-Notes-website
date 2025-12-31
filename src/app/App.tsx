import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { Features } from './components/Features';
import { UseCases } from './components/UseCases';
import { ModelInfo } from './components/ModelInfo';
import { Settings } from './components/Settings';
import { Screenshots } from './components/Screenshots';
import { TechStack } from './components/TechStack';
import { FAQ } from './components/FAQ';
import { About } from './components/About';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ScrollReveal } from './components/ScrollReveal';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <ScrollReveal>
          <Highlights />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <Features />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <UseCases />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <ModelInfo />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <Settings />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div id="screenshots">
            <Screenshots />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <TechStack />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <FAQ />
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <div id="about">
            <About />
          </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <CTA />
        </ScrollReveal>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}