
const IconText = ({children, text}) => {
     return (
          <div className='transparent  text-red-500 flex items-center text-xl font-bold ml-8 my-2'>
               {children}
              <p className='ml-0.5'> {text} </p>
          </div>
     )
}

export default IconText
