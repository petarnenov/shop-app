import Categoryitem from "../CategoryItem/CategoryItem";
import "./styles.scss";

const Categories = ({ categories }) => (
  <div className="categories-container">
    {categories.map((category) => (
      <Categoryitem key={category.id} category={category} />
    ))}
  </div>
);

export default Categories;
