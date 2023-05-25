import { useState } from 'react';
import './App.css';

import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import CondicinalRender from './components/CondicinalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDatails from './components/UserDatails';

function App() {
  const name = "Maricocas";
  const [userName] = useState("Mariazinha");

  const cars = [
    {id: 1, brand: "Ferrari", color: "amarelo", newCar: true, km: 0},
    {id: 2, brand: "Kia", color: "branco", newCar: false, km: 455},
    {id: 3, brand: "Renault", color: "azul", newCar: false, km: 1500},
  ];

  const people = [
    {id: 1, name: "Roberto", age: 25, profession: "Programador Front End"},
    {id: 2, name: "Leticia", age: 23, profession: "Enfermeira"},
    {id: 3, name: "Elisabeth", age: 60, profession: "Funcionaria publica"},
  ]

  function showMessage() {
    console.log("Evento do componente pai!");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App">
      <h1>Avançando React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em asset */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <CondicinalRender />
      <ShowUserName name={userName} />
      <h5>Nome da variavel normal: {name}</h5>
      {/* Destructuring */}
      <CarDetails brand="VW" km={1500} color="Blue" newCar={false} />
      {/* reaproveitamento */}
      <CarDetails brand="Ford" color="Vermelha" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Branca" km={4500} newCar={false} />
      {/* Loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}
      {/* fragment */}
      <Fragment propa="teste" />
      {/* Children */}
      <Container myValue="testing">
        <p>Este é o conteudo</p>
      </Container>
      <Container myValue="testing 2">
        <h1>sei la</h1>
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* State Lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* UserDatails */}
      {people.map((pessoa) => (
        <UserDatails key={pessoa.id} name={pessoa.name} age={pessoa.age} profession={pessoa.profession} />
      ))}
    </div>
  );
}

export default App;
