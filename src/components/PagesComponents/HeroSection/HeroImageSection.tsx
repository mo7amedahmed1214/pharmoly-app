import style from './heroSection.module.css'

const HeroImageSection = () => {
    return (
        <div className={` w-full h-full col-span-4 lg:col-span-3 grid grid-cols-2  px-4 ${style.backgroundImageStyleHero} flex items-center justify-start`}>
            <div className="lg:col-span-1 col-span-2">
                <p className="text-xs mb-4">Exclusive Discounts</p>
                <h1
                    style={{
                        fontFamily: `var(--Fredoka-Bold)`,
                    }}
                    className="text-5xl text-[#3B4B33] font-lighter mb-6">Magical Moments
                    Awaits You at Every
                    Corner</h1>
                <p className="mb-6 text-xs">We Turn Ordinary Days Into Magical Adventures with Our
                    Exciting Collection of Toys and Stylish Kidswear</p>
                <button className="bg-yellow-600 hover:bg-yellow-500  text-white text-xs font-bold py-2 px-4 rounded-3xl">
                    Shop Now
                </button>

            </div>
        </div >
    )
}

export default HeroImageSection