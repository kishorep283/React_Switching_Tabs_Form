import React from 'react'

const Profile = ({detail,setDetails,error}) => {
   const{name,age,email}=detail

    const handleChange=(e)=>{
        setDetails((prev)=>({
            ...prev,[e.target.name]:e.target.value
        }))
    }
  return (
    <div>
        <div style={{marginBottom:"3%"}}>
            <label htmlFor="">Name:</label>
            <input type="text" value={name} name="name" onChange={handleChange}/>
            {error.name && <span style={{color:"red"}}>{error.name}</span>}
        </div>
        <div style={{marginBottom:"3%"}}>
            <label htmlFor="">Age:</label>
            <input type="text" value={age} name="age" onChange={handleChange}/>
            {error.age&& <span style={{color:"red"}}>{error.age}</span>}

        </div>
        <div>
            <label htmlFor="">Email:</label>
            <input type="text" value={email} name="email" onChange={handleChange}/>
            {error.email && <span style={{color:"red"}}>{error.email}</span>}

        </div>
    </div>
  )
}

export default Profile