import { TypeAnimation } from 'react-type-animation';
import pic from '../images/pic.jpg'
import download from '../images/download.png'


const Profile = () => {

    return (
        <>
            <div id='element' className='custom flex justify-center mt-16  -z-10 '>
                <div className='flex flex-col items-center justify-between w-full mt-14'>
                    <div className='text-center p-2 mb-3 lg:text-center lg:w-96 '>
                        <p className='mb-3 font-bold text-1xl text-violet-500 lg:text-4xl'>Hello!</p>
                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                "Im Demet Espiritu",
                                2000, // wait 1s before replacing "Mice" with "Hamsters"
                                "Im Junior Developer",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '30pxl', display: 'inline-block', fontWeight: 'bold', color: 'white' }}
                            repeat={Infinity}
                        />
                        <p className='text-white text-xs mt-2 lg:text-lg'>As a recent graduate, I am eager to build a long-term career in web development.</p>
                        <br />
                        <button className='rounded-md p-2 bg-violet-500 w-36'><img src={download} alt="" /></button>
                    </div>
                    <div className='pic'>
                        <img src={pic} className='profile rounded-xl w-72 h-72 lg:w-80 lg:h-80' alt="picture" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile