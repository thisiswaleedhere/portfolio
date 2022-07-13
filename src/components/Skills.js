import {
    FaJsSquare,
    FaReact,
    FaHtml5,
    FaCss3,
    FaGitAlt,
    FaGithub,
} from "react-icons/fa";
import {
    SiFirebase,
    SiTailwindcss,
    SiVisualstudiocode,
    SiNextdotjs
} from "react-icons/si";

const Skills = () => {
    return (
        <section className="p-24 flex  font-ubuntu max-w-7xl mx-auto">
            <div className="mr-16 text-right w-52 flex-shrink-0 text-xl text-indigo-600 font-medium">SKILLS</div>
            <div className="max-w-2xl grid grid-cols-5 place-items-center text-6xl text-gray-500 gap-x-20 gap-y-14 ">
                <div className="hover:text-indigo-600 text-red-50"><FaHtml5 className="text-gray-500 hover:text-indigo-600" /><div className="text-sm text-center pt-1">HTML</div></div>
                <div className="hover:text-indigo-600 text-red-50"><FaCss3 className="text-gray-500 hover:text-indigo-600" /><div className="text-sm text-center pt-1">CSS</div></div>
                <div className="hover:text-indigo-600 text-red-50"><FaJsSquare className="text-gray-500 hover:text-indigo-600" /><div className="text-sm text-center pt-1">Javascript</div></div>
                <div className="hover:text-indigo-600 text-red-50"><FaReact className="text-gray-500 hover:text-indigo-600" /><div className="text-sm text-center pt-1">React</div></div>
                <div className="hover:text-indigo-600 text-red-50"><SiTailwindcss className="text-gray-500 hover:text-indigo-600" /><div className="text-sm text-center pt-1 ">Tailwind</div></div>
                <div className="hover:text-indigo-600 text-red-50"><FaGitAlt className="text-gray-500 hover:text-indigo-600" /><div className="text-sm text-center pt-1">Git</div></div>
                <div className="hover:text-indigo-600 text-red-50"><FaGithub className="text-gray-500 hover:text-indigo-600" /><div className="text-sm text-center pt-1">GitHub</div></div>
                <div className="hover:text-indigo-600 text-red-50"><SiVisualstudiocode className="text-gray-500 hover:text-indigo-600" /><div className="text-sm text-center pt-1 ">VS Code</div></div>
                <div className="hover:text-indigo-600 text-red-50"><SiFirebase className="text-gray-500 hover:text-indigo-600" /><div className="text-sm text-center pt-1 ">Firebase</div></div>
                <div className="hover:text-indigo-600 text-red-50"><SiNextdotjs className="text-gray-500 hover:text-indigo-600" /><div className="text-sm text-center pt-1 ">Next</div></div>
            </div>

        </section>
    )
}

export default Skills;