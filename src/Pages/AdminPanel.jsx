import TablePanel from "../Components/TablePanel";
import imagePanel from "../assets/imagePanel.jpg";

export default function AdminPanel() {
   
    return (
        <div className="flex flex-col h-full justify-center items-center">
            {/* Header with background image */}
            <div
                className="relative h-[600px] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${imagePanel})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                {/* Main Title */}
                <div className="absolute inset-0 flex justify-center items-center mb-36">
                    <h1 className="text-white text-5xl font-bold">Panel</h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col justify-center items-center relative bg-white p-8 w-11/12 h-auto bottom-56 border border-none rounded-t-lg">
                {/* Section Title */}
                <h2 className="text-center text-3xl font-bold text-orange-500 mb-10 underline decoration-[#f97117] decoration-4 underline-offset-8">
                    Entities
                </h2>
                {/* Table */}
                <TablePanel></TablePanel>
            </div>
        </div>
    );
}