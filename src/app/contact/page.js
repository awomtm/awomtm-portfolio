/**
 * v0 by Vercel.
 * @see https://v0.dev/t/lMdGEWbYrSv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import contact from "../../../public/contact.jpg"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-8 lg:space-y-10">
        <Image
                src={contact}
                alt="Developer's Image"
                width={650} //automatically provided
                height={365} //automatically provided
                // blurDataURL="data:..." //automatically provided
                placeholder="blur" // Optional blur-up while loading
                className="aspect-video w-full overflow-hidden rounded-xl object-cover"
                style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                />
        </div>
        <div className="space-y-4 lg:order-last">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Have a question or want to work together? Fill out the form and we'll get back to you as soon as possible.
            </p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea className="min-h-[120px]" id="message" placeholder="Enter your message" />
            </div>
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </div>
        
      </div>
    </section>
  )
}