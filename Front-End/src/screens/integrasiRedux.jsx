// components/NoteForm.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, deleteNote, editNote } from "../hooks/action";
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from "react-native";

const IntegrasiRedux = () => {
  const [noteText, setNoteText] = useState("");
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes);
  const [editedNote, setEditedNote] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAddNote = () => {
    if (noteText.trim() !== "") {
      dispatch(addNote(noteText));
      setNoteText("");
    }
  };

  const handleDeleteNote = (index) => {
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
    <View style={{ flex: 1, padding: 20, marginBottom: 20 }}>
      <View style={{ marginBottom: 20 }}>
        <TextInput
          style={styles.input}
          placeholder="Type your note here"
          value={noteText}
          onChangeText={(text) => setNoteText(text)}
        />
        <TouchableOpacity style={styles.button} title="Add Note" onPress={handleAddNote}>
          <Text style={styles.buttonText}>Add Note</Text>
        </TouchableOpacity>
        <View>
          {notes.map((note, index) => (
            <View key={index} style={styles.noteContainer}>
              {editingIndex === index ? (
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
                <>
                  <Text style={styles.noteItem}>{note}</Text>
                  <Button title="Edit" onPress={() => handleEditNote(index)} />
                  <Button
                    title="Delete"
                    onPress={() => dispatch(handleDeleteNote(index))}
                  />
                </>
              )}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  noteContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    gap: 10,
  },
  noteItem: {
    flex: 1,
    fontSize: 16,
    borderColor: "gray",
    borderWidth: 1,

  },
  editContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#2196F3",
    color: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  }
});

export default IntegrasiRedux;
