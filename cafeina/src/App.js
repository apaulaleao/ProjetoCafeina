import {useState,useEffect} from 'react';
import Player from './components/player';

function App() {
  const [songs] = useState([
    {
      title: "Forget me too ft. Halsey",
      artist: "Machine Gun Kelly",
      img_src: "https://images-submarino.b2w.io/produtos/01/00/oferta/49128/0/49128067_1GG.jpg",
      src: "https://65381g.ha.azioncdn.net/8/a/8/f/osbaroesdapisadinha-baroes-da-pisadinha-galera-do-interior-dfbc6061.mp3"
    },
    {
      title: "Volta pra casa",
      artist: "Lauana Prado",
      img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFtXq04sdSnx6fDmq7UL-HiD3M4E6mKxos6z5Tz-xHXoKce72I2iGdt8E6FyDUQCqhzBU&usqp=CAU",
      src: "https://65381g.ha.azioncdn.net/8/a/8/f/osbaroesdapisadinha-baroes-da-pisadinha-galera-do-interior-dfbc6061.mp3"
    },
    {
      title: "Ta chorando por que ?",
      artist: "Preto no Branco",
      img_src: "https://img.discogs.com/tO5920jPZcGLqfxxIa3fGQepHso=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-5501635-1484449582-8751.png.jpg",
      src: "https://65381g.ha.azioncdn.net/8/a/8/f/osbaroesdapisadinha-baroes-da-pisadinha-galera-do-interior-dfbc6061.mp3"
    },
    {
      title: "Bitch I'm MadonnaNicki Minaj",
      artist: "Madonna",
      img_src: "https://images-americanas.b2w.io/produtos/01/00/item/121963/1/121963153_1GG.jpg",
      src: "https://65381g.ha.azioncdn.net/8/a/8/f/osbaroesdapisadinha-baroes-da-pisadinha-galera-do-interior-dfbc6061.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    </div>
  );
}

export default App;