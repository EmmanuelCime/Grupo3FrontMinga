export default function ButtonDelete({ name,onClick }) {
    return (
      <button 
      className="w-full bg-[#FBDDDC] text-red-500 py-3 rounded-3xl font-bold shadow-md transition-transform duration-200 transform hover:bg-red-300 hover:scale-105"
      onClick={onClick}
      >
        {name}
      </button>
    );
  }