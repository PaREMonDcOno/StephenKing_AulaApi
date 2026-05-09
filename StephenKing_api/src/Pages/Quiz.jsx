import { useEffect, useState } from "react";

function Quiz() {

  const [characters, setCharacters] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(data => setCharacters(data.results.slice(0, 10)));
  }, []);

  function handleAnswer(answer) {
    if (answer === characters[current].status) {
      setScore(score + 1);
    }
    setCurrent(current + 1);
  }

  if (characters.length === 0) {
    return <p>Carregando...</p>;
  }

  if (current >= characters.length) {
    return <h2>Você acertou {score} de {characters.length}!</h2>;
  }

  const character = characters[current];
  const answers = ["Alive", "Dead", "unknown"];

  return (
    <div className="quiz">
      <h2>
        Qual é o status do personagem <strong>{character.name}</strong>?
      </h2>

      <img src={character.image} width="150" />

      <div>
        {answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(answer)}
            style={{ margin: "5px" }}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;