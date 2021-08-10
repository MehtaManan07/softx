import React from "react";
import { Link } from "react-router-dom";

const ProductTable = ({ products }) => {
  return (
    <div>
      {products && products.length > -1 ? (
        <>
          <table className="table table-striped table-bordered text-center table-hover">
            <thead>
              <tr>
                <th scope="col">Part No.</th>
                <th scope="col">SKU</th>
                <th scope="col">Model</th>
                <th scope="col">Size</th>
                <th scope="col">Images</th>
                <th scope="col">Color</th>
                <th scope="col">MRP</th>
                <th scope="col">{``}</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => (
                <tr key={i}>
                  <td>{product.partNumber}</td>
                  <td>{product.sku}</td>
                  <td>{product.model}</td>
                  <td>{product.size}</td>
                  <td>{product.images.length}</td>
                  <td>{product.color}</td>
                  <td>
                    Rs <strong>{Math.round(product.mrp)}</strong>
                  </td>
                  <td>
                    <div className="d-flex justify-content-around">
                      <Link to={`/edit/product/${product._id}`}>
                        <i
                          style={{
                            cursor: "pointer",
                            color: "rgba(0,0,255,0.5)",
                          }}
                          className="fa fa-edit"
                        />
                      </Link>
                      <i
                        style={{
                          cursor: "pointer",
                          color: "rgba(255,0,0,0.5)",
                        }}
                        // onClick={() => deleteOneProduct(product._id)}
                        className="fa fa-trash"
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <>
          <h3 className="text-center">NO PRODUCTS FOUND</h3> <br />
          {/* <div className="text-center">
            <span
              onClick={() => history.goBack()}
              style={{ cursor: "pointer", color: "blue" }}
              className="mr-3"
            >
              Go back
            </span>
            <span
              onClick={() => {
                history.push("/products/all");
                window.location.reload();
              }}
              style={{ cursor: "pointer", color: "blue" }}
            >
              View All Products
            </span>
          </div> */}
        </>
      )}
    </div>
  );
};

export default ProductTable;
