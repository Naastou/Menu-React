const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category, id) => {
        return (
          <button
            type="button"
            className="btn"
            key={id}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
