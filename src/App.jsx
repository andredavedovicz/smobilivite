import "./App.css";
import SMOBILI from "./img/SMOBILIC.png";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

function App() {

  return (
    <div className="App">
      <div className="container">
        <img src={SMOBILI} alt="SMOBILI" />
        <p>Login</p>
        <TextField id="outlined-basic" label="email" variant="outlined" sx={{width:175,height:175}} />
        <TextField id="outlined-basic" label="senha" variant="outlined" sx={{width:175,height:175}} />
        
        <Button variant="contained" sx={{width:175,height:100,}}>Entrar</Button>
      </div>
    </div>
  )
}

export default App;
