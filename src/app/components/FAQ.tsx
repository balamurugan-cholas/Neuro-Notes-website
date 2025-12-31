import { HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    question: 'Is Neuro Notes really completely offline?',
    answer: 'Yes! Neuro Notes runs entirely on your local machine. The AI model (Phi-3-mini-4k-instruct-q4) is downloaded once and runs locally. No internet connection is required for any feature, including AI assistance.'
  },
  {
    question: 'What are the system requirements?',
    answer: 'Neuro Notes requires Windows 10/11 (64-bit), minimum 8GB RAM (16GB recommended), ~2.5GB storage for the AI model, and a modern CPU with AVX2 support. The app itself is lightweight at around 50MB.'
  },
  {
    question: 'How does the local AI compare to cloud-based AI?',
    answer: 'While cloud-based AI models (like GPT-4) are more powerful, Neuro Notes prioritizes privacy and offline functionality. The local Phi-3 model is optimized for writing assistance, summarization, and note-related tasks, and performs well for these specific use cases without any latency or privacy concerns.'
  },
  {
    question: 'Can I use this for sensitive work notes?',
    answer: 'Absolutely. Since everything runs locally and no data leaves your device, Neuro Notes is ideal for sensitive information. There\'s no telemetry, no cloud sync, and no external API calls—your notes remain completely private.'
  },
  {
    question: 'Is this a real production app or a demo?',
    answer: 'Neuro Notes is a fully functional desktop application built with production-grade technologies (Electron, React, TypeScript). It demonstrates real-world software engineering skills including desktop app development, local AI integration, and privacy-focused architecture.'
  },
  {
    question: 'How was this project built?',
    answer: 'This project was built by Bala Murugan as a portfolio piece to demonstrate modern desktop application development. It uses Electron for the desktop framework, React for the UI, TypeScript for type safety, and integrates a local LLM via ONNX Runtime for AI features.'
  },
  {
    question: 'Can I contribute or see the source code?',
    answer: 'Yes! The project is open source and available on GitHub. Contributions, feedback, and suggestions are welcome. Check the GitHub link in the navigation or footer to explore the codebase.'
  }
];

export function FAQ() {
  return (
    <section className="px-6 py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-border">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Questions & Answers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Neuro Notes
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
