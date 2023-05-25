import {useState} from 'react';

const CondicinalRender = () => {
  const [x] = useState(false);

  const [name, setName] = useState("João");

    return (
    <div>
    <h1>Isso será exibido?</h1>
    {x && <p>Se x for true, sim!</p>}
    {!x && <p>x é falso</p>}
    <h2>O nome é {name}?</h2>
    {name === "João" ? ("Sim") : ("Não")}
    <button onClick={() => setName("Alfredo")}>Clica aqui</button>
    </div>
  )
}

export default CondicinalRender;