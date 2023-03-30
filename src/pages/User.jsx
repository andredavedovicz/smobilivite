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
function User() {
  return (
    <div className="App1">
      <div className="central">CENTRAL DE COMUNICAÇÃO DE MANUTENÇÃO</div>
      <div className="line">
        <div className="icons">
          <BsFillPersonFill size="5rem" />
        </div>
        <Button variant="contained" className="category">
          Dona Maria
        </Button>
      </div>
      <div className="line">
        <div className="icons">
          <BsFillHouseFill size="5rem" />
        </div>
        <Button variant="contained" className="category">
          Recepção
        </Button>
      </div>
      <div className="line">
        <div className="icons">
          <HiChatBubbleLeftRight size="5rem" />
        </div>
        <Button variant="contained" className="category">
          Descrição da Manutenção
        </Button>
      </div>
      <div className="line">
        <div className="icons">
          <AiFillCamera size="5rem" />
        </div>
        <Button variant="contained" className="category">
          Registro Fotográfico
        </Button>
      </div>
      <div className="line">
        <div className="icons">
          <IoMdOptions size="5rem" />
        </div>
        
          <Button variant="contained" className="whatis">
            Manutenção
          </Button>
          <Button variant="contained" className="whatis">
            Melhoria
          </Button>
          <Button variant="contained" className="whatis">
            Investimento
          </Button>
        
      </div>
      <div className="line">
        <div className="icons">
          <FiAlertTriangle size="5rem" />
        </div>
        <Button variant="contained" className="urgency">
          Área em atividade
        </Button>
        <Button variant="contained" className="urgency">
         Paralisada
        </Button>
      </div>
      <div className="line">
        <div className="icons">
          <TbCalendarStats size="5rem" />
        </div>
        <Button variant="contained" className="category">
          Minhas OS's
        </Button>
      </div>
    </div>
  );
}
export default User;
BsFillPersonFill;
