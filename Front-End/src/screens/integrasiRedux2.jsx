import React from "react";
import { View, Text, Button, TextInput, FlatList, StyleSheet } from "react-native";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote, deleteNote, editNote } from "../hooks/action";

export default function IntegrasiRedux() {
  const [note, setNote] = useState("");
  const [editedNote, setEditedNote] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);

  const handleAddNote = () => {
    if (note === "") {
      return;
    }
    dispatch(addNote(note));
    setNote("");
  };

  const handleRemoveNote = (index) => {
    dispatch(deleteNote(index));
    console.log(index);
  };

  const handleEditNote = (index) => {
    setEditedNote(notes[index]);
    setEditingIndex(index);
  };

  const handleSaveEdit = () => {
    if (editedNote !== "") {
      dispatch(editNote(editingIndex, editedNote));
      setEditedNote("");
      setEditingIndex(null);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
      }}
    >
      <Text style={{ fontSize: 20 }}>Integrasi Redux Notes:App</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          marginTop: 20,
          textAlign: "center",
        }}
        placeholder="Enter Note"
        value={note}
        onChangeText={(text) => setNote(text)}
      />
      <Button title="Add Note" onPress={handleAddNote} />
      <View
        style={{
          marginTop: 20,
          flexDirection: "column",
          gap: 10,
          borderColor: "gray",
          borderWidth: 1,
        }}
      >
        <FlatList
          data={notes}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => 
          (
          <>
          <Text>{item}</Text>
          <Button title="Delete" onPress={() => handleRemoveNote(item.index)} />
          {editingIndex === item.index ? (
            <View style={styles.editContainer}>
              <TextInput
                style={styles.input}
                onChangeText={setEditedNote}
                value={editedNote}
                placeholder="Edit your note"
              />
              <Button title="Save" onPress={handleSaveEdit} />
            </View>
          ) : (
            <Button
              title="Edit"
              onPress={() => handleEditNote(item.index)}
            />
          )}
          </>
          )
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  noteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10
  },
  noteItem: {
    flex: 1,
    fontSize: 16
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10
  }
});