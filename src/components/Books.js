import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";
import { useEffect } from "react";
import { getDataAction } from "../actions/getDataAction";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography } from "@material-ui/core";
import CardBook from "./CardBook";
import style from "./style/booksStyle.module.css";
import MenuBook from "@material-ui/icons/MenuBook"
const Books = () => {
  // listbook ritorna lo stato da redux
  const dispatch = useDispatch();
  const listBook = useSelector((state) => state.booksReducer);
  // useEffect mostra i dati di default dei libri:"Harry Potter"
  useEffect(() => {
    if (listBook.effect) {
      dispatch(getDataAction());
    }
  },[dispatch,listBook.effect]);
  const showData = () => {
    if (!_.isEmpty(listBook.data.items)) {
      return listBook.data.items.map((el) => {
        return <CardBook style={{margin:"100px"}} key={el.id} data={el} />;
      });
    }
    if (listBook.loading) {
      return (
        <div style={{ height: "200px" }} className={style.flex}>
          <Typography variant="h3">Loading</Typography>
          <CircularProgress style={{ margin: "5px" }} />
        </div>
      );
    }
    if (listBook.errorMsg !== "" || listBook.bookFound) {
      return (
        <div
          style={{
            height: "200px",
            flexDirection: "column",
            justifyContent: "center",
          }}
          className={style.flex}
        >
          <Typography color="error" variant="h4">
            Nessun libro trovato
            </Typography>
            <MenuBook color="primary" style={{fontSize:"50px"}}/>
          <Typography  variant="h6">
           Prova a cercarne un altro
          </Typography>
        </div>
      );
  };
  }
  return <div className={style.flex}>{showData()}</div>;
};
export default Books;
