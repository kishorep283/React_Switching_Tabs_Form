import React from 'react'

const Settings = ({detail,setDetails}) => {
    const{theme}=detail
    const handleTheme= (e)=>{
        setDetails((prev)=>({
            ...prev,theme:e.target.name
        }))
    }
  return (
    <>
    <div>
        <div>
            <label htmlFor="">
                <input type="radio" name="dark" checked={theme === "dark"} onChange={handleTheme}/>
                Dark
            </label>
        </div>
        <div>
            <label htmlFor="">
                <input type="radio" name="light" checked={theme === "light"} onChange={handleTheme}/>
                Light
            </label>
        </div>
    </div>
    </>
  )
}

export default Settings