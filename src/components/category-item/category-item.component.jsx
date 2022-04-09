import "./category-item.styles.scss";

const CategoryItem = ({ category }) => {
  const { id, imageBack, title } = category;
  return (
    <div key={id} className="inner-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageBack})` }}
      />
      <div className="inner-body-container">
        <h2>{title}</h2>
        <p>shop here</p>
      </div>
    </div>
  );
};

export default CategoryItem;
