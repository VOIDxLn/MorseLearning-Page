import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

function Footer() {

    return (
        <div className="flex justify-center items-center h-25 mb-0 bg-gradient-to-b from-blue-800 via-blue-900 to-blue-950">
            <div className="flex flex-row text-amber-50 text-[36px] gap-20">
                <FaYoutube className="cursor-pointer hover:scale-120 transition"/>
                <FaInstagram className="cursor-pointer hover:scale-120 transition"/>
                <FaTiktok className="cursor-pointer hover:scale-120 transition"/>
            </div>
        </div>
    )
}

export default Footer;