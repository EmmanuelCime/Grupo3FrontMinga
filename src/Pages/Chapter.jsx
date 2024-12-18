import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getChapter } from "../store/actions/chapterAction";
import { fetchCommentsByChapter, createComment, updateComment, deleteComment } from "../store/actions/commentsAction";
import ModalComments from "../Components/ModelComments";
import emojiLike from "../assets/emojiLike.png";
import emojiDislike from "../assets/emojiDislike.png";
import emojiLove from "../assets/emojiLove.png";
import emojiWow from "../assets/emojiWow.png";
import { createReaction/*, updateReaction, deleteReaction */} from "../store/actions/reactionAction";
import { setSwitchSig } from "../store/actions/authAction";

export default function Chapter() {
    const dispatch = useDispatch();
    const { chapters, loading, error } = useSelector((state) => state.chapterReducer);
    const { comments, loading: commentsLoading, error: commentsError } = useSelector((state) => state.comments);
    const { author, company, user, role, switchSignIn } = useSelector((state) => state.authReducer)

    const [view, setView] = useState("manga")
    const { id } = useParams()

    const [selectedChapter, setSelectedChapter] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedReaction, setSelectedReaction] = useState(null)
    const [newComment, setNewComment] = useState("")
    const [editingComment, setEditingComment] = useState(null)
    const { mangaId } = useSelector((state) => state.mangaReducer)
    
    // Determine if the user has permission to interact
    const canInteract = user && (role === 1 || role === 2)

    const reactions = [
        { id: "1", img: emojiLike, alt: "Like" },
        { id: "2", img: emojiDislike, alt: "Dislike" },
        { id: "3", img: emojiWow, alt: "Wow" },
        { id: "4", img: emojiLove, alt: "Love" },
    ];

    useEffect(() => {
        if (switchSignIn) {
            dispatch(setSwitchSig())
        }
        dispatch(getChapter(id));
    }, [dispatch, id])

    const openCommentsModal = (chapter) => {
        setSelectedChapter(chapter)
        dispatch(fetchCommentsByChapter(chapter._id))
        setIsModalOpen(true)
    }


    const closeCommentsModal = () => {
        setIsModalOpen(false)
        setSelectedChapter(null)
        setNewComment("")
        setEditingComment(null)
    }

    const handleReactionChange = (reactionId) => {
        setSelectedReaction(reactionId);
        dispatch(createReaction({ mangaId: mangaId, reactionType: reactionId, authorId: author,companyId: company }))
            .unwrap()
            .then((data) => {
                console.log("Reaction created:", data);
            })
            .catch((err) => {
                console.error("Error creating reaction:", err);
            });
    };
    
    const handleCreateComment = () => {
        if (newComment.trim()) {
            dispatch(
                createComment({
                    chapterId: selectedChapter._id,
                    message: newComment,
                    authorId: author?._id,
                    companyId: company?._id,
                })
            )
                .then(() => {
                    dispatch(fetchCommentsByChapter(selectedChapter._id));
                    setNewComment("");
                })
                .catch((error) => {
                    console.error("Error creating comment:", error)
                })
        } else {
            console.warn("Comment message cannot be empty.")
        }
    }

    const handleUpdateComment = () => {
        if (!editingComment?.message.trim()) {
            console.error("Datos inválidos para actualizar el comentario");
            return
        }
        dispatch(updateComment({ commentId: editingComment._id, message: editingComment.message }))
            .then((result) => {
                if (updateComment.fulfilled.match(result)) {
                    dispatch(fetchCommentsByChapter(selectedChapter._id));
                    setEditingComment(null);
                } else {
                    console.error("Error al actualizar el comentario:", result.payload);
                }
            })
            .catch((error) => {
                console.error("Error al manejar la actualización:", error);
            })
    }


    const handleDeleteComment = (commentId) => {
        dispatch(deleteComment(commentId)).then(() => {
            if (selectedChapter) {
                dispatch(fetchCommentsByChapter(selectedChapter._id));
            }
        })
    }

    const startEditing = (comment) => {
        setEditingComment({ ...comment })
    }

    const handleChange = (reactionId) => {
        setSelectedReaction(reactionId)
    }

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">
          <svg viewBox="0 0 1024 1024" fill="currentColor" className="animate-spin h-20 w-20 mr-3" >
            <path d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z" />
          </svg>
          <p className="text-orange-500 text-xl font-semibold">Loading...</p>
        </div>
      }
    if (error) return <p>Error: {error}</p>;

    if (!chapters || chapters.length === 0) {
        return <div>Loading Chapter...</div>;
    }


    return (
        <div className="flex flex-col md:flex-row flex-wrap mx-auto p-3 pt-14 lg:px-16 sm:p-4 sm:pt-16 bg-[#EBEBEB] ">
            {/* Left Panel - Manga Image */}
            <div className="md:w-1/2 flex justify-center md:pr-3 md:mb-4 ">
                <img
                    src={chapters[0].mangaId.coverPhoto}
                    alt={chapters.title}
                    className="rounded-lg shadow-lg w-full max-h-[75vh] object-cover xl:mr-8 xl:max-h-[65vh] "
                />
            </div>

            {/* Right Panel - Details */}
            <div className="md:w-1/2 flex flex-col gap-6 md:p-2">
                <div>
                    <h1 className="text-4xl font-bold text-gray-800 mt-4 md:text-5xl ">{chapters[0].mangaId.title}</h1>
                    <div className="flex space-x-32 md:space-x-50 lg:space-x-60 mt-4 lg:py-3">
                        {/*<Badge category={chapters[0].mangaId.categoryId.name} />*/}
                        {/* <p className="text-sm py-2 font-semibold text-gray-500">Name Company</p> */}
                    </div>
                </div>

                {/* Reaction Icons */}
                <div className="flex justify-around px-2">
                    {reactions.map((reaction) => (
                        <label key={reaction.id} className="flex items-center">
                            <input
                                type="radio"
                                name="reaction"
                                value={reaction.id}
                                checked={selectedReaction === reaction.id}
                                onChange={() => handleReactionChange(reaction.id)}
                                disabled={!canInteract}
                                className="hidden"
                            />
                            <div
                                className={`flex items-center justify-center w-14 h-14 p-2 rounded-full shadow-md cursor-pointer transition-colors ${selectedReaction === reaction.id
                                        ? "bg-orange-400"
                                        : "bg-white hover:bg-gray-200"
                                    }`}
                            >
                                <img src={reaction.img} alt={reaction.alt} />
                            </div>
                        </label>
                    ))}
                </div>


                {/* Rating */}
                <div className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 mb-5 sm:px-14">
                    <div className="flex flex-col items-center">
                        <span className="text-lg font-semibold text-gray-800 lg:text-xl">4.5/5</span>
                        <span className="text-xs lg:text-md text-gray-500">Rating</span>
                    </div>
                    <div className="h-8 w-px bg-gray-300"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-lg font-semibold text-gray-800 lg:text-xl">{chapters.length}</span>
                        <span className="text-xs lg:text-md text-gray-500">Chapters</span>
                    </div>
                    <div className="h-8 w-px bg-gray-300"></div>
                    <div className="flex flex-col items-center">
                        <span className="text-lg font-semibold text-gray-800 lg:text-xl">Eng</span>
                        <span className="text-xs lg:text-md text-gray-500">Language</span>
                    </div>
                </div>
            </div>

            <div className="md:my-2 lg:w-full xl:my-4 xl:mx-4">
                {/* View Buttons */}
                <div className="flex items-center bg-gray-300 rounded-full mb-4">
                    <button
                        onClick={() => setView("manga")}
                        className={`flex-1 px-4 py-2 sm:py-2 xl:py-3 text-center rounded-full transition-colors duration-300 ${view === "manga" ? "bg-orange-500 text-white" : "text-gray-500"
                            }`}
                    >
                        Manga
                    </button>
                    <button
                        onClick={() => setView("chapters")}
                        className={`flex-1 px-4 py-2 xl:py-3 text-center rounded-full transition-colors duration-300 ${view === "chapters" ? "bg-orange-500 text-white" : "text-gray-500"
                            }`}
                    >
                        Chapters
                    </button>
                </div>

                {/* Right Panel - Chapter List */}
                <div className="lg:w-full mb-5 sm:px-4 md:w-full">
                    {view === "chapters" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
                            {chapters.map((chapter, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-4 p-2 bg-white shadow-md rounded-lg hover:shadow-lg sm:p-3 lgw-6/12"
                                >
                                    <img
                                        src={chapter.coverPhoto}
                                        alt={chapter.title}
                                        className="w-16 h-16 sm:w-24 sm:h-24 lg:w-auto lg:h-32 rounded-lg object-cover"
                                    />
                                    <div className="flex-1">
                                        <h2 className="text-sm sm:text-lg lg:text-xl font-semibold text-gray-800">
                                            {chapter.title}
                                        </h2>
                                        <div className="flex items-start gap-1">
                                            {/* button que abre el modal de comentarios */}
                                            <button
                                                onClick={() => openCommentsModal(chapter)}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    className="size-4 sm:size-5 mt-1 text-gray-600"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                                                    />
                                                </svg>
                                            </button>
                                            <p className="text-xs sm:text-sm mt-1 text-gray-500 ">
                                                {chapter.pages.length} Pages
                                            </p>
                                        </div>
                                    </div>
                                    <NavLink to={`/details/${chapter._id}`}>
                                        <button className="px-5 py-3 sm:mx-4  bg-orange-500 text-white rounded-3xl hover:bg-orange-400">
                                            Read
                                        </button>
                                    </NavLink>
                                </div>
                            ))}
                        </div>
                    )}
                    {view === "manga" && (
                        <p className="text-gray-500 p-2 md:p-3">{chapters[0].mangaId.description}</p>
                    )}
                </div>
            </div>

            {/* Modal Comments */}
            <div className="flex flex-col gap-4">
                <ModalComments
                    isOpen={isModalOpen}
                    onClose={closeCommentsModal}
                    chapterId={selectedChapter?._id}
                    comments={comments}
                    newComment={newComment}
                    setNewComment={setNewComment}
                    onCreateComment={handleCreateComment}
                    onUpdateComment={handleUpdateComment}
                    onDeleteComment={handleDeleteComment}
                    editingComment={editingComment}
                    setEditingComment={setEditingComment}
                    loading={commentsLoading}
                    error={commentsError}
                    selectedChapter={selectedChapter}
                />
            </div>
        </div>
    )
}
