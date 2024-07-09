import { Rating } from "@mui/material";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../Redux/movieSlice";
import { Link } from "react-router-dom";
import UpdateMovie from "./UpdateMovie";

const MovieCard = ({ movieInfo }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={movieInfo.posterURL} />
        <Card.Body>
          <Card.Title>{movieInfo.title}</Card.Title>
          <Card.Text>{movieInfo.description}</Card.Text>
          <Rating name="read-only" value={movieInfo.rating} readOnly max={10} />

          <Link to={`/details/${movieInfo.id}`}>
            <Button variant="dark">Check Details</Button>
          </Link>
          <Button
            className="m-2"
            variant="danger"
            onClick={() => {
              dispatch(deleteMovie(movieInfo.id));
            }}
          >
            Delete
          </Button>
          <UpdateMovie id={movieInfo.id} />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
