import React from "react";
import Button from "@mui/material/Button";
import "./User.css";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillHouseFill } from "react-icons/bs";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { AiFillCamera } from "react-icons/ai";
import { IoMdOptions } from "react-icons/io";
import { FiAlertTriangle } from "react-icons/fi";
import { TbCalendarStats } from "react-icons/tb";

import Stack from '@mui/material/Stack';

function User() {
  return (
    <div className="App1">
      <div className="centralUser">CENTRAL DE COMUNICAÇÃO DE MANUTENÇÃO</div>
      <div className="lineUser">
        <div className="icons">
          <BsFillPersonFill size="5rem" />
        </div>
        <Button variant="contained" className="category" sx={{textTransform: 'none'}}>
          Dona Maria
        </Button>
      </div>
      <div className="lineUser">
        <div className="icons">
          <BsFillHouseFill size="5rem" />
        </div>
        <Button variant="contained" className="category" sx={{textTransform: 'none'}}>
          Recepção
        </Button>
      </div>
      <div className="lineUser">
        <div className="icons">
          <HiChatBubbleLeftRight size="5rem" />
        </div>
        <Button variant="contained" component="label" className="category" sx={{textTransform: 'none',background:'#4C4D54'}}>
        Descrição da Manutenção
        <input hidden accept="audio/*" multiple type="file" />
        </Button>
      </div>
      <div className="lineUser">
        <div className="icons">
          <AiFillCamera size="5rem" />
        </div>
        <Button variant="contained" component="label" className="category" sx={{textTransform: 'none',background:'#4C4D54'}}>
        Registro Fotográfico
        <input hidden accept="image/*" multiple type="file" />
        </Button>
        
      </div>
      <div className="lineUser">
        <div className="icons">
          <IoMdOptions size="5rem" />
        </div>
        
          <Button variant="contained" className="whatis" sx={{textTransform: 'none'}}>
            Manutenção
          </Button>
          <Button variant="contained" className="whatis" sx={{textTransform: 'none'}}>
            Melhoria
          </Button>
          <Button variant="contained" className="whatis" sx={{textTransform: 'none'}}>
            Investimento
          </Button>
        
      </div>
      <div className="lineUser">
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
      <div className="lineUser">
        <div className="icons">
          <TbCalendarStats size="5rem" />
        </div>
        <Button variant="contained" className="category" sx={{textTransform: 'none'}}>
          Minhas OS's
        </Button>
      </div>
    </div>
  );
}
export default User;
