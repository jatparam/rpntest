/* For each new Context I can just create a similar file to this which requires a reducer, actions object, and initial state. 
Then I can pass all 3 as args to the createDataContext function and destructure off the Context and Provider elements */

import createDataContext from './createDataContext';


const dummy = [{
    id: "1",
    name: 'Event 100',
    img: 'https://picsum.photos/300/200',
},
{
    id: "2",
    name: 'Event 2',
    img: 'https://picsum.photos/200/300',
},
{
    id: "3",
    name: 'Event 3',
    img: 'https://picsum.photos/500/500',
},
{
    id: "4",
    name: 'Event 4',
    img: 'https://picsum.photos/550/550',
},
]

const eventReducer = (state, action) => {
    switch (action.type) {
        case 'add_event': 
            return [ 
                ...state, 
                { 
                    id:`${Math.floor(Math.random() * 99999)}`, 
                    name: `Event ${state.length + 1}`, 
                    img: 'https://picsum.photos/500/500' 
                }
            ];
        case 'delete_event': 
            return state.filter((event) => event.id !== action.payload)
        default:
            console.log('went into default')
            return state;
    }
};

const addEvent = (dispatch) => {
    return () => {
        dispatch({ type: 'add_event'}) 
    };
 };

 const deleteEvent = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_event', payload: id }) 
    };
 };

export const { Context, Provider } = createDataContext(
    eventReducer, 
    { addEvent, deleteEvent },
    dummy
);