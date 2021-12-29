const initialState = {
    name: 'Excluir Agendamento',
}


const ExcluirAgendamento = (state = initialState, action) => {
    
    switch(action.type){
        case 'SET_EXCLUIR_AGENDAMENTO':
        return { ...state, name: action.payload.name }
    }
    
    return state

}

export default ExcluirAgendamento