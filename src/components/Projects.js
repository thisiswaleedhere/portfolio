const Projects = () => {

    const projectDetails = [{
        title: "Brand New App",
        description: "This is a brand new app using all these amazing tech and stack.This is a very detailed but yet compact description of it that is going to be displayed",
        tags: ["React", "Tailwind", "Javascript"]
    },
    {
        title: "Brand New App",
        description: "This is a brand new app using all these amazing tech and stack.This is a very detailed but yet compact description of it that is going to be displayed",
        tags: ["React", "Tailwind", "Javascript"]
    },
    {
        title: "Brand New App",
        description: "This is a brand new app using all these amazing tech and stack.This is a very detailed but yet compact description of it that is going to be displayed",
        tags: ["React", "Tailwind", "Javascript"]
    }]


    return (
        <section className="p-24 flex  font-ubuntu max-w-7xl mx-auto">
            <div className="mr-16 text-right w-52 flex-shrink-0 text-xl text-indigo-600 font-medium">PROJECTS</div>
            <div className="max-w-2xl">
                {projectDetails.map((project) => {
                    return (
                        <div className="pb-14">
                            <div className="pb-4 font-medium flex justify-between">
                                <div>{project.title}</div>
                                <div className="flex text-xs space-x-4 font-normal pt-2 text-indigo-500 cursor-pointer pr-12">
                                    <div>Website</div>
                                    <div>Github</div>
                                </div>
                            </div>
                            <div className="pb-4 font-light text-base text-gray-700">{project.description}</div>
                            <div className="pb-4 text-xs font-medium text-gray-700 flex space-x-2">{project.tags.map((tag) => { return (<div className="px-1.5 py-0.5 border-2 rounded-md border-indigo-500">{tag}</div>) })}</div>

                        </div>)
                })}

            </div>

        </section>
    )
}

export default Projects;