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
        <section className="p-12 lg:p-24 flex-col lg:flex lg:flex-row font-ubuntu max-w-7xl mx-auto min-w-[350px]">
            <div className="xl:mr-16 xl:text-right w-16 lg:w-52 mx-auto lg:mx-0 flex-shrink-0 text-xl text-indigo-600 font-medium pb-12">SKILLS</div>
            <div className="max-w-2xl grid grid-cols-3 sm:grid-cols-5 place-items-center text-6xl text-gray-500 gap-x-12 sm:gap-x-20 gap-y-8 sm:gap-y-14 mx-auto lg:mx-0 ">
                <div className="hover:text-indigo-600 text-red-50"><FaHtml5 className="text-gray-500 hover:text-indigo-600" /><div className="text-sm text-center pt-1">HTML</div></div>
                <div className="hover:text-indigo-600 text-red-50"><FaCss3 className="text-gray-500 hover:text-indigo-600" /><div className="text-sm text-center pt-1">CSS</div></div>
                <div className="hover:text-indigo-600 text-red-50"><FaJsSquare className="text-gray-500 hover:text-indigo-600" /><div className="text-sm text-center pt-1">Javascript</div></div>
                <div className="hover:text-indigo-600 text-red-50"><FaReact className="text-gray-500 hover:text-indigo-600" /><div className="text-sm text-center pt-1">React</div></div>
                <div className="hover:text-indigo-600 text-red-50"><SiTailwindcss className="text-gray-500 hover:text-indigo-600" /><div className="text-sm text-center pt-1 ">Tailwind</div></div>
                <div className="hover:text-indigo-600 text-red-50"><FaGitAlt className="text-gray-500 hover:text-indigo-600" /><div className="text-sm text-center pt-1">Git</div></div>
                <div className="hover:text-indigo-600 text-red-50"><FaGithub className="text-gray-500 hover:text-indigo-600" /><div className="text-sm text-center pt-1">GitHub</div></div>
                <div className="hover:text-indigo-600 text-red-50"><SiVisualstudiocode className="text-gray-500 hover:text-indigo-600" /><div className="text-sm text-center pt-1 ">VS Code</div></div>
                <div className="hover:text-indigo-600 text-red-50"><SiFirebase className="text-gray-500 hover:text-indigo-600" /><div className="text-sm text-center pt-1 ">Firebase</div></div>
                <div className="hover:text-indigo-600 text-red-50 col-span-3 sm:col-span-1"><SiNextdotjs className="text-gray-500 hover:text-indigo-600" /><div className="text-sm text-center pt-1 ">Next</div></div>
            </div>

        </section>
    )
}

export default Skills;