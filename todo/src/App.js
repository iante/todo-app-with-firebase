import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
    
//fetching data from database when page loads
  useEffect(() => {
    console.log("I ran when the component loaded");
      
//line of code runs when app.js is loaded

    //everytime db changes, its snaps it and gives you that snapshot
    db.collection("todos").onSnapshot((snapshot) => {
         {/*for every doc; which are the elements in our firebase
  db, we loop through all the items and map the individual doc to our todo array*/}
      setTodos(snapshot.docs.map((doc) => doc.data().title));
    });
  }, []);

  const addTodo = (e) => {
       //prevents refreshing the page on submit
    e.preventDefault();
      
       //adding the to do tasks enterd in the input field to the firebase database
    db.collection("todos").add({
      title: input,
    });

    setInput(""); //clears the input field on submit
  };

  return (
    <div className="App">
      <h1>Todo app (Connected to firebase)</h1>
       {/*the onchange checks for a change in the event. i.e 
      if you type in the input field and using the setInput(event.target.value), it
      updates the input in the useState*/}

      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />
        <button disabled={!input} type="submit" onClick={addTodo}>
          Add todo
        </button>
      </form>

 {/*looping through the todo array with the mp function
        and returning an element */}
      {todos.map((todo, i) => (
        <Todo title={todo} key={i} />
      ))}
    </div>
  );
}

export default App;
