import { makeStyles } from "@material-ui/core/styles";
import { colors } from "common/styles/theme";

const useStyles = makeStyles({
  container: {
    margin: "auto",
    maxWidth: 1220,
  },
  chart: {
    position: "relative",
  },
  topUser: {
    position: "absolute",
    left: "6%",
    top: "30%",
  },
  topUserMobile: {
    position: "absolute",
    left: "6%",
    top: "80%",
  },
  textTopUsermobile: {
    display: "flex",
    margin: "5px 0",
  },
  table: {
    margin: "20px 0",
  },
  wrapTopPoint: {
    marginBottom: "15px",
  },
  textTopUser: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: "16px",
  },
  textDetailTopMoney: {
    marginLeft: "30px",
    textAlign: "left",
    color: "red",
    fontWeight: 500,
  },
  textDetailTopMoneyMobile: {
    marginLeft: "5px",
    textAlign: "left",
    color: "red",
    fontWeight: 500,
  },
  textDetailTopPoint: {
    marginLeft: "30px",
    textAlign: "left",
    color: "#52C41A",
    fontWeight: 500,
  },
  textDetailTopPointMobile: {
    marginLeft: "5px",
    textAlign: "left",
    color: "#52C41A",
    fontWeight: 500,
  },
  tableHead: {
    backgroundColor: colors.lightGray,
  },
  team: {
    color: colors.red,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  manager: {
    color: colors.black,
  },
});

export default useStyles;
