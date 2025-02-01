import logo from '../images/logo.png'
import contact from '../images/contact.png'

const Navbar = () => {
    
    return (
        <>
            <div className="nav fixed top-0 w-full">
                <nav className="w-full h-20 flex items-center justify-between pl-5 pr-5">
                    <div>
                        <img className='w-40' src={logo} alt="" />
                    </div>
                    <div>
                        <button className="btn-contact text-white  p-2 rounded-md"><img className='w-20' src={contact} alt="" /></button>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar