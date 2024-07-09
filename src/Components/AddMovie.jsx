import { Rating } from "@mui/material";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addMovie } from "../Redux/movieSlice";

const AddMovie = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newMovie, setNewMovie] = useState({
    id: uuidv4(),
    title: "",
    desctiption: "",
    posterURL: "",
    trailerURL: "",
  });
  const onChangeHandler = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };
  const AddMovieHandler = (e) => {
    e.preventDefault();
    dispatch(addMovie(newMovie));
    handleClose();
  };
  return (
    <div>
      <Button className="m-3" variant="dark" onClick={handleShow}>
        Add New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                type="text"
                name="posterURL"
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Trailer URL</Form.Label>
              <Form.Control
                type="text"
                name="trailerURL"
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Rating
              name="simple-controlled"
              onChange={(event, newValue) => {
                setNewMovie({ ...newMovie, rating: newValue });
              }}
              max={10}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={AddMovieHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
