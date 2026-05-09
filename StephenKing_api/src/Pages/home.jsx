import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="video-bg">
        <iframe
          src="https://www.youtube.com/embed/7I-hlnrtMjQ?autoplay=1&mute=1&loop=1&playlist=7I-hlnrtMjQ&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1"
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