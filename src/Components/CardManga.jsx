
const categoryColors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-orange-500",
]

export default function CardManga({ manga, index }) {
    const colorIndex = manga.category_id.charCodeAt(0) % categoryColors.length
    const categoryColor = categoryColors[colorIndex]
    return (
        <div key={index} className="w-64 md:w-72 sm:mx-5 h-36 md:h-40 lg:h-44 flex items-center mt-4 rounded-2xl border">
            <div className={`w-2 h-24 md:h-32 ${categoryColor}`}></div>
            <div className="h-full w-full flex flex-col justify-center items-start space-y-1 p-3">
                <p className="text-xl font-semibold">{manga.title}</p>
                <p className="font-semibold mr-5">{manga.category_id}</p>
                <button className="font-medium px-2 rounded-full bg-lime-400">Read</button>
            </div>
            <img className="min-w-28 sm:min-w-32 h-full object-cover rounded-l-full" src={manga.cover_photo} alt={manga.title} />
        </div>
    )
}