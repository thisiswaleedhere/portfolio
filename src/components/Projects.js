import { MdArrowRightAlt } from "react-icons/md";

const Projects = () => {

    const projectDetails = [{
        title: "WatchMe",
        description: "A movie watchlist app with CRUD functionality with its data stored in Firestore. The app has Firebase authentication and gets its data from the TMDB API.",
        tags: ["React", "Tailwind", "Javascript", "React router", "Firebase", "Firestore", "TMDB API"]
    },
    {
        title: "Day Out Companion",
        description: "An app to plan your outing anywhere in the world that helps you find the best hotels, restaurants and attractions and display it on a map for easy viewing.",
        tags: ["React", "Tailwind", "Javascript", "Pigeon Maps", "Travel Advisor API", "Axios"]
    },
    {
        title: "Booksta",
        description: "An e-commerce website for books that uses state management using a combination of useReducer hook and Context API.",
        tags: ["React", "Tailwind", "Javascript", "React router", "useReducer", "Context API"]
    }]


    return (
        <section className="p-12 lg:p-24 flex-col lg:flex lg:flex-row font-ubuntu max-w-7xl mx-auto min-w-[350px]">
            <div className="xl:mr-16 xl:text-right w-24 lg:w-52 mx-auto lg:mx-0 flex-shrink-0 text-xl text-indigo-600 font-medium pb-16">PROJECTS</div>
            <div className="max-w-2xl md:mx-auto xl:m-0">
                {projectDetails.map((project, i) => {
                    return (
                        <div className="mb-16 border-l-2 border-indigo-400 pl-2 sm:border-0" key={i}>

                            <div className="pb-6 sm:pb-4 font-medium flex flex-col sm:flex-row justify-between">
                                <div className="text-lg text-gray-700">{project.title}</div>
                                <div className="flex text-xs space-x-4 font-normal pt-2 text-indigo-500 cursor-pointer sm:pr-12">
                                    <div className="hover:underline">View the Code</div>
                                    <div className="flex hover:underline text-pink-500 animate-pulse hover:animate-none">Visit the Live Website <MdArrowRightAlt className="pl-1 text-base" /></div>
                                </div>
                            </div>

                            <div className="pb-6 font-light text-sm sm:text-base text-gray-700">{project.description}</div>
                            <div className="sm:pb-4 text-xs font-medium text-gray-700 flex flex-wrap">{project.tags.map((tag, i) => { return (<div key={i} className="px-1.5 py-0.5 mr-2 mb-2 border-2 rounded-md text-gray-500 border-indigo-400">{tag}</div>) })}</div>

                        </div>)
                })}

            </div>

        </section>
    )
}

export default Projects;