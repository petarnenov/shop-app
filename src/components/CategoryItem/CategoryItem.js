import { Link } from 'react-router-dom';
import './styles.scss';

const CategoryItem = ({ category }) => {
  const { id, imageUrl, title } = category;
  return (
    <Link
      to={`shop/${title.toLowerCase()}`}
      className="category-item-container"
      key={id}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-item-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
