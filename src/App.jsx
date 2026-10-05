import "./App.css";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import StudentViewer from "./components/StudentViewe";

function App() {
  const students = [
    { id: 1, name: "Holger", classRoom: "A" },
    { id: 2, name: "Alberte", classRoom: "A" },
    { id: 3, name: "Frederik", classRoom: "B" },
    { id: 4, name: "Fran", classRoom: "C" },
    { id: 5, name: "Jonas", classRoom: "C" },
  ];
  let name = "React";
  return (
    <>
      <h1>Hello {name}</h1>
      <Greeting name="Holger" />
      <Counter></Counter>
      <StudentViewer students={students} />
    </>
  );
}

export default App;
