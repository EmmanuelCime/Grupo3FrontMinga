export default function ButtonPrimary({name, onClick}) {
    return(
        <button
            type="submit"
            className="w-full bg-[#f97117] text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors font-semibold mt-4"
            onClick={onClick}
          >
            {name}
          </button>
    )
}