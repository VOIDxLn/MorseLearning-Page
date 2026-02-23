import Navbar from "../Navbar";
import Footer from "../Footer";

import github from "./github.png";

import Img from "../../Images/Focabebe.png"

function MasInfo() {

    return (
        <div>
            <div className="bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500">
                <Navbar />
                <div className="bg-amber-50 h-full grid grid-cols-2 mt-20 p-10">
                    <div>
                        <img src={Img} alt="" className="w-20"/>
                    </div>
                    <div className="flex flex-col">
                        <h2>Morse la Foca</h2>
                        <p>
                            Morse la foca es un proyecto interactivo diseñado para facilitar el 
                            aprendizaje del código Morse de forma rápida, intuitiva y accesible. 
                            A través de la plataforma, los usuarios pueden aprender a representar 
                            letras, números y símbolos en este sistema de comunicación, además de 
                            explorar su historia y comprender su relevancia y evolución a lo largo 
                            del tiempo.
                        </p>
                        <p>
                            Este proyecto personal nace como un espacio de experimentación y aplicación
                            práctica de conocimientos en diseño y desarrollo web. Su objetivo es simular
                            una experiencia de aprendizaje sencilla pero funcional, integrando principios
                            de usabilidad, diseño visual y desarrollo frontend, así como la colaboración
                            con artistas en la creación de elementos gráficos que aportan identidad y 
                            personalidad a la plataforma.
                        </p>

                        <p>
                            Más abajo encontrarás información sobre el autor del proyecto, así como 
                            sobre la artista que colaboró en el diseño de las ilustraciones y recursos 
                            visuales que forman parte de esta experiencia.
                        </p>
                    </div>
                </div>

                <div className="flex flex-row mt-20 pl-20 gap-10 pb-10">  

                    {/* Card Developer */}
                    <div className="relative bg-neutral-primary-soft max-w-xs w-full p-6 border border-default rounded-3xl shadow-xs hover:scale-102 transition">
                            
                            {/*  <-- Dropdown menu -->*/}
                            
                        <div className="flex flex-col items-center">
                            <img className="w-24 h-24 mb-6 rounded-full" src={github} alt="Bonnie image"/>
                            <h5 className="mb-0.5 text-xl font-semibold tracking-tight text-heading">VOIDxLn</h5>
                            <span className="text-sm text-body">Desarrollador</span>
                            <div className="flex mt-4 md:mt-6 gap-4">
                                <button type="button" className="inline-flex items-center text-white bg-blue-700 box-border rounded-2xl font-medium text-sm px-4 py-2.5">
                                    Follow me
                                </button>
                                <button type="button" className="inline-flex self-start w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                                    Message
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Card Artist */}
                    <div className="relative bg-neutral-primary-soft max-w-xs w-full p-6 border border-default rounded-3xl shadow-xs hover:scale-102 transition">
                            
                            {/*  <-- Dropdown menu -->*/}
                            
                        <div className="flex flex-col items-center">
                            <img className="w-24 h-24 mb-6 rounded-full" src={github} alt="Bonnie image"/>
                            <h5 className="mb-0.5 text-xl font-semibold tracking-tight text-heading">VOIDxLn</h5>
                            <span className="text-sm text-body">Desarrollador</span>
                            <div className="flex mt-4 md:mt-6 gap-4">
                                <button type="button" className="inline-flex items-center text-white bg-blue-700 box-border rounded-2xl font-medium text-sm px-4 py-2.5">
                                    Follow me
                                </button>
                                <button type="button" className="inline-flex self-start w-auto text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
                                    Message
                                </button>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Footer */}
                <Footer />
                

            </div>
        </div>
    )
}

export default MasInfo;