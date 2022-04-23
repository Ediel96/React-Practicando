const initialState = [{
    id:1,
    todo: 'compra pan',
    done:false
}]

const todoReducer = ( state = initialState, action) => {

    if(action?.type === 'agregar'){
        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer()


const newTdo = [{
    id:2,
    todo: 'compra leche',
    done:false
}]

const agrefaTodoAction = {
    type: 'agregar',
    payload: newTdo
}

todos = todoReducer(todos, agrefaTodoAction);


console.log(todos);