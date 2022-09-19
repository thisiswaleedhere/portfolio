import {
    FaJsSquare,
    FaReact,
    FaHtml5,
    FaCss3,
    FaGitAlt,
    FaGithub,
    FaNodeJs,
} from "react-icons/fa";
import {
    SiFirebase,
    SiTailwindcss,
    SiVisualstudiocode,
    SiNextdotjs,
    SiMongodb,
    SiExpress
} from "react-icons/si";

import { AnimationOnScroll } from "react-animation-on-scroll";

const Skills = () => {
    return (
        <section className="relative p-16 lg:p-44 font-ubuntu max-w-7xl mx-auto min-w-[350px] z-10">

            <div className="flex-col xl:flex xl:flex-row">
                <div className="xl:mr-16 xl:text-right w-52 text-center mx-auto xl:mx-0 flex-shrink-0 text-3xl font-caveat text-green-300 font-medium pb-12">I Currently Use</div>
                <div className="max-w-2xl grid grid-cols-3 sm:grid-cols-5 place-items-center text-6xl text-gray-500 gap-x-12 sm:gap-x-20 gap-y-8 sm:gap-y-14 mx-auto xl:mx-0 ">
                    <AnimationOnScroll animateIn="animate-fade-in-left"> <div className="hover:text-green-300 text-gray-300"><FaHtml5 className="text-gray-500 hover:text-green-300" /><div className="text-sm text-center pt-1">HTML</div></div> </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate-fade-in-left"> <div className="hover:text-green-300 text-gray-300"><FaCss3 className="text-gray-500 hover:text-green-300" /><div className="text-sm text-center pt-1">CSS</div></div> </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate-fade-in-left"> <div className="hover:text-green-300 text-gray-300"><FaJsSquare className="text-gray-500 hover:text-green-300" /><div className="text-sm text-center pt-1">Javascript</div></div> </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate-fade-in-left"> <div className="hover:text-green-300 text-gray-300"><FaReact className="text-gray-500 hover:text-green-300" /><div className="text-sm text-center pt-1">React</div></div> </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate-fade-in-left"> <div className="hover:text-green-300 text-gray-300"><SiTailwindcss className="text-gray-500 hover:text-green-300" /><div className="text-sm text-center pt-1 ">Tailwind</div></div> </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate-fade-in-left"> <div className="hover:text-green-300 text-gray-300"><FaGitAlt className="text-gray-500 hover:text-green-300" /><div className="text-sm text-center pt-1">Git</div></div> </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate-fade-in-left"> <div className="hover:text-green-300 text-gray-300"><FaGithub className="text-gray-500 hover:text-green-300" /><div className="text-sm text-center pt-1">GitHub</div></div> </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate-fade-in-left"> <div className="hover:text-green-300 text-gray-300"><SiVisualstudiocode className="text-gray-500 hover:text-green-300" /><div className="text-sm text-center pt-1 ">VS Code</div></div> </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate-fade-in-left"> <div className="hover:text-green-300 text-gray-300"><SiFirebase className="text-gray-500 hover:text-green-300" /><div className="text-sm text-center pt-1 ">Firebase</div></div> </AnimationOnScroll>
                    <div className="hover:text-green-300 text-gray-300 col-span-3 sm:col-span-1"> <AnimationOnScroll animateIn="animate-fade-in-left"><SiNextdotjs className="text-gray-500 hover:text-green-300" /><div className="text-sm text-center pt-1 ">Next</div></AnimationOnScroll></div>
                </div>
            </div>

            <div className="pt-24 flex-col xl:flex xl:flex-row">
                <div className="xl:mr-16 xl:text-right w-52 text-center mx-auto xl:mx-0 flex-shrink-0 text-3xl font-caveat text-green-300 font-medium pb-12">And I'm Learning</div>
                <div className="xl:max-w-2xl grid grid-cols-3 xl:grid-cols-5 sm:max-w-lg place-items-center text-6xl text-gray-500 gap-x-12 sm:gap-x-20 gap-y-8 sm:gap-y-14 mx-auto xl:mx-0 ">
                    <AnimationOnScroll animateIn="animate-fade-in-left"><div className="hover:text-green-300 text-gray-300"><SiMongodb className="text-gray-500 hover:text-green-300" /><div className="text-sm text-center pt-1">MongoDB</div></div></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate-fade-in-left"><div className="hover:text-green-300 text-gray-300"><FaNodeJs className="text-gray-500 hover:text-green-300" /><div className="text-sm text-center pt-1">NodeJS</div></div></AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate-fade-in-left"><div className="hover:text-green-300 text-gray-300"><SiExpress className="text-gray-500 hover:text-green-300" /><div className="text-sm text-center pt-1">ExpressJS</div></div></AnimationOnScroll>
                </div>
            </div>


        </section>
    )
}

export default Skills;