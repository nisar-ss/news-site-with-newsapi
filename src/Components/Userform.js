import React from 'react'

export default function Userform() {
    return (
        <div>
            <form className='container' action="">
                <div className=''>Enter Your Email ID here</div>
                <input type="email" placeholder='abc@mail.com' />
                <div>Enter Your Password here</div>
                <input type="password" minLength={8} />
            </form>
        </div>
    )
}
