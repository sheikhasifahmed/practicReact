import "./App.css";
import { useEffect, useState } from "react";

const countries = [
  { name: "Bangladesh", currency: "Taka", capital: "Dhaka" },
  { name: "USA", currency: "Dollar", capital: "Wt DC" },
  { name: "India", currency: "Rupia", capital: "Delhi" },
  { name: "UK", currency: "GBP", capital: "London" },
];

function App() {
  return (
    <div className="App">
      {countries.map((country) => (
        <Info
          name={country.name}
          capital={country.capital}
          currency={country.currency}
        ></Info>
      ))}
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}

export default App;

function Info(props) {
  const myStyle = {
    backgroundColor: "lightcoral",
    margin: "20px",
    borderRadius: "10px",
  };
  return (
    <div style={myStyle}>
      <h1>The name of my country is {props.name}.</h1>
      <h3>{props.capital} is the capital of this country.</h3>
      <h3>currency is {props.currency}</h3>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIcrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={handleIcrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
    </div>
  );
}

function ExternalUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  const userStyle = {
    backgroundColor: "lightblue",
    margin: "20px",
  };
  return (
    <div>
      <h2>External Users:</h2>
      {users.map((user) => (
        <div style={userStyle}>
          <h3>Name: {user.name}</h3>
          <h3>User Name:{user.username}</h3>
          <h3>Email:{user.email}</h3>
        </div>
      ))}
    </div>
  );
}
