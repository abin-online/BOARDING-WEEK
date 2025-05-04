import React from 'react'

const Signup = () => {


    const fields = [{
        label: 'username',
    }, {
        label: 'email',
    },
    {
        label: 'phone',
    },
    {
        label: 'password',
    },
    {
        label: 'Confirm password',
    }
    ]

    return (
        <>
            <div className='signup-container'>
                <h6>SIGNUP</h6>
                {
                    fields.map((field) => {
                        return (
                            <div className='field'>
                                <label className='field-label'>{field.label}</label>
                                <br/>
                                <input className='input-box'/>
                            </div>
                        )
                    })
                }
                <div>
                    <button className='submit-btn'>SUBMIT</button>
                </div>
            </div>
        </>
    )
}

export default Signup
