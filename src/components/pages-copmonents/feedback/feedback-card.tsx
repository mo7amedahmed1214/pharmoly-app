interface FeedbackCardProps {
    item: {
        id: number;
        title: string;
        desc: string;
        time: string;
    };
}
const FeedbackCard = ({ item }: FeedbackCardProps) => {
    return (
        <div key={item.id} className="lg:col-span-1  col-span-2 p-2 flex flex-col items-start justify-start rounded-lg">
            <h2 className="text-sm font-semibold my-2 ">{item.title}</h2>
            <p className="flex text-10 text-gray-600 my-2 ">{item.desc}</p>
            <p className="flex text-10 text-gray-500 ">{item.time}</p>
        </div>
    )
}

export default FeedbackCard