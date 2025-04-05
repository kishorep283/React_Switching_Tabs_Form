import React, { useState } from 'react'
import Profile from './profile'
import Interests from './Interests'
import Settings from './Settings'
import "./form.css"
const Form_table = () => {
    const[activetab,setActiveTab]=useState(0);
    const[error,seterror]=useState({})
    const[succ,setSuccess]=useState("")
    const[details,setDetails]=useState({
        name:"",
        age:0,
        email:"",
        interests:["javascript","coding"],
        theme:""
    });
    const data =[
        {
            "name":"profile",
            "component":Profile,
            validate:()=>{
                const err={}
                if(!details.name || details.name.length <2){
                    err.name="invalid name "
                }
                if(!details.age || details.age <18){
                    err.age="invalid age "
                }
                if(!details.email || details.email.length <2 ||!details.email.endsWith("@gmail.com")){
                    err.email="email requires minimum length"
                }
                seterror(err)
                return Object.keys(err).length === 0;
            }
        },
        {
            "name":"interests",
            "component":Interests,
            validate:()=>{
                let err={};
                if(details.interests.length===0){
                    err.interests ="enter atleast one interset"
                }
                seterror(err)
                return Object.keys(err).length===0
            }
        },
        {
            "name":"settings",
            "component":Settings,
            validate:()=>{
                return true;
            }
        }
    ]
    const ActiveComponet =data[activetab].component;
    const handleNext = ()=>{
        if(data[activetab].validate()){
            setActiveTab((prev)=>prev+1);
        }
        
    }
    const handlePrev =()=>{
        if(data[activetab].validate()){
            setActiveTab((prev)=>prev-1);
        }
    }
    const handleSubmit =()=>{
        console.log(details);
        setSuccess("Submitted successfully")
    }
    
  return (
    <>
      <h3>Form Data</h3>
      <div className='main'>
          <div className='buttons'>
            {data.map((da,ind)=>(
                
                   <button  className="btn" onClick={()=>setActiveTab(ind)}>{da.name}</button>
                
            ))}
          </div>
        <ActiveComponet detail={details} setDetails={setDetails} error={error}/>
        <p>{succ && <h2 style={{color:"green"}}>{succ}</h2>}</p>
      </div>
      <div className='btns'>
        {activetab>0 && activetab < data.length ? <button className="btn" onClick={handlePrev}>Prev</button>:""}
        {activetab >=0 && activetab <data.length-1 ?<button className = "btn"  onClick={handleNext}>Next</button>:""}
        {activetab === data.length-1 && <button className="btn" onClick={handleSubmit}>Submit</button>}
      </div>
    </>
  )
}

export default Form_table