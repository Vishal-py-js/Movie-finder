import React, {useState} from 'react'
import YouTube from 'react-youtube'
import './Style.css'

function Player({trailer}) {
    const [show, setShow] = useState(false)

    const opts = {
        height: "390",
        width: "700",
        playerVars: {
          autoplay: 1,
        },
      }

    return (
        <div>
            {
                show ? <button onClick={() => setShow(!show)}>Stop Playing</button>
                   : <button  className='button-style' onClick={() => setShow(!show)}>Trailer</button>
            }
            {
                show ? <YouTube videoId={trailer} opts={opts}/> : ''
            }
        </div>
    )
}

export default Player
