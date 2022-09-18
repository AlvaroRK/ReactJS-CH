import { Link } from "react-router-dom";

const Filter = () => {
  return (
    <div className="filterContainer">
      <h2>Filter by:</h2>
      <h3>Precio (HAY QUE HACERLO FUNCIONAR)</h3>
      <div className="filter-price">
        <input type="number" placeholder="Min:" maxLength={8} />
        <span>-</span>
        <input type="number" placeholder="Max:" maxLength={8} />
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
          </svg>
        </button>
      </div>
      <div>
        <h3>Brand</h3>
        <Link to={"/products/samsung"}>Samsung</Link>
        <Link to={"/products/iphone"}>Iphone</Link>
        <Link to={"/products/motorola"}>Motorola</Link>
        <Link to={"/products/huawei"}>Huawei</Link>
      </div>
    </div>
  );
};
export default Filter;
