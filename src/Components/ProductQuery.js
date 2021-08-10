import React from "react";
import { Form, Col, Button } from "react-bootstrap";
const ProductQuery = ({ filters, setFilters, submitHandler }) => {
  const categories = [
    "Custom Steering Wheel Cover",
    "Hand Stitch Steering Cover with needle and thread",
    "Neck Pillow",
    "Cushion Set",
    "Seat cushion and supports",
  ];
  const sizes = [
    'Small Size (14" to 14.25")',
    'Medium Size (14.5" to 15.25")',
    'Large Size (15.5" to 16.25")',
    'D-Shape Size (14.5" to 15.25")',
    "Eeco",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "Universal",
  ];
  return (
    <div className="d-flex flex-column">
      <div className="p-2">
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label column sm="1">
              Part Number
            </Form.Label>
            <Col sm="11">
              <input
                type="text"
                className="form-control"
                value={filters.partNumber}
                onChange={(e) =>
                  setFilters({ ...filters, partNumber: e.target.value })
                }
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Form.Label column sm="1">
              SKU
            </Form.Label>
            <Col sm="11">
              <input
                type="text"
                className="form-control"
                value={filters.sku}
                onChange={(e) =>
                  setFilters({ ...filters, sku: e.target.value })
                }
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Form.Label column sm="1">
              Model
            </Form.Label>
            <Col sm="11">
              <input
                type="text"
                className="form-control"
                value={filters.model}
                onChange={(e) =>
                  setFilters({ ...filters, model: e.target.value })
                }
              />
            </Col>
          </Form.Group>
          <Form.Group>
            <Form.Label column sm="1">
              Category
            </Form.Label>
            <Col sm="11">
              <select
                value={filters.category}
                onChange={(e) =>
                  setFilters({ ...filters, category: e.target.value })
                }
                className="basic-multi-select form-control"
              >
                <option value=""></option>
                {categories.map((a, i) => (
                  <option value={a} key={i}>
                    {a}
                  </option>
                ))}
              </select>
            </Col>
          </Form.Group>
          <Form.Group>
            <Form.Label column sm="1">
              Size
            </Form.Label>
            <Col sm="11">
              <select
                value={filters.size}
                onChange={(e) =>
                  setFilters({ ...filters, size: e.target.value })
                }
                className="basic-multi-select form-control"
              >
                <option value=""></option>
                {sizes.map((a, i) => (
                  <option value={a} key={i}>
                    {a}
                  </option>
                ))}
              </select>
            </Col>
          </Form.Group>
          <div className="text-center">
            <Button
              type="submit"
              block
              className="mt-2"
              variant="outline-primary"
            >
              Search Products
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ProductQuery;
