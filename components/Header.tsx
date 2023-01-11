import Link from "next/link"
import Image from "next/image"


function Header() {


  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5 mb-10 ">
      <div className="flex items-center space-x-2">

        <Link href="/">
          <Image className="rounded-full" src="/assets/logo.png" alt="logo" width={300} height={150} />
        </Link>

      </div>
      <div className="flex font-gochi">
        <Link
          href="/"
          className="ml-5 px-4 py-3  md:text-base bg-[#E0F2FF] hover:bg-[#FFFCE0] text-[#343434]  flex items-center  "
        ><p className="text-xs md:text-xl">Blog</p></Link>
        <Link
          href="/about"
          className="ml-5 px-4 py-3  md:text-base bg-[#FFEBE0] hover:bg-[#FFFCE0] text-[#343434]  flex items-center  "
        ><p className="text-xs md:text-xl">About</p></Link>
        <Link
          href=""
          className="ml-5 px-4 py-3  md:text-base bg-[#EAFFF3] hover:bg-[#FFFCE0] text-[#343434]  flex items-center  "
        ><p className="text-xs md:text-xl">Contact</p></Link>
      </div>
    </header>
  )
}

export default Header