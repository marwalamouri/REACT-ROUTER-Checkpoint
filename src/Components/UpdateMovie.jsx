import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { updateMovie } from "../Redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "@mui/material";

const UpdateMovie = ({ id }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const { movies } = useSelector((state) => state.movieRed);
  let specificMovie = movies.filter((el) => el.id == id);

  const [updatedMovie, setUpdatedMovie] = useState({
    id: id,
    title: specificMovie[0].title,
    description: specificMovie[0].description,
    posterURL: specificMovie[0].posterURL,
    trailerUrl: specificMovie[0].trailerUrl,
    rating: specificMovie[0].rating,
  });
  const onChangeHandler = (e) => {
    setUpdatedMovie({ ...updatedMovie, [e.target.name]: e.target.value });
  };
  const updateMovieHandler = (e) => {
    e.preventDefault();
    dispatch(updateMovie({ id: id, updatedMovie: updatedMovie }));
    handleClose();
  };
  return (
    <div>
      <Button className="m-2" variant="warning" onClick={handleShow}>
        Update
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                defaultValue={specificMovie[0].title}
                name="title"
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                defaultValue={specificMovie[0].description}
                name="description"
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
                type="text"
                defaultValue={specificMovie[0].posterURL}
                name="posterURL"
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Trailer URL</Form.Label>
              <Form.Control
                type="text"
                defaultValue={specificMovie[0].trailerUrl}
                name="trailerURL"
                onChange={onChangeHandler}
              />
            </Form.Group>
            <Rating
              name="simple-controlled"
              defaultValue={specificMovie[0].rating}
              onChange={(event, newValue) => {
                setUpdatedMovie({ ...updatedMovie, rating: newValue });
              }}
              max={10}
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={updateMovieHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UpdateMovie;
