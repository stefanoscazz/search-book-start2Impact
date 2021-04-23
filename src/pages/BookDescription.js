import style from "./style/bookDescription.module.css";
import { Container, Typography, Button } from "@material-ui/core";
import Footer from "../components/Footer";
import "./img/wave.png";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataAction } from "../actions/getDataAction";
import CircularProgress from "@material-ui/core/CircularProgress";
import _ from "lodash";


const BookDescription = (props) => {
  
      const {
        title,
        authors,
        categories,
        description,
        imageLinks,
      } =  props.location.state.volumeInfo;
      const { listPrice, buyLink } = props.location.state.saleInfo;
      return (
        <div>
          <Container className={style.container} maxWidth="xl">
            <Container style={{ padding: "0" }} maxWidth="xl">
              <div className={style.flex}>
                <div>
                  <img
                    style={{ height: "310px", width: "210px" }}
                    src={
                      imageLinks === undefined ? "" : imageLinks.smallThumbnail
                    }
                    alt=""
                  />
                </div>
                <div className={style.sectionDescription}>
                  <Typography variant="h4">
                    {title === undefined ? "" : title}
                  </Typography>
                  <Typography variant="h6">
                    {authors === undefined ? "" : authors[0]}
                  </Typography>
                  <Typography variant="subtitle1" style={{ fontWeight: "900" }}>
                    Prezzo:
                    <span style={{ fontWeight: "100" }}>
                      {" "}
                      {listPrice === undefined ? "" : listPrice.amount + " €"}
                    </span>
                  </Typography>
                  <Typography variant="subtitle1" style={{ fontWeight: "900" }}>
                    Categoria:
                    <span style={{ fontWeight: "100" }}>
                      {categories === undefined ? "" : " " + categories[0]}
                    </span>
                  </Typography>
                  <Typography variant="subtitle1" style={{ fontWeight: "900" }}>
                    {" "}
                    Trama:
                  </Typography>
                  <Typography variant="subtitle1">
                    {description === undefined ? "" : " " + description}
                  </Typography>
                  <a href={buyLink}>
                    {buyLink === undefined ? (
                      ""
                    ) : (
                      <Button
                        style={{ margin: "20px" }}
                        variant="contained"
                        color="primary"
                        size="large"
                      >
                        {" "}
                        Compra
                      </Button>
                    )}
                  </a>
                </div>
              </div>
            </Container>
          </Container>
          <Footer />
        </div>
      );
    }
 


export default BookDescription;
