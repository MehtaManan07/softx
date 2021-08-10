import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getOneProd, uploadPhoto, deleteImage } from "./functions/Product";

const Photos = () => {
  const [images, setImages] = useState([]);
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [deleteID, setDeleteID] = useState("");
  const { id } = useParams();

  const submitHandler = (e) => {
    setLoading(true);
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append(`images`, files[i]);
    }
    uploadPhoto(id, data).then((data) => {
      setLoading(false);
      setImages(data);
      setFiles([])
    });
  };
  const deletePhoto = (e) => {
    e.preventDefault();
    deleteImage(id, deleteID).then((data) => {
      setImages(data);
      setShow(false)
    });
  };
  useEffect(() => {
    getOneProd(id).then((data) => {
      setImages(data.images);

    });
  }, []);
  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Photo</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete the image?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={deletePhoto}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      {images.map((image, i) => {
        return (
          <>
            <img
              src={image.uri}
              alt="hede"
              style={{ margin: 50 }}
              key={i}
              className="rounded"
            />
            <Button
              onClick={() => {
                setShow(true);
                setDeleteID(image.cloudinary_id);
              }}
              variant="outline-primary"
            >
              Delete Image
            </Button>
          </>
        );
      })}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 200,
        }}
      >
        {loading ? (
          <h1>UPLOADING...</h1>
        ) : (
          <>
            <h1>START ADDING IMAGES NOW </h1>
            <h6>{`(There are ${images.length} images for this product)`}</h6>
          </>
        )}
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Please select multiple files</Form.Label>
          <Form.Control
            type="file"
            onChange={(e) => {
              setFiles([...files, ...e.target.files]);
            }}
            multiple
            size="lg"
          />
        </Form.Group>
        <Button
          onClick={submitHandler}
          disabled={loading || files.length < 1}
          variant="outline-primary"
        >
          Upload
        </Button>
      </div>
    </>
  );
};

export default Photos;
