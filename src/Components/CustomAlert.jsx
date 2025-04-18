import React, { useState } from "react";

function CustomAlert({ description, onClose }) {
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        if (onClose) onClose();
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-gray-100 w-80 rounded-lg shadow-lg p-5 text-center">
                    <p className="text-black text-lg font-medium mb-4">
                        {description}
                    </p>
                    <button
                        onClick={handleClose}
                        className="text-blue-500 text-base font-medium focus:outline-none hover:underline"
                    >
                        Accept
                    </button>
                </div>
            </div>
        )
    );
}

export default CustomAlert;
