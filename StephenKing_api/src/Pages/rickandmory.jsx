import { useState } from "react";

const rickandmortyapi = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    gender: "Male",
    origin: {
      name: "Earth (C-137)",
    },
    location: {
      name: "Earth (Replacement Dimension)",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },

  {
    id: 183,
    name: "Johnny Depp",
    status: "Alive",
    species: "Human",
    gender: "Male",
    origin: {
      name: "Earth (C-500A)",
    },
    location: {
      name: "Earth (C-500A)",
    },
    image: "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
  },
];

function rickandmory() {
  const [rickandmortyGlobal, setrickandmortyGlobal] = useState(null);

  const getrickandmortyData = (id) => {

    // URL correta
    const uri = `https://rickandmortyapi.com/api/character/${id}`;

    fetch(uri)
      .then((res) => res.json())
      .then((json) => {
        const RickandmoryFetch = {
          nome: json.name,
          status: json.status,
          especie: json.species,
          genero: json.gender,
          origem: json.origin.name,
          localizacao: json.location.name,
          tipo: json.type,
          imagem: json.image,
          episodios: json.episode,
        };

        setrickandmortyGlobal(RickandmoryFetch);

        console.log(RickandmoryFetch);
      })
      .catch(() =>
        alert("Não foi possível acessar os dados do personagem")
      );
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Lista de personagens de Rick and Morty</h1>
        <p>Faça a sua escolha</p>
      </div>

      {rickandmortyGlobal && (
        <div className="pokemon-info">
          <h2>Nome: {rickandmortyGlobal.nome}</h2>

          <p>Status: {rickandmortyGlobal.status}</p>

          <p>Espécie: {rickandmortyGlobal.especie}</p>

          <p>Gênero: {rickandmortyGlobal.genero}</p>

          <p>Origem: {rickandmortyGlobal.origem}</p>

          <p>Localização: {rickandmortyGlobal.localizacao}</p>

          <img
            src={rickandmortyGlobal.imagem}
            alt={rickandmortyGlobal.nome}
          />
        </div>
      )}

      {rickandmortyapi.map((item) => (
        <div className="card" key={item.id}>
          <p>{item.name}</p>

          <button onClick={() => getrickandmortyData(item.id)}>
            Saiba mais
          </button>
        </div>
      ))}
    </div>
  );
}

export default rickandmory;