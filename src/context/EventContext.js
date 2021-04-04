/* For each new Context I can just create a similar file to this which requires a reducer, actions object, and initial state. 
Then I can pass all 3 as args to the createDataContext function and destructure off the Context and Provider elements */

import createDataContext from './createDataContext';


const dummy = [{
    id: "1",
    name: 'Event 100',
    img: 'https://picsum.photos/300/200',
    describe: 'Cool'
},
{
    id: "2",
    name: 'Event 2',
    img: 'https://picsum.photos/200/300',
    describe: 'Wow'
},
{
    id: "3",
    name: 'Event 3',
    img: 'https://picsum.photos/500/500',
    describe: 'Yay'
},
{
    id: "4",
    name: 'Event 4',
    img: 'https://picsum.photos/550/550',
    describe: 'Awesome'
},
]

const eventReducer = (state, action) => {
    switch (action.type) {
        case 'add_event': 
            return [ 
                ...state, 
                { 
                    id:`${Math.floor(Math.random() * 99999)}`, 
                    name: action.payload.name, 
                    img: 'https://picsum.photos/500/500', 
                    describe: action.payload.description
                }
            ];
        case 'delete_event': 
            return state.filter((event) => event.id !== action.payload)
        case 'edit_event': 
            return state.map((event) => {
                if (event.id === action.payload.id) {
                    event.name = action.payload.name
                    event.describe = action.payload.describe
                    return event; 
                } else {
                    return event;
                }
            })
        default:
            console.log('went into default')
            return state;
    }
};

const addEvent = (dispatch) => {
    return (name, description, callback) => {
        dispatch({ type: 'add_event', payload: {name, description} });
        callback() 
    };
 };

 const deleteEvent = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_event', payload: id });
    };
 };

 const editEvent = (dispatch) => {
    return (id, name, describe, callback) => {
        dispatch({ type: 'edit_event', payload: {id, name, describe} });
        callback()
    };
 };

export const { Context, Provider } = createDataContext(
    eventReducer, 
    { addEvent, deleteEvent, editEvent },
    dummy
);