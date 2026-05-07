import { useState } from "react"

const rickandmortyapi = [
     {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
      "name": "Earth (C-137)",
      "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
      "name": "Earth (Replacement Dimension)",
      "url": "https://rickandmortyapi.com/api/location/20"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/1",
      "https://rickandmortyapi.com/api/episode/2",
      // ...
    ],
    "url": "https://rickandmortyapi.com/api/character/1",
    "created": "2017-11-04T18:48:46.250Z"
  },
  {
    "id": 183,
    "name": "Johnny Depp",
    "status": "Alive",
    "species": "Human",
    "type": "Planet",
    "gender": "Male",
    "origin": {
      "name": "Earth (C-500A)",
      "url": "https://rickandmortyapi.com/api/location/23"
    },
    "location": {
      "name": "Earth (C-500A)",
      "url": "https://rickandmortyapi.com/api/location/23"
    },
    "image": "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
    "episode": [
      "https://rickandmortyapi.com/api/episode/8"
    ],
    "url": "https://rickandmortyapi.com/api/character/183",
    "created": "2017-12-29T18:51:29.693Z"
  }
   
]
function rickandmory(){
    const [getrickandmorty, setrickandmortyGlobal] = useState(null);
    const getrickandmortyData = (idrickandmortyapi)=>{
        const uri = `https://rickandmortyapi.com/api/${idrickandmortyapi}`

        fetch(uri)
            .then(res=>res.json())
                .then(json=>{
                    const RickandmoryFetch = {
                        nome: json.name,
                        status: json.status,
                        especie: json.species,
                        gereno: json.gender,
                        origem: json.origin,
                        localizacao: json.location,
                        tipo: json.type,
                        imagem: json.image,
                        episodios: json.episode
                    }
                    setrickandmortyGlobal(RickandmoryFetch)
                    console.log(RickandmoryFetch);
                })
                .catch(()=>alert("Não foi possivel acessar os dados do personagem"))
    }
    return(
       <div className="container">
        <div className="header">
            <h1>Lista de personagens de rick and mory</h1>
            <p>faça a sua escolha </p>
        </div>

          {rickandmortyGlobal &&(
            <div className="pokemon-info">
                <h2>Nome: {rickandmortyGlobal.nome}</h2>
                <p>Peso: {rickandmortyGlobal.status}</p>
                <p>vida:{rickandmortyGlobal.especie}</p>
                <p>Habilidade: {rickandmortyGlobal.genero }</p>
                <h2>Altura: {rickandmortyGlobal.origem}</h2>
                <img
                src={pokemonGlobal.imagem}
                alt={pokemonGlobal.nome}
                />

            </div>
          )}

        {pokemonlist.map((item)=>(
            <div className="card" key={item}>
                <p>{item.nome}</p>
                <button onClick={()=>getrickandmortyData(item.id)}>Saiba mais</button>
            </div>
        ))}

       </div>
    )
}

export default rickandmory;