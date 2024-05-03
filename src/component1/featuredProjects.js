import Image from "next/image"
import Link from "next/link"
import me from "../../public/me.jpeg"
import DoneIcon from "@mui/icons-material/Done"
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined"

export default function FeaturedProjects(){
    return(
    <>
        <div className="xs:flex-col  md:flex lg:flex space-x-9 h-64 py-5 px-4 justify-center items-center w-screen">
            <div className="w-1/6 p-2 rounded-lg border-2 hover:bg-slate-900 hover:text-white">
                <div className="flex gap-px">
                    <DoneIcon fontSize="small"/>   
                    <h2 className="text-lg mb-4 font-bold leading-5">NACETEM Website</h2>
                </div>
                <p className="text-slate-500  mb-2">The official webite for National Centre for Technology Management</p>
                <Link href="/projects#1" className="text-rose-900">Project details</Link>
            </div>
            <div className="w-1/6 p-2 rounded-lg border-2 hover:bg-slate-900 hover:text-white">
                <div className="flex gap-px">
                    <DoneIcon fontSize="small"/>   
                    <h2 className="text-lg mb-4 font-bold leading-5">Survey</h2>
                </div>
                <p className="text-slate-500  mb-2">This is a Content Management web solution for creating custom Survey similar to Google form</p>
                <Link href="/projects#2">Project details</Link>
            </div>
            <div className="w-1/6 p-2 rounded-lg border-2 hover:bg-slate-900 hover:text-white">
                <div className="flex gap-px">
                    <DoneIcon fontSize="small"/>   
                    <h2 className="text-lg mb-4 font-bold leading-5">Blood Management System</h2>
                </div>
                <p className="text-slate-500  mb-2">The solution platform for managing blood donor and blood distribution</p>
                <Link href="/projects#3">Project details</Link>
            </div>
            <div className="w-1/6 p-2 rounded-lg border-2 hover:bg-slate-900 hover:text-white">
                <div className="flex gap-px">
                    <DoneIcon fontSize="small"/>   
                    <h2 className="text-lg mb-4 font-bold leading-5">Education e-portal</h2>
                </div>
                <p className="text-slate-500  mb-2">The official webite for managing academic process for post gradute education</p>
                <Link href="/projects#4">Project details</Link>
            </div>
        </div>   
    </>
    )
}
// w-16 md:w-32 lg:w-4