import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../store/reducers/commentsReducer";

export default function ModalComments({ isOpen, onClose }) {
    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comments);
    const [newComment, setNewComment] = useState("");

    if (!isOpen) return null;

    const handleAddComment = () => {
        if (newComment.trim() === "") return;

        const newCommentObject = {
            user: "Brayan Flores",
            avatar: "https://randomuser.me/api/portraits/men/30.jpg",
            text: newComment,
            time: "Just now",
            isEditable: true,
        };

        dispatch(addComment(newCommentObject));
        setNewComment("");
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
                <h2 className="text-2xl font-bold mb-4">Comments</h2>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                >
                    ✖️
                </button>

                {/* Lista de Comentarios */}
                <div className="space-y-6 overflow-y-auto h-full">
                    {comments.map((comment, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                            <div className="flex items-start gap-4">
                                <img
                                    src={comment.avatar}
                                    alt="Avatar"
                                    className="w-12 h-12 rounded-full border border-gray-300"
                                />
                                <div>
                                    <p className="font-semibold text-gray-800">{comment.user}</p>
                                    <p className="text-xs text-gray-500">{comment.time}</p>
                                    <p className="text-gray-700 mt-1">{comment.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
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
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}
