import React from 'react'

const Form = () => {
    return (
        <div>
            <h6>PROFILE</h6>
            <form className='border-2 px-3'>
                <div>

                    <label>Name : </label> <input type='text' />
                </div>
                <div>

                    <label>Age : </label> <input type='number' />
                </div>
                <div>

                    <label>Gender : </label> <select>
                        <option>Male</option>
                        <option>Male</option>
                        <option>Others</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form
