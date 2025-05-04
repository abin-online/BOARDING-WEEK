import React, { useState } from 'react'
import Form from './Form';
import Settings from './Settings'
import Interest from './Interest';

const Index = () => {

    const [tab, setTab] = useState({
        name: 'Form',
        component: <Form />
    })

    const tabsNames = [{
        name: 'Form',
        component: <Form />
    }, {
        name: 'Interest',
        component: <Interest />
    }, {
        name: 'Settings',
        component: <Settings />
    }]

    return (
        <>
            {tabsNames.map((item, index) => {
                return <button key={index} onClick={() => setTab(item)}>{item.name}</button>
            })}

            {
                tab.component
            }

        </>
    )
}

export default Index
