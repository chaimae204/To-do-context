import React from 'react'
import { useContext } from 'react'
import { Firstcontext } from '../Mycontexts/Firstcontext'
import Task2 from './Task2';
import './style.css'
import im from './imgerose.jpg'

export default function Tache() {
    const{tache,settaches,task,settask,addtask,delettask,changer}=useContext(Firstcontext);
  return (
    <div         className='tour'>


    
          <div style={{backgroundImage: `url(${im})`}} className='cadre'>


          

    <h1 style={{color:'rgb(141, 149, 219)',textDecoration:'underline'}}>To Do-list</h1>
    <form >
      Entrer une tache :<input type="text"   onChange={(e)=>{settask(e.target.value)}}  value={task} />
      <input type="button" onClick={addtask} value="ajouter" style={{color:'blueviolet'}} />
      <br /><br />
      <h2 style={{color:'rgb(197, 95, 201) '}}>Lister des choses à faire </h2>

    </form>
    <br />
    <ul>
      {
        tache.map((t)=>{
          return  <li style={{color:'blueviolet'}} key={t.id}><Task2  deletf={ (id)=>delettask(t.id)} changer={changer} txt={t}/></li>
        })
      }
    </ul>

    </div>
    </div>
  )
}
