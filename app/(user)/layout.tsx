import Header from '../../components/Header';
import '../../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className='bg-[#FBFAFB] lg:px-20'>
        <Header />
        {/* Banner */}
        {children}</body>
    </html>
  )
}
