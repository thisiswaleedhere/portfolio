import { useState } from 'react';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import GetInTouch from './components/GetInTouch';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Title from './components/Title';

import { ReactComponent as Semicircle } from "./images/semicircle.svg";
import { ReactComponent as Circle } from "./images/circle.svg";
import { ReactComponent as Leaf } from './images/leaf.svg';


function Home() {

    const [scroll, setScroll] = useState(0);

    return (

        <div className='relative h-full w-full mx-auto bg-[#131313] max-w-[1580px] min-w-[350px]'>

            {/* Hero Section */}
            <Semicircle className="absolute -top-20 right-0 opacity-60 blur-3xl z-0" />
            <Semicircle className="absolute top-40 rotate-180 left-0 opacity-60 blur-3xl z-0" />
            <Circle className="absolute top-[450px] w-40 md:w-80 right-[450px] opacity-60 blur-3xl z-0 " />

            <Leaf className="absolute rotate-90 -left-20 -top-32 hidden md:block h-[500px] opacity-[.025]" />
            <Leaf className="absolute right-20 top-32 hidden md:block h-[500px] opacity-[.025]" />
            <Leaf className="absolute rotate-45 left-80 top-[500px] hidden md:block h-[300px] opacity-5" />

            <div className="absolute animate-move-dark border-4 border-green-100 w-48 h-80 hidden xl:block xl:right-[300px] 2xl:right-[325px] top-[330px] bg-transparent opacity-20 z-20"></div>
            <div className="absolute animate-move-light border-4 border-green-200 w-48 h-80 hidden xl:block xl:right-[320px] 2xl:right-[348px] top-[300px] bg-transparent z-20"></div>

            <div className="absolute animate-move-dark-small border-4 border-green-100 w-28 h-40 sm:h-64 sm:w-40 md:h-[258px] xl:hidden right-0 left-4 mx-auto text-center top-[198px] sm:top-[208px] md:top-[248px] lg:top-[265px] bg-transparent opacity-20 z-20"></div>
            <div className="absolute animate-move-light-small border-4 border-green-200 w-28 h-40 sm:h-64 sm:w-40 md:h-[258px] xl:hidden right-7 left-0 mx-auto text-center top-[185px] sm:top-[195px] md:top-[232px] lg:top-[250px] bg-transparent z-20"></div>

            {/* About Me  */}
            <Semicircle className="absolute top-[770px] right-0 opacity-60 blur-3xl z-0" />
            <Circle className="absolute top-[900px] w-40 md:w-80  left-40 opacity-60 blur-3xl z-0" />
            <Circle className="absolute top-[1200px] w-40 md:w-80 right-[450px] opacity-60 blur-3xl z-0 " />

            <Leaf className="absolute rotate-90 right-40 top-[730px] hidden md:block h-[400px] opacity-5" />
            <Leaf className="absolute left-10 top-[980px] hidden md:block h-[350px] opacity-[.025]" />



            {/* Skills  */}
            <Circle className="absolute bottom-[1500px] w-40 md:w-80 right-[200px] opacity-60 blur-3xl z-0 " />
            <Semicircle className="absolute rotate-180 top-[1600px] left-0 opacity-60 blur-3xl z-0" />

            <Leaf className="absolute rotate-90 -left-20 top-[1600px] hidden md:block h-[500px] opacity-[.025]" />
            <Leaf className="absolute rotate-45 right-40 top-[1400px] hidden md:block h-[370px] opacity-[.025]" />


            {/* Projects */}
            <Circle className="absolute bottom-[950px] w-40 md:w-80 left-36 opacity-60 blur-3xl z-0 " />
            <Semicircle className="absolute rotate-180 bottom-[800px] right-0 opacity-60 blur-3xl z-0" />

            <Leaf className="absolute rotate-4 -left-20 bottom-[700px] hidden md:block h-[500px] opacity-[.015]" />
            <Leaf className="absolute -rotate-45 right-20 bottom-[950px] hidden md:block h-[300px] opacity-5" />
            <Leaf className="absolute rotate-45 left-40 bottom-[1220px] hidden md:block h-[300px] opacity-5" />

            {/* Contact  */}
            <Semicircle className="absolute bottom-20 right-0 opacity-60 blur-3xl z-0" />
            <Semicircle className="absolute bottom-40 rotate-180 left-0 opacity-60 blur-3xl z-0" />
            <Circle className="absolute bottom-[450px] w-40 md:w-80 right-[450px] opacity-60 blur-3xl z-0 " />

            <Leaf className="absolute rotate-90 -left-20 bottom-32 hidden md:block h-[500px] opacity-[.02]" />
            <Leaf className="absolute right-20 bottom-32 hidden md:block h-[400px] opacity-5" />
            <Leaf className="absolute -rotate-180 left-80 bottom-[500px] hidden md:block h-[300px] opacity-5" />




            <Title />
            <Header setScroll={setScroll} />
            <AboutMe />
            <Skills />
            <Projects />
            <GetInTouch scroll={scroll} />
            <Footer />


        </div>


    );
}

export default Home;