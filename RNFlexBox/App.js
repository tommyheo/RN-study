import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.flexbox1}>
        <Text>flexbox1</Text>
      </View>
      <View style={styles.flexbox2}>
        <Text>flexbox2</Text>
      </View>
      <View style={styles.flexbox3}>
        <Text>flexbox3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: 300,
    padding: 50,
    flexDirection: "row",
  },
  flexbox1: {
    flex: 5,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center"
  },
  flexbox2: {
    flex: 2,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center"
  },
  flexbox3: {
    flex: 2,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center"
  },
});
