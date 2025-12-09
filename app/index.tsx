import { useRouter } from "expo-router/build/hooks";
import { ImageBackground, Pressable, Text, View } from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground source={require(`../assets/images/mossWall.png`)} style={{flex: 1, justifyContent: "center", alignItems: "center",  width: "100%", height: "100%"}}>
      <View style={{ 
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "center", 
          gap: 20, 
          padding: 20, 
          borderRadius: 10
        }}>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 20 }}>
          <Pressable onPress={() => router.push("/singleplayer")} style={{ backgroundColor: "rgb(9, 65, 17)", paddingVertical: 15, paddingHorizontal: 25, borderRadius: 10,}}>
            <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>Singleplayer</Text>
          </Pressable>
          <Pressable onPress={() => router.push("/multiplayer")} style={{ backgroundColor: "rgb(9, 65, 17)", paddingVertical: 15, paddingHorizontal: 25, borderRadius: 10,}}>
            <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>Multiplayer</Text>
          </Pressable>
        </View>

        <Pressable onPress={() => router.push("/howToPlay")} style={{ backgroundColor: "rgb(9, 65, 17)", paddingVertical: 15, paddingHorizontal: 25, borderRadius: 10, marginTop: 30}}>
          <Text style={{ fontSize: 24, color: "white", fontWeight: "bold" }}>How to Play</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}