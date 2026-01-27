import Navbar from "./Navbar";
import Footer from "./Footer";
import imgFoca from "../Images/Focabebe.png"
import burbujas from "../Images/burbujas.webp"
import burbujas2 from "../Images/burbujas2.webp"
import burbujas3 from "../Images/burbujas3.webp"
import { useState } from 'react';
import './wabe.css'


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
            <div className="relative h-screen bg-gradient-to-b from-blue-900 via-blue-700 to-95% overflow-auto">
                <Navbar />
                {/* First Seccion */}
                <div className="flex flex-col text-center items-center mt-32">
                    <h3 id="tittleHome" className={`font-extrabold text-amber-50 text-4xl z-10`}>Empieza aqui a traducir tu frase o palabras</h3>
                    <div id="morse">
                        <p className="mt-18 w-150 font-extrabold text-amber-50 text-[20px] tracking-[5px] whitespace-pre-wrap">{pantalla}</p>
                    </div>
                    <div id="input-buttom">
                        <div className="pt-4">
                            <input type="text" id="inputTraductor" className=" w-125 h-11 border-2 border-blue-200 rounded-3xl text-center focus:outline-none focus:border-blue-300 focus:text-xl focus:transition transition not-focus: placeholder:text-gray-300 placeholder:text-xl text-amber-100 max-sm:w-3xs" placeholder="Escribe aqui para traducir"
                                onChange={variableText} onKeyDown={(e) => {if (e.key === "Enter") palabra(e)}}/>
                        </div>
                        <div className="pt-10">
                            <button className="cursor-pointer bg-blue-800 shadow-lg shadow-blue-800/50 w-24 h-10 text-blue-100 font-bold rounded-2xl hover:scale-105 transition"
                                onClick={palabra} id="botonTraducir">Traducir</button>
                        </div>
                    </div>
                </div>
                {/* Image */}
                <div className="overflow-hidden">
                    <img src={imgFoca} alt="" className="absolute bottom-8 w-55 pl-10 max-sm:w-45 max-sm:-left-8 animate-slide-in-left" />
                    <img src={burbujas} alt="" className="absolute bottom-90 w-60 left-265 max-sm:w-50 max-sm:left-48 max-sm:bottom-120 animate-pulse animate-duration-[1950ms]" />
                    <img src={burbujas2} alt="" className="absolute bottom-60 w-110 max-sm:w-60 max-sm:bottom-120 max-sm:-left-5 animate-pulse" />
                    <img src={burbujas3} alt="" className="absolute bottom-70 w-50 left-222 max-sm:w-35 max-sm:left-40 max-sm:bottom-85 animate-pulse animate-duration-[1900ms]" />
                </div>



                {/* Second Seccion */}
                <div className="bg-gradient-to-b from-amber-50 via-blue-100 to-blue-200 rounded-t-[100%_7%]">
                    <h2 className="flex flex-row-reverse font-bold text-2xl pr-8 pt-10 mt-60">Este seria el titulo de la segunda parte</h2>
                    <p className="flex flex-wrap w-200 text-right ml-120 mt-8 font-light text-gray-800">
                        Este seria el texto que hiria en este apartado de forma que sea un parrafo informativo acerca de la pagina web
                        para que cualquiera que quisiese pudiese aprender a usar el codigo morse para sus criptogramas.
                    </p>
                    <p className="flex flex-row-reverse w-200 text-right ml-120 mt-6 font-extralight text-xs text-gray-500 pb-35">
                        Aqui ira otro texto mas pequeño, tal vez alguna informacion menor o algo de derechos reservados.
                    </p>

                    <div className="wabe"></div>
                </div>

                {/* Tercera seccion */}
                <div className="relative h-140 bg-gradient-to-b from-[#1d4ed8] to-blue-800 text-amber-50">

                    <h2 className="flex font-bold text-3xl pt-18 pl-6 mb-14 max-sm:pl-4">Aprende a traducir codigo Morse</h2>
                    <p className="mb-3 pl-10 max-sm:pl-6">
                        Aprende lenguaje morse con nuestros cursos, facil, rapido y sencillo.
                    </p>
                    <p className="mb-12 pl-10 w-180 text-wrap max-sm:pl-6">
                        Una lista pensada para todo publico con videos divertidos e interactivos que
                        facilitara la enseñanza de este divertido sistema de codificado.
                    </p>
                    <button className="ml-25 cursor-pointer font-bold bg-blue-800 p-3 rounded-lg border-2 border-blue-500 hover:scale-108 hover:border-2 hover:border-blue-300 hover:text-blue-200 transition max-sm:ml-10">Aprende aqui</button>
                </div>

                {/* Footer */}
                <Footer />
            </div>
        </div>
    )
}

export default HomePage;