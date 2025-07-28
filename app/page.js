'use client';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function HomePage() {
    const { t } = useTranslation();

    return (
        <div className='max-w-3xl mx-auto mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md text-center'>
            <h1 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
                {t('home.title')}
            </h1>
            <p className='text-gray-700 dark:text-gray-300 mb-6'>
                {t('home.description')}
            </p>

            <div className='flex justify-center gap-4'>
                <Link
                    href='/discover'
                    className='px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700'
                >
                    {t('home.buttonDiscover')}
                </Link>
                <Link
                    href='/search'
                    className='px-5 py-3 bg-green-600 text-white rounded-md hover:bg-green-700'
                >
                    {t('home.buttonSearch')}
                </Link>
            </div>
        </div>
    );
}
