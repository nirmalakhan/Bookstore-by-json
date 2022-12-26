import React from "react";
import Pages from "./routes/Pages";
import BooksContext from "./context/BooksContext";

function App() {
  return (
    <div className="App">
    <BooksContext>
      <Pages />
      </BooksContext>  
    </div>
  );
}

export default App;
