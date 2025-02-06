import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import { useState } from 'react';

export default function Project() {

    const [projectInfo1, setProjectinfo1] = useState<boolean>(false)
    const [projectInfo2, setProjectinfo2] = useState<boolean>(false)
    function openProjectinfo1() {
        setProjectinfo1(true)
    }

    function openProjectinfo2() {
        setProjectinfo2(true)
    }
    return (
        <div className='mt-20 text-center'>
                <h1 className="custom text-white text-sm mb-12">Pre-Proffessional Project</h1>
        <div className="flex flex-col mb-20 justify-center items-center h-auto w-auto md:flex-row">
            <div className='p-2 w-80 bg-white rounded-lg m-2 cursor-pointer hover:shadow-lg transition duration-300 ease-in-out md:h-84'>
                <div className='flex justify-center items-center'>
                    <img className='h-52' src={project1} alt="project1" />
                </div>
                <p className='text-sm font-bold text-center p-2'>Student Faculty Portal for Masoli High School</p>
                <div className='flex justify-center items-center space-x-2'>
                    <button onClick={openProjectinfo1} className='font-bold text-sm w-40 h-12 bg-blue-500 p-1 rounded-md'>View Function</button>
                    <button className='text-sm font-bold w-40 h-12 bg-red-500 p-1 rounded-md'>View Code</button>
                </div>
            </div>

            <div className='p-2 w-80 bg-white rounded-lg m-2 cursor-pointer hover:shadow-lg transition duration-300 ease-in-out md:h-84'>
                <div className='flex justify-center items-center'>
                    <img className='h-52' src={project2} alt="project1" />
                </div>
                <p className='text-sm font-bold text-center p-2 md:p-4'>Login-Logout</p>
                <div className='flex justify-center items-center space-x-2'>
                    <button onClick={openProjectinfo2} className='font-bold text-sm w-40 h-12 bg-blue-500 p-1 rounded-md'>View Function</button>
                    <button className='font-bold text-sm w-40 h-12 bg-red-500 p-1 rounded-md'>View Code</button>
                </div>
            </div>
            {projectInfo1 ? <div className=" fixed top-0 left-0 w-full h-full  bg-black bg-opacity-50 z-50 overflow-y-auto">
                <div>
                    <div className="bg-white overflow-y-auto  w-80 h-auto m-auto mt-20 p-10 rounded-md md:w-4/5 md:h-auto">
                        <div className="flex justify-end">
                            <button onClick={() => setProjectinfo1(!true)} className="font-extrabold text-red-500 text-1xl">X</button>
                        </div>
                        <div>
                            <h1 className="text-lg text-center font-extrabold text-red-500">Student Faculty Portal</h1>
                        </div>
                        <div>
                            <ol className="text-sm text-mono list-decimal">
                                <img src={project1} alt="" />
                                <li>Implement multiple account role authentication</li>
                                <li>Online Enrollment</li>
                                <li>SMS OTP authentication </li>
                                <li>Automatic Creating account for students and will give through SMS sending a
                                    message</li>
                                <li>Requesting Document </li>
                                <li>Download the Student Classlist through PDF </li>
                                <li>Validation for enrollment </li>
                                <li>Student Grading </li>
                                <li>Student Attendance </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div> : null}


            {projectInfo2 ? <div className=" fixed top-0 left-0 w-full h-full  bg-black bg-opacity-50 z-50 overflow-y-auto">
                <div>
                    <div className="bg-white overflow-y-auto  w-80 h-auto m-auto mt-20 p-10 rounded-md md:w-4/5 md:h-auto">
                        <div className="flex justify-end">
                            <button onClick={() => setProjectinfo2(!true)} className="font-extrabold text-red-500 text-1xl">X</button>
                        </div>
                        <div>
                            <h1 className="text-lg text-center font-extrabold text-red-500">Login-logout</h1>
                        </div>
                        <div>
                            <ol className="text-sm text-mono list-decimal">
                                <img src={project2} alt="" />
                                <li>Implement the RFID scanner for students who enter the library</li>
                                <li>Taping the student ID to the RFID scanner will pop up on the monitor</li>
                                <li>Count by each student by department </li>
                                <li>Downloadable the statistics of the library for the Month and Day</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div> : null}
        </div>
        </div>
    )
}

