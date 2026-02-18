import Navbar from "../Navbar";
import Footer from "../Footer";
import imgFoca from "../../Images/Focabebe.png"
import burbujas from "../../Images/burbujas.webp"
import burbujas2 from "../../Images/burbujas2.webp"
import burbujas3 from "../../Images/burbujas3.webp"
import { useState } from 'react';
import './wave.css'


function HomePage() {

    let resultado = "";
    let i;
    let caracter;
    let morse;
    let palabraIntroducida;

    const [pantalla, setPantalla] = useState("");

    // Traductor
    function morseAbecedario(caracter) {

        switch (caracter) {

            case "a":
                morse = ".-";
                break;

            case "b":
                morse = "-...";
                break;

            case "c":
                morse = "-.-.";
                break;

            case "d":
                morse = "-..";
                break;

            case "e":
                morse = ".";
                break;

            case "f":
                morse = "..-.";
                break;

            case "g":
                morse = "--.";
                break;

            case "h":
                morse = "....";
                break;

            case "i":
                morse = "..";
                break;

            case "j":
                morse = ".---";
                break;

            case "k":
                morse = "-.-";
                break;

            case "l":
                morse = ".-..";
                break;

            case "m":
                morse = "--";
                break;

            case "n":
                morse = "-.";
                break;

            case "ñ":
                morse = "-...";
                break;

            case "o":
                morse = "---";
                break;

            case "p":
                morse = ".--.";
                break;

            case "q":
                morse = "--.-";
                break;

            case "r":
                morse = ".-.";
                break;

            case "s":
                morse = "...";
                break;

            case "t":
                morse = "-";
                break;

            case "u":
                morse = "..-";
                break;

            case "v":
                morse = "...-";
                break;

            case "w":
                morse = ".--";
                break;

            case "x":
                morse = "-..-";
                break;

            case "y":
                morse = "-.--";
                break;

            case "z":
                morse = "--..";
                break;

            case " ":
                morse = "  ";
                break;

            default:
                console.log("Error");
                break;
        }

        return morse;
    }

    const variableText = (e) => {

        palabraIntroducida = e.target.value.toLowerCase();

        const btnClear = document.getElementById("btnClear");

        btnClear.style.visibility = (palabraIntroducida.length > 0 ) ? "visible" : "hidden";
        btnClear.onclick = () => {
            e.target.value = "";
            btnClear.style.visibility = "hidden";
        }

        return palabraIntroducida;
    }

    const palabra = (event) => {
        
        event.preventDefault();
        const input = palabraIntroducida;
        console.log(input);
        resultado = "";


        for (i = 0; i < input.length; i++) {
            caracter = input[[i]]

            morseAbecedario(caracter);
            resultado = resultado + morse;
            if (resultado.length != 0) {
                resultado = resultado + " ";
            } 
        }

        document.getElementById("input-buttom").classList.add("animate-slide-out-bottom");
        document.getElementById("morse").classList.add("animate-blink");

        return setPantalla(resultado);
    }



    return (


        <div>
            <div className="h-screen bg-gradient-to-b from-blue-900 via-blue-700 to-95% w-full overflow-y-auto">
                <Navbar />

                {/* First Seccion */}
                <div className="relative flex flex-col text-center items-center pb-60">
                    <h3 id="tittleHome" className="font-extrabold pl-5 pr-5 pt-32 ld:pl-0 ld:pr-0 text-amber-50 text-[36px] md:text-[40px] z-10">Empieza aqui a traducir tu frase o palabras</h3>
                    {/* Traducción */}
                    <div id="morse" className="w-full pl-4 pr-4 md:pl-20 md:pr-20">
                        <p className="mt-18 pl-3 pr-3 w-full font-extrabold text-amber-50 text-[26px] md:text-[32px] lg:text-[20px] tracking-[5px] whitespace-pre-wrap">{pantalla}</p>
                    </div>
                    <div id="input-buttom" className="w-full">
                        {/* Input */}
                        <div className="flex justify-center pl-10 pr-10 md:pl-0 md:pr-0">
                            <div className="relative flex justify-center items-center w-md  h-12 lg:h-10 border-2 border-blue-200 rounded-3xl text-center">
                                
                                <input type="text" id="inputTraductor" placeholder="Escribe aqui para traducir" className="w-3/4 text-center text-amber-50 placeholder:text-gray-300 border-none focus:outline-none"
                                    onChange={variableText} onKeyDown={(e) => {if (e.key === "Enter") palabra(e)}}/>

                                <span id="btnClear" style={{visibility: "hidden"}} className="cursor-pointer absolute right-0 pr-2 pb-1 font-extrabold text-[28px] lg:text-[26px] text-blue-200 hover:text-blue-50 transition">&times;</span>
                            </div>
                        </div>
            
                        {/* Bottom */}
                        <div className="pt-12 lg:pt-10">
                            <button className="cursor-pointer bg-blue-800 shadow-lg shadow-blue-800/50 w-28 h-12 lg:w-24 lg:h-10 text-blue-100 font-bold rounded-2xl hover:scale-105 transition"
                                onClick={palabra} id="botonTraducir">Traducir</button>
                        </div>
                    </div>

                    <div className="absolute w-full h-full grid grid-cols-6 grid-rows-5 pointer-events-none">
                        <img src={burbujas} alt="" className="w-55 col-start-6 row-start-1 animate-pulse animate-duration-3000"/>
                        <img src={burbujas2} alt="" className="w-65 col-start-1 row-start-2 lg:row-start-1 animate-pulse"/>
                        <img src={burbujas3} alt="" className="w-25 col-start-5 row-start-3 animate-pulse animate-duration-2500"/>
                        <img src={imgFoca} alt="" className="w-0 sm:w-50 lg:w-45 col-start-1 row-start-5 lg:row-start-4 lg:pt-8 pl-5 animate-fade-in-right"/>
                    </div>
                </div>


                {/* Second Seccion */}
                <div className="w-full bg-gradient-to-b from-amber-50 via-blue-100 to-blue-200 rounded-t-[100%_7%] flex-row-reverse text-right -mb-px">
                    <h2 className="text-right font-bold text-[24px] md:text-[32px] lg:text-[28px] pr-8 pt-10">Este seria el titulo de la segunda parte</h2>
                    <p className="mt-8 pr-4 pl-4 md:pl-40 mb-12 font-light text-[16px] md:text-[20px] lg:text-[18px] text-gray-800">
                        Este seria el texto que hiria en este apartado de forma que sea un parrafo informativo acerca de la pagina web
                        para que cualquiera que quisiese pudiese aprender a usar el codigo morse para sus criptogramas.
                    </p>
                    <p className="pr-4 pl-14 font-extralight text-[14px] md:text-[17px] lg:text-[16px] lg:pl-4 text-gray-500 pb-28">
                        Aqui ira otro texto mas pequeño, tal vez alguna informacion menor o algo de derechos reservados.
                    </p>

                    <div className="wabe"></div>
                </div>

                {/* Tercera seccion */}
                <div className="relative w-full h-220 sm:h-180 md:h-220 lg:h-140 bg-gradient-to-b from-[#1d4ed8] to-blue-800 -mb-px text-amber-50">

                    <h2 className="flex font-bold text-[32px] md:text-[40px] lg:text-[36px] pt-18 pl-6 pr-4 pb-14 max-sm:pl-4">Aprende a traducir codigo Morse</h2>
                    <p className="mb-3 pl-10 max-sm:pl-6 text-[18px] md:text-[22px] lg:text-[18px] md:w-2/4">
                        Aprende lenguaje morse con nuestros cursos, facil, rapido y sencillo.
                    </p>
                    <p className="w-full md:w-1/2 pb-14 sm:pb-20 lg:pb-12 pl-10 pr-4 text-wrap text-[18px] md:text-[22px] lg:text-[18px] max-sm:pl-6">
                        Una lista pensada para todo publico con videos divertidos e interactivos que
                        facilitara la enseñanza de este divertido sistema de codificado.
                    </p>
                    <button className="ml-6 sm:ml-16 lg:ml-25 cursor-pointer font-bold bg-blue-800 p-3 text-blue-50 text-[18px] md:text-[28px] lg:text-[18px] rounded-lg border-2 border-blue-500 hover:scale-108 hover:border-2 hover:border-blue-300 hover:text-blue-200 transition">Aprende aqui</button>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    )
}

export default HomePage;