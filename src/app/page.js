
import Hero from "../component1/hero"

import FeaturedProjects from "../component1/featuredProjects"
import FeaturedProjects2 from "../component1/featuredProjects2"
import VercelComponent from "../component1/vercelComponent"

export default function Home() {
    return(<>
    <Hero/>
    <FeaturedProjects2/>
    {/* <FeaturedProjects/> */}
    <VercelComponent/>
    </>)
}
//bg-[url('../../public/blue-bg2.jpg')]