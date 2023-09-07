"use client"

import Link from "next/link";
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const variants = {
    open: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.25,
            delayChildren: 0.25,
            staggerChildren: 0.2,
            staggerDirection: 1,
        },
    },
    closed: {
        opacity: 0,
        x: "100%",
        transition: {
            duration: 0.25,
        },
    },
}

const linkVariants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
}

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const navLinksWrapper = useRef(null)

    const handleClickMenu = () => {
        setShowMenu(prevState => !prevState)
    }

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (showMenu && !navLinksWrapper.current.contains(e.target)) {
                setShowMenu(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [showMenu])

    return (
        <header className="fixed left-0 right-0 top-0">
            <nav className="max-w-4xl px-4 py-4 m-auto flex justify-between items-center">
                <Link href={"/"} className="text-2xl font-semibold md:text-3xl">TKI</Link>
                <button onClick={handleClickMenu} className="text-3xl md:hidden"><FiMenu /></button>
                <motion.div
                    animate={showMenu ? "open" : "closed"}
                    variants={variants}
                    initial={false}
                    ref={navLinksWrapper}
                    className="flex flex-col space-y-8 px-6 pt-4 w-4/5 h-screen absolute top-0 right-0 z-30 bg-zinc-800 md:static md:!translate-x-0 md:!opacity-100 md:w-fit md:h-full md:bg-transparent md:space-y-0 md:p-0 md:flex-row md:gap-10"
                >
                    <button onClick={handleClickMenu} className="text-3xl md:hidden"><FiX /></button>
                    <motion.div
                        variants={linkVariants}
                        className="md:!translate-x-0 md:!opacity-100"
                    >
                        <Link href={"/"} className="text-lg font-normal" onClick={handleClickMenu}>Home</Link>
                    </motion.div>
                    <motion.div
                        variants={linkVariants}
                        className="md:!translate-x-0 md:!opacity-100"
                    >
                        <Link href={"/about"} className="text-lg font-normal" onClick={handleClickMenu}>About</Link>
                    </motion.div>
                    <motion.div
                        variants={linkVariants}
                        className="md:!translate-x-0 md:!opacity-100"
                    >
                        <Link href={"/member"} className="text-lg font-normal" onClick={handleClickMenu}>Member</Link>
                    </motion.div>
                </motion.div>
            </nav>
        </header>
    );
}

export default Navbar;