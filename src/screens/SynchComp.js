import React from 'react';
import { View, Text, Button } from 'react-native';

const SynchComp = () => {
    const handleClick = () => {
        console.log("1. Start Synch Operation");

        for (let i = 0; i < 3; i++) {
            console.log(`2. Synch Operation '${i + 1}'`);
        }

        console.log("3. End Synch Operation");
    };
    return (
        <View>
            <Text style={{ fontSize: 20 }}>Synchronous Component</Text>
            <Button title="Run Synch Operation" onPress={handleClick}/>
        </View>
    )
}

export default SynchComp;