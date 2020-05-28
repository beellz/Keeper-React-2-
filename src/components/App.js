import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function notesAll(notesper) {
  return (
      <Note
      key={notesper.id}
      title={notesper.title}
      content={notesper.content}
  />
  )
}


function App() {
  return (
    <div>
      <Header />
      {notes.map(notesAll)}
      <Footer />
    </div>
  );
}

export default App;
