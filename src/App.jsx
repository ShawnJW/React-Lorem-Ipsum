import React from "react";
import { useState } from "react";
import data from "./data";

const App = () => {

  // Set up count state variable.
  const [count, setCount] = useState(1);
  // Set up text state variable.
    const [text, setText] = useState([]);
    // Set up handleSubmit function.
    const handleSubmit = (e) => {
        e.preventDefault();
        let amount = parseInt(count);
        if (count <= 0) {
            amount = 1;
        }
        if (count > 8) {
            amount = 8;
        }
        setText(data.slice(0, amount));
    }

  return( <section className="section-center">
    <h4>tired of boring lorem ipsum?</h4>
    <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" min="1" max="8" step="1" name="amount" id="amount" value={count} onChange={(e) => setCount(e.target.value)} />
        <button type="submit" className="btn">generate</button>
    </form>
      <article className="lorem-text">
          {text.map((item, index) => {
              return <p key={index}>{item}</p>;
          }
            )}
              </article>
  </section>
    );
};

export default App;
