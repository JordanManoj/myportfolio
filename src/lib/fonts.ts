import { Archivo, Inter, JetBrains_Mono, Unbounded } from 'next/font/google';

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600'],
});

const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
});

const fontHeading = Archivo({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700', '900'],
});

const fontDisplay = Unbounded({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['500', '700', '900'],
});

export const fonts = [
  fontSans.variable,
  fontMono.variable,
  fontHeading.variable,
  fontDisplay.variable,
];
