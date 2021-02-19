import { StyleSheet } from "react-native";

// Flame e4572e
// Max Blue Green 17BEBB
// Sunglow FFC914
// Raisin Black 2E282A
// Green RYB 76B041

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#2E282A",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "white",
    fontWeight: "700",
    fontSize: 35,
    alignSelf: "center",
    marginTop: "5%",
  },
  subheading: {
    color: "white",
    fontWeight: "300",
    fontSize: 20,
    alignSelf: "center",
  },
  subheadingBold: {
    color: "white",
    fontWeight: "700",
    fontSize: 18,
    alignSelf: "center",
    marginTop: "5%",
  },
  textBold: {
    color: "white",
    fontWeight: "700",
    fontSize: 15,
    alignSelf: "center",
  },
  bigNumber: {
    color: "white",
    alignSelf: "center",
    fontWeight: "900",
    fontSize: 50,
    padding: "1%",
  },
});
