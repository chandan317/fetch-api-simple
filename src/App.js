// import { useEffect } from "react";
import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    // const url = "https://api.adviceslip.com/advice";
    const url = "https://jsonplaceholder.typicode.com/todos/4";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.id);
        setAdvice(json.title);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  });

  return (
    <div className="App">
      <h1>{advice}</h1>
    </div>
  );
}

// import React, { useEffect, useState } from "react";

// const App = () => {
//   const [advise, setAdvise] = useState();
//   useEffect(() => {
//     const url = "https://api.adviceslip.com/advice";

//     const fetchData = async () => {
//       try {
//         const response = await fetch(url);
//         const json = await response.json();
//         console.log(json);
//         setAdvise(json.slip.advice);
//         // setAdvise(json.slip.id);
//       } catch (error) {
//         console.log("error", error);
//       }
//     };
//     fetchData();
//   });

//   return <h1>{advise}</h1>;
// };
// export default App;
