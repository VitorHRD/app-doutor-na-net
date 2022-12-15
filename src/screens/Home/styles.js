
import { RFValue } from "react-native-responsive-fontsize";
import { StyleSheet, Dimensions } from "react-native";
const WIDTH = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#F1F9FF",
  },
  firstDiv: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    maxWidth: RFValue(400),
    width: WIDTH,
    height: 190,
    alignItems: "center",
    borderRadius: 8,
    paddingTop: 20,
    paddingBottom: 8,
    paddingLeft: 8,
    justifyContent: "space-between",
  },
  medImg: {
    width: 150,
    height: 220,
    position: "absolute",
    right: 0,
    top: -50,
  },

  titleTop: {
    width: 250,
    alignSelf: "flex-start",
    paddingLeft: 30,
    fontWeight: "700",
    fontSize: 24,
    marginTop: 10,
  },
  mainButton: {
    width: "85%",
    height: 45,
    flexDirection: "row",
    backgroundColor: "background: rgba(21, 49, 68, 1)",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 30,
  },
  textButton: {
    color: "white",
    fontSize: 15,
    fontWeight: "500",
  },
  moreServices: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    maxWidth: 400,
    height: 30,
    marginTop: 15,
  },
  divPlano: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    maxWidth: 400,
    height: 80,
    alignItems: "center",
    backgroundColor: "rgba(186, 206, 0, 1)",
    borderRadius: 8,
    paddingHorizontal: 20,
  },
  textPlanos: {
    fontSize: 19,
    fontWeight: "800",
    color: "rgba(21, 49, 68, 1)",
  },
});
