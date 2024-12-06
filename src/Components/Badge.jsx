export function Badge({ category }) {
    return (
        <span className="bg-[#FFE0DF] text-[#EF8481] text-sm font-medium px-4 py-2 rounded-full shadow-md">
            {category}
        </span>
    );
}
