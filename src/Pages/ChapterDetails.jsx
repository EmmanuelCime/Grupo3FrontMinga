import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllChapter } from "../store/actions/chapterAction";
import { EffectFlip } from "swiper/modules";
import "swiper/css/effect-flip";

export default function ViewChapter() {
  const dispatch = useDispatch()
  const { allChapters, loading, error } = useSelector((state) => state.chapterReducer)
  const { id } = useParams()

  useEffect(() => {
    dispatch(getAllChapter(id))
      .unwrap()
      .catch((err) => console.error("Error fetching chapter:", err)); 
  }, [dispatch, id])

  const chapter = allChapters?.find((chapter) => chapter._id === id)

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">
      <svg viewBox="0 0 1024 1024" fill="currentColor" className="animate-spin h-20 w-20 mr-3" >
        <path d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z" />
      </svg>
      <p className="text-orange-500 text-xl font-semibold">Loading...</p>
    </div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">Error: {error}</div>;
  }

  if (!chapter) {
    return <div className="min-h-screen flex items-center justify-center">Chapter not found.</div>;
  }

  return (
    <div className="min-h-screen bg-white-900 text-white">
      <ChapterDetails
        pages={chapter.pages}
        chapterTitle={chapter.title}
        chapterNumber={chapter.order}
      />
    </div>
  );
}

function ChapterDetails({ pages, chapterTitle, chapterNumber }) {
  const [currentPage, setCurrentPage] = useState(1);

  const handleSlideChange = (swiper) => {
    setCurrentPage(swiper.activeIndex + 1);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center bg-[#EBEBEB]">
      {/* Encabezado */}
      <div className="w-full h-16 flex text-center items-center justify-center px-4 py-4 bg-orange-500">
        <div className="text-xs sm:text-base md:text-lg lg:text-xl font-semibold">
          Capítulo {chapterNumber} - {chapterTitle}
        </div>
      </div>

      {/* Carrusel de imágenes */}
      <Swiper
        modules={[Navigation, Pagination, EffectFlip]}
        effect="flip" 
        flipEffect={{
          slideShadows: true,
          limitRotation: true, 
        }}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        onSlideChange={handleSlideChange}
        spaceBetween={10}
        slidesPerView={1}
        className="w-full h-[78vh] mb-5 "
      >
        {pages.map((page, index) => (
          <SwiperSlide key={index}>
            <img
              src={page}
              alt={`Página ${index + 1}`}
              className="h-full w-full mx-auto mt-6 sm:w-1/2 lg:w-1/3 object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Sección con número de página y comentarios */}
      <div className="relative flex items-center justify-center gap-3 text-black py-3 pt-2 md:my-1 z-10">
        {/* Icono para comentarios */}
     
     {/* para abrir el modal  */}
        <button className="text-lg sm:text-xl md:text-2xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
          </svg>
          
        </button>

        {/* Número de la página actual */}
        <span className="text-base sm:text-lg md:text-xl font-bold ">{currentPage}</span>
      </div>

      {/* Flechas de navegación */}
      <div className="swiper-button-prev !text-orange-500"></div>
      <div className="swiper-button-next !text-orange-500"></div>
    </div>
  );
}
