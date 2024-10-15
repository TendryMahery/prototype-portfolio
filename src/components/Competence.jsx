import React from "react";
import {motion, useScroll} from "framer-motion"
const containerVariante = {
        hidden: {opacity:0},
        show: {
            opacity:1,
            transition: {
                staggerChildren: 0.5
            },
        },
}
    
const childVariante = {
    hidden:{opacity:0}, show:{opacity:1}
}
const Skill = () =>{
    
    return(
        <div>
            <div className="bg-gray-800 min-h-screen w-full pt-20">
               <div className="text-white container">
                    <div className="titre font-semibold mb-10">
                        <button className="bg-white px-8 py-2 text-gray-800 rounded-2xl"><i className="fas fa-graduation-cap"></i> My studies</button>
                    </div>

                    <div className="mb-10 p-10 education lycee border-2 border-blue-500 grid sm:grid-cols-2 gap-20">
                        <div className="">
                            <div className="sm:text-4xl font-bold">
                                <div className="text-blue-500 mb-10">
                                    <i className="fas fa-school"></i> 
                                </div>
                                <h1 className="sm:mb-10">Lycée Technique d'Alarobia</h1> 
                                <h1>Institut Superieur Polytechnique de Madagascar</h1> 
                            </div>
                        </div>
                        <div className="border-l-2 border-l-blue-500 p-4">
                        <div className="sm:mb-10">
                           <h1 className="sm:text-4xl mb-2">2014-2016</h1>
                           <p>-Diplome de brevet d'etude professionnel en telecommunication</p>
                           <p>-Diplome de bacc laureat technique industriel specialité Electronique</p> 
                        </div>
                        <div>
                        <h1 className="sm:text-4xl mb-2">2018-2023</h1>
                           <p>-Diplome de Licence en informatique et telecommunication <strong>Parcours Electronique Systeme Informatique et Intelligence Artificielle</strong> </p>
                           <p>-Diplome de master II en informatique et telecommunication <strong>Parcours Electronique Systeme Informatique et Intelligence Artificielle</strong> </p> 
                        </div>
                        </div>
                    </div>

                    <div className="competence">
                        <div className="titre font-semibold sm:mb-10 mb-4">
                            <button className="bg-white px-8 py-2 text-gray-800 rounded-2xl"><i className="fas fa-graduation-cap"></i> My competences</button>
                        </div>
                        <div className="">
                             <div className="mb-4 text-center">
                                <h1 className="sm:text-2xl font-semibold">Competence langage</h1>
                                <div className="text-2xl">_</div>
                             </div>
                             <div className="bg-gray-700 p-8">
                             <div class="overflow-x-auto shadow-md sm:rounded-lg">

                                <div className="list langage mb-8">
                                    <div>
                                        <div>
                                            <a href="#" class="text-gray-800 text-center font-bold sm:text-xl group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                                                Langages de programmations  
                                            </a>
                                        </div>
                                        <motion.section variants={containerVariante}
                                        initial="hidden"
                                        animate="show" 
                                        className="sm:ml-20 sm:grid sm:grid-cols-2 md:grid-cols-4 gap-8 space-y-4">
                                            <motion.div variants={childVariante} className="mt-4">
                                                <img src="../assets/logo/html.png" className="object-cover hover:scale-105 transition-all duration-300 hover:border-none sm:h-40 sm:w-40 border-4 border-blue-500" alt=""/>
                                                <div className="">
                                                    <h1>HTML</h1>
                                                </div>
                                            </motion.div>
                                            <motion.div variants={childVariante} >
                                                <img src="../assets/logo/css.png" className="object-cover hover:scale-105 transition-all duration-300 hover:border-none sm:h-40 sm:w-40 border-4 border-blue-500" alt=""/>
                                                <div className="">
                                                    <h1>CSS</h1>
                                                </div>
                                            </motion.div >
                                            <motion.div variants={childVariante} >
                                                <img src="../assets/logo/js.png" className="object-cover hover:scale-105 transition-all duration-300 hover:border-none sm:h-40 sm:w-40 border-4 border-blue-500" alt=""/>
                                                <div className="">
                                                    <h1>JAVASCRIPT</h1>
                                                </div>
                                            </motion.div>
                                            <motion.div variants={childVariante} >
                                                <img src="../assets/logo/python.jpeg" className="object-cover hover:scale-105 transition-all duration-300 hover:border-none sm:h-40 sm:w-40 border-4 border-blue-500" alt=""/>
                                                <div className="">
                                                    <h1>PYTHON</h1>
                                                </div>
                                            </motion.div>
                                            <motion.div variants={childVariante} >
                                                <img src="../assets/logo/mysql.jpeg" className="object-cover hover:scale-105 transition-all duration-300 hover:border-none sm:h-40 sm:w-40 border-4 border-blue-500" alt=""/>
                                                <div className="">
                                                    <h1>MYSQL</h1>
                                                </div>
                                            </motion.div>
                                            <motion.div variants={childVariante} >
                                                <img src="../assets/logo/php.jpeg" className="object-cover hover:scale-105 transition-all duration-300 hover:border-none sm:h-40 sm:w-40 border-4 border-blue-500" alt=""/>
                                                <div className="">
                                                    <h1>php</h1>
                                                </div>
                                            </motion.div>
                                            <motion.div variants={childVariante} >
                                                <img src="../assets/logo/java.jpeg" className="object-cover hover:scale-105 transition-all duration-300 hover:border-none sm:h-40 sm:w-40 border-4 border-blue-500" alt=""/>
                                                <div className="">
                                                    <h1>JAVA</h1>
                                                </div>
                                            </motion.div>
                                            <motion.div variants={childVariante} >
                                                <img src="../assets/logo/node.png" className="object-cover hover:scale-105 transition-all duration-300 hover:border-none sm:h-40 sm:w-40 border-4 border-blue-500" alt=""/>
                                                <div className="">
                                                    <h1>node</h1>
                                                </div>
                                            </motion.div>
                                        </motion.section>
                                    </div>

                                </div>
                    </div>
                    <div className="min-h-screen bg-gray-800">
                                <div className="">
                                    <div class="p-5 flex justify-around text-lg font-semibold text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                                        <a href="#"  class="text-white text-center text-sm font-bold sm:text-xl group block max-w-xs rounded-lg p-2 sm:p-6 bg-blue-500 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                                            Tech
                                        </a>
                                        <a href="#" class="text-gray-800 text-center text-sm font-bold sm:text-xl group block max-w-xs rounded-lg p-2 sm:p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                                            Web
                                        </a>
                                        
                                    </div>
                                    <div className="p-4">
                                            <a href="#" class="text-whitetext-center font-bold sm:text-xl group block max-w-xs mx-auto rounded-lg p-6 bg-gradient-to-b from-pink-500 to-purple-600 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                                              <div className="text-xl">

                                              <i className="fas fa-vote-yea"></i>  Technologies web 
                                              </div>
                                            </a>
                                    </div>
                                </div>
                                <div className="sm:grid grid-cols-2 sm:ml-20 md:grid-cols-4 gap-8 items-center space-y-6 p-8">
                                    <div className="mt-5">
                                        <img src="../assets/logo/laravel.jpeg" className="border-4 border-yellow-500 hover:scale-150 transition-all duration-300 hover:border-blue-500 object-cover h-40 w-40  sm:h-40 sm:w-40" alt=""/>
                                        <h1 className="bg-gradient-to-r from-gray-200 to-gray-600 sm:w-40 text-black text-center">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </h1>
                                    </div>
                                    <div>
                                        <img src="../assets/logo/bootstrap.jpeg" className="border-4 border-yellow-500 hover:scale-150 transition-all duration-300 hover:border-blue-500 object-cover h-40 w-40 sm:h-40 sm:w-40" alt=""/>
                                        <h1 className="bg-gradient-to-r from-gray-200 to-gray-600 sm:w-40 text-black text-center">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </h1>
                                    </div>
                                    <div>
                                        <img src="../assets/logo/tailwind.jpeg" className="border-4 border-yellow-500 hover:scale-150 transition-all duration-300 hover:border-blue-500 object-cover h-40 w-40 sm:h-40 sm:w-40" alt=""/>
                                        <h1 className="bg-gradient-to-r from-gray-200 to-gray-600 sm:w-40 text-black text-center">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </h1>
                                    </div>
                                    <div>
                                        <img src="../assets/logo/react.png" className="border-4 border-yellow-500 hover:scale-150 transition-all duration-300 hover:border-blue-500 object-cover h-40 w-40 sm:h-40 sm:w-40" alt=""/>
                                        <h1 className="bg-gradient-to-r from-gray-200 to-gray-600 sm:w-40 text-black text-center">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </h1>
                                    </div>
                                    <div>
                                        <img src="../assets/logo/django.png" className="border-4 border-yellow-500 hover:scale-150 transition-all duration-300 hover:border-blue-500 object-cover h-40 w-40 sm:h-40 sm:w-40" alt=""/>
                                        <h1 className="bg-gradient-to-r from-gray-200 to-gray-600 sm:w-40 text-black text-center">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </h1>
                                    </div>
                                    <div>
                                        <img src="../assets/logo/vue.jpeg" className="border-4 border-yellow-500 hover:scale-150 transition-all duration-300 hover:border-blue-500 object-cover h-40 w-40 sm:h-40 sm:w-40" alt=""/>
                                        <h1 className="bg-gradient-to-r from-gray-200 to-gray-600 sm:w-40 text-black text-center">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </h1>
                                    </div>
                                    <div>
                                        <img src="../assets/logo/symfony.jpeg" className="border-4 border-yellow-500 hover:scale-150 transition-all duration-300 hover:border-blue-500 object-cover h-40 w-40 sm:h-40 sm:w-40" alt=""/>
                                        <h1 className="bg-gradient-to-r from-gray-200 to-gray-600 sm:w-40 text-black text-center">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </h1>
                                    </div>
                                    <div>
                                        <img src="../assets/logo/nest.png" className="border-4 border-yellow-500 hover:scale-150 transition-all duration-300 hover:border-blue-500 object-cover h-40 w-40 sm:h-40 sm:w-40" alt=""/>
                                        <h1 className="bg-gradient-to-r from-gray-200 to-gray-600 sm:w-40 text-black text-center">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </h1>
                                    </div>
                                 
                                </div>
                                <div className="p-4">
                                            <a href="#" class="text-whitetext-center font-bold sm:text-xl group block max-w-xs mx-auto rounded-lg p-6 bg-gradient-to-b from-pink-500 to-purple-600 ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                                              <div className="text-xl">

                                                <i className="fas fa-vote-yea"></i>  autres
                                              </div>
                                            </a>
                                </div>

                                <div>
                                    <div className="md:grid md:grid-cols-4 sm:ml-20 gap-8 items-center space-y-6 p-8">
                                    <div>
                                        <img src="../assets/logo/git.png" className="border-4 border-yellow-500 hover:scale-150 transition-all duration-300 hover:border-blue-500 object-cover h-40 w-40 sm:h-40 sm:w-40" alt=""/>
                                        <div>
                                            Git
                                        </div>
                                    </div>
                                    <div>
                                        <img src="../assets/logo/xd.jpeg" className="border-4 border-yellow-500 hover:scale-150 transition-all duration-300 hover:border-blue-500 object-cover h-40 w-40 sm:h-40 sm:w-40" alt=""/>
                                        <div>
                                            Adobe Xd
                                        </div>
                                    </div>
                                    <div>
                                        <img src="../assets/logo/ps.jpeg" className="border-4 border-yellow-500 hover:scale-150 transition-all duration-300 hover:border-blue-500 object-cover h-40 w-40 sm:h-40 sm:w-40" alt=""/>
                                        <div>
                                            Adobe photoshop
                                        </div>
                                    </div>
                                    <div>
                                        <img src="../assets/logo/merise.jpeg" className="border-4 border-yellow-500 hover:scale-150 transition-all duration-300 hover:border-blue-500 object-cover h-40 w-40 sm:h-40 sm:w-40" alt=""/>
                                        <div>
                                            Merise
                                        </div>
                                    </div>
                                    </div>
                                </div>

                            </div>

                                </div>
                             </div>
                        
                    </div>
               </div>
            </div>
        </div>

    )
}
export default Skill;