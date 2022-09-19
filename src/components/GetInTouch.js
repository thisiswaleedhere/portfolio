import { useEffect, useState, useRef } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";


const GetInTouch = ({ scroll }) => {

    const [contactMessage, setContactMessage] = useState({ name: "", email: "", message: "" });
    const getInTouch = useRef(null);

    useEffect(() => {
        if (scroll === 0) {
            return;
        }
        if (getInTouch.current) {
            getInTouch.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [scroll]);


    return (
        <section className="relative p-12 lg:p-24 flex-col xl:flex xl:flex-row justify-center font-ubuntu max-w-7xl mx-auto min-w-[350px] z-10" ref={getInTouch} >

            <div className="xl:mr-16 xl:text-right text-center w-[135px] lg:w-52 mx-auto xl:mx-0 flex-shrink-0 font-caveat text-3xl text-green-300 font-medium pb-6">
                Get In Touch
            </div>

            <div className="w-full md:w-4/5 md:mx-auto lg:w-3/5 xl:mx-0 xl:w-3/5 text-gray-300 ">

                <form id="contactform" action="https://getform.io/f/673f0f39-208b-4c92-b2d8-4f30404bdd59" method="POST" rel="noopener" >
                    <AnimationOnScroll animateIn="animate-fade-in-left" >
                        <div className="mt-3">
                            <label htmlFor="name" className="pl-2">Name</label>
                            <input
                                className="w-full bg-gray-800 shadow-xl border-0 appearance-none  text-gray-300 p-1 sm:p-2 md:p-3 indent-2 focus:ring-0 focus:border-green-300 focus:border-2 "
                                id="name"
                                type="text"
                                name="name"
                                value={contactMessage.name}
                                onChange={(e) => setContactMessage(prevContactMessage => { return { ...prevContactMessage, name: e.target.value } })}
                                required
                            />
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate-fade-in-left" >
                        <div className="mt-5">
                            <label htmlFor="email" className="pl-2">Email</label>
                            <input
                                className="w-full bg-gray-800 shadow-xl border-0 appearance-none  text-gray-300 p-1 sm:p-2 md:p-3 indent-2 focus:ring-0 focus:border-green-300 focus:border-2 "
                                id="email"
                                type="text"
                                name="email"
                                value={contactMessage.email}
                                onChange={(e) => setContactMessage(prevContactMessage => { return { ...prevContactMessage, email: e.target.value } })}
                                required
                            />
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate-fade-in-left" >
                        <div className="mt-5">
                            <label htmlFor="message" className="pl-2">Message</label>
                            <textarea className="w-full bg-gray-800 shadow-xl border-0 appearance-none  text-gray-300 p-1 sm:p-2 md:p-3 indent-2 focus:ring-0 focus:border-green-300 focus:border-2 "
                                id="message"
                                type="text"
                                name="message"
                                value={contactMessage.message}
                                onChange={(e) => setContactMessage(prevContactMessage => { return { ...prevContactMessage, message: e.target.value } })}
                                required
                            />
                        </div>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="animate-fade-in-left" >
                        <button type="submit" className="mt-5 w-full transition ease-in-out hover:font-bold hover:bg-green-300 text-2xl font-caveat hover:text-black h-[50px] px-4 py-2 shadow-xl bg-gray-800 text-green-300 border-green-300 border-2"> Send Message</button>
                    </AnimationOnScroll>
                </form>

            </div>

        </section>
    )


}

export default GetInTouch;