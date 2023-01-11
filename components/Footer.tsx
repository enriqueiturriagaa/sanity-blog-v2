import Link from "next/link"
import Image from "next/image"


function Footer() {


  return (
    <header className="flex items-center justify-between space-x-2 font-bold  py-5 mt-10">
      <div className="flex font-gochi w-1/3">
        <Link
          href="/about"
          className="ml-5 px-4 py-3  md:text-base text-[#343434]  flex items-center  "
        ><p className=" md:text-xl">© Nullius in verba 2023</p></Link>

      </div>
      <div className="flex items-center justify-center  w-1/3 m-auto">

        {/* Logo */}
        <Link href="/">
          <div className="hidden lg:block  ">
            <Image className="" src="/assets/logo.png" alt="logo" width={182} height={92} />
          </div>
        </Link>
        {/* Mobile Logo */}
        <Link href="/">
          <div className="lg:hidden">
            <Image className="" src="/assets/logo-mobile.png" alt="logo" width={80} height={80} />
          </div>
        </Link>

      </div>
      <div className="w-1/3 text-center">
        <Link href="https://twitter.com/iturriagaayala" target="_blank">
          <p className="font-gochi inline-block mr-5">Say Hi! on Twitter</p>
          <Image className="inline-block" src="/assets/twitter.png" alt="logo" width={40} height={40} />
        </Link>
      </div>
    </header>
  )
}

export default Footer