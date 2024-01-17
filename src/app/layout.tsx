import type { Metadata } from 'next';
import { Quicksand } from 'next/font/google';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import './globals.css';

const inter = Quicksand({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export async function generateStaticParams() {
    return [{ lang: 'en-US' }, { lang: 'fr' }];
}

export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { lang: string };
}) {
    return (
        <html lang={params.lang}>
            <body className={inter.className}>
                <PrimaryLayout>{children}</PrimaryLayout>
            </body>
        </html>
    );
}
