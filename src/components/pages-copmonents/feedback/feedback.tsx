import FeedbackCard from "./feedback-card"

const FeedbackData = [
    {
        id: 1,
        title: "Jessica Lindström",
        desc: `In vel malesuada nisi, vitae porttitor odio. Ut efficitur, lorem a tempus efficitur, nunc massa tempus.`,
        time: "2 week"
    },
    {
        id: 2,
        title: "Teresa Holland",
        desc: `In vel malesuada nisi, vitae porttitor odio. Ut efficitur, lorem a tempus efficitur, nunc massa tempus.`,
        time: "2 week"
    },
    {
        id: 3,
        title: "Caroline Boyle",
        desc: `In vel malesuada nisi, vitae porttitor odio. Ut efficitur, lorem a tempus efficitur, nunc massa tempus.`,
        time: "2 week"
    },
    {
        id: 4,
        title: "Jessica Lindström",
        desc: `In vel malesuada nisi, vitae porttitor odio. Ut efficitur, lorem a tempus efficitur, nunc massa tempus.`,
        time: "2 week"
    },
    // {
    //     id: 5,
    //     title: "Teresa Holland",
    //     desc: `In vel malesuada nisi, vitae porttitor odio. Ut efficitur, lorem a tempus efficitur, nunc massa tempus.`,
    //     time: "2 week"
    // },


]
const Feedback = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-4  gap-4">

                {FeedbackData.map((item) => (
                    <FeedbackCard item={item} />
                ))}

            </div>

        </div>
    )
}

export default Feedback