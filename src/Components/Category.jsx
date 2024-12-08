import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../store/actions/categoryAction";
import { setSelectedCategory } from "../store/reducers/categoryReducer";

const Category = () => {
    const { allCategory, selectedCategory } = useSelector((state) => state.categoryReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCategory())
            .unwrap()
            .catch((err) => console.error("Error fetching categories:", err));
    }, [dispatch])

    const handleCategorySelect = (categoryName) => {
        dispatch(setSelectedCategory(categoryName)) // categoryName puede ser null para "All"
    }

    return (
        <div className="flex flex-wrap">
            {/* Botón de "All" */}
            <button
                onClick={() => handleCategorySelect(null)} // null representa "todas las categorías"
                className={`px-2 m-1 rounded-full text-xs  md:font-semmibold ${
                    !selectedCategory ? "ring-2 ring-orange-400" : "bg-gray-400"
                }`}
            >
                All
            </button>

            {/* Botones para cada categoría */}
            {allCategory?.map((category) => (
                <button
                    key={category._id}
                    onClick={() => handleCategorySelect(category.name)}
                    className={`py-2 px-3 m-1 rounded-full text-xs md:font-semmibold ${
                        selectedCategory === category.name ? "ring-2 ring-orange-400" : ""
                    }`}
                    style={{
                        backgroundColor: category.color,
                        color: category.hover,
                    }}
                >
                    {category.name}
                </button>
            ))}
        </div>
    )
}

export default Category