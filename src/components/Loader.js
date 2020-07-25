import React from "react";
import Loader from 'react-loader-spinner'
import './styles/loader.css'

const LoaderAnimation = () => {
        return(
            <Loader className="loader"
                      color="#00BFFF"
                      height="50px"
                      width="50px" />
        )
}

export default LoaderAnimation;