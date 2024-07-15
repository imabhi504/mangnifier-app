import React,{Component} from "react";
import Magnifier from "react-magnifier"
import yourImage from "../unnamed.png";


export default function MagnifierGlass(){
        return (
        <Magnifier src={yourImage} width={500}/>
    )
        
}