import "./App.css";
import Pessoa from "./Components/Developer.jsx";

function App() {
  const people = [
    { name: "Gabriel", age: 19, country: "Brasil" },
    { name: "Anna", age: 30, country: "Itália" },
    { name: "Hazackerberg", age: 30, country: "Alemanha" },
    { name: "Zoyo", age: 30, country: "Nova Zelandia" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        {people.map(({ name, age, country }, index) => (
          <Pessoa key={index} name={name} age={age} country={country} />
        ))}
      </header>
    </div>
  )
}

export default App;
