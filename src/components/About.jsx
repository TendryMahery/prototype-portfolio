import React,{useRef,useEffect} from "react";
import {Link} from "react-router-dom"
//import { Link, animateScroll as scroll } from "react-scroll";
import {motion,useInView,useAnimation} from "framer-motion"
const transition = {
    hidden: {opacity:0, y:75},
    show: {
        opacity:1,
        y:0,
        transition: {
            duration:0.5 , delay:0.5
        },
    },
}
const transition2 = {
    hidden: {opacity:0, x:-75},
    show: {
        opacity:1,
        x:0,
        transition: {
            duration:0.5 , delay:0.5
        },
    },
}
const transition3 = {
    hidden: {opacity:0, x:75},
    show: {
        opacity:1,
        x:0,
        transition: {
            duration:0.5 , delay:0.5
        },
    },
}

const About = () => {
    const ref = useRef(null);
    const animation = useAnimation();
    const isView = useInView(ref , {once: true})
    useEffect(()=>{
        if(isView){
            animation.start("show")
        }
    },[isView])
    return(
        <div>
            <div id="apropos" className="bg-gray-800 min-h-screen w-full scroll-smooth ">
            <div ref={ref} className=" md:px-80 text-white">
                <motion.div variants={transition} initial="hidden" animate="show" className="titre text-center mb-8">
                    <h1 className="text-4xl font-bold border-b-2 border-pink-600 p-2">Apropos de moi</h1>
                </motion.div>
                <div className="text-4xl text-center animate-bounce">
                    <i className="fas fa-caret-down"></i>
                </div>
                <motion.div variants={transition} initial="hidden" animate="show" className="style bg-gray-100 mb-8">
                    <div className="p-8 grid sm:grid-cols-3 gap-6">
                        <Link to="/competence" className="bg-blue-500 hover:scale-105 transition text-center duration-300 shadow-2xl p-2 rounded">Competence</Link>
                        <Link to="/experience" className="bg-purple-500 hover:scale-105 transition text-center duration-300 shadow-2xl p-2 rounded">Experience</Link>
                        <a href="" to="" className="bg-pink-500 hover:scale-105 transition text-center duration-300 shadow-2xl p-2 rounded">Apropos</a>
                    </div>
                </motion.div>
                <div>
                    <div className="grid sm:grid-cols-2 gap-8">
                        <motion.div variants={transition2} initial="hidden" animate="show" className="hover:scale-105 transition duration-300">
                            <img src="../assets/profil/profil.jpeg" className="hover:scale-105 transition duration-300" alt="" />
                        </motion.div>
                        <motion.div variants={transition3} initial="hidden" animate="show"  className="description border hover:border-white bg-gradient-to-br from-pink-500 to-purple-500 transition duration-300 border-blue-500 p-2 font-sans">
                           <div className="text-center items-center">
                            <p className="pt-20 mb-4 hover:scale-105 transition duration-300">
                                Je m'appel <strong className="">RAFANOMEZANA Tendry Mahery</strong> , j'ai 24 ans et celibataire, Je suis passionné par le monde de la technologie informatique, plus precisement, developpeur informatique junior.
                                J'aime la création, donc je suis un peu au côté Font-end sur la developpement mais j'ai aussi des competences sur le Back-end.
                            </p>
                            <button className="bg-blue-500 p-2 rounded">bonne visite</button>
                           </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            </div>
           
        </div>
    )
}

export default About;
