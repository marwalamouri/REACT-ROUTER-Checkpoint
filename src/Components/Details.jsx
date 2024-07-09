import { Rating } from "@mui/material";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const { movies } = useSelector((state) => state.movieRed);

  let specificMovie = movies.filter((el) => el.id == id);

  return (
    <div>
      <Card style={{ width: "800px", margin: "auto" }}>
        <iframe
          src={specificMovie[0].trailerUrl}
          style={{ margin: "auto" }}
          width={650}
          height={400}
        ></iframe>
        <Card.Body>
          <Card.Title>{specificMovie[0].title}</Card.Title>
          <Card.Text>{specificMovie[0].description}</Card.Text>
          <Rating
            name="read-only"
            value={specificMovie[0].rating}
            readOnly
            max={10}
          />
          <br />
          <Link to="/">
            <Button variant="dark">Back Home</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;
