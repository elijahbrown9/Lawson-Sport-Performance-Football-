import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lawson Sport Performance',
  description:
    'Serious strength and speed development for high school athletes.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
