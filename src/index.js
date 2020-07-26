import React,{useState, Fragment} from "react";
import ReactDOM from "react-dom";
import Urls from './components/Urls';
import LoaderAnimation from './components/Loader';
import Form from './components/Form';
import copy from "copy-to-clipboard";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './index.css';


//Main Component
const Index =  ()=>{
  
  const [Url,changeState] = useState([])
  const [sendingUrl,changeurl] = useState('')
  const [textToCopy,changeText] = useState('')
  const [alert,changeAlert]  = useState()
  const [badUrl,changeBad] = useState(false)
  const [isloading,changeloading] = useState(false)   

  //Function that handles post request to the api
  const Submit = () =>{
    if(sendingUrl){
      changeAlert(false)
      changeBad(false)
      changeloading(true)
      fetch("https://nith.herokuapp.com/shortUrls/",{
        method:"POST",
        body: JSON.stringify(
          {
            fullurl:sendingUrl
          }
        ),
        headers: { 
          "Content-type": "application/json; charset=UTF-8"
      } 
      })  
      .then(function (response){ 
        if(response.status===400){
                changeBad(true)
                changeloading(false)
                throw new Error('error')}
        else{
        return response.json()}
      })
      .then(function(json){ 
        console.log(json.short)
        changeText(json.short)
        changeloading(false)
        return changeState(prevstate =>
        [...prevstate, 
        {longUrl:sendingUrl.length<25?sendingUrl:sendingUrl.slice(0,25)+'...',
          shortUrl:json.short}]
     )}
      ).catch(err=>console.log("error"))
        }

     else{
        if(badUrl) changeBad(false) 
        changeAlert(true)
     }   
  }

  // function to copy text
  const CopyText = (e) =>{
    copy('nith.herokuapp.com/'+textToCopy); 
  }

  return(
    <Fragment>
      <div className="heading-div">
        <p className="heading">nith.heroku</p>
      </div>
    <div className="container">
      {alert?<div className="alert">Enter a Url!</div>:''}
      {badUrl?<div className="alert">Enter a valid Url!</div>:''}
      {isloading?<LoaderAnimation/>:''}
      <Form Submit={Submit} changeurl={changeurl}/>
                {
                Url.map(function(name, index){
                      return(
                       <Urls key={index} longUrl={name.longUrl} shortUrl={name.shortUrl} fun={CopyText}/>
                      )
                  })}
      </div>
      </Fragment>
  )
  }

ReactDOM.render(<Index />,document.getElementById("root"))