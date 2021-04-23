import { Typography } from "@material-ui/core";
import { GitHub, LinkedIn } from "@material-ui/icons";
import style from "./style/footerStyle.module.css";
// Footer Component presente nelle pagine Home e  BookDescription
const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#263238",
        height: "100px",
        flexDirection: "column",
      }}
      className={style.flex}
    >
      <Typography
        style={{ marginBottom: "8px" }}
        color="secondary"
        variant="subtitle1"
      >
        Realizzato da Scazzi Stefano seguimi su
      </Typography>

      <div className={style.flex}>
        <a href="https://github.com/stefanoscazz">
          <GitHub
            color="secondary"
            style={{ fontSize: "45px", marginRight: "6px" }}
          />
        </a>
        <a href="https://www.linkedin.com/in/stefano-scazzi-7a9185156/">
          <LinkedIn color="secondary" style={{ fontSize: "50px" }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
