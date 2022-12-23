import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";


function StudioNavbar(props: any) {
    return (
       <div>
        <div className="flex items-center justify-between">
            <Link href="/" className="text-[#EEE6DE] flex items-center font-bold">
                <ArrowUturnLeftIcon className="h-6 w-6 text-[#EEE6DE] mr-2"/>
                Go to Website
            </Link>
        </div>
        <>{props.renderDefault(props)}</></div>
    );
}
export default StudioNavbar;