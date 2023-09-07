"use client"

import { motion } from "framer-motion"

const Card = () => {
    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { duration: 0.25 } }}
        >
            <div className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3">
                <div className="flex flex-col items-center">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://avatars.githubusercontent.com/u/75764266?v=4" alt="Naufal Hakim" />
                    <h5 className="mb-1 text-xl text-center font-medium">Naufal Hakim</h5>
                    <span className="text-sm text-gray-500">Angkatan 2021</span>
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center bg-sky-900 rounded-lg  focus:ring-4 focus:outline-none">Detail</a>
                    </div>
                </div>
            </div>
        </motion.div >
    );
}

export default Card;