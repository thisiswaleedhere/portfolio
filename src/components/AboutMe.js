import { AnimationOnScroll } from "react-animation-on-scroll";

const AboutMe = () => {



    return (
        <section className="relative p-12 lg:p-44 flex-col xl:flex xl:flex-row justify-center font-quicksand max-w-8xl mx-auto min-w-[350px] z-10">


            <div className="xl:mr-16 xl:text-right text-center w-60 mx-auto xl:mx-0 flex-shrink-0 font-caveat tracking-wide text-3xl text-green-300 font-medium pb-12">Something About Me</div>


            <div className="xl:max-w-2xl font-base tracking-wide text-gray-300 text-center xl:text-left z-10">
                <AnimationOnScroll animateIn="animate-fade-in-left">
                    <p className="pb-8">Graduated as a Mechanical Engineer to later find my passion for Frontend Web Development and Design.
                    </p></AnimationOnScroll>
                <AnimationOnScroll animateIn="animate-fade-in-left">
                    <p className="pb-8">
                        With an affinity towards beautiful designs and a keen eye for details acquired over the years I was able to use the resources in front of me
                        to learn and thereby design responsive products and build exciting interfaces that ensure great user experiences.
                    </p></AnimationOnScroll>
                <AnimationOnScroll animateIn="animate-fade-in-left">
                    <p className="pb-8">If it's not a code editor that is running on my device then it is probably a movie or a football game that keeps me glued to the screen. </p>
                </AnimationOnScroll>
            </div>


        </section>
    )
}

export default AboutMe;


