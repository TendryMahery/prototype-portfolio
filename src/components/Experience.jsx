import React from "react";
import {Swiper, SwiperSlide} from "swiper/react"
import {FaAccusoft, FaGithub,FaLinkedin,FaMailBulk,FaFacebook} from "react-icons/fa"


const Experience = () => {

    return(
        <div>
            <div id="" className="md:pt-40 pt-20 bg-gray-800 h-screen">
                <div className="experience md:px-80">
                    <div className="text-white md:grid md:grid-cols-2 gap-8 p-8">
                        <div className="flex flex-col sm:space-y-20">
                            <div className="bg-blue-500 p-2 w-10 text-center rounded-full">
                                <i className="fas fa-tv"></i>
                            </div>
                            <p className="font-semibold">Front-end et back-end experiences dans le developpent informatique</p>
                        </div>

                        <div>
                            <div className="space-y-8 text-sm">
                                <div className="sm:flex sm:space-x-4">
                                    <img src="../assets/sary/vac.jpg" className="object-cover w-20 h-20" alt="" />
                                    <div>
                                        <p className="border-b text-center">° Stage au sein de Ministère</p>
                                            <h1>
                                               - Developpement d'une application web gestion de congé.                 
                                            </h1> 
                                            <span className="font-semibold">
                                                Techologie : Django fullstack
                                            </span>
                                    </div>
                                </div>
                                <div className="sm:flex sm:space-x-4">
                                    <img src="../assets/sary/vac.jpg" className="object-cover w-20 h-20" alt="" />
                                    <div>
                                        <p className="border-b text-center">° Projet personnel</p>
                                            <h1>
                                               - Gestion de chambre d'hotel                 
                                            </h1> 
                                            <span className="font-semibold">
                                                Techologie : Symfony fullstack
                                            </span>
                                    </div>
                                </div>
                                <div className="sm:flex sm:space-x-4">
                                    <img src="../assets/sary/vac.jpg" className="object-cover w-20 h-20" alt="" />
                                    <div>
                                        <p className="border-b text-center">° Projet personnel</p>
                                            <h1>
                                               - blog(système de commentaire)                 
                                            </h1> 
                                            <span className="font-semibold">
                                                Techologie : Symfony fullstack
                                            </span>
                                    </div>
                                </div>
                                <div className="sm:flex sm:space-x-4">
                                    <img src="../assets/sary/vac.jpg" className="object-cover w-20 h-20" alt="" />
                                    <div>
                                        <p className="border-b text-center">° Projet personnel</p>
                                            <h1>
                                               - E-commerce                 
                                            </h1> 
                                            <span className="font-semibold">
                                                Techologie : Symfony fullstack
                                            </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="" className="bg-gray-800 min-h-screen text-white md:px-80 pb-10">
              <div className="text-center mb-4">
                <h1 className="text-2xl font-bold">Anciens projet</h1>
                    <p className="text-2xl">_</p>
              </div>

              <div>
                <div className="flex justify-center">
                    <div className="space-y-10">
                        <div className="sm:flex">
                            <div className="desc bg-white  p-4 text-black max-w-sm">
                                <h1 className="text-xl font-bold">Gestion de congé </h1>
                                <p className="text-sm">Fontionnalité: Gestion d'utilisateur, Authentification et Inscription, Publication de nouvelle, syteme de notification au reponse de demande de congé</p>
                                <div className="text-center mt-8">
                                <button className=" hover:scale-105"> <a href="" className="bg-gradient-to-r rounded from-blue-500 to-cyan-400 text-white font-semibold px-6 py-2">voir design</a> </button> 
                                </div>    
                            </div>
                            <div className="bg-blue-500 p-4 max-w-sm">
                                <img src="../assets/sary/vac.jpg" className="sm:h-40 sm:w-40 object-cover hover:scale-150 transition-all duration-300"  alt="" />
                            </div>
                        </div>
                        <div className="sm:flex">
                            <div className="bg-blue-500 p-4 max-w-sm">
                                <img src="../assets/sary/vac.jpg" className="sm:h-40 sm:w-40 object-cover hover:scale-150 transition-all duration-300"  alt="" />
                            </div>
                            <div className="desc bg-white  p-4 text-black max-w-sm">
                            <h1 className="text-xl font-bold">Gestion de chambre d'hotel</h1>
                                <p className="text-sm">Fontionnalité: Gestion d'utilisateur, Authentification et Inscription, recherche, reservation d'une chambre,crud</p>
                                <div className="text-center mt-8">
                                <button className=" hover:scale-105"> <a href="" className="bg-gradient-to-r rounded from-blue-500 to-cyan-400 text-white font-semibold px-6 py-2">view</a> </button> 
                                </div>    
                            </div>
                            
                        </div>
                        <div className="sm:flex">
                            <div className="desc bg-white  p-4 text-black max-w-sm">
                                <h1 className="text-xl font-bold">Blog</h1>
                                <p className="text-sm">Fontionnalité: systeme de commentaire, publication photo,Gestion d'utilisateur, Authentification et Inscription, recherche,crud</p>
                                <div className="text-center mt-8">
                                <button className=" hover:scale-105"> <a href="" className="bg-gradient-to-r rounded from-blue-500 to-cyan-400 text-white font-semibold px-6 py-2">view</a> </button> 
                                </div>    
                            </div>
                            <div className="bg-blue-500 p-4 max-w-sm">
                                <img src="../assets/sary/vac.jpg" className="sm:h-40 sm:w-40 object-cover hover:scale-150 transition-all duration-300"  alt="" />
                            </div>
                        </div>
                        <div className="sm:flex">
                        <div className="bg-blue-500 p-4 max-w-sm">
                                <img src="../assets/sary/vac.jpg" className="sm:h-40 sm:w-40 object-cover hover:scale-150 transition-all duration-300"  alt="" />
                            </div>
                            <div className="desc bg-white  p-4 text-black max-w-sm">
                                <h1 className="text-xl font-bold">E-commerce </h1>
                                <p className="text-sm">Fontionnalité: systeme de panier,Gestion d'utilisateur, Authentification et Inscription, recherche+cathegorie, crud</p>
                                <div className="text-center mt-8">
                                <button className=" hover:scale-105"> <a href="" className="bg-gradient-to-r rounded from-blue-500 to-cyan-400 text-white font-semibold px-6 py-2">view</a> </button> 
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            <div id="" className="bg-gray-800 h-screen">
                <div>
                    <div>
                        <section className=" text-white text-center pt-20 mb-8">
                            <h1 className="text-4xl font-bold">Projet Recent</h1>
                            <h1 className="text-2xl text-center">_</h1>
                        </section>
                        <section className="md:px-72 sm:px-10 bg-gray-800 h-screen">
                            <div className="h-10 w-10 rounded-full bg-blue-800">
                                
                            </div>
                            <div className="flex text-white">
                                <div className=" bg-blue-800 sm:h-96 sm:w-96 ml-10 hover:translate-x-10 transition duration-100">
                                    <img src="../assets/sary/vac.jpg" className="sm:h-96 sm:w-96 h-80 w-80 sm:object-cover object-cover sm:pl-8 sm:pr-8 pb-0 sm:pt-8" alt="" />
                                    <div className="text-sm font-bold border border-gray-700 p-2 text-center bg-gradient-to-r from-purple-950 to-pink-700">
                                        <h1>reactjs /</h1>
                                        <h1>Tailwindcss</h1>
                                    </div>
                                </div>
                                <div className="-ml-6 mt-20">
                                    <div className="space-y-10">
                                        <h1 className="text-sm text-gray-100 font-thin">UI / UX Front-end Ilustration </h1>
                                        <h1 className="sm:text-4xl text-2xl font-bold">Creation et integration fait par moi mêmê</h1>
                                    </div>
                                    <div className="mt-6 sm:flex sm:space-x-4">
                                        <img src="../assets/sary/vac.jpg" className="h-14 w-14 rounded-full" alt=""/> 
                                        <h1 className="text-sm mt-4"><span className="font-sans">je m'appel</span> <span className="font-bold">Tendry</span> </h1>   
                                    </div> 
                                </div>
                            </div>
                        </section>

                        <section className="md:px-80 sm:px-10 bg-gray-800 h-screen">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-purple-950 to-pink-700 ">
                                
                                </div>
                            <div className="flex text-white">
                                <div className="bg-gradient-to-r from-purple-950 to-pink-700 sm:h-96 sm:w-96 ml-10 hover:translate-x-10 transition duration-100">
                                    <img src="../assets/sary/vac.jpg" className="sm:h-96 sm:w-96 h-80 w-80 sm:object-cover object-cover sm:pl-8 sm:pr-8 pb-0 sm:pt-8" alt="" />
                                    <div className="text-sm font-bold border border-gray-700 p-2 text-center bg-blue-800">
                                        <h1>reactjs /</h1>
                                        <h1>Tailwindcss</h1>
                                    </div>
                                </div>
                                <div className="-ml-6 mt-20">
                                    <div className="space-y-10">
                                    <h1 className="text-sm text-gray-100 font-thin">UI / UX Front-end Ilustration </h1>
                                    <h1 className="sm:text-4xl text-2xl font-bold">Creation et integration fait par moi mêmê</h1>
                                    </div>
                                    <div className="mt-6 sm:flex sm:space-x-4">
                                        <img src="../assets/sary/vac.jpg" className="h-14 w-14 rounded-full" alt=""/> 
                                        <h1 className="text-sm mt-4"><span className="font-sans">je m'appel</span> <span className="font-bold">Tendry</span> </h1>   
                                    </div> 
                                </div>
                            </div>

                           
                        </section>
                        <footer className="bg-purple-950 h-screen">
                            <div className="flex justify-center items-center">
                                <div className="mt-40">
                                    <div className="h-80 w-80 rounded-full bg-gray-50 shadow-2xl">
                                        <h1 className="text-2xl font-semibold p-20">veuiller me contacter</h1>
                                    </div>

                                <div className="mt-8">
                                <div className="flex justify-around">
                                    <div className="text-white bg-gray-700 p-2 hover:scale-105">
                                       <FaGithub/>
                                    </div>
                                    <div className="text-white bg-blue-500 p-2  hover:scale-105">
                                       <FaFacebook/>
                                    </div>
                                    <div className="text-white bg-blue-800 p-2  hover:scale-105">
                                       <FaLinkedin/>
                                    </div>
                                    <div className="text-white bg-red-500 p-2  hover:scale-105">
                                       <FaMailBulk/>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </div>
                              
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;