import { useEffect, useState, useRef } from "react";


const GetInTouch = ({ scroll }) => {

    const [contactMessage, setContactMessage] = useState({ name: "", email: "", message: "" });
    const getInTouch = useRef(null);

    useEffect(() => {

        if (getInTouch.current) {
            getInTouch.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [scroll]);


    return (
        <section className="p-12 lg:p-24 flex-col lg:flex lg:flex-row font-ubuntu max-w-7xl mx-auto min-w-[350px]" ref={getInTouch} >

            <div className="xl:mr-16 xl:text-right w-[135px] lg:w-52 mx-auto lg:mx-0 flex-shrink-0 text-xl text-indigo-600 font-medium pb-6">
                GET IN TOUCH
            </div>

            <div className="w-full md:w-4/5 md:mx-auto lg:w-3/5 lg:mx-0 xl:w-3/5 text-gray-500 ">

                <form id="contactform" action="https://getform.io/f/673f0f39-208b-4c92-b2d8-4f30404bdd59" method="POST" rel="noopener" >

                    <div className="mt-3">
                        <label htmlFor="name" className="pl-2">Name</label>
                        <input
                            className="w-full bg-gray-50 shadow-xl border-0 appearance-none  text-gray-800 p-1 sm:p-2 md:p-3 indent-2 focus:ring-0 focus:border-yellow-400 focus:border-2 "
                            id="name"
                            type="text"
                            name="name"
                            value={contactMessage.name}
                            onChange={(e) => setContactMessage(prevContactMessage => { return { ...prevContactMessage, name: e.target.value } })}
                            required
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="email" className="pl-2">Email</label>
                        <input
                            className="w-full bg-gray-50 shadow-xl border-0 appearance-none  text-gray-800 p-1 sm:p-2 md:p-3 indent-2 focus:ring-0 focus:border-yellow-400 focus:border-2 "
                            id="email"
                            type="text"
                            name="email"
                            value={contactMessage.email}
                            onChange={(e) => setContactMessage(prevContactMessage => { return { ...prevContactMessage, email: e.target.value } })}
                            required
                        />
                    </div>

                    <div className="mt-5">
                        <label htmlFor="message" className="pl-2">Message</label>
                        <textarea className="w-full bg-gray-50 shadow-xl border-0 appearance-none  text-gray-800 p-1 sm:p-2 md:p-3 indent-2 focus:ring-0 focus:border-yellow-400 focus:border-2 "
                            id="message"
                            type="text"
                            name="message"
                            value={contactMessage.message}
                            onChange={(e) => setContactMessage(prevContactMessage => { return { ...prevContactMessage, message: e.target.value } })}
                            required
                        />
                    </div>

                    <button type="submit" className="mt-5 w-full hover:bg-indigo-600 uppercase hover:text-gray-100 h-[50px] px-4 py-2 shadow-xl bg-gray-50 text-indigo-600 border-indigo-600 border-2"> Send Message</button>

                </form>

            </div>

        </section>
    )


}

export default GetInTouch;