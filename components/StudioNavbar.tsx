import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";


function StudioNavbar(props: any) {
    return (
        <div>
            <div className="flex items-center justify-between p-4 font-roboto">
                <Link href="/" className="text-black flex items-center font-bold">
                    <ArrowUturnLeftIcon className="h-6 w-6 text-black mr-2" />
                    Go to Website
                </Link>
                <p className="font-roboto">Site Designed and Developed by Enrique Iturriaga</p>
            </div>
            <>{props.renderDefault(props)}</></div>
    );
}
export default StudioNavbar;