export const categoryColors = [
    "-red-",
    "-blue-",
    "-green-",
    "-yellow-",
    "-purple-",
    "-pink-",
    "-orange-",
];

export function getCategoryColor(categoryId, uniqueCategories) {
    const categoryColorMap = uniqueCategories.reduce((acc, category, index) => {
        acc[category] = categoryColors[index % categoryColors.length]
        return acc
    }, {})

    return categoryColorMap[categoryId]
}