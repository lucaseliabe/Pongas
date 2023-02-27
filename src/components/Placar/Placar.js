import React, {useState} from 'react'
import Card from './Card';
import './Placar.css'

const Placar = () => {
    const [player1Score, setPlayer1Score] = useState(0);
    const [player2Score, setPlayer2Score] = useState(0);
  
    const handlePlayer1Score = () => {
      setPlayer1Score(player1Score + 1);
    };
  
    const handlePlayer2Score = () => {
      setPlayer2Score(player2Score + 1);
    };
  
    const handleReset = () => {
      setPlayer1Score(0);
      setPlayer2Score(0);
    };
  
    return (
      <div className="scoreboard">
        <div className='scoreboard-row'>

            <div className='scoreboard-player'>
                <Card player={{
                    name: 'Lucas',
                    score: player1Score,
                    src_img: '/src/player_lucas.jpg'
                }}/>
                <button onClick={handlePlayer1Score}>+</button>
            </div>
            
            <div className='scoreboard-vs'>X</div>

            <div className='scoreboard-player'>
                <Card player={{
                    name: 'Japa',
                    score: player2Score,
                    src_img: '/src/player_japa.jpg'
                }}/>
                <button onClick={handlePlayer2Score}>+</button>
            </div>

        </div>

        <div className="scoreboard-reset">
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    );
}

export default Placar