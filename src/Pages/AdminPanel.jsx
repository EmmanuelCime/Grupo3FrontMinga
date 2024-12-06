import TablePanel from "../Components/TablePanel";
import imagePanel from "../assets/imagePanel.jpg";

export default function AdminPanel() {
    return (
        <div className="flex flex-col h-full justify-center items-center">
            {/* Header with background image */}
            <div
                className="relative h-[400px] md:h-[500px] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${imagePanel})` }}
            >
                {/* Overlay para contraste */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                {/* Título principal */}
                <div className="absolute inset-0 flex justify-center items-center">
                    <h1 className="text-white text-4xl md:text-5xl font-bold">Panel</h1>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="flex flex-col relative justify-center items-center bg-white p-6 w-11/12 sm:w-10/12 md:w-11/12 lg:w-6/12 mt-[-100px] rounded-lg shadow-lg">
                <h2 className="text-center text-2xl sm:text-3xl font-bold text-orange-500 mb-6 underline decoration-[#f97117] decoration-4 underline-offset-8">
                    Entities
                </h2>
                <div className="w-full">
                    <TablePanel />
                </div>
            </div>
        </div>
    );
}
