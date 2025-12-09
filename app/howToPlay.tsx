import { useRouter } from "expo-router";
import { Dimensions, Image, ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

// --- Card Assets (Assuming they are accessible via relative paths) ---
const imgs = {
    king: require('../assets/images/king.png'),
    peasant: require('../assets/images/peasant.png'),
    villager: require('../assets/images/villager.png'),
    back: require('../assets/images/back.png'),
    moss: require('../assets/images/mossWall.png') // Use the background image
};
type Card = "king" | "villager" | "peasant"

interface CardRowProps {
    leftCard: Card; 
    rightCard: Card;
    rule: string; 
}

const CardRow = ({ leftCard, rightCard, rule }: CardRowProps) => {
    const cardW = 60; // Fixed width for small info cards
    const cardH = cardW * 1.33;

    return (
        <View style={styles.row}>
            <Image source={imgs[leftCard]} style={{ width: cardW, height: cardH }} />
            <Text style={styles.beatsText}>{rule}</Text>
            <Image source={imgs[rightCard]} style={{ width: cardW, height: cardH }} />
        </View>
    );
};

export default function HowToPlayScreen() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <ImageBackground source={imgs.moss} style={styles.background} resizeMode="cover">
                <View style={styles.cardInfoBox}>
                    <Text style={styles.header}>🃏 How to Play</Text>
                    <Text style={styles.subHeader}>Card Hierarchy:</Text>
                    
                    {/* King beats Villager */}
                    <CardRow leftCard="king" rightCard="villager" rule="BEATS" />

                    {/* Villager beats Peasant */}
                    <CardRow leftCard="villager" rightCard="peasant" rule="BEATS" />

                    {/* Peasant beats King */}
                    <CardRow leftCard="peasant" rightCard="king" rule="BEATS" />

                    <Pressable onPress={() => router.back()} style={styles.backButton}>
                        <Text style={styles.backButtonText}>Back to Menu</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardInfoBox: {
        width: Dimensions.get('window').width * 0.8,
        maxWidth: 400,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        borderRadius: 15,
        padding: 25,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#4CAF50',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 15,
    },
    subHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ccc',
        marginBottom: 15,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 10,
    },
    beatsText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4CAF50',
        marginHorizontal: 15,
    },
    backButton: {
        marginTop: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#0c420e',
        borderRadius: 8,
    },
    backButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    }
});