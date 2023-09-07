import { FaLocationDot, FaCalendarDays } from "react-icons/fa6"
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const Modal = ({ isShow, setShowModal, member }) => {
    const modalWrapper = useRef()

    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (isShow && !modalWrapper.current.contains(e.target)) {
                setShowModal(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isShow])

    return (
        <section className={`${isShow ? "block" : "hidden"} fixed left-0 right-0 top-0 bottom-0 px-4 z-40 backdrop-blur-sm`}>
            <div
                className="relative top-1/2 -translate-y-1/2 z-50 w-full max-w-sm p-4 m-auto bg-zinc-800 rounded-lg shadow-lg border border-zinc-700"
                ref={modalWrapper}
            >
                {/* <button type="button" class="absolute -top-12 right-4 p-2 bg-zinc-700 text-gray-400 rounded-lg text-sm ml-auto inline-flex justify-center items-center">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                </button> */}
                <div className="flex flex-col items-center border-b-2 border-b-zinc-700 pb-3 mb-3">
                    <div className="w-40 aspect-square rounded-full border-4 border-zinc-700 absolute bottom-full translate-y-1/2">
                        <img className="w-full h-full rounded-full border-4 border-zinc-800 object-cover" src={member.photo} alt={member.name} />
                    </div>
                    <h5 className="mb-2 mt-20 text-2xl text-center font-semibold">{member.name}</h5>
                    <div className="text-gray-400 flex flex-col gap-1">
                        <table className="border-separate border-spacing-x-2">
                            <tbody>
                                <tr>
                                    <th>
                                        <FaCalendarDays />
                                    </th>
                                    <td>
                                        <span className=" text-base font-medium">Angkatan {member.entry_year}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>
                                        <FaLocationDot />
                                    </th>
                                    <td>
                                        <p>{member.origin}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {/* <div className="flex font-medium text-base justify-center items-center gap-2">
                            <FaCalendarDays />
                            <span className=" text-base font-medium">Angkatan 2021</span>
                        </div>
                        <div className="flex font-medium text-base justify-center items-center gap-2">
                            <FaLocationDot />
                            <p>Purbalingga</p>
                        </div> */}
                    </div>
                </div>
                <div className="text-center mb-6">
                    <p className="italic text-base mb-4">"{member.motto}"</p>

                </div>
                <div className="text-2xl text-zinc-500 flex justify-center gap-4">
                    <Link href={member.social_links.github} target="_blank">
                        <BsGithub />
                    </Link>
                    <Link href={member.social_links.instagram} target="_blank">
                        <BsInstagram />
                    </Link>
                    <Link href={member.social_links.whatsapp} target="_blank">
                        <BsWhatsapp />
                    </Link>
                    <Link href={member.social_links.linkedin} target="_blank">
                        <BsLinkedin />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Modal;