const AboutMe = () => {
    return (
        <section className="p-12 lg:p-24 flex-col lg:flex lg:flex-row font-ubuntu max-w-7xl mx-auto min-w-[350px]">
            <div className="xl:mr-16 xl:text-right w-[106px] lg:w-52 mx-auto lg:mx-0 flex-shrink-0 text-xl text-indigo-600 font-medium pb-12">ABOUT ME</div>
            <div className="xl:max-w-2xl font-light text-gray-700 text-center lg:text-left">
                <p className="pb-8">Graduated as a Mechanical Engineer to later find my passion for Frontend Web Development and Design.
                    Learning softwares related to my field paved my way into the world of web design.</p>
                <p className="pb-8">
                    With an affinity towards beautiful designs and a keen eye for details acquired over the years I was able to use the resources in front of me
                    to learn and thereby design responsive products and build exciting interfaces that ensures great user experiences.
                </p>
                <p className="pb-8">If it's not a code editor that is running on my device then it is probably a movie or a football game that keeps me glued to the screen. </p>
                {/* <p className="font-normal hover:underline cursor-pointer">My Resume</p> */}
            </div>

        </section>
    )
}

export default AboutMe;


