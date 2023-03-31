import React from "react";
import Button from "@mui/material/Button";
import "./User.css";
import { BsFillPersonFill } from "react-icons/bs";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { AiFillCamera } from "react-icons/ai";
import { FiAlertTriangle } from "react-icons/fi";
import { TbCalendarStats } from "react-icons/tb";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdManageAccounts } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import MappleBear from '../img/mapplebear.png'
function User() {
  return (
    <div className="App1">
      <div className="centralAdm">CENTRAL DE COMUNICAÇÃO DE MANUTENÇÃO-ADM</div>
      <div className="lineAdm">
        <div className="icons">
         <img src={MappleBear} alt="MappleBear"/>
          
        </div>
        <Button variant="contained" className="category" sx={{textTransform: 'none'}}>
          MappleBear
        </Button>
      </div>
      <div className="lineAdm">
        <div className="icons">
         <TbCalendarStats size="5rem" />
        </div>
        <Button variant="contained" className="category" sx={{textTransform: 'none'}}>
          OS002
        </Button>
      </div>
      <div className="lineAdm">
        <div className="icons">
          <BsFillPersonFill size="5rem" />
        </div>
        <Button variant="contained" className="category" sx={{textTransform: 'none'}}>
          Aldo Maia
        </Button>
      </div>
      <div className="lineAdm">
        <div className="icons">
          <HiChatBubbleLeftRight size="5rem" />
        </div>
        <Button variant="contained" className="category" sx={{textTransform: 'none'}}>
          Descrição da Manutenção
        </Button>
      </div>
      <div className="lineAdm">
        <div className="icons">
        <AiFillCamera size="5rem" />
        </div>
        
        <Button variant="contained" className="category" sx={{textTransform: 'none'}}>
          Registro Fotográfico
        </Button>
        
      </div>
      <div className="lineAdm">
        <div className="icons">
          <FiAlertTriangle size="5rem" />
        </div>
        <Button variant="contained" className="urgency" sx={{textTransform: 'none'}}>
          Área em atividade
        </Button>
        <Button variant="contained" className="urgency" sx={{textTransform: 'none'}}>
         Paralisada
        </Button>
      </div>
      <div className="lineAdm">
        <div className="icons">
          <AiOutlineClockCircle size="5rem" />
        </div>
        <Button variant="contained" className="category" sx={{textTransform: 'none'}}>
          19:00-22:00(Durante a semana)
        </Button>
      </div>
      <div className="lineAdm">
        <div className="icons">
          <MdManageAccounts size="5rem" />
        </div>
        <Button variant="contained" className="category" sx={{textTransform: 'none'}}>
          Adalberto(Serralheiro)
        </Button>
      </div>
      <div className="lineAdm">
        <div className="icons">
          <AiOutlineCheckCircle size="5rem" />
        </div>
        <Button variant="contained" className="urgency" sx={{textTransform: 'none'}}>
          Aprovar
        </Button>
        <Button variant="contained" className="urgency" sx={{textTransform: 'none'}}>
         Negar
        </Button>
      </div>
    </div>
  );
}
export default User;