import React from 'react';
import {Pressable, StyleSheet, Text, View} from "react-native";

const GoalItem = ({ goal, onDeleteGoal }) => {

    return (
        <View style={styles.goalItem}>
            <Pressable
                onPress={onDeleteGoal.bind(this, goal.id)}
                android_ripple={{color: '#210644'}}

                // iOS press effect
                // style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{goal.text}</Text>
            </Pressable>
        </View>
    );
};

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
    },
    goalText: {
        padding: 8,
        color: 'white'
    },
    pressedItem: {
        opacity: 0.5
    }
})
