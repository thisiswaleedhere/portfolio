import { ReactComponent as LogoMW } from "../images/LOGOMW.svg";
import { useEffect, useState } from "react";

const Footer = () => {

    const [copySuccess, setCopySuccess] = useState(null);

    useEffect(() => {
        setTimeout(() => { setCopySuccess(null) }, 4000)
    }, [copySuccess])


    const copyToClipBoard = async copyMe => {
        try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess('Email Copied!');
        }
        catch (err) {
            setCopySuccess('Failed to copy!');
        };
    }


    return (
        <footer className="md:p-12 pt-12 pb-6 flex flex-col sm:flex-row justify-between font-ubuntu max-w-7xl w-4/5 mx-auto min-w-[350px]">

            <div className="mx-auto sm:mx-0 flex space-x-3 divide-x divide-gray-300 align-middle text-gray-300">
                <LogoMW className="w-8 fill-gray-300" />

                <div className="pt-1 pl-2">Made by MW</div>
            </div>

            {copySuccess && <div className="text-sm text-yellow-400">{copySuccess}</div>}

            <div className="flex justify-between sm:space-x-8 text-green-300 font-semibold pt-1 px-4">
                <div onClick={(e) => copyToClipBoard("thisiswaleedhere@gmail.com")} className="cursor-pointer">EMAIL</div>
                <div><a href="https://github.com/thisiswaleedhere" target="_blank" rel="noreferrer">GITHUB</a></div>
            </div>

        </footer>
    )
}

export default Footer;