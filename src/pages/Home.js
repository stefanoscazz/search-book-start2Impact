import Books from "../components/Books";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataAction } from "../actions/getDataAction";
import Footer from "../components/Footer";
import {
  TextField,
  IconButton,
  Snackbar,
  InputAdornment,
  Typography,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import Search from "@material-ui/icons/Search";
import { infoAction } from "../actions/infoAction";
import style from "./style/home.module.css";
import "./img/booksBackground.jpg";
const Home = () => {
  //hook state: open-close messaggio benvenuto/ setInput per ricerca libro.
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  // infoEffect per non ripetere al cambio "pagina" messaggio di benvenuto
  const dispatch = useDispatch();
  const infoEffect = useSelector((state) => state.infoReducer);
  const inputFunction = (e) => setInput(e.target.value);

  /* Submit/dispatch nell'azione con il valore inserito dall'utente
   per fare richiesta tramite axios in redux */
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getDataAction(input));
    setTimeout(() => setInput(""), 500);
  };

  // funzione per aprire messaggio di benvenuto
  const alertOpen = () => {
    setOpen(true);
    dispatch(infoAction());
  };
  // funzione per chiudere messaggio di benvenuto
  const handleClose = () => {
    setOpen(false);
  };
  // mostare messaggio di benvenuto al render della pagina
  useEffect(() => {
    if (infoEffect.show) {
      alertOpen();
    }
  });

  return (
    <div >
      <div className={style.homeContainer}>
      <div className={style.container_form_title}>
        <Typography className={style.mobileMedia} variant="h1">
          Search Book
        </Typography>
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <TextField
            style={{ background: "white", borderRadius: "20px" }}
            onChange={inputFunction}
            value={input}
            variant="filled"
            id="filled-basic"
            label="Cerca un libro"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton type="submit">
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </form>
      </div>
     
      <Books />
      <Snackbar  anchorOrigin={{vertical: 'top', horizontal: 'left'}} open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity="info"
        >
          Benvenuto/a, spero troverai il libro che cerchi!
        </MuiAlert>
      </Snackbar>
      
      </div>
      <Footer />
    </div>
  );
};
export default Home;
