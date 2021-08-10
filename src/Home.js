import React, { useEffect, useState } from "react";
import { getAllProds } from "./functions/Product";
import ProductTable from "./Components/ProductTable";
import Loader from "./Components/Loader";
import { Pagination } from "react-bootstrap";
import ProductQuery from "./Components/ProductQuery";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    partNumber: "",
    model: "",
    category: "",
    page: 1,
    size: "",
    sku: "",
  });
  const items = [];
  for (let number = 1; number <= 25; number++) {
    items.push(
      <Pagination.Item
        onClick={() => {
          setFilters({ ...filters, page: number });
            getProds({ ...filters, page: number });
        }}
        key={number}
        active={number === filters.page}
      >
        {number}
      </Pagination.Item>
    );
  }
  const getProds = (filterss) => {
    setLoading(true);
    getAllProds(filterss).then((data) => {
      setProducts(data);
      setLoading(false);
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    getProds(filters);
  };

  useEffect(() => {
    getProds(filters);
  }, []);

  return (
    <>
      <div className="row">
        <div
          style={{ height: "100vh", border: "1px solid white" }}
          className="col-md-3 d-flex flex-column"
        >
          <ProductQuery
            filters={filters}
            submitHandler={submitHandler}
            setFilters={setFilters}
          />
        </div>
        <div className="col-md-9">
          {!loading ? <ProductTable products={products} /> : <Loader />}
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 d-flex flex-column" />
        <div className="col-md-9 justify-content-center d-flex">
          <div>
            <Pagination>{items}</Pagination>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
