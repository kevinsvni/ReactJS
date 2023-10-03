import React from 'react'
import ComponentC from './ComponentC';
import { UserProvider } from './userContext';

export const ContextOne = React.createContext()
export const ContextTwo = React.createContext()

function ParentContext() {
    
    return (
        <UserProvider value="Kevin">

            <ContextOne.Provider value={'Kevin One'}>
                <ContextTwo.Provider value={'Kevin Two'}>
                    <ComponentC />
                </ContextTwo.Provider>
            </ContextOne.Provider>

        </UserProvider>
    )
}

export default ParentContext