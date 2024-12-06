function ButtonSend ({ name, onClick }) {

    return (
        <button className="w-full bg-[#fb8151] text-white py-3 rounded-3xl font-bold shadow-md transition-transform duration-200 transform hover:bg-[#c36540] hover:scale-105" onClick={onClick}> {name}</button>
    )
}


export default ButtonSend