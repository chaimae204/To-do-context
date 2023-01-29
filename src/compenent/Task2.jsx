import React from 'react'

export default function Task2(props) {
  return (
    <div>
        <input  type="text" className={props.txt.done ? 'text' : ''} readOnly  style={{fontWeight:'bolder'}}  value={props.txt.nom} /> 
        <input type="button" onClick={ props.deletf} value="supprimer" style={{backgroundColor: 'rgb(141, 149, 219)',color:'white'}}  />
        <input type="button" value="done" onClick={()=>props.changer(props.txt.id)}  style={{ backgroundColor: 'rgb(141, 149, 219)',color:'white'}}  />

    </div>
  )
}