import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div
          className="min-h-screen bg-white dark:bg-gray-900 
                        transition-colors duration-300"
        >
          <Navbar />
          <Hero />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
