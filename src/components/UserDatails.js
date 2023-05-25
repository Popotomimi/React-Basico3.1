const UserDatails = ({id, name, age, profession}) => {
    return (
    <div>
        <p>Nome: {name}</p>
        <p>Idade: {age}</p>
        <p>Profissão: {profession}</p>
        <p>Pode tirar a carta? {age >= 18 ? ("Sim, pode tirar a carta") : ("Não pode tirar a carta")}</p>
        <p>------------------------------------</p>
    </div>
  )
}

export default UserDatails