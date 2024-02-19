import { MdArrowRightAlt } from "react-icons/md";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useEffect, useRef } from "react";

const Projects = ({ scroll, setScroll }) => {

    const projectDetails = [{
        title: "WatchMe",
        description: "A movie watchlist app with CRUD functionality with its data stored in Firestore. The app has Firebase authentication and gets its data from the TMDB API.",
        tags: ["React", "Tailwind", "Javascript", "React router", "Firebase", "Firestore", "TMDB API"],
        github: "https://github.com/thisiswaleedhere/movie-watchlist",
        website: "https://watchme-moviewatchlist.netlify.app/"
    },
    {
        title: "Day Out Companion",
        description: "An app to plan your outing anywhere in the world that helps you find the best hotels, restaurants and attractions and display it on a map for easy viewing.",
        tags: ["React", "Tailwind", "Javascript", "Pigeon Maps", "Travel Advisor API", "Axios"],
        github: "https://github.com/thisiswaleedhere/day-out-companion",
        website: "https://day-out-companion.vercel.app/"
    },
    {
        title: "Booksta",
        description: "An e-commerce website for books that uses state management using a combination of useReducer hook and Context API.",
        tags: ["React", "Tailwind", "Javascript", "React router", "useReducer", "Context API"],
        github: "https://github.com/thisiswaleedhere/Booksta-book-selling-site",
        website: "https://booksta.netlify.app/"
    }]

    const projects = useRef(null);

    useEffect(() => {
        if (scroll === 1 && projects.current) {
            projects.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setTimeout(() => { setScroll(0) }, 2000);
        }
        else if (scroll === 0) return;
    }, [scroll]);



    return (
        <section className="relative p-12 pt-16 lg:p-24 flex-col xl:flex xl:flex-row justify-center font-ubuntu max-w-7xl mx-auto min-w-[350px] z-10" ref={projects}>
            <div className="xl:mr-16 xl:text-right w-24 lg:w-52 text-center mx-auto xl:mx-0 flex-shrink-0 text-3xl text-green-300 font-caveat font-medium pb-16">I've Built</div>

            <div className="max-w-2xl md:mx-auto xl:m-0">
                {projectDetails.map((project, i) => {
                    const codeurl = `${project.github}`;
                    const siteurl = `${project.website}`;
                    return (
                        <AnimationOnScroll animateOnce animateIn="animate-fade-in-left">
                            <div className="mb-16 border-l-2 border-indigo-400 pl-2 sm:border-0" key={i}>

                                <div className="pb-6 sm:pb-4 font-medium flex flex-col sm:flex-row justify-between">
                                    <div className="text-lg text-gray-300">{project.title}</div>
                                    <div className="flex text-xs space-x-4 font-normal pt-2 text-green-700 cursor-pointer sm:pr-12">
                                        <div className=" transition ease-in-out hover:scale-110 hover:underline"><a href={codeurl} target="_blank" rel="noreferrer"> View the Code </a> </div>
                                        <div className="flex hover:underline text-yellow-500 animate-pulse transition ease-in-out hover:scale-110 hover:animate-none"> <a href={siteurl} target="_blank" rel="noreferrer"> Visit the Live Website </a> <MdArrowRightAlt className="pl-1 text-base" /></div>
                                    </div>
                                </div>

                                <div className="pb-6 font-light text-sm sm:text-base text-gray-300">{project.description}</div>
                                <div className="sm:pb-4 text-xs font-medium text-gray-300 flex flex-wrap">{project.tags.map((tag, i) => { return (<div key={i} className="px-1.5 py-0.5 mr-2 mb-2 border-2 rounded-md text-gray-400 border-green-300">{tag}</div>) })}</div>

                            </div>
                        </AnimationOnScroll>
                    )
                })}

            </div>

        </section >
    )
}

export default Projects;