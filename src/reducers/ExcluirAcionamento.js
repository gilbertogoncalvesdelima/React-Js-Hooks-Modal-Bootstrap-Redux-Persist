const initialState = {
    name: 'Excluir Acionamento',
}


const ExcluirAcionamento = (state = initialState, action) => {
    
    switch(action.type){
        case 'SET_EXCLUIR_ACIONAMENTO':
        return { ...state, name: action.payload.name }
    }
    
    return state

}

export default ExcluirAcionamento