import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsByChapter } from "../store/actions/commentsAction";

export default function ModalComments({ isOpen, onClose, chapterId }) {
  const dispatch = useDispatch();
  const { comments, loading, error } = useSelector((state) => state.comments);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    if (isOpen && chapterId) {
      console.log("Fetching comments for chapter:", chapterId); // Debug
      dispatch(fetchCommentsByChapter(chapterId));
    }
  }, [isOpen, chapterId, dispatch]);

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    // Aquí puedes agregar lógica para enviar el nuevo comentario al backend
    setNewComment("");
  };

  if (!isOpen) return null;

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

        {loading ? (
          <p>Loading comments...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="space-y-6 overflow-y-auto h-full">
            {comments && comments.length > 0 ? (
              comments.map((comment, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-gray-200">
                  <div className="flex items-start gap-4">
                    <img
                      src={comment.authorId?.photo || "https://via.placeholder.com/50"}
                      alt="Avatar"
                      className="w-12 h-12 rounded-full border border-gray-300"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{comment.authorId?.name}</p>
                      <p className="text-gray-700 mt-1">{comment.text}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No comments available.</p>
            )}
          </div>
        )}

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
