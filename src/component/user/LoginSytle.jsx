import { makeStyles, createStyles } from "@material-ui/styles";

export default makeStyles(() => {
  createStyles({
    wrapper: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      padding: "20px",
    },
    topMargin: {
      marginTop: "2rem",
    },
  });
});
