import React from 'react'

const Interests = ({detail,setDetails,error}) => {
    const{interests}=detail;
    console.log(interests)
    // const{interests}=error
    const handleintrest=(e)=>{
        setDetails((prev)=>({
            ...prev,interests:e.target.checked ? [...prev.interests,e.target.name] :interests.filter((i)=>i!=e.target.name)
        }))
    }
  return (
    <>
      <div>
        <div>
            <label htmlFor="">
                <input type="checkbox" name="coding" checked={interests.includes("coding")} onChange={handleintrest}/>
                coding
            </label>
        </div>
        <div>
            <label htmlFor="">
                <input type="checkbox" name="javascript" checked={interests.includes("javascript")} onChange={handleintrest}/>
                javascript
            </label>
        </div>
        <div>
            <label htmlFor="">
                <input type="checkbox" name="gaming" checked={interests.includes("gaming")} onChange={handleintrest}/>
                gaming
            </label>
        </div>
      </div>
      <p>{error.interests && <p style={{color:"red"}}>{error.interests}</p>}</p>
    </>
  )
}

export default Interests