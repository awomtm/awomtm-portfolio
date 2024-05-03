import Image from "next/image"
import logo from "../../public/logo.png"
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Header() {
    return<>
   <header className="flex justify-between w-full h-12">
    <div className="flex w-fit h-full self-center pl-6">
        <Image
        src={logo}
        alt="Logo"
        width={50} //automatically provided
        height={50} //automatically provided
        // blurDataURL="data:..." //automatically provided
        placeholder="blur" // Optional blur-up while loading
        />
        <nav className="flex w-fit h-full">
            <ul className="flex list-none ml-10">
                <li className="cursor-pointer inline float-left	">
                    <a className="px-2.5 py-0 font-sans leading-10 hover:text-green-500 hover:border-b-4 hover:border-green-500 hover:animate-pulse" href="/">HOME</a>
                </li>
                <li className="cursor-pointer inline float-left	">
                    <a className="px-2.5 py-0 font-sans leading-10 hover:text-green-500 hover:border-b-4 hover:border-green-500 hover:animate-pulse" href="/projects">PROJECTS</a>
                </li>
                <li className="cursor-pointer inline float-left	">
                    <a className="px-2.5 py-0 font-sans leading-10 hover:text-green-500 hover:border-b-4 hover:border-green-500 hover:animate-pulse" href="/contact">CONTACT</a>
                </li>
            </ul>
        </nav>
    </div>
    <div className="flex w-fit gap-x-2 h-full pr-6">
       <a href="#" className="w-5 h-8 text-red-900  hover:text-green-950 self-center">
        <LinkedInIcon/>
       </a> 
       
       <a href="#" className="w-5 h-8 text-red-950 hover:text-green-950 self-center">
        <GitHubIcon/>
       </a> 
    </div>
   </header>
    </>
}