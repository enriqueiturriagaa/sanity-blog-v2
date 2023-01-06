import Header from '../../components/Header';
import '../../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className='bg-[#FBFAFB]'>
        <Header />
        {/* Banner */}
        {children}</body>
    </html>
  )
}
