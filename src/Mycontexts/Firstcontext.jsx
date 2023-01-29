import  React ,{ useState, createContext } from "react";
import {v4 as uuidv4} from 'uuid'


//1- objet context
export  const Firstcontext=createContext();



//2-compenent context

export default function FirstcontextProvider({children}) {

    //declaration des states :
      const[tache,settaches]=useState([
    {id:uuidv4(),nom:'sport',done:false},
    {id:uuidv4(),nom:'film',done:false},
    {id:uuidv4(),nom:'coder en react',done:false}

  ])

  const[task,settask]=useState('');


  const addtask=()=>{
    let ntask=[...tache];
    let nvtasck={};
    nvtasck.id=uuidv4();
    nvtasck.nom=task;
    ntask.push(nvtasck);
    settaches(ntask);
    settask('');
  }
  const delettask=(idp)=>{
     let ntask=tache.filter((t)=>{
      return t.id!=idp

     })
     settaches(ntask);

  }
  const changer=(id)=>{
    let arr=tache.map((e)=>{
      if(e.id===id){
        e.done=!e.done
      }
      return e
    })
    settaches(arr)
  }
  return (
    <Firstcontext.Provider value={{tache,settaches,task,settask,addtask,delettask,changer}}>
      {children}

    </Firstcontext.Provider >
  )
}
