import logo from '../images/logo.png'
import contact from '../images/contact.png'
import { useState } from 'react';
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
                {modal ? <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50">
                    <div>
                        <div className="bg-white w-80 h-96 m-auto mt-20 p-10 rounded-md md:w-4/5 md:h-3/5">
                            <div className="flex justify-end">
                                <button onClick={closeModal} className="text-red-500 text-3xl">X</button>
                            </div>
                            <div>
                                <h1 className="text-3xl">Modal</h1>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.</p>
                            </div>
                        </div>
                    </div>
                </div> : null}
            </div>
        </>
    )
}

export default Navbar