import { useSelector } from "react-redux";

export default function ModalComments({
  isOpen,
  onClose,
  comments = [],
  newComment,
  setNewComment,
  onCreateComment,
  onUpdateComment,
  onDeleteComment,
  editingComment,
  setEditingComment,
  loading,
  error,
  selectedChapter,
}) {
  if (!isOpen) return null;

  const { user, role } = useSelector((state) => state.authReducer);
  const { authorId, companyId } = useSelector((state) => state.commentReducer || {});

  // Verificar si el usuario puede interactuar con los comentarios
  const canInteract = user && (role === 1 || role === 2);

  const getUserInfo = (comment) => {
    if (comment?.authorId) {
      return {
        name: comment.authorId.name || "Unknown Author",
        avatar: comment.authorId.photo || <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>,
      };
    } else if (comment?.companyId) {
      return {
        name: comment.companyId.name || "Unknown Company",
        avatar: comment.companyId.photo || <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>,
      };
    }
    return { name: "Anonymous", avatar: <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg> };
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (editingComment) {
      setEditingComment({ ...editingComment, message: value });
    } else {
      setNewComment(value);
    }
  };

  const handleAction = () => {
    if (editingComment) {
      onUpdateComment(editingComment._id);
    } else {
      onCreateComment();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg py-4 px-3 w-full max-w-md max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Comments for Chapter: {selectedChapter?.title || "Unknown Chapter"}</h2>
          <button
            onClick={onClose}
            className="text-gray-600 text-xl pb-1 hover:text-gray-900"
          >
            &times;
          </button>
        </div>

        {/* Loading/Error Indicators */}
        {loading && <p>Loading comments...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        {/* Comments List */}
        <div className="space-y-4 mb-4">
          {comments.length === 0 ? (
            <p className="text-gray-500">No comments yet</p>
          ) : (
            comments.map((comment) => {
              const { name, avatar } = getUserInfo(comment);
              return (
                <div key={comment._id} className="bg-gray-100 p-3 rounded-lg shadow-md">
                  <div className="flex items-start space-x-3">
                    <img
                      src={avatar}
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-grow">
                      <p className="font-semibold">{name}</p>
                      <p>{comment.message}</p>
                      {canInteract && (
                        <div className="flex space-x-2 mt-2">
                          <button
                            onClick={() => setEditingComment(comment)}
                            className="text-blue-500 hover:text-blue-700 flex items-center space-x-1"
                          >
                            <span>Edit</span>
                          </button>
                          <button
                            onClick={() => onDeleteComment(comment._id)}
                            className="text-red-500 hover:text-red-700 flex items-center space-x-1"
                          >
                            <span>Delete</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Input Section */}
        {canInteract && (
          <div className="flex items-center sm:space-x-3 mt-4">
            <img
              src={user?.photo || "default-avatar-url"}
              alt="User Avatar"
              className="w-10 h-10 rounded-full object-cover hidden sm:block"
            />
            <input
              type="text"
              value={editingComment ? editingComment.message : newComment}
              onChange={handleInputChange}
              placeholder="Say something here..."
              className="flex-grow p-2 border rounded-lg shadow-md"
            />
            <button
              onClick={handleAction}
              className="bg-orange-500 text-white px-3 ml-1 py-2 rounded-lg hover:bg-orange-600"
            >
              {editingComment ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6" 
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6" 
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
