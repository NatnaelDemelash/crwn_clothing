import "./categories.styles.scss";

import CategoryItem from "../category-item/CategoryItem";

const categories = [
  {
    id: 1,
    title: "Hats",
    imageURl:
      "https://freepngimg.com/thumb/hat/151314-cap-hat-sports-free-download-png-hd.png",
  },
  {
    id: 2,
    title: "Jackets",
    imageURl: "https://freepngimg.com/save/13466-jacket-png-file/1297x1200",
  },
  {
    id: 3,
    title: "Snickers",
    imageURl:
      "https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-12.png",
  },
  {
    id: 4,
    title: "Belts",
    imageURl: "https://freepngimg.com/thumb/belt/136048-belt-hd-image-free.png",
  },
];

const Categories = () => {
  return (
    <div className="categories-card">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
