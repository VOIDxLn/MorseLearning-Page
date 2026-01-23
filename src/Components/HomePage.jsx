import Navbar from "./Navbar";
import imgFoca from "../Images/Focabebe.png"
import burbujas from "../Images/burbujas.webp"
import burbujas2 from "../Images/burbujas2.webp"
import burbujas3 from "../Images/burbujas3.webp"
import { useState } from 'react';

function HomePage() {

     
    return (

        
        <div>
            <div className="relative h-screen bg-gradient-to-b from-blue-900 via-blue-700 to-95% overflow-auto">
                <Navbar/>
                    {/* First Seccion */}
                    <div className="flex flex-col text-center items-center mt-36">
                        <h3 id="tittleHome" className={`font-extrabold text-amber-50 text-4xl z-10`}>Empieza aqui a traducir tu frase o palabras</h3>
                        <p className="pt-14">Aqui ira la traduccion</p>
                        <div className="pt-6">
                            <input type="text" className=" w-125 h-11 border-2 border-blue-200 rounded-3xl text-center focus:outline-none focus:border-blue-300 focus:text-xl focus:transition transition not-focus: placeholder:text-gray-300 placeholder:text-xl text-amber-100 max-sm:w-3xs" placeholder="Escribe aqui para traducir"/>
                        </div>
                        <div className="pt-10">
                            <button className="cursor-pointer bg-blue-800 shadow-lg shadow-blue-800/50 w-24 h-10 text-blue-100 font-bold rounded-2xl hover:scale-105 transition">Traducir</button>
                        </div>
                    </div>
                {/* Image */}
                <div className="overflow-hidden">
                    <img src={imgFoca} alt="" className="absolute bottom-8 w-55 pl-10 animate-slide-in-left" />
                    <img src={burbujas} alt="" className="absolute bottom-90 w-60 left-265 animate-pulse animate-duration-[1950ms]"/>
                    <img src={burbujas2} alt="" className="absolute bottom-60 w-110 animate-pulse"/>
                    <img src={burbujas3} alt="" className="absolute bottom-70 w-50 left-222 animate-pulse animate-duration-[1900ms]"/>
                </div>
                


                {/* Second Seccion */}
                <div className="bg-amber-50">
                    <h2 className="flex flex-row-reverse font-bold text-2xl pr-8 pt-10 mt-60">Este seria el titulo de la segunda parte</h2>
                    <p className="flex flex-row-reverse w-200 text-right ml-120 mt-8 font-light text-gray-800">
                        Este seria el texto que hiria en este apartado de forma que sea un parrafo informativo acerca de la pagina web
                        para que cualquiera que quisiese pudiese aprender a usar el codigo morse para sus criptogramas.
                    </p>
                    <p className="flex flex-row-reverse w-200 text-right ml-120 mt-6 font-extralight text-xs text-gray-500">
                        Aqui ira otro texto mas pequeño, tal vez alguna informacion menor o algo de derechos reservados.
                    </p>
                    <ul className="flex pb-15">
                        <li>Mas informacion</li>
                        <li>Relevante</li>
                        <li>Acerca de la paginax</li>
                    </ul>
                </div>

                {/* Tercera seccion */}
                <div className="relative bg-blue-700 text-amber-50">

                    <h2 className="flex font-bold text-3xl pt-20 pl-6 mb-15">Aprende a traducir codigo Morse</h2>
                    <p className="mb-3 pl-10">
                        Aprende lenguaje morse con nuestros cursos, facil, rapido y al alcance de cualquiera.
                    </p>
                    <p className="mb-5 pl-10">
                        Una lista pensada para todo publico.
                    </p>
                    <span className="pl-10 pb-15">Haz click aqui para aprender</span>
                </div>
            </div>
        </div>
    )
}

export default HomePage;