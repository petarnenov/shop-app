import CategoryItem from '../CategoryItem/CategoryItem';
import './styles.scss';

const Categories = ({ categories }) => (
  <div className="categories-container">
    {categories.map((category) => (
      <CategoryItem key={category.id} category={category} />
    ))}
  </div>
);

export default Categories;
