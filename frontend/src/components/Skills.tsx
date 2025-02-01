import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaNode } from "react-icons/fa";


export default function Skills() {


    return (
        <div className="flex h-full w-full flex-col items-center justify-center">
            <div>
                <h1 className="text-white mb-10">SKILLS</h1>
            </div>
            <div className="grid grid-cols-3 gap-4 justify-center md:grid-cols-6 md:justify-center">
                <div className="flex items-center justify-center text-5xl border-2 p-2 text-orange-500"><FaHtml5 /></div>
                <div className="flex items-center justify-center text-5xl border-2 p-2 text-blue-500"><FaCss3Alt /></div>
                <div className="flex items-center justify-center text-5xl border-2 p-2 text-yellow-500"><FaJs /></div>
                <div className="flex items-center justify-center text-5xl border-2 p-2 text-blue-400"><FaPhp /></div>
                <div className="flex items-center justify-center text-5xl border-2 p-2 text-orange-700"><FaLaravel /></div>
                <div className="flex items-center justify-center text-5xl border-2 p-2 text-blue-600"><FaReact /></div>
                <div className="flex items-center justify-center text-5xl border-2 p-2 text-blue-600"><SiMysql /></div>
                <div className="flex items-center justify-center text-5xl border-2 p-2 text-orange-600"><FaGitAlt /></div>
                <div className="flex items-center justify-center text-5xl border-2 p-2 text-green-600"><FaNode /></div>
            </div>
        </div>
    )
}
