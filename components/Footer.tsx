import Link from "next/link"
import Image from "next/image"


function Footer() {


  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5 mt-10">
      <div className="flex font-gochi">
        <Link
          href="/about"
          className="ml-5 px-4 py-3  md:text-base text-[#343434]  flex items-center  "
        ><p className="text-xs md:text-xl">© Nullius in verba 2023</p></Link>

      </div>
      <div className="flex items-center space-x-2">

        <Link href="/">
          <Image className="rounded-full" src="/assets/logo.png" alt="logo" width={182} height={79} />
        </Link>

      </div>
      <div>
        <Link href="https://twitter.com/iturriagaayala" target="_blank">
          <p className="font-gochi inline-block mr-3">Say Hi! on Twitter</p>
          <Image className="inline-block" src="/assets/twitter.png" alt="logo" width={40} height={40} />
        </Link>
      </div>
    </header>
  )
}

export default Footer