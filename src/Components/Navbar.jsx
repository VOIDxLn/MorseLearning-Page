import Logo from '../Images/Focabebe.png'

function Navbar(){



    return (
        <div className="flex justify-between items-center h-18 bg-gray-800">
            <div>
                <img className="h-12" src={Logo} alt="" />
            </div>
            <nav className="">
                <ul className="flex items-center gap-20">
                    <li className="font-bold text-white hover:text-blue-200 transition"><a href="">Aprende</a></li>
                    <li className="font-bold text-white hover:text-blue-200 transition"><a href="">Traduce</a></li>
                    <li className="font-bold text-white hover:text-blue-200 transition"><a href="">Más información</a></li>
                </ul>
            </nav>
            <div></div>
        </div>
    )
}

export default Navbar;