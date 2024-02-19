import { AnimationOnScroll } from "react-animation-on-scroll";

const AboutMe = () => {



    return (
        <section className="relative p-12 lg:p-44 flex-col xl:flex xl:flex-row justify-center font-quicksand max-w-8xl mx-auto min-w-[350px] z-10">


            <div className="xl:mr-16 xl:text-right text-center w-60 mx-auto xl:mx-0 flex-shrink-0 font-caveat tracking-wide text-3xl text-green-300 font-medium pb-12">More About Me</div>


            <div className="xl:max-w-2xl font-lg tracking-wide text-gray-300 text-center xl:text-left z-10">
                <AnimationOnScroll animateIn="animate-fade-in-left" animateOnce>
                    <p className="pb-8">Currently at the forefront of revolutionizing traditional businesses in Mussafah Industrial Area, Abu Dhabi,
                        by bringing them onto digital platforms and enabling online selling capabilities at Industrielleads.
                    </p>
                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate-fade-in-left" animateOnce>
                    <p className="pb-8">
                        I thrive in collaborative environments where I can leverage my skills in frontend development and product design to bring ideas to life.
                        And therein lies my expertise:
                        <span className="italic font-semibold text-green-200"> "Designing and developing innovative solutions that enhance user experiences".</span></p>

                </AnimationOnScroll>
                <AnimationOnScroll animateIn="animate-fade-in-left" animateOnce>
                    <p className="pb-8">If it's not a code editor that is running on my device then it is probably a movie or a football game that keeps me glued to the screen. </p>
                </AnimationOnScroll>
            </div>


        </section>
    )
}

export default AboutMe;


