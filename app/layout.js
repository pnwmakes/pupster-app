import './globals.css';
import Header from './components/Header';
import { ThemeProvider } from '../context/ThemeContext';

export const metadata = {
    title: 'Pupster',
    description: 'Multilingual dog discovery app',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className='bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300'>
                <ThemeProvider>
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
