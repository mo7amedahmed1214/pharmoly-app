import ServiceCard from "./service-card"

const ServicesSection = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 *:mt-10 mb-10">

            <div className="grid grid-cols-2  lg:grid-cols-4 gap-6 px-4 py-6">
                <ServiceCard />
            </div>

        </div>
    )
}

export default ServicesSection