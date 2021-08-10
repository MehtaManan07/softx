import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getOneProd, updateOneProd } from "./functions/Product";
import { Form, Button, Spinner } from "react-bootstrap";
const Edit = () => {
  const [product, setProduct] = useState(null);
  const [values, setValues] = useState({
    partNumber: "",
    category: "",
    itemName: "",
    sku: "",
    moq: 0,
    mrp: 0,
    price: 0,
  });
  const { id } = useParams();
  const history = useHistory();
  const getProductEffect = () => {
    getOneProd(id).then((data) => {
      setProduct(data);
      setValues({
        ...values,
        partNumber: data.partNumber,
        category: data.category,
        itemName: data.itemName,
        sku: data.sku,
        moq: data.moq,
        mrp: data.mrp,
        price: data.price,
      });
    });
  };
  const onChangeHandler = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    updateOneProd(id, values).then(() => {
      history.push(`/images/product/${id}`);
    });
  };
  useEffect(() => {
    getProductEffect();
  }, []);
  return (
    <>
      {!product ? (
        <div className="d-flex justify-content-center mt-5">
          <Spinner animation="border" variant="secondary" />
        </div>
      ) : (
        <div>
          <div className="p-2">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Part Number</Form.Label>
                <Form.Control
                  type="text"
                  onChange={onChangeHandler("partNumber")}
                  value={values.partNumber}
                  placeholder="Enter Part number"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" disabled value={values.category} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Item Name</Form.Label>
                <Form.Control
                  type="text"
                  onChange={onChangeHandler("itemName")}
                  value={values.itemName}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>SKU</Form.Label>
                <Form.Control type="text" value={values.sku} disabled />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>MOQ</Form.Label>
                <Form.Control
                  type="number"
                  onChange={onChangeHandler("moq")}
                  value={values.moq}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>MRP</Form.Label>
                <Form.Control
                  type="number"
                  onChange={onChangeHandler("mrp")}
                  value={values.mrp}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  onChange={onChangeHandler("price")}
                  value={values.price}
                />
              </Form.Group>
              <div className="d-flex justify-content-center">
                <Button
                  variant="outline-success"
                  className="pl-5 pr-5"
                  onClick={submitHandler}
                >
                  Continue and upload Photos
                </Button>
              </div>
            </Form>
          </div>
        </div>
      )}
    </>
  );
};

export default Edit;
