import Footer from '../../components/Footer';
import Header from '../../components/Header';
import '../../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className='bg-[#FBFAFB] max-w-5xl mx-auto'>
        <Header />
        {/* Banner */}
        {children}

        <Footer />
      </body>
    </html>
  )
}
