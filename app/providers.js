'use client';
import { ThemeProvider } from 'next-themes';

export default function Providers({ children }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="bg-[#1a1a1a] dark:bg-black dark:text-gray-200 text-white transition-colors duration-300 select-none min-h-screen">
        {children}
      </div>
    </ThemeProvider>
  );
}