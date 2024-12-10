import React, { useState } from "react";

function ConfirmationAlert({ description, onConfirm, onCancel }) {
    const [isVisible, setIsVisible] = useState(true);

    const handleConfirm = () => {
        if (onConfirm) onConfirm();
        setIsVisible(false);
    };

    const handleCancel = () => {
        if (onCancel) onCancel();
        setIsVisible(false);
    };

    return (
        isVisible && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                <div className="bg-gray-100 w-80 rounded-lg shadow-lg p-5 text-center">
                    <p className="text-black text-lg font-medium mb-4">
                        {description}
                    </p>
                    <div className="flex justify-between items-center">
                        <button
                            onClick={handleConfirm}
                            className="w-1/2 text-red-500 text-base font-medium focus:outline-none hover:underline"
                        >
                            Yes, I'm sure
                        </button>
                        <div className="border-l border-gray-300"></div>
                        <button
                            onClick={handleCancel}
                            className="w-1/2 text-blue-500 text-base font-medium focus:outline-none hover:underline"
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        )
    );
}

export default ConfirmationAlert;
