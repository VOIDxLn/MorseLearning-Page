import Logo from '../Images/Focabebe.png'
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar(){

    const [menu, setMenu] = useState("closed"); // closed:primera fase -> open:segunda fase -> closing:tercera fase


    function botonMenu() {
        // Primera fase
        if(menu === "closed"){
            setMenu("open");
        }

        // Segunda fase
        else if(menu === "open") {
            setMenu("closing");
        }

        // Tercera fase
        else if (menu === "closing") {
            setMenu("open");
        }
    };

    // closing -> closed
    const handleTransitionEnd = () => {
        if (menu === "closing") {
            setMenu("closed");
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center h-18 bg-transparent">
                <div>
                    <img className="h-12 pl-4" src={Logo} alt="" />
                </div>
                <nav className="relative">
                    <ul className="flex items-center gap-20 text-[20px] max-sm:hidden">
                        <li className="font-bold text-white hover:text-blue-200 transition"><a href="">Aprende</a></li>
                        <li className="font-bold text-white hover:text-blue-200 transition"><a href="">Traduce</a></li>
                        <li className="font-bold text-white hover:text-blue-200 transition"><a href="">Más información</a></li>
                    </ul>
                </nav>
                <div className="pr-12"></div>
                <button onClick={botonMenu} className='sm:hidden pr-8 text-4xl text-amber-50'>
                    <RxHamburgerMenu />
                </button>
            </div>
            {/* Mobile Menu */} 
            {menu !== "closed" && (
                <div onAnimationEnd={handleTransitionEnd} id="mobile-menu" className={`${menu === "open" ? "animate-fade-in-down" : ""}
                    ${menu === "closing" ? "animate-fade-out-up" : ""}
                    absolute h-screen w-full sm:hidden bg-gradient-to-b from-blue-800 to-blue-600 z-100`}>

                        <ul className='flex-col text-center mt-15 space-y-25 text-3xl font-bold text-amber-50'>
                            <li>Aprende</li>
                            <li>Traduce</li>
                            <li>Más infomarcion</li>
                        </ul>
                </div>
            )}
        </div>
        
    )
}

export default Navbar;