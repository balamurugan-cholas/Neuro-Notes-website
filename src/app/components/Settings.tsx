import { Settings as SettingsIcon, Moon, Sun, Pin, Keyboard, Trash2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function Settings() {
  return (
    <section className="px-6 py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-border">
            <SettingsIcon className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Customization</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Settings & Customization</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tailor Neuro Notes to your workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Theme Settings */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex gap-1">
                  <Sun className="w-5 h-5 text-primary" />
                  <Moon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Theme Options</CardTitle>
                  <CardDescription>Choose your preferred appearance</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm">Light Mode</span>
                <Badge variant="outline">Available</Badge>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm">Dark Mode</span>
                <Badge variant="outline">Available</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Window Settings */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Pin className="w-5 h-5 text-primary" />
                <div>
                  <CardTitle>Window Options</CardTitle>
                  <CardDescription>Control app window behavior</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <span className="text-sm">Always-on-Top Mode</span>
                <Badge variant="outline">Toggleable</Badge>
              </div>
              <p className="text-xs text-muted-foreground px-3">
                Keep Neuro Notes visible above other windows
              </p>
            </CardContent>
          </Card>

          {/* Trash Management */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Trash2 className="w-5 h-5 text-primary" />
                <div>
                  <CardTitle>Trash Management</CardTitle>
                  <CardDescription>Manage deleted notes</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="p-3 bg-muted/50 rounded-lg">
                <span className="text-sm">Clear all trash notes at once</span>
              </div>
              <p className="text-xs text-muted-foreground px-3">
                Permanently delete all notes in trash with a single action
              </p>
            </CardContent>
          </Card>

          {/* Keyboard Shortcuts */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Keyboard className="w-5 h-5 text-primary" />
                <div>
                  <CardTitle>Keyboard Shortcuts</CardTitle>
                  <CardDescription>Boost your productivity</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Find text</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Ctrl + F</kbd>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Toggle always on top</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Ctrl + Alt + T</kbd>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Minimize app</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Ctrl + M</kbd>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Reopen from minimize</span>
                  <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Ctrl + Shift + N</kbd>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
