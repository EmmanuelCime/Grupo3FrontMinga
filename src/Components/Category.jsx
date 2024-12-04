import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../store/actions/categoryAction";


/*function getCategoryColor(categoryId, allCategory) {
    if (!allCategory || !Array.isArray(allCategory)) {
        return null;
    }


    const categoryColorMap = allCategory.reduce((acc, category, index) => {
        acc[category.id] = categoryColors[index % categoryColors.length];
        return acc;
    }, {});

    return categoryColorMap[categoryId];
}*/

const CategoryComponent = () => {
    const allCategory = useSelector((state) => state.categoryReducer.allCategory);
    const dispatch = useDispatch()
    console.log(allCategory._id);

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
                    }}
                    value={category.name} className="px-2 m-1 rounded-full">
                    {category.name}
                </button>
            ))
            }
        </div >
    )
}

export default CategoryComponent;
/*<div
          key={category._id}
          style={{
            backgroundColor: category.color,
          }}
        >
          {category.name}
        </div>*/