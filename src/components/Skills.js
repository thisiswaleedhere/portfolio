import {
    FaJsSquare,
    FaReact,
    FaHtml5,
    FaCss3,
    FaGitAlt,
    FaGithub,
    FaNodeJs,
    FaLaravel,
    FaVuejs
} from "react-icons/fa";
import {
    SiFirebase,
    SiTailwindcss,
    SiVisualstudiocode,
    SiNextdotjs,
    SiRedux,
    SiTypescript
} from "react-icons/si";

import { createElement, useEffect, useRef } from "react";

import { AnimationOnScroll } from "react-animation-on-scroll";


const icons = [
    { name: 'HTML', icon: FaHtml5 }, { name: 'CSS', icon: FaCss3 }, { name: 'Javascript', icon: FaJsSquare }, { name: 'React', icon: FaReact },
    { name: 'Tailwind', icon: SiTailwindcss }, { name: 'GIT', icon: FaGitAlt }, { name: 'Github', icon: FaGithub }, { name: 'VS Code', icon: SiVisualstudiocode },
    { name: 'Firebase', icon: SiFirebase }, { name: 'Next Js', icon: SiNextdotjs }, { name: 'Redux', icon: SiRedux }, { name: 'TypeScript', icon: SiTypescript },
    { name: 'Node Js', icon: FaNodeJs }, { name: 'Vue Js', icon: FaVuejs }, { name: 'Laravel', icon: FaLaravel }
];

const Skills = ({ scroll, setScroll }) => {

    const expertise = useRef(null);

    useEffect(() => {
        if (scroll === 2 && expertise.current) {
            expertise.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => { setScroll(0) }, 2000);
        }
        else if (scroll === 0) return;
    }, [scroll]);

    return (
        <section className="relative p-16 lg:p-44 font-ubuntu max-w-7xl mx-auto min-w-[350px] z-10" ref={expertise}>

            <div className="flex-col xl:flex xl:flex-row">
                <div className="xl:mr-16 xl:text-right w-52 text-center mx-auto xl:mx-0 flex-shrink-0 text-3xl font-caveat text-green-300 font-medium pb-12">I Work Using</div>
                <div className="max-w-2xl grid grid-cols-3 sm:grid-cols-5 place-items-center text-6xl text-gray-500 gap-x-12 sm:gap-x-20 gap-y-8 sm:gap-y-14 mx-auto xl:mx-0 ">

                    {icons.map((each) => (
                        <AnimationOnScroll key={each.name} animateOnce animateIn="animate-fade-in-left">
                            <div className="hover:text-green-300 text-gray-400">
                                {createElement(each.icon)}
                                <div className="text-sm text-center pt-1">{each.name}</div>
                            </div>
                        </AnimationOnScroll>))}

                </div>
            </div>

        </section>
    )
}

export default Skills;