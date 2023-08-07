import LeftHero from "../Hero/LeftHero";



const Hero = () => {
    return (
        <div className="flex lg:w-[50%] md:w-[70%] flex-row items-start justify-between py-24">
            <LeftHero />
        </div>
    )
}

export default Hero;