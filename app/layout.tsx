import './globals.css'
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Pro Wrestling in Japan',
  description: 'Created by Hugo Xu',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
