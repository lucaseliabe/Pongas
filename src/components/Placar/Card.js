import React from 'react'

const Card = ({ player }) => {
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
}

export default Card