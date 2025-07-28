import './globals.css';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';

export const metadata = {
    title: 'Pupster',
    description: 'Discover your new dog friend!',
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body>
                <ThemeProvider>
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
