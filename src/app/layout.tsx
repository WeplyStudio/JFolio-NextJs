import type { Metadata } from 'next';
import './globals.css';
// Removed Toaster as it's not in the new design

// Ensure the font is correctly imported if not already via globals.css or tailwind config
// For Plus Jakarta Sans, we'll add it via <link> tags like in the HTML example.

export const metadata: Metadata = {
  title: 'Easy Kripsi', // Updated title
  description: 'Otomatisasi format skripsi/tesis Anda dalam sekejap. Hemat waktu penulisan skripsi dengan pintasan keyboard dan alat cerdas untuk Word.',
  keywords: "template skripsi, format skripsi, otomatisasi skripsi, tesis, microsoft word, easy kripsi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* The body style "overflow: unset" from HTML is default browser behavior.
          The min-h-screen on the main div in page.tsx will manage layout height. */}
      <body className="font-body antialiased bg-white text-gray-900"> {/* Updated base styles */}
        {children}
        {/* <Toaster /> Toaster removed */}
      </body>
    </html>
  );
}
