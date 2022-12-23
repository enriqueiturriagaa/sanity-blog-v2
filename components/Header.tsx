import Link from "next/link"
import Image from "next/image"

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5 bg-[#0F1119] text-white">
      <Image className="" src="/assets/title.svg" alt="logo" width={175} height={150} />
        <div className="flex items-center space-x-2">
          
            <Link href="/">
                <Image className="rounded-full" src="/assets/logo.png" alt="logo" width={150} height={150} />
            </Link>
            
        </div>
        <div>
          <Link 
            href=""
            className="px-10 py-3 text-sm md:text-base bg-[#45251A] text-[#BE9B82] border-[1px] border-[#5E3726] flex items-center rounded-md shadow-2xl"
          ><p className="drop-shadow-xl">Sign Up Now!</p></Link>
        </div>
    </header>
  )
}

export default Header