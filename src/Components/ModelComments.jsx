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
  error
}) {
  if (!isOpen) return null;

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
      <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Comments</h2>
          <button 
            onClick={onClose} 
            className="text-gray-600 hover:text-gray-900"
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
            comments.map((comment) => (
              <div 
                key={comment._id} 
                className="bg-gray-100 p-3 rounded-lg shadow-md"
              >
                <div className="flex items-start space-x-3">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="User Avatar" 
                    className="w-10 h-10 rounded-full object-cover" 
                  />
                  <div className="flex-grow">
                    <p className="font-semibold">Ignacio Borraz</p> {/* Replace with dynamic name */}
                    <p>{comment.message}</p>
                    <div className="flex space-x-2 mt-2">
                      <button 
                        onClick={() => setEditingComment(comment)}
                        className="text-blue-500 hover:text-blue-700 flex items-center space-x-1"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 20h9"></path>
                          <path d="M12 4h9"></path>
                          <path d="M5 4h4"></path>
                          <path d="M5 20h4"></path>
                        </svg>
                        <span>Edit</span>
                      </button>
                      <button 
                        onClick={() => onDeleteComment(comment._id)}
                        className="text-red-500 hover:text-red-700 flex items-center space-x-1"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 6L6 18"></path>
                          <path d="M6 6L18 18"></path>
                        </svg>
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Input Section */}
        <div className="flex items-center space-x-3 mt-4">
          <img 
            src="https://randomuser.me/api/portraits/men/32.jpg" 
            alt="User Avatar" 
            className="w-10 h-10 rounded-full object-cover" 
          />
          <input 
            type="text"
            value={editingComment ? editingComment.message : newComment}
            onChange={handleInputChange}
            placeholder="Say something here..."
            className="flex-grow p-3 border rounded-lg shadow-md"
          />
          <button 
            onClick={handleAction}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
          >
            {editingComment ? 'Update' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
}
