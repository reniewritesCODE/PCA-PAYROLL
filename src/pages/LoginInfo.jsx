import React from 'react'

import { Link } from 'react-router-dom'

const LoginInfo = () => {

  const label = () =>{
    return 'font-medium text-xl '
  }

  const boxes = () =>{
    return 'border-2 border-black w-full h-[60px] rounded-md px-3 bg-transparent'
  }

  return (
    <div className='w-screen h-screen bg-Green_base flex justify-center items-center'>
      <div className='w-[500px] h-[580px] bg-white_base rounded-2xl p-12 drop-shadow-2xl'>
        <h1 className='font-semibold text-3xl text-center mb-5'>LOGIN FORM</h1>
        <div>
          <span className={label()}>Username:</span><br />
          <input type="text" className={boxes()} />
        </div>
        <div className='mt-5'>
          <span className={label()}>Password:</span><br />
          <input type="text" className={boxes()} />
        </div>
        <div className='mt-5'>
          <span className={label()}>Organization:</span><br />
          <button className="border-2 border-black w-full h-[50px] rounded-md px-5 items-center flex justify-between">
            <span className='text-xl'>Admin</span>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAAAXNSR0IArs4c6QAAAYpJREFUOE99VItxwlAMkzcJm8AmMElhErpJsknZxI3/dppryh3lvViWZdkEgj0MgOQH2//tQo6Z7USv4mkHBPmLuASo1/8LTuTIlGAnqeydgpO8bPST30ymzNqll9MriXIVqksySjIMvSZgYeAnYQ8iRU4W4TQ/y8f1o89++AL42yWnBeACO9FYE/0R0V4k4AbQFmCiyB3Ae3Rr1OtIRT+0E0YP0TfM4GG0EvhajbWSwg/VBOdD/AHjkqUfmC8grGAsGihAUoRqlXKFVsLsBmCLvjSfZau03IxuNo3E/v3aEz0tibGPbk5nG9h9Wr6XTJuy8q6HMRJsekutsgJWrqQ1F2V7tDzTymcxmM2RShtfCVhndxXQy+s3pZYqq4xzyB2Q8NwPv5p+G9RTtQiIWMdOJiRUb+SazMQLGG8C1C4EujDw8RVjZbeBPPhMA4xhzaHZBXiARafDM7ZGGNvnxZRwHq3Hse70PudqbpBR5vDWNL/30rV1E9euMAoNrLf+fKKJyIehgnPD7SG/kr+0JIsN2BcAAAAASUVORK5CYII="/>
          </button>
        </div>
        <div className='pt-9'>
          <Link to={'/Payroll'}>
            <button className='border-2 bg-Green_base w-full h-[70px] rounded-md'>
              <span className='text-white text-2xl'>Login</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginInfo