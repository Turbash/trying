

function Button(props){
  return (
    <>
      <div className='bg-amber-300 flex flex-col gap-4 justify-center items-center text-center border rounded p-2.5'>
          {props.children}
          <button className="border rounded-md bg-amber-500 hover:bg-amber-600 transition-all duration-200 px-1"
          onClick={props.updateCount}>
            Click Here
          </button>
      </div>
    </>
  )
}

export default Button