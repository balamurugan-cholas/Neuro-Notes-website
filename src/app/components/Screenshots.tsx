import { useState } from 'react';
import { Monitor, MessageSquare, Settings, Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import editorView from '../../assets/editor.PNG';
import chatbotView from '../../assets/chatbot.PNG'
import settingsView from '../../assets/settings.PNG';
import favouriteView from '../../assets/favourite.PNG'

const screenshots = [
  {
    id: 'editor',
    label: 'Editor View',
    icon: Monitor,
    image: editorView,
    alt: 'Neuro Notes Editor Interface'
  },
  {
    id: 'chatbot',
    label: 'AI Chatbot',
    icon: MessageSquare,
    image: chatbotView,
    alt: 'AI Chatbot Panel'
  },
  {
    id: 'favorites',
    label: 'Favourites',
    icon: Star,
    image: favouriteView,
    alt: 'Favourites View'
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
    image: settingsView,
    alt: 'Settings'
  }
];

export function Screenshots() {
  const [activeTab, setActiveTab] = useState('editor');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleTabChange = (value: string) => {
    if (value !== activeTab) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTab(value);
        setIsTransitioning(false);
      }, 200);
    }
  };

  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">Desktop App Preview</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the Neuro Notes interface
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mb-8">
            {screenshots.map((screenshot) => {
              const Icon = screenshot.icon;
              return (
                <TabsTrigger key={screenshot.id} value={screenshot.id} className="gap-2 transition-all duration-300">
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{screenshot.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {screenshots.map((screenshot) => (
            <TabsContent key={screenshot.id} value={screenshot.id} className="mt-0">
              <div 
                className={`rounded-xl overflow-hidden border border-border shadow-2xl bg-card max-w-4xl mx-auto transition-all duration-500 ${
                  isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                <ImageWithFallback
                  src={screenshot.image}
                  alt={screenshot.alt}
                  className="w-full h-auto"
                />
              </div>
              <p 
                className={`text-center text-sm text-muted-foreground mt-4 transition-all duration-500 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
              >
                {screenshot.alt}
              </p>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}