import react from "react";
import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, multi2, div2, reset } from "../hooks/action";

export default function ReduxConcept() {
    
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }

    const handleMulti2 = () => {
        dispatch(multi2());
    }

    const handleDiv2 = () => {
        dispatch(div2());
    }

    const handleReset = () => {
        dispatch(reset());
    }

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text style={{ fontSize: 20 }}>Redux Concept Counter App</Text>
            <Text style={{ fontSize: 48 }}>Count: {count}</Text>
            <View style={{ marginTop: 20, flexDirection: "column", gap: 10 }}>
                <Button title="Increment" onPress={handleIncrement} />
                <Button title="Decrement" onPress={handleDecrement} />
                <Button title="Multi2" onPress={handleMulti2} />
                <Button title="Div2" onPress={handleDiv2} />
                <Button title="Reset" onPress={handleReset} />
            </View>
        </View>
    );
};