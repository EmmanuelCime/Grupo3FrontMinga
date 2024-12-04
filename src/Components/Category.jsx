import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../store/actions/categoryAction";

const Category = () => {
    const allCategory = useSelector((state) => state.categoryReducer.allCategory);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategory())
            .unwrap()
            .catch((err) => console.error("Error fetching categories:", err));
    }, [dispatch]);

    return (
        <div>
            {allCategory?.map((category) => (
                < button key={category._id} style={{
                    backgroundColor: category.color,
                    color: category.hover,
                }}
                    value={category.name} className="px-2 m-1 rounded-full font-medium">
                    {category.name}
                </button>
            ))
            }
        </div >
    )
}

export default Category