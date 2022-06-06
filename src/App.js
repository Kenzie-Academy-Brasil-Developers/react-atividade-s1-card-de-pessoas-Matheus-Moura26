import logo from './logo.svg';
import './App.css';
import Pessoa from './Components/Developer.jsx';

function App() {
  const people = [
  {name: "Gabriel", age: 19, country:"Brasil"},
  {name: "Anna", age: 30, country:"Itália"},
  {name: "Hazackerberg", age: 30, country:"Alemanha"},
  {name: "Zoyo", age: 30, country:"Nova Zelandia"},
  ]

  return (
    <div className='App'>
      <header className='App-header'>
      <Pessoa nome="Filipe" age="29"/>
      {people.map( (item, index) => (<Pessoa 
      
      key={index}
      name={item.name}
      age={item.age}
      country={item.country}
      />))}
      </header>
    </div>
    );
}

export default App;
