/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5vClpMLkmnv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FeaturedProjects2() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-6 py-12 md:py-24">
      <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
        <div className="flex items-center mb-4">
          <div className="bg-gray-100 rounded-full p-3 mr-4 dark:bg-gray-800">
            <RocketIcon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">Survey(CMS)</h3>
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          This is a Content Management web solution for creating custom Survey similar to Google form
        </p>
        <Button className="mt-4 w-full" variant="outline">
          Learn More
        </Button>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
        <div className="flex items-center mb-4">
          <div className="bg-gray-100 rounded-full p-3 mr-4 dark:bg-gray-800">
            <BoltIcon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">Blood Management System</h3>
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          The solution platform for managing blood donor and blood distribution
        </p>
        <Button className="mt-4 w-full" variant="outline">
          Learn More
        </Button>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
        <div className="flex items-center mb-4">
          <div className="bg-gray-100 rounded-full p-3 mr-4 dark:bg-gray-800">
            <PuzzleIcon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">Education e-portal</h3>
        </div>
        <p className="text-gray-500 dark:text-gray-400">The official webite for managing academic process for post gradute education</p>
        <Button className="mt-4 w-full" variant="outline">
          Learn More
        </Button>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 dark:bg-gray-950 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
        <div className="flex items-center mb-4">
          <div className="bg-gray-100 rounded-full p-3 mr-4 dark:bg-gray-800">
            <ShieldIcon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-semibold">NACETEM Website</h3>
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          The official webite for National Centre for Technology Management
        </p>
        <Button className="mt-4 w-full" variant="outline">
          <a href="https://nacetem.gov.ng/">
          Learn More
          </a>
        </Button>
        
      </div>
    </section>
  )
}

function BoltIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  )
}


function PuzzleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
    </svg>
  )
}


function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  )
}


function ShieldIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  )
}