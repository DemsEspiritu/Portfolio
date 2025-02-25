import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import { useState } from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
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
                <div className='project p-4 w-80  rounded-lg m-2 cursor-pointer hover:shadow-lg transition duration-300 ease-in-out md:h-84'>
                    <div className='flex justify-center items-center'>
                        <img className='h-52' src={project1} alt="project1" />
                    </div>
                    <p className='text-sm font-bold text-center p-2 text-white'>Student Faculty Portal for Masoli High School</p>
                    <div className='flex justify-center items-center space-x-2'>
                        <button onClick={openProjectinfo1} className='font-bold text-sm w-40 h-12 bg-blue-500 p-1 rounded-md'>View Function</button>
                        <button className='text-sm font-bold w-40 h-12 bg-red-500 p-1 rounded-md'><a href="https://github.com/DemsEspiritu/StudenFacultyPortal">View Code</a></button>
                    </div>
                </div>

                <div className='project p-4 w-80  rounded-lg m-2 cursor-pointer hover:shadow-lg transition duration-300 ease-in-out md:h-84'>
                    <div className='flex justify-center items-center'>
                        <img className='h-52' src={project2} alt="project1" />
                    </div>
                    <p className='text-sm font-bold text-center p-2 md:p-4 text-white'>Login-Logout</p>
                    <div className='flex justify-center items-center space-x-2'>
                        <button onClick={openProjectinfo2} className='font-bold text-sm w-40 h-12 bg-blue-500 p-1 rounded-md'>View Function</button>
                        <button className='font-bold text-sm w-40 h-12 bg-red-500 p-1 rounded-md'><a href="https://github.com/DemsEspiritu/RFID-login-logout-School-Library">View Code</a></button>
                    </div>
                </div>
                {projectInfo1 ? <div className=" fixed top-0 left-0 w-full h-full  bg-black bg-opacity-50 z-50 overflow-y-auto">
                    <div>
                        <div className="bg-white overflow-y-auto  w-80 h-auto m-auto mt-20 p-10 rounded-md md:w-4/5 md:h-auto lg:mt-10">
                            <div className="flex justify-end">
                                <button onClick={() => setProjectinfo1(!true)} className="font-extrabold text-red-500 text-1xl">X</button>
                            </div>
                            <div>
                                <h1 className="text-lg text-center font-extrabold text-red-500">Student Faculty Portal</h1>
                            </div>
                            <div className='text-left mt-3'>
                                <ol className="text-sm text-mono list-decimal mt-5">
                                    <img src={project1} alt="" className='mb-2' />
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
                                <div className='bg-black w-full mt-5 flex justify-center items-center gap-2 md:gap-5'>
                                    <div className="icon flex rounded-md border-none  items-center justify-center text-1xl md:text-5xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-orange-600"><FaHtml5 /></div>
                                    <div className="icon flex rounded-md border-none  items-center justify-center text-1xl md:text-5xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-blue-500"><FaCss3Alt /></div>
                                    <div className="icon flex rounded-md border-none  items-center justify-center text-1xl md:text-5xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-yellow-500"><FaJs /></div>
                                    <div className="icon flex rounded-md border-none  items-center justify-center text-1xl md:text-5xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-blue-400"><FaPhp /></div>
                                    <div className="icon flex rounded-md border-none  items-center justify-center text-1xl md:text-5xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-orange-700"><FaLaravel /></div>
                                    <div className="icon flex rounded-md border-none  items-center justify-center text-1xl md:text-5xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-white"><SiMysql /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : null}


                {projectInfo2 ? <div className=" fixed top-0 left-0 w-full h-full  bg-black bg-opacity-50 z-50 overflow-y-auto">
                    <div>
                        <div className="bg-white overflow-y-auto  w-80 h-auto m-auto mt-20 p-10 rounded-md md:w-4/5 md:h-auto lg:mt-10">
                            <div className="flex justify-end">
                                <button onClick={() => setProjectinfo2(!true)} className="font-extrabold text-red-500 text-1xl">X</button>
                            </div>
                            <div>
                                <h1 className="text-lg text-center font-extrabold text-red-500">Login-logout</h1>
                            </div>
                            <div className='text-left mt-3'>
                                <ol className="text-sm text-mono list-decimal">
                                    <img src={project2} alt=""  className='mb-3'/>
                                    <li>Implement the RFID scanner for students who enter the library</li>
                                    <li>Taping the student ID to the RFID scanner will pop up on the monitor</li>
                                    <li>Count by each student by department </li>
                                    <li>Downloadable the statistics of the library for the Month and Day</li>
                                </ol>
                                <div className='bg-white w-full mt-5 flex justify-center items-center gap-2 md:gap-5'>
                                    <div className="icon flex rounded-md border-none  items-center justify-center text-1xl md:text-5xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-orange-600"><FaHtml5 /></div>
                                    <div className="icon flex rounded-md border-none  items-center justify-center text-1xl md:text-5xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-blue-500"><FaCss3Alt /></div>
                                    <div className="icon flex rounded-md border-none  items-center justify-center text-1xl md:text-5xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-yellow-500"><FaJs /></div>
                                    <div className="icon flex rounded-md border-none  items-center justify-center text-1xl md:text-5xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-blue-400"><FaReact /></div>
                                    <div className="icon flex rounded-md border-none  items-center justify-center text-1xl md:text-5xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-white"><SiExpress /></div>
                                    <div className="icon flex rounded-md border-none  items-center justify-center text-1xl md:text-5xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-blue-500"><SiMysql /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> : null}
            </div>
        </div>
    )
}

