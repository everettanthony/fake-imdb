'use client';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon } from '@heroicons/react/24/solid';
import { MoonIcon } from '@heroicons/react/24/solid';

export default function DarkModeButton() {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <div>
            {mounted && 
                (currentTheme === 'dark' ? (
                    <SunIcon 
                        className="text-xl h-6 w-6 cursor-pointer text-white hover:text-[#f5c518]"
                        onClick={() => setTheme("light")} 
                    />
                ) : (
                    <MoonIcon 
                        className="text-xl h-6 w-6 cursor-pointer text-white hover:text-[#f5c518]" 
                        onClick={() => setTheme("dark")}
                    />
                ))
            }
        </div>
    )
}