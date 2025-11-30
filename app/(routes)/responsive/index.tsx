import { dIsTablet } from "@/constants/contanst";
import useOrientation from "@/hooks/useOrientation";
import { Image } from "expo-image";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DATA } from "../../../constants/data";
export default function Index() {
  const orientation = useOrientation();
  console.log(
    dIsTablet
      ? "Mi dispositivo es una tableta"
      : "mi dispositivo es un telefono"
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        {/** HEADER */}
        <View
          style={{
            height: 55,
            alignSelf: "stretch",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "orange",
          }}
        >
          <Text style={{ fontSize: 19, fontWeight: "bold", color: "#000" }}>
            Header
          </Text>
        </View>
        {/** el flex de abajo empuja el flex header hacia arriba sin esto en ek centro */}

        <View style={{ flex: 1, alignSelf: "stretch", flexDirection: "row" }}>
          <View
            style={{
              height: "auto",
              alignSelf: "stretch",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              marginLeft: 20,
            }}
          >
            {/** flexwrap si no cabe ponlo debajo */}
            {DATA.map((x) => (
              <View
                key={x.id}
                style={{
                  height: 100,
                  width: 100,
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 1,
                  borderColor: "#adadad",
                  backgroundColor: "#f1f1f1",
                  borderRadius: 8,
                  marginTop: 20,
                  marginRight: 20,
                }}
              >
                <Image
                  source={{ uri: x.img }}
                  style={{ width: 55, height: 55 }}
                />
              </View>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
    /**ejemplo de uso
     * <View style={orientation === ORIENTATION.PORTRAIT ? styles.container : styles.containerLandscape}
     */
  );
}
