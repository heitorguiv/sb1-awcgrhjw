import { ThemeProvider } from 'next-themes';
import { Dashboard } from '@/components/dashboard/Dashboard';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <ThemeProvider defaultTheme="system" enableSystem attribute="class">
      <div className="min-h-screen bg-background">
        <main>
          <Dashboard />
        </main>
      </div>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;