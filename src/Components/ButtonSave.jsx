export default function ButtonSave({ name,onClick }) {
    return (
      <button 
      className="w-full bg-[#34D399] text-white py-3 rounded-3xl font-bold shadow-md transition-transform duration-200 transform hover:bg-green-500 hover:scale-105"
      onClick={onClick}
      >
        {name}
      </button>
    );
  }