import React, {useState, useEffect} from 'react'
import Style from './Style'
import './Style.css'

function Functionality() {

    const [movie, setMovie] = useState([])
    const [search, setSearch] = useState('')
    const [query, setQuery] = useState('')
    const [trailer, setTrailer] = useState('')

    useEffect(() => {
        getMovie();
        getId();
    }, [query])

    const getMovie = async() => {
        const response = await fetch(`http://www.omdbapi.com/?apikey=********&t=${query}`)
        const data = await response.json()
        setMovie(data)
    }

    const getId = async() => {
        const res = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=******************************&maxResults=1`)
        const data = await res.json()
        const video_id = data.items[0].id.videoId
        setTrailer(video_id)
        
    }

    const updateSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
        
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search)
    }

    return (
        <div className='search-alignment'>
            <form onSubmit={getSearch}>
                <input type='text' value={search} onChange={updateSearch} />
                <button type='text'>Search</button>
            </form>
            <div>
                <Style
                    movie={movie}
                    trailer={trailer}
                    query={query}
                />
            </div>
        </div>
    )
}

export default Functionality
