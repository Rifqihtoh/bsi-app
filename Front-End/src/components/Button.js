import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

// function Button({ title, onPress }) {
//     return (
//         <TouchableOpacity onPress={onPress}>
//             <View style={styles.button}>
//                 <Text style={styles.buttonText}>{title}</Text>
//             </View>
//         </TouchableOpacity>
//     );
// }

export default function Button({ title, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}