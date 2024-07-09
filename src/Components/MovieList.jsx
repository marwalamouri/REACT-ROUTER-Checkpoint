import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import { Form, Container, Row, Col } from "react-bootstrap";
import { Rating } from "@mui/material";

const MovieList = () => {
  const { movies } = useSelector((state) => state.movieRed);
  const [search, setSearch] = useState("");
  const [rating, setRating] = useState(0);
  return (
    <div>
      <Container className="d-flex gap-3 m-2 mb-3">
        <Form>
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Movie Title"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </Form.Group>
        </Form>
        <Rating
          max={10}
          onChange={(e, newValue) => {
            setRating(newValue);
          }}
        />
      </Container>
      <Row className="g-4">
        {movies
          .filter(
            (el) =>
              el.title
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase()) && el.rating >= rating
          )
          .map((el) => (
            <Col>
              {" "}
              <MovieCard movieInfo={el} key={el.id} />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default MovieList;
