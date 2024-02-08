import React from 'react';
import { View, Text, Button } from 'react-native';

const AsynchComp = () => {
    const handleAsyncClick = () => {
        console.log("1. Start Synch Operation");

        setTimeout(() => {
            console.log("3. Asynch Operation complete");
        }, 2000);

        console.log("2. Continue Synch Operation");
    };
    return (
        <View>
            <Text style={{ fontSize: 20 }}>Asynchronous Component</Text>
            <Button title="Run Synch Operation" onPress={handleAsyncClick}/>
        </View>
    )
}

export default AsynchComp;