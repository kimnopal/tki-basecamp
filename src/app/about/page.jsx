"use client"

import { motion } from "framer-motion"

const About = () => {
    return (
        <section className="h-screen pt-20">
            <motion.h2
                className="text-2xl font-semibold mb-4"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 0.25 } }}
            >
                About
            </motion.h2>
            <motion.p
                className="indent-8 text-justify"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.25 } }}
            >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti repellat nostrum deserunt mollitia beatae, dicta, ad sequi vel odio iste dignissimos modi neque eligendi culpa eaque quibusdam fuga amet reprehenderit eum provident excepturi quod! Cum vitae, soluta tempora pariatur fuga voluptates necessitatibus tempore repellendus inventore ipsum eveniet consequuntur dicta optio nam odit adipisci natus excepturi enim. Pariatur qui, ullam obcaecati sed non consequuntur nam odit exercitationem velit sapiente mollitia a eos, aperiam nisi error dolorem facilis saepe. Sapiente, quam vitae enim odit laborum culpa necessitatibus dolorem impedit deserunt commodi. Architecto modi quidem incidunt sit et adipisci accusamus id laudantium aspernatur.
            </motion.p>
        </section>
    );
}

export default About;