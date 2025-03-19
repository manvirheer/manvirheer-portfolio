'use client';
// app/components/ui/header_theme_toggle.tsx
import { useTheme } from '@/app/context/theme-context';

export default function HeaderThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('mono');
    } else {
      setTheme('light');
    }
  };

  return (
    <div className="flex justify-between items-center">
      <div>Dark mode</div>
      <div 
        className="cursor-pointer hover:opacity-70 transition-opacity" 
        onClick={cycleTheme}
      >
        {theme === 'dark' ? 'Y' : 'N'}
      </div>
    </div>
  );
}