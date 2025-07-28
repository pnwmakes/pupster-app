'use client';
import '../lib/i18n';

import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const { t, i18n, ready } = useTranslation();
    if (!ready) return null;

    return (
        <header className='p-4 flex justify-between items-center bg-gray-100 dark:bg-zinc-900 text-black dark:text-white'>
            <div className='flex gap-4'>
                <Link href='/' className='font-bold'>
                    {t('nav.home')}
                </Link>
                <Link href='/discover'>{t('nav.discover')}</Link>
                <Link href='/search'>{t('nav.search')}</Link>
            </div>
            <div className='flex gap-4 items-center'>
                <button onClick={toggleTheme}>
                    {theme === 'light' ? (
                        <MoonIcon className='w-5 h-5' />
                    ) : (
                        <SunIcon className='w-5 h-5' />
                    )}
                </button>
                <button onClick={() => i18n.changeLanguage('en')}>EN</button>
                <button onClick={() => i18n.changeLanguage('es')}>ES</button>
            </div>
        </header>
    );
}
