import { useState } from "react";

function Rickandmory() {
  const [rickandmortyGlobal, setRickandmortyGlobal] = useState(null);
  const getRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    const uri = `https://rickandmortyapi.com/api/character/${randomId}`;

    fetch(uri)
      .then((res) => res.json())
      .then((json) => {
        const character = {
          nome: json.name,
          status: json.status,
          especie: json.species,
          genero: json.gender,
          origem: json.origin.name,
          localizacao: json.location.name,
          tipo: json.type,
          imagem: json.image,
        };
        setRickandmortyGlobal(character);
      })
      .catch(() =>
        alert("Não foi possível acessar os dados do personagem")
      );
  };
  return (
    <div className="rick">
      <div className="header">
        <h1>Personagem Aleatório</h1>
        <p>Clique para gerar um personagem aleatório</p>
        <button onClick={getRandomCharacter}>
          Gerar Personagem
        </button>
      </div>
      {rickandmortyGlobal && (
        <div className="character-info">
          <img
            src={rickandmortyGlobal.imagem}
            alt={rickandmortyGlobal.nome}
          />
          <h2>{rickandmortyGlobal.nome}</h2>
          <p>Status: {rickandmortyGlobal.status}</p>
          <p>Espécie: {rickandmortyGlobal.especie}</p>
          <p>Gênero: {rickandmortyGlobal.genero}</p>
          <p>Origem: {rickandmortyGlobal.origem}</p>
          <p>Localização: {rickandmortyGlobal.localizacao}</p>
        </div>
      )}
    </div>
  );
}
export default Rickandmory;