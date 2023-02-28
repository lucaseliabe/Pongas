import React from 'react'
import './Card.css'

const CardScore = ({ player }) => {
  if (player) {
    return (
      <div className='card'>
          <div className='card-player'>
              <div className='card-player-icon'>
                  <img src={player.src_img} alt='icone do jogador'></img>
              </div>
              <p>{player.name}</p>
          </div>
          <div className='card-score'>
              {player.score}
          </div>
      </div>
    )
  } else {
    return (
      <div className='card' style={{ justifyContent: 'center' }}>
        <div className='card-player-empty'>
          +
        </div>
      </div>
    )
  }
};

export default CardScore;