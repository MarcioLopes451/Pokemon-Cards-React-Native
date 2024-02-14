import { View, Text, Image, StyleSheet, Platform } from "react-native";
import heart from "../images/299063_heart_icon.png";

export default function PokemonCard({
  name,
  hp,
  image,
  moves,
  weakness,
  type,
  typeBox,
}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: "space-between",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={[styles.text, { fontWeight: "bold" }]}>{name}</Text>
        <Text style={[styles.text, { display: "flex", alignItems: "center" }]}>
          HP-{hp}
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <Image source={image} style={{ width: 200, height: 200 }} />
        <View style={[styles.box, typeBox]}>
          <Text style={styles.typeText}>{type}</Text>
        </View>
      </View>
      <View style={styles.margins}>
        <Text style={styles.skillset}>
          Moves:{" "}
          <Text>
            {moves.map((move) => (
              <Text key={move}>{move}, </Text>
            ))}
          </Text>
        </Text>
      </View>
      <View>
        <Text style={styles.skillset}>
          Weakness:{" "}
          <Text>
            {weakness.map((weak) => (
              <Text key={weak}>{weak}, </Text>
            ))}
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: 20,
    borderColor: "black",
    borderStyle: "solid",
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 5,
  },
  text: {
    fontSize: 24,
  },
  skillset: {
    fontWeight: "bold",
    fontSize: 20,
  },
  margins: {
    marginTop: 30,
    marginBottom: 10,
  },
  box: {
    width: 200,
    height: 50,
    borderColor: "black",
    borderStyle: "solid",
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 3,
    marginTop: 10,
  },
  typeText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    alignItems: "center",
  },
});
