import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import styles from "./style/cardBook.module.css";

//Card component Material UI
const CardBook = ({ data }) => {
  // dati passati attraverso props dal componente Books
  const { imageLinks, title, authors } = data.volumeInfo;

  return (
    <div>
      <Card
        style={{
          width: "280px",
          margin: "10px",
          height: "390px",
          padding: "7px",
        }}
      >
        <CardActionArea style={{ height: "340px" }}>
          <CardMedia component="div" />
          <img
            src={imageLinks !== undefined ? imageLinks.smallThumbnail : ""}
            alt=""
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title.length > 35 ? title.slice(0, 35) + "..." : title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {authors === undefined ? "" : authors[0]}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={styles.flex}>
          <Button variant="contained" size="small" color="primary">
            <Link
              className={styles.link}
              to={{ pathname: `/description`, search: title, state: data}}
            >
              Learn More
            </Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default CardBook;
