import "./categoryItem.scss";

const CategoryItem = ({ category }) => {
  const { imageURl, title } = category;
  return (
    <>
      <div className="category-card">
        <div className="">
          <img src={imageURl} alt="" />
        </div>
        <div className="category-body-info">
          <h2>{title}</h2>
          <button>Shoap Now</button>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
