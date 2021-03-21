import React, {useState, useEffect} from 'react'
import logo_sm from '../img/logo_sm.png'
import {FaSistrix, FaMicrophone} from 'react-icons/fa'
import axios from 'axios'
import {key, cx} from '../Config'
import Show from './Show'

const Search = (props) => {
    const [state, setState] = useState(props.location.state ? props.location.state : "");

    const [results, setResults] = useState([]);
    const [info, setInfo] = useState('');

    const searchGoogle= async(e) => {
        e.preventDefault();
        try{
            const response = await axios.get(
                `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
            );
            if(response){
                //console.log(response.data.item, response.data.searchinformation);
                setResults(response.data.items);
                setInfo(response.data.searchinformation);
            }
    

        }catch(error){
            console.log(error);
        }
        
        
    };

    //console.log(results, info);
    useEffect(() => {
        async function getPosts(){
            if(props.location.state){
                try{
                    const response = await axios.get(
                        `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
                    );
                    if(response){
                        //console.log(response.data.item, response.data.searchinformation);
                        setResults(response.data.items);
                        setInfo(response.data.searchinformation);
                    }
            
        
                }catch(error){
                    console.log(error);
                }
                
            }
        }
        getPosts();
    }, [])

    return (
        <div className="search">
            <div className="search__form">
                <div className="search__form-logo">
                    <img src={logo_sm} alt="Google" onClick={()=> props.history.push("/")} />
                </div>
                <div className="search__form-input">
                    <form className="home__form" onSubmit={searchGoogle} >
                        <input type="text" className="home__input" onChange={(e) => setState(e.target.value)} value={state} required />
                        <FaSistrix className="search__icon"/>
                        <FaMicrophone className="microphone"/>
                    </form>
                </div>
            </div>
            <Show results={results} info={info} />
        </div>
    )
}

export default Search
