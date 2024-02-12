import React from "react";
import { View, Text, Button, TextInput, FlatList } from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote, removeNote, editNote } from "../hooks/action";

export default function IntegrasiRedux() {

    const [note, setNote] = useState("");
    const [newText, setNewtext] = useState([]);
    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes);

    const handleAddNote = () => {
        if (note === "") {
            return;
        }
        dispatch(addNote(note));
        setNote("");
    }

    const handleRemoveNote = (index) => {
        dispatch(removeNote(index));
    }

    const handleEditNote = (index, newText) => {
        if (newText === "") {
            return;
        }
        dispatch(editNote(index, newText));
    }

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 10 }}>
            <Text style={{ fontSize: 20 }}>Integrasi Redux Notes:App</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200, marginTop: 20, textAlign: "center" }}
                placeholder="Enter Note"
                value={note}
                onChangeText={(text) => setNote(text)}
            />
            <Button title="Add Note" onPress={handleAddNote} />
            <View style={{ marginTop: 20, flexDirection: "column", gap: 10, borderColor: 'gray', borderWidth: 1 }}>
                <FlatList
                    data={notes}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <Text>{item}</Text>}
                />
            </View>
        </View>
    )
}