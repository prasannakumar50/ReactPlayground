import { useState } from "react";
import "./styles.css";

function Greetings({ name }) {
  const [counter, setCounter] = useState(0);
  return (
    <p onClick={() => setCounter(counter + 1)}>
      Hi, {name}
      {counter}
    </p>
  );
}

function IndianGreetings(props) {
  const { name } = props;
  console.log(props);
  return <p>Vanakkam thalaiva : {name}</p>;
}

function Parent({ children }) {
  //console.log(props);
  return (
    <div style={{ padding: "1rem", backgroundColor: "#efefef" }}>
      <p>Hi. I am parent!</p>
      <p>This is my child</p>
      {children}
    </div>
  );
}

export default function App() {
  return (
    <div className="app">
      <h1>⚛️ react playground!</h1>
      <Greetings name="Virat" />

      <Parent>
        <IndianGreetings name="King" />
      </Parent>
    </div>
  );
}
