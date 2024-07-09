import { v4 as uuidv4 } from "uuid";

const data = [
  {
    id: uuidv4(),
    title: "John Wick : Chapitre 4",
    description:
      "John Wick faces his deadliest adversaries in the fourth installment of the series. So, enjoy watching this movie and have fun.",
    posterURL:
      "https://m.media-amazon.com/images/I/81fk-N7tvbL._AC_UF894,1000_QL80_.jpg",
    rating: 9,
    trailerUrl: "https://www.youtube.com/embed/qEVUtrk8_B4?si=flUi97Im7oHI6Z-D",
  },
  {
    id: uuidv4(),
    title: "Fast & Furious X",
    description:
      "During numerous missions and against all odds, Dom Toretto and his family have outwitted and overtaken all enemies in their path.",
    posterURL:
      "https://fr.web.img5.acsta.net/pictures/23/05/10/10/55/5129031.jpg",
    rating: 4,
    trailerUrl: "https://www.youtube.com/embed/32RAq6JzY-w?si=q9rNPT8P-P9g9yet",
  },
  {
    id: uuidv4(),
    title: "Avatar",
    description:
      "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    posterURL:
      "https://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    rating: 2,
    trailerUrl: "https://m.youtube.com/watch?v=DX2OGbLFmWI",
  },
];

export default data;
