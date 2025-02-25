import logo from '../images/logo.png'
import contact from '../images/contact.png'
import { useState } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    const [modal, setModal] = useState<boolean>(false)

    const openModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false)
    }
    return (
        <>
            <div className="nav fixed top-0 w-full">
                <nav className="w-full z-10 h-20 flex items-center justify-between pl-5 pr-5">
                    <div>
                        <img className='w-40' src={logo} alt="" />
                    </div>
                    <div>
                        <button onClick={openModal} className="btn-contact text-white  p-2 rounded-md"><img className='w-20' src={contact} alt="" /></button>
                    </div>
                </nav>
                {modal ?
                    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
                        <div>
                            <div className="bg-white w-80 h-96 m-auto mt-20 p-10 rounded-lg md:w-4/5 md:h-3/5 lg:w-2/4">
                                <div className="flex justify-end">
                                    <button onClick={closeModal} className="text-red-500 text-3xl">X</button>
                                </div>
                                <div>
                                    <h1 className="text-3xl">Modal</h1>
                                </div>
                                <div>
                                    <div className="flex flex-col gap-5 rounded-md justify-center items-center md:flex-row">
                                        <div className="w-56 p-5 rounded-lg flex flex-col justify-center items-center bg-black">
                                            <div className="text-blue-700 text-6xl text-center m-2"><FaFacebook className="bg-white rounded-full border-black" /></div>
                                            <div><p className="text-white">Facebook</p></div>
                                            <span className="text-white text-sm">@demsespiritu</span>
                                            <button className="bg-blue-400 pl-5 pr-5 pt-2 pb-2 m-5 rounded-md font-bold cursor-pointer"><a href="https://www.facebook.com/demet.espiritu.56/">Follow</a></button>
                                        </div>
                                        <div className="w-56 p-5 rounded-lg flex flex-col justify-center items-center bg-black">
                                            <div className="text-white text-6xl text-center m-2"><FaGithub className="bg-black rounded-full border-black" /></div>
                                            <div><p className="text-white">GitHub</p></div>
                                            <span className="text-white text-sm">@DemsEspiritu</span>
                                            <button className="bg-blue-400 pl-5 pr-5 pt-2 pb-2 m-5 rounded-md font-bold cursor-pointer"><a href="https://github.com/DemsEspiritu">Visit</a></button>
                                        </div>
                                        <div className="w-56 p-5 rounded-lg flex flex-col justify-center items-center bg-black">
                                            <div className="text-blue-700 text-6xl text-center m-2"><FaLinkedin className="l border-black" /></div>
                                            <div><p className="text-white">Linkedin</p></div>
                                            <span className="text-white text-sm">@demet-espiritu</span>
                                            <button className="bg-blue-400 pl-5 pr-5 pt-2 pb-2 m-5 rounded-md font-bold cursor-pointer"><a href="https://www.linkedin.com/in/demet-espiritu-007032331/">Visit</a></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : null}
            </div>
        </>
    )
}

export default Navbar