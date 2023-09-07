"use client"

import { motion } from "framer-motion"
import Modal from "./Modal";
import { useState } from "react";

const Card = ({ member }) => {
    const [showModal, setShowModal] = useState(false)

    const handleClickDetail = () => {
        setShowModal(prevState => !prevState)
    }

    return (
        <>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.25 } }}
                onClick={handleClickDetail}
            >
                <div className="w-full bg-zinc-800 border border-zinc-700 rounded-lg p-3">
                    <div className="flex flex-col items-center">
                        <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={member.photo} alt={member.name} />
                        <h5 className="mb-1 text-xl text-center font-medium">{member.name}</h5>
                        <span className="text-sm text-gray-500">Angkatan {member.entry_year}</span>
                        <div className="flex mt-4 space-x-3 md:mt-6">
                            <button
                                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center bg-sky-900 rounded-lg  focus:ring-4 focus:outline-none"
                            >Detail</button>
                        </div>
                    </div>
                </div>
            </motion.div >
            <Modal isShow={showModal} setShowModal={setShowModal} member={member} />
        </>
    );
}

export default Card;