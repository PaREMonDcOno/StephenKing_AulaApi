import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="video-bg">
        <iframe
          src="https://www.youtube.com/embed/GeAq6Mft17k?autoplay=1&mute=1&controls=0&loop=1&playlist=GeAq6Mft17k&modestbranding=1&rel=0&playsinline=1&showinfo=0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="Rick and Morty trailer"
        />
      </div>
      <div className="home-content">
        <h1>Rick and Morty Quiz</h1>
        <p>Teste seu conhecimento no multiverso mais MALUCOOOOOO  da animação.</p>
        <Link to="/quiz">
          <button>Começar Quiz</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;