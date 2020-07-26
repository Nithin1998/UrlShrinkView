import React from "react";
import './styles/Url.css';

// renders the long urls and short urls
const Urls = ({shortUrl,longUrl,fun}) =>{
    let Url = 'nith.heroku/'+shortUrl;
    return (
        <div className="url">
        <p><a className="longid"href={longUrl}>{longUrl}</a></p>
        <p><a className="shortid" href={'https://nith.herokuapp.com/'+shortUrl}>{Url}</a></p>
        <a href="#" className="btn-2"onClick={fun}>Copy</a>
        </div>        
    )
}

export default Urls;