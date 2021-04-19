import React from 'react'

const Textinput = ({type,label,setter,value}) => {
     return (
     <div>
          <label htmlFor="email">{label} </label>
        <input type={type} className='' onChange={setter} name='email' value={value} placeholder={label}/>
     </div>
  
     )
}

export default Textinput
