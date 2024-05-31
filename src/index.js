import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// function Test() {
//   const [movieRate, setMovieRate] = useState(0);
//   return (
//     <div>
//       <StartRating
//         setMovieRate={setMovieRate}
//         color="blue"
//         maxRating={15}
//         size={25}
//       />
//       <p>The movie is rated to be {movieRate}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
