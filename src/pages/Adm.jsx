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
import MappleBear from "../img/mapplebear.png";

import ButtonSelector from "../components/button/buttonSelector";
function User() {
  const optionAdm = ["Aldo Maia", "Caio"];
  const optionOS = ["OS001", "OS002", "OS003", "OS004", "OS005", "OS006"];
  const optionSchedule = [
    "6:00 - 8:00(Durante semana)",
    "19:00 - 22:00(Durante semana)",
    "Fim de semana(Sábado)",
    "Fim de semana(Domingo)",
  ];
  const optionOperator = [
    "Carlos (Marcenaria)",
    "Roberto (Pedreiro)",
    "Adalberto (Serralheiro)",
    "Clodoaldo (Soldador)",
  ];
  return (
    <div className="App1">
      <div className="centralAdm">CENTRAL DE COMUNICAÇÃO DE MANUTENÇÃO-ADM</div>
      <div className="lineAdm">
        <div className="icons">
          <img src={MappleBear} alt="MappleBear" />
        </div>
        <Button
          variant="contained"
          className="category"
          sx={{ textTransform: "none" }}
        >
          MappleBear
        </Button>
      </div>
      <div className="lineAdm">
        <div className="icons">
          <BsFillPersonFill size="5rem" />
        </div>

        <ButtonSelector style="border-color:#4C4D54" options={optionAdm}>
          Usuário
        </ButtonSelector>
      </div>

      <div className="lineAdm">
        <div className="icons">
          <TbCalendarStats size="5rem" />
        </div>
        <ButtonSelector style="border-color:#4C4D54" options={optionOS}>
          Usuário
        </ButtonSelector>
      </div>

      <div className="lineAdm">
        <div className="icons">
          <HiChatBubbleLeftRight size="5rem" />
        </div>
        <Button
          variant="contained"
          component="label"
          className="category"
          sx={{ textTransform: "none", background: "#4C4D54" }}
        >
          Descrição da Manutenção
          <input hidden accept="audio/*" multiple type="file" />
        </Button>
      </div>
      <div className="lineAdm">
        <div className="icons">
          <AiFillCamera size="5rem" />
        </div>

        <Button
          variant="contained"
          component="label"
          className="category"
          sx={{ textTransform: "none", background: "#4C4D54" }}
        >
          Registro Fotográfico
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </div>
      <div className="lineAdm">
        <div className="icons">
          <FiAlertTriangle size="5rem" />
        </div>
        <Button
          variant="contained"
          className="urgency"
          sx={{ textTransform: "none" }}
        >
          Área em atividade
        </Button>
        <Button
          variant="contained"
          className="urgency"
          sx={{ textTransform: "none" }}
        >
          Paralisada
        </Button>
      </div>
      <div className="lineAdm">
        <div className="icons">
          <AiOutlineClockCircle size="5rem" />
        </div>
        <ButtonSelector style="border-color:#4C4D54" options={optionSchedule}>
          Agendar
        </ButtonSelector>
      </div>
      <div className="lineAdm">
        <div className="icons">
          <MdManageAccounts size="5rem" />
        </div>
        <ButtonSelector style="border-color:#4C4D54" options={optionOperator}>
          Operador
        </ButtonSelector>
      </div>
      <div className="lineAdm">
        <div className="icons">
          <AiOutlineCheckCircle size="5rem" />
        </div>
        <Button
          variant="contained"
          className="urgency"
          sx={{ textTransform: "none" }}
        >
          Aprovar
        </Button>
        <Button
          variant="contained"
          className="urgency"
          sx={{ textTransform: "none" }}
        >
          Negar
        </Button>
      </div>
    </div>
  );
}
export default User;
