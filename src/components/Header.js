import React from "react";

const Header = () => {
    return (
        <header className=" text-gray-600 font-ubuntu h-auto px-28 pt-20 pb-32 mx-auto flex-col justify-around max-w-7xl">

            <h1 className="my-10 text-4xl">Marhaba</h1>
            <div className="flex justify-between">
                <h2 className="my-10 text-4xl leading-relaxed font-light max-w-2xl">
                    I'm Waleed. bla bla bla....There is more content to come here regARDING A BRIEF INTRODuction i can give about myself and it si going to end right about here
                </h2>
                <img className="h-48 my-10" src="https://www.freepnglogos.com/uploads/thinking-png/thinking-get-started-with-marketing-for-new-retail-business-owners-8.png" alt="me" />
            </div>
            <div className="my-10 text-2xl"><button className="bg-indigo-600 text-gray-100 px-4 py-2 shadow-xl hover:bg-gray-50 hover:text-indigo-600 hover:border-indigo-600 hover:border-2">Get in touch</button></div>


        </header>
    )
}

export default Header;