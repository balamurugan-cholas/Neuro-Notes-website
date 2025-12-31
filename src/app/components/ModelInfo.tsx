import { Brain, Shield, Cpu, Info } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function ModelInfo() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-border">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">AI Transparency</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Model & AI Transparency</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full transparency about the AI model powering Neuro Notes
          </p>
        </div>

        <div className="bg-card border border-border rounded-xl p-8 shadow-sm">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Model Name */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Local AI Model</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Currently using:</p>
                <Badge variant="secondary" className="text-xs font-mono">
                  Phi-3-mini-4k-instruct-q4
                </Badge>
              </div>
            </div>

            {/* Privacy */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Privacy First</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                All processing happens on your device. No data is sent to external servers or the cloud.
              </p>
            </div>

            {/* More Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Model Details</h3>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    View Full Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto scrollbar-minimal scrollbar-overlay">
                  <DialogHeader>
                    <DialogTitle>AI Model Information</DialogTitle>
                    <DialogDescription>
                      Detailed information about the local LLM used in Neuro Notes
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6 mt-4">
                    {/* Model Name */}
                    <div className="space-y-2">
                      <h4 className="font-semibold">Model Name</h4>
                      <p className="font-mono text-sm bg-muted p-3 rounded-md">
                        Phi-3-mini-4k-instruct-q4
                      </p>
                    </div>

                    {/* System Requirements */}
                    <div className="space-y-2">
                      <h4 className="font-semibold">System Requirements</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• RAM: Minimum 8GB (16GB recommended)</li>
                        <li>• Storage: ~2.5GB for model files</li>
                        <li>• CPU: Modern processor with AVX2 support</li>
                        <li>• OS: Windows 10/11 (64-bit)</li>
                      </ul>
                    </div>

                    {/* Strengths */}
                    <div className="space-y-2">
                      <h4 className="font-semibold">Strengths</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Fast inference on consumer hardware</li>
                        <li>• Efficient memory usage with quantization</li>
                        <li>• Good performance on writing and summarization tasks</li>
                        <li>• Instruction-tuned for better accuracy</li>
                        <li>• 10K context window for processing notes</li>
                      </ul>
                    </div>

                    {/* Limitations */}
                    <div className="space-y-2">
                      <h4 className="font-semibold">Limitations</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• May struggle with highly specialized domains</li>
                        <li>• Limited to 10K token context window</li>
                        <li>• Processing speed depends on hardware</li>
                        <li>• Knowledge cutoff from training data</li>
                      </ul>
                    </div>

                    {/* Privacy Details */}
                    <div className="space-y-2">
                      <h4 className="font-semibold">Privacy & Security</h4>
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-primary mt-0.5" />
                          <div className="space-y-1 text-sm">
                            <p className="font-medium">100% Local Processing</p>
                            <p className="text-muted-foreground">
                              The model runs entirely on your device. Your notes and AI interactions never leave your computer. No internet connection required for AI features.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}