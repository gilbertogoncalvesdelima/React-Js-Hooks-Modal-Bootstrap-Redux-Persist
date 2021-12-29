import { combineReducers } from 'redux'
import ExcluirAgendamento from './ExcluirAgendamento'
import ExcluirAcionamento from './ExcluirAcionamento'

export default combineReducers({
    ExcluirAgendamento: ExcluirAgendamento,
    ExcluirAcionamento: ExcluirAcionamento
})