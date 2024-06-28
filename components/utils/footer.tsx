import { FaLinkedinIn, FaGithub } from "react-icons/fa";


export const Footer = () => {
    return (
        <footer className="w-full flex items-center justify-center flex-col sm:flex-row  sm:justify-between px-6 md:px-28 py-8">
            <div className="text-sm text-zinc-600">
                <span>&copy; 2024 build by </span>
                <a href="https://github.com/Shivamrai15" target = "noreferrer" >Shivam Rai.</a>
                <span> All rights reserved.</span>
            </div>
            <div className="flex items-center gap-x-8">
                <a 
                    href="https://www.linkedin.com/in/shivam-rai-63234b282"
                    target="noreferrer"
                >
                    <FaLinkedinIn className="h-6 w-6 text-zinc-600 hover:text-zinc-700"/>
                </a>
                <a 
                    href="https://github.com/Shivamrai15"
                    target="noreferrer"
                >
                    <FaGithub className="h-6 w-6 text-zinc-600 hover:text-zinc-700"/>
                </a>
            </div>
        </footer>
    )
}
