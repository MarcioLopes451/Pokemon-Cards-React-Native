import {
  StyleSheet,
  View,
  ScrollView,
  Platform,
  SafeAreaView,
} from "react-native";
import PokemonCard from "./components/PokemonCard";
import charmander from "./images/004Charmander.webp";
import pikachu from "./images/pikachu.png";
import squirtle from "./images/squirtle.webp";
import mewtwo from "./images/mewtwo.png";

export default function App() {
  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView>
        <View style={styles.container}>
          <PokemonCard
            name={"Charmander"}
            hp={"45"}
            image={charmander}
            type={"Fire"}
            moves={["Growl", "Scratch", "Ember", "Smokescreen"]}
            weakness={["Rock", "Water", "Ground"]}
            typeBox={{ backgroundColor: "orange" }}
          />
          <PokemonCard
            name={"Pikachu"}
            hp={"35"}
            image={pikachu}
            type={"Lighting"}
            moves={["Charm", "Growl", "Nasty Plot", "Nuzzle"]}
            weakness={["Ground"]}
            typeBox={{ backgroundColor: "yellow" }}
          />
          <PokemonCard
            name={"Squirtle"}
            hp={"44"}
            image={squirtle}
            type={"Water"}
            moves={["Tackle", "Tail Whip", "Water Gun", "Bite"]}
            weakness={["Grass", "Electric"]}
            typeBox={{ backgroundColor: "lightblue" }}
          />
          <PokemonCard
            name={"Mewtwo"}
            hp={"106"}
            image={mewtwo}
            type={"Psychic"}
            moves={["Confusion", "Disable", "Swift", "Life Dew"]}
            weakness={["Dark", "Ghost", "Bug"]}
            typeBox={{ backgroundColor: "pink" }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "android" ? 25 : 0,
    gap: 50,
  },
  safearea: {
    flex: 1,
    backgroundColor: "lightgrey",
  },
});
