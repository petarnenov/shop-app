import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './styles.scss';

const CategoryItem = ({ category }) => {
  const { id, imageUrl, title, route } = category;
  const navigate = useNavigate();

  // Alternative way to navigation between pages
  //const handleNavigate = () => navigate(route);

  return (
    <Link to={route} className="category-item-container" key={id}>
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
