import React, {useEffect, useRef} from "react";
import {motion, useInView, useAnimation} from "framer-motion";

const transition = {
    hidden: {opacity:0, y:-75},
    show: {
        opacity:1, y:0,
        transition: {
            duration: 0.5, delay: 0.5
        },  
    },
}
const transitionChild = {
    hidden: {opacity:0, y:75},
    show: {
        opacity:1, y:0,
        transition: {
            duration: 1, delay: 1
        },  
    },
}


const Home = () => {
    const animation = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true});

    useEffect(()=>{
        if(isInView){
            animation.start("show")
        }
    },[isInView])
    return(
        <div>
            <div className="bg-gray-800 h-screen text-white p-4 relative" ref={ref}>
                <div className="pt-20 md:px-80 md:py-20 ">
                    <div className="flex justify-center">
                        <div className="text-sm pb-2">
                           <img src="../assets/profil/profil.jpeg" className="h-40 w-40 rounded-full object-cover" alt="" />
                           
                        </div>
                        
                        <div className="animate-blob h-40 w-40 rounded-full opacity-70 absolute mix-blend-luminosity filter blur-xl bg-yellow-500"></div>
                    </div>
                    <div className="relative">
                       
                        <motion.div  className="flex justify-center mb-4" 
                        initial="hidden"
                        animate={animation}
                        variants={transition}>
                            <div className="text-4xl font-extrabold text-gray-200">
                                <div className="mb-8 text-center">
                                <h1 className="text-pink-500 text-sm font-sans">My name is ...</h1> 
                                <span className="md:text-6xl sm:text-6xl text-2xl mb-8">RAFANOMEZANA</span> <br/> 
                                <span className="sm:text-6xl text-2xl"> <span className="border-b-2 border-blue-500"><span className="border-b-4 p-2 text-blue-500">Tendry</span></span>  Mahery</span> 
                                </div>
                              <div className="text-sm font-semibold border-2 border-blue-500 p-4">
                                <h1 className="sm:text-center">Im web designer / Font-end developer</h1>
                              </div>
                            </div>
                       
                        </motion.div>

                        <motion.div className="presentation flex justify-center "
                          initial="hidden"
                          animate={animation}
                          variants={transitionChild}
                        >
                            <div className="">
                            <div className="font-serif mb-2">
                                <i className="text-2xl fas fa-quote-right"></i>
                                    <div className="text-sm">
                                        Lorem ipsum dolor veritatis molestiae fugit mollitia vel perferendis voluptatibus! Sint, sed laudantium.
                                    </div>
                            </div>

                            <div className="text-center">
                                <button className="bg-gradient-to-tr from-purple-500 to-pink-500 p-6 w-full hover:scale-50 transition duration-700">Contact direct me</button>
                            </div>
                            </div>
                        </motion.div>
                    </div>    
                </div>
            </div>
        </div>
    )
}
export default Home;