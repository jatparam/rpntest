// The Purpose of this file is to essential create a template that can be used for multiple different contexts 

import React, { useReducer } from 'react';  

export default (reducer, actions, initialState) => {
    const Context = React.createContext(); 

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState)

        // actions === object, where each key is a function that expects to be passed a dispatch arg
        const boundActions = {};
        // in the below func, we loop through each key in actions and pass dispatch. Then we save the result as a new key in the boundActions obj
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
        }

        return (
            <Context.Provider value={{ state, ...boundActions }}>
                {children}
            </Context.Provider>
            )
    }

    return { Context, Provider };
};