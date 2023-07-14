import Providers from './providers';
import Header from '@/components/header';
import NavBar from '@/components/navBar';
import "@fontsource/roboto-condensed/700.css"; 
import "@fontsource/roboto/400.css"; 
import "@fontsource/roboto/500.css"; 
import '../styles/styles.scss';

export const metadata = {
  title: 'Fake IMDb',
  description: 'An IMDB Clone App built with NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="w-full">
            <Header />

            <NavBar />

            {/* Search */}

            <main className="max-w-6xl mx-auto px-3 py-6 lg:px-6">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
