import React, { useState } from "react";
import {Link} from "react-router-dom";
//import { Link, animateScroll as scroll } from "react-scroll";
import {FaTimes, FaBars, FaGithub,FaLinkedin,FaMailBulk,FaFacebook, FaRoad} from "react-icons/fa"
window.addEventListener("scroll", function(){
    var nav = this.document.querySelector("nav")
    nav.classList.toggle("bg-slate-900", this.window.scrollY > 0)
  })

const Navbar = () => {
  
    const [visible, setVisible] = useState(false)

    const navlinks = document.querySelectorAll(".navLink")
    navlinks.forEach((navlink) =>{
        navlink.addEventListener('click',() =>{
            setVisible(false)
        })
    })
    
    return(
        <div>
            <nav className="fixed w-full text-white md:px-60">
                <div className="flex items-center justify-between md:px-4 py-4">
                    <div className="logo flex space-x-2">
                        <button className="bg-gradient-to-tr from-purple-600 to-pink-600 p-2 font-bold text-xl"><i className="fab fa-creative-commons-nd"></i> </button>
                        <h1 className="text-xl md:text-2xl font-bold">Tendry <span className="text-blue-600">Mahery</span></h1>
                    </div>
                    <div className="menu flex gap-6">
                          
                        <div onClick={()=>setVisible(!visible)} >
                            
                            <button className="bg-gradient-to-tr from-purple-600 to-pink-600 focus:border-pink-500 p-3">
                                {visible ? <FaTimes/> : <FaBars/>}
                            </button>
                        </div>
                    </div>
                 
                </div>
            </nav>
                 <section className={visible ? 'bg-gradient-to-tl from-pink-600 to-purple-600 fixed  h-screen z-30 transition  ease-in-out duration-700':'fixed left-[-100%] translate-x-[-100%]'}>
                        <div className=" flex flex-col md:mt-6 md:px-40 mt-20 p-6 sm:py-10 sm:px-20">
                            <div className="sary flex justify-center space-x-1">
                                <div className="bg-white h-10 sm:w-full flex justify-center items-center">
                                    <h1 className="text-sm font-semibold">Lets go</h1>
                                </div>
                                <div className="bg-white h-10 w-1/2 flex justify-center items-center">
                                    <FaRoad/>
                                </div>
                            </div>
                            <div className="mb-16 menu flex flex-col sm:space-y-20 space-y-6 p-4 sm:text-2xl font-bold text-white text-center">
                                <Link to="/" className="navLink hover:border-b-4 border-indigo-500 transition-all duration-100">Accuiel</Link>
                                <Link to="/competence" className="navLink  hover:border-b-4 border-indigo-500 transition-all duration-100">Competences</Link>
                                <Link to="/experience" className="navLink  hover:border-b-4 border-indigo-500 transition-all duration-100">Experiences</Link>
                                <Link to="" smooth className="navLink  hover:border-b-4 border-indigo-500 transition-all duration-100">Apropos</Link>
                            </div>
                            <div>
                                <div className="flex justify-around">
                                    <div className="text-white bg-gray-700 p-2 hover:scale-105">
                                      <a href=""><FaGithub/></a> 
                                    </div>
                                    <div className="text-white bg-blue-500 p-2  hover:scale-105">
                                      <a href=""><FaFacebook/></a> 
                                    </div>
                                    <div className="text-white bg-blue-800 p-2  hover:scale-105">
                                     <a href=""><FaLinkedin/></a>  
                                    </div>
                                    <div className="text-white bg-red-500 p-2  hover:scale-105">
                                      <a href=""><FaMailBulk/></a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>
        </div>
    )
}
export default Navbar;