import React from "react";
import './styles.css'
import ExcluirAgendamento from "../../components/modal/excluir-agendamento";
import ExcluirAcionamento from "../../components/modal/excluir-acionamento";


const Home = () => {
  
  return (
    <div className="Geral">

    <hr/>
    <h2 style={{color: "red"}}>Excluir Agendamento</h2>
    <ExcluirAgendamento/>
    <hr/>
    
    <hr/>
    <h2 style={{color: "red"}}>Excluir Acionamento</h2>
    <ExcluirAcionamento/>
    <hr/>

    </div>
  );
};


export default Home