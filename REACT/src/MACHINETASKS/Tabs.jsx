import React, { useState } from 'react'
import Form from './Form'
import Interests from './Interests'
import Theme from './Theme'
const Tabs = () => {

    const [activeTab, setActiveTab] = useState(1);



    const tabs = [{
        id: 1,
        tab: 'FORM',
        component: Form
    },
    {
        id: 2,
        tab: 'INTERESTS',
        component: Interests
    },
    {
        id: 3,
        tab: 'FORM',
        component: Theme
    }]
    const currentTab = tabs[activeTab].component

    return (
        <div>
            {tabs.map((item, index) => <button key={item.id} onClick={()=> setActiveTab(index)}>{item.tab}</button>)}
            <div>
                <currentTab/>
                <Form/>
            </div>
        </div>
    )
}

export default Tabs
