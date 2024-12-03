export const categoryColors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "pink",
    "orange",
]

export function getCategoryColor(categoryId, allCategory) {
    const categoryColorMap = allCategory.color.reduce((acc, category, index) => {
        acc[category] = categoryColors[index % categoryColors.length]
        return acc
    }, {})

    return categoryColorMap[categoryId]
}