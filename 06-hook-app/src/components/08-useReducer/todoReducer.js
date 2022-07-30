export const todosReducer = (state = [], action) =>{

    console.log(action)
    switch (action.type) {
        case 'add':
            
            return [...state, action.payload];
    
        default:
            return state;
    }

}