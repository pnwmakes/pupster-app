'use client';
import Link from 'next/link';
import { useTheme } from '../../context/ThemeContext';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className='p-6 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg'>
            <nav className='flex items-center justify-between max-w-4xl mx-auto'>
                <div className='flex space-x-8 text-lg font-semibold'>
                    <Link
                        href='/'
                        className='hover:text-blue-500 dark:hover:text-blue-400'
                    >
                        Home
                    </Link>
                    <Link
                        href='/discover'
                        className='hover:text-blue-500 dark:hover:text-blue-400'
                    >
                        Discover
                    </Link>
                    <Link
                        href='/search'
                        className='hover:text-blue-500 dark:hover:text-blue-400'
                    >
                        Search
                    </Link>
                </div>
                <button
                    onClick={toggleTheme}
                    className='flex items-center gap-2 bg-gray-300 dark:bg-gray-700 px-4 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition'
                >
                    {theme === 'light' ? (
                        <>
                            <MoonIcon className='h-5 w-5' />
                            <span>Dark Mode</span>
                        </>
                    ) : (
                        <>
                            <SunIcon className='h-5 w-5' />
                            <span>Light Mode</span>
                        </>
                    )}
                </button>
            </nav>
        </header>
    );
}
