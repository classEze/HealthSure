const Button = ({setter,text}) => {
     return (
          <button className='w-36 py-2 rounded-3xl bg-blue-500 text-white font-semibold shadow-2xl' onClick={setter}>
             {text}
          </button>
     )
}
export default Button
