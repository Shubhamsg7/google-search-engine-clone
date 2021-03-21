import React, {useState} from 'react'
import logo from '../img/google.png'
import {FaSistrix, FaMicrophone} from 'react-icons/fa'

const Home = (props) => {
    const [state, setState] = useState("");

    const searchGoogle= (e) => {
        props.history.push({pathname: '/search', state })
    }


    return (
        <div className="home">
            <div className="home__container">
                <div className="home__logo">
                    <img src={logo} alt="Google"/>
                </div>
                <form className="home__form" onSubmit={searchGoogle}>
                    <input type="text" className="home__input" onChange={(e) => setState(e.target.value)} value={state} required />
                    <div className="home__group">
                        <input type="submit" value="Google Search" className="home__btn"/>
                    </div>
                    <FaSistrix className="search__icon"/>
                    <FaMicrophone className="microphone"/>
                </form>
            </div>
        </div>
    )
}

export default Home
