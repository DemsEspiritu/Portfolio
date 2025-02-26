import school from '../images/school.png'
import school1 from '../images/school3.png'
const Education = () => {
    return (
        <div className="flex flex-col mt-20 mb-20 justify-center items-center h-auto w-auto ">
            <h1 className='custom text-white uppercase mb-14 md:mb-20'>Education</h1>
            <div className=" flex flex-col text-white justify-between text-center gap-5 md:flex-row">
                <div className='education w-80  p-10'>
                    <div className='flex justify-center mb-2'>
                        <img src={school} className='w-40 h-40'  alt="school" />
                    </div>
                    <p className='text-sm'>2019-2024</p>
                    <p className='text-sm'>Information Technology</p>
                </div>

                <div className='education w-80 l p-10'>
                    <div className='flex justify-center mb-2'>
                        <img src={school1} className='w-40 h-40' alt="school" />
                    </div>
                    <p className='text-sm'>2017-2019</p>
                    <p className='text-sm'>General Academic Strand</p>
                </div>
            </div>
        </div>
    )
}

export default Education