import React, { useState, useEffect } from "react";
import './styles.css'
import { Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux'

function ExcluirAcionamento() {
 
//Redux
const dispatch = useDispatch()
const name = useSelector(state => state.ExcluirAcionamento.name)

const handleClick = () => {
  setShow(false);
 dispatch({
   type: 'SET_EXCLUIR_ACIONAMENTO',
   payload: { name: `${estado}`}
   
 })
}
//Redux Fim

//select
const [estado, setEstado] = useState("");

const editarEstado = e => {
  e.preventDefault() // para não recarregar a pagina quando clicar no botão submeter
alert("ID do estado:" + estado )
}

// Quando for clicado no select, enviar alguma informação
useEffect(() => {
/*  alert("Executou")*/

}, [estado])
//Select fim



  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  
 

  const handleShow = () => setShow(true);
  
  return (
    <div>
    
      <Button variant="primary" onClick={handleShow}>
        Botão abrir modal 2
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><strong>Deseja remover o modal 2?</strong> </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>MOTIVO</p>
         {/*Select*/}
         <form onSubmit={editarEstado}>
         <select  style={{width:'100%', alignItems:'center', height: "35px"}} name="estado" value={estado} onChange={texto => setEstado(texto.target.value)}>
           <option value="">Selecione</option>
           <option value="1">RS</option>
           <option value="2">SC</option>
           <option value="3">PR</option>
           <option value="4">SP</option>
         </select>
         {/*Select fim*/}

         <br/>
         <p>Este campo é obrigatório</p>
         </form>

        </Modal.Body>
        <Modal.Footer>
          <Button style={{width:'30%', backgroundColor: "white", color: "cyan", borderWidth: "1px", borderColor: "cyan"}} variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button style={{width:'30%', backgroundColor: "blue", color: "white", borderWidth: "1px", borderColor: "red"}} onClick={handleClick} variant="primary">Remover</Button>
        </Modal.Footer>
      </Modal>
  <p style={{color: "black"}}>ID: {name}</p>  
    </div>
  );
}

export default ExcluirAcionamento
