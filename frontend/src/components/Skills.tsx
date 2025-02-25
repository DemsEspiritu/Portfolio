import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
export default function Skills() {



    return (
        <div className="flex h-full w-full flex-col items-center justify-center gap-10  md:justify-center md:items-center md:p-3 md:gap-20 ">
            <div>
                <h1 className="custom text-white ">SKILLS</h1>
            </div>
            <div className="grid grid-cols-3 gap-4 justify-center md:grid md:justify-center lg:flex lg:flex-wrap lg:gap-10 lg:w-3/4">
                <div className="icon flex rounded-md border-none  items-center justify-center text-5xl md:text-8xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-orange-600"><FaHtml5/></div>
                <div className="icon flex rounded-md border-none  items-center justify-center text-5xl md:text-8xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-blue-500"><FaCss3Alt /></div>
                <div className="icon flex rounded-md border-none  items-center justify-center text-5xl md:text-8xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-yellow-500"><FaJs /></div>
                <div className="icon flex rounded-md border-none  items-center justify-center text-5xl md:text-8xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-blue-400"><FaPhp /></div>
                <div className="icon flex rounded-md border-none  items-center justify-center text-5xl md:text-8xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-orange-700"><FaLaravel /></div>
                <div className="icon flex rounded-md border-none  items-center justify-center text-5xl md:text-8xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-blue-600"><FaReact /></div>
                <div className="icon flex rounded-md border-none  items-center justify-center text-5xl md:text-8xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-blue-600"><SiMysql /></div>
                <div className="icon flex rounded-md border-none  items-center justify-center text-5xl md:text-8xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-orange-600"><FaGitAlt /></div>
                <div className="icon flex rounded-md border-none  items-center justify-center text-5xl md:text-8xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-green-600"><FaNode /></div>
                <div className="icon flex rounded-md border-none  items-center justify-center text-5xl md:text-8xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-blue-600"><BiLogoTypescript /></div>
                <div className="icon flex rounded-md border-none  items-center justify-center text-5xl md:text-8xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-green-500"><DiMongodb /></div>
                <div className="icon flex rounded-md border-none  items-center justify-center text-5xl md:text-8xl lg:text-6xl border-2 cursor-pointer p-2 hover:bg-white text-white"><SiExpress /></div>
            </div>
        </div>
    )
}
