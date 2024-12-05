import React, { useState } from "react";

export default function ModalComments({ isOpen, onClose, chapter, initialComments }) {
    const [comments, setComments] = useState(initialComments || []);
    const [newComment, setNewComment] = useState("");

    if (!isOpen) return null;

    const handleAddComment = () => {
        if (newComment.trim() === "") return;
        const newCommentObject = {
            user: "Brayan FLores",
            avatar: "https://randomuser.me/api/portraits/men/30.jpg",
            text: newComment,
            time: "Just now",
            isEditable: true,
        };
        setComments([newCommentObject, ...comments]);
        setNewComment("");
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
                <h2 className="text-2xl font-bold mb-4">Coments - {chapter.title}</h2>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                    ✖️
                </button>

                {/* Lista de Comentarios */}
                <div className="space-y-6 overflow-y-auto h-full">
                    {comments.map((comment, index) => {
                        const isLeftAligned = index % 2 === 0; // Alternar diseño
                        return (
                            <div
                                key={index}
                                className={`relative bg-white p-4 rounded-lg shadow-md border border-gray-200 flex items-start gap-4 ${
                                    isLeftAligned ? "flex-row" : "flex-row-reverse"
                                }`}
                            >
                                {/* Avatar */}
                                <img
                                    src={comment.avatar}
                                    alt="Avatar"
                                    className="w-12 h-12 rounded-full border border-gray-300"
                                />

                                {/* Contenido del Comentario */}
                                <div className="flex-1">
                                    <div
                                        className={`flex items-center justify-between ${
                                            isLeftAligned ? "text-left" : "text-right"
                                        }`}
                                    >
                                        <p className="font-semibold text-gray-800">
                                            {comment.user}
                                        </p>
                                        <p className="text-xs text-gray-500">{comment.time}</p>
                                    </div>
                                    <p className="text-gray-700 mt-1">{comment.text}</p>
                                </div>

                                {/* Botones de Acción (si es editable) */}
                                {comment.isEditable && (
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => console.log("Edit:", comment)}
                                            className="text-blue-500 hover:text-blue-700"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                                />
                                            </svg>
                                        </button>
                                        <button
                                            onClick={() => console.log("Delete:", comment)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={1.5}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Campo para Nuevo Comentario */}
                <div className="flex items-center mt-4 border-t pt-3">
                    <input
                        type="text"
                        placeholder="Say something here..."
                        className="flex-1 px-4 py-2 border rounded-l-lg focus:outline-none"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button
                        onClick={handleAddComment}
                        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6"
                        >
                            <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
