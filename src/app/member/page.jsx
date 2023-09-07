"use client"

import Card from "../components/Card";
import { motion } from "framer-motion"

const Member = () => {
    return (
        <section className="h-screen pt-20">
            <motion.h2
                className="text-2xl font-semibold mb-4"
                animate={{ x: 0, opacity: 1, transition: { duration: 0.25 } }} initial={{ x: -100, opacity: 0 }}
            >
                Member
            </motion.h2>
            <motion.div
                className="grid grid-cols-[repeat(auto-fit,minmax(200px,_1fr))] gap-4 md:grid-cols-4"
            >
                <Card />
                <Card />
                <Card />
                <Card />
            </motion.div>
        </section>
    );
}

export default Member;