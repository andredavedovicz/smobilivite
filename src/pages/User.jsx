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
import ButtonSelector from "../components/button/buttonSelector";
import { Box } from "@mui/material";

function User() {
  const optionUser = [
    "Usuário",
    "Dona Maria",
    "Professor1",
    "Matheus",
    "Aldo Maia",
    "Caio",
    "Diretoria",
  ];
  const optionLocations = [
    "Local",
    "Cozinha",
    "Banheiro",
    "Playground",
    "Campo de Futebol",
    "Elevador",
    "Recepção",
    "Sala dos Professores",
    "Lavanderia",
  ];
  return (
    <div className="App1">
      <div className="centralUser">CENTRAL DE COMUNICAÇÃO DE MANUTENÇÃO</div>
      <div className="lineUser">
        <div className="icons">
          <BsFillPersonFill size="3.5rem" />
        </div>

        <ButtonSelector style="border-color:#4C4D54" options={optionUser}>
          
        </ButtonSelector>
      </div>
      <div className="lineUser">
        <div className="icons">
          <TbCalendarStats size="3.5rem" />
        </div>
        <Button
          variant="contained"
          className="category"
          sx={{
            textTransform: "none",
            justifyContent: "flex-start",
            border: "none",
            boxShadow: "none",
          }}
        >
          Minhas OS's
        </Button>
      </div>
      <div className="lineUser">
        <div className="icons">
          <BsFillHouseFill size="3.5rem" />
        </div>
        <ButtonSelector style="border-color:#4C4D54" options={optionLocations}>
          Local
        </ButtonSelector>
      </div>
      <div className="lineUser">
        <div className="icons">
          <HiChatBubbleLeftRight size="3.5rem" />
        </div>
        <Button
          variant="contained"
          component="label"
          className="category"
          sx={{
            textTransform: "none",
            background: "#4C4D54",
            justifyContent: "flex-start",
            border: "none",
            boxShadow: "none",
            fontSize: "17px",
          }}
        >
          Fale,o que aconteceu? <Box sx={{ width: "25%" }} />
          <input hidden accept="audio/*" multiple type="file" />
        </Button>
      </div>
      <div className="lineUser">
        <div className="icons">
          <AiFillCamera size="3.5rem" />
        </div>
        <Button
          variant="contained"
          component="label"
          className="category"
          sx={{
            textTransform: "none",
            background: "#4C4D54",
            justifyContent: "flex-start",
            border: "none",
            boxShadow: "none",
            fontSize: "17px",
          }}
        >
          Registro Fotográfico
          <Box sx={{ width: "25%" }} />
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </div>
      <div className="lineUser">
        <div className="icons">
          <IoMdOptions size="3.5rem" />
        </div>

        <Button
          variant="contained"
          className="whatis"
          sx={{ textTransform: "none" }}
        >
          Manutenção
        </Button>
        <Button
          variant="contained"
          className="whatis"
          sx={{ textTransform: "none" }}
        >
          Melhoria
        </Button>
        <Button
          variant="contained"
          className="whatis"
          sx={{ textTransform: "none" }}
        >
          Investimento
        </Button>
      </div>
      <div className="lineUser">
        <div className="icons">
          <FiAlertTriangle size="3.5rem" />
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
    </div>
  );
}
export default User;
