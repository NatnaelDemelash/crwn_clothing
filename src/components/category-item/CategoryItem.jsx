import styles from "./CategoryItem.module.scss";

const CategoryItem = ({ category }) => {
  const { imageURl, title } = category;
  return (
    <>
      <div className={styles.categoryCard}>
        <div className="">
          <img src={imageURl} alt="" />
        </div>
        <div className={styles.categoryInfo}>
          <h2>{title}</h2>
          <button>Shoap Now</button>
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
