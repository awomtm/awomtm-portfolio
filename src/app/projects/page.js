
    {/* <p id="1" className="h-10 w-full m-11 bg-red-900">
        <h1>Project 1</h1>
        <Link href="/">Back</Link>
    </p> */}
    
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/f0gdK3BeNuZ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import Image from 'next/image'
import education from '../../../public/education.jpg'
import blood from '../../../public/blood-donation.jpg'
import survey from '../../../public/survey.jpg'
import technology from '../../../public/technology.jpg'


export default function Projects() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">Advanced English to Yoruba Translator</span>
            </Link>
            <Image
                src={education}
                alt="Developer's Image"
                width={400} //automatically provided
                height={300} //automatically provided
                // blurDataURL="data:..." //automatically provided
                placeholder="blur" // Optional blur-up while loading
                className="object-cover w-full h-60"
                style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-semibold text-lg md:text-xl">NACETEM Website</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              The official webite for National Centre for Technology Managemen
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Project</span>
            </Link>
            <Image
                src={blood}
                alt="Developer's Image"
                width={400} //automatically provided
                height={300} //automatically provided
                // blurDataURL="data:..." //automatically provided
                placeholder="blur" // Optional blur-up while loading
                className="object-cover w-full h-60"
                style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-semibold text-lg md:text-xl">Blood Management System</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              The solution platform for managing blood donor and blood distribution
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">Survey</span>
            </Link>
            <Image
                src={survey}
                alt="Developer's Image"
                width={400} //automatically provided
                height={300} //automatically provided
                // blurDataURL="data:..." //automatically provided
                placeholder="blur" // Optional blur-up while loading
                className="object-cover w-full h-60"
                style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-semibold text-lg md:text-xl">Survey</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                A content Management web solution for creating custom Survey similar to Google form
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-lg">
            <Link className="absolute inset-0 z-10" href="#">
              <span className="sr-only">View Project</span>
            </Link>
            <Image
                src={technology}
                alt="Developer's Image"
                width={400} //automatically provided
                height={300} //automatically provided
                // blurDataURL="data:..." //automatically provided
                placeholder="blur" // Optional blur-up while loading
                className="object-cover w-full h-60"
                style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                />
            <div className="bg-white p-4 dark:bg-gray-950">
              <h3 className="font-semibold text-lg md:text-xl">Educational e-portal</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              The official webite for managing academic process for post gradute education
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}