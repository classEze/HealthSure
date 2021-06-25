const Textinput = ({type,label,setter,value,name,id,placeholder}) => {
     return (
     <div>
        <input type={type || "text"} required onChange={setter} name={name || ""} value={value} placeholder={placeholder}/>
        <label  htmlFor={id}>{label}</label>
     </div>
     )
}

export default Textinput
