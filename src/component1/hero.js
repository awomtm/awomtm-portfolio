/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Rdvsdmi3rry
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from "next/image"
import Link from "next/link"
import heroImg1 from "../../public/heroImg1.jpg"

export default function Component() {
  return (
    <section
      className="relative w-full min-h-[500px] flex items-center justify-center py-6 bg-cover bg-center bg-no-repeat z-1000"
      style={{
        backgroundImage: "url(../../public/heroImg1.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-gray-900/70 z-0"/>
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl px-4 sm:px-6 lg:px-8 gap-8">
        <div className="text-center max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            "Crafting Digital Experiences: Where Innovation Meets Imagination"
          </h1>
          <p className="mt-3 text-xl text-gray-300 sm:mt-5 sm:text-2xl lg:text-3xl">
            Your digital journey starts here. We elevate your brands through seamless Web Solutions  
          </p>
          <div className="mt-10 sm:mt-12">
            <Link
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              href="/projects"
            >
              Get Started
            </Link>
          </div>
        </div>
        <Image
        src={heroImg1}
        alt="Developer's Image"
        width={300} //automatically provided
        height={300} //automatically provided
        className="rounded-full"
        style={{
          aspectRatio: "128/128",
          objectFit: "cover",
        }}
        placeholder="blur" // Optional blur-up while loading
        />
      </div>
    </section>
  )
}