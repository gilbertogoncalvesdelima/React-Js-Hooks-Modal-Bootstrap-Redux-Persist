import React from "react";
import './styles.css'
import ExcluirAgendamento from "../../components/modal/excluir-agendamento";
import ExcluirAcionamento from "../../components/modal/excluir-acionamento";


const Home = () => {
  
  return (
    <div className="Geral">

    <hr/>
    <h1 style={{color: "black"}}>Modal 1</h1>
    <ExcluirAgendamento/>
    <hr/>
    
    <hr/>
    <h1 style={{color: "black"}}>Modal 2</h1>
    <ExcluirAcionamento/>
    <hr/>

    </div>
  );
};


export default Home