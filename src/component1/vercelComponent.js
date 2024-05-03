
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/IDRMZuakQ29
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
// import { Button } from "@/components/ui/button"
import heroImg2 from "../../public/heroImg2.jpg"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function VercelComponent() {
  return (
    <section className="w-full pt-6 pb-6 md:py-12 lg:py-24 xl:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 flex-col-reverse lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                {/* Unlock the Power of Seamless Creativity */}
                Why you should hire me?
              </h1>
              <p className="max-w-[600px] text-xl text-gray-500 dark:text-gray-400">
                    "Hi, I'm Michael M. Awoyemi.
                    I'm a full stack Developer with over 10 years of experience.
                    I use programming languages such as JavaScript, TypeScript, NodeJs, ReactJs, Nextjs,
                    HTML, CSS. 
                    I'm a ...
                    "
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="w-full min-[400px]:w-auto" size="lg" variant="primary">
                Get Started
              </Button>
              <Button className="w-full min-[400px]:w-auto" size="lg" variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
          <Image
            src={heroImg2}
            alt="Developer Image"
            width={650} //automatically provided
            height={650} //automatically provided
            // blurDataURL="data:..." //automatically provided
            placeholder="blur" // Optional blur-up while loading
            className="rounded-md"
            />
        </div>
      </div>
    </section>
  )
}




