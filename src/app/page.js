'use client'
import Script from "next/script";

export default function page(){
    return(
        <div>
        <h1>Get user geolocatioon</h1>
        <Script 
        src="/location.js"
        onLoad={()=>{
            console.log('file loaded');
        }}
        />
        </div>
    )
}