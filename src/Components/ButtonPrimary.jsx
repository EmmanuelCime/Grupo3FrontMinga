export default function ButtonPrimary({name, onClick}) {
    return(
        <button
            type="submit"
            className="w-full bg-[#f97117] text-white text-sm md:text-md py-2 md:px-4 rounded-md hover:bg-orange-600 transition-colors font-semibold mt-1 md:mt-4"
            onClick={onClick}
          >
            {name}
          </button>
    )
}