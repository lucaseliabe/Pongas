import React from 'react'

const CardPlayer = ({ player }) => {
    if (player) {
        return (
            <div className='card'>
                <div className='card-player'>
                    <div className='card-player-icon'>
                        <img src={player.src_img} alt='icone do jogador'></img>
                    </div>
                    <p>{player.name}</p>
                </div>
                <div className='card-player-information'>
                    <p>Vitorias: <b>{player.wins}</b></p>
                    <p>Derrotas: <b>{player.defeats}</b></p>
                </div>
                <div className='card-player-actions'>
                    <button>Editar</button>
                    <button>Apagar</button>
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

export default CardPlayer