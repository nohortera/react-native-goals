import React, {useState} from 'react';
import {Button, Image, Modal, StyleSheet, TextInput, View} from "react-native";

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
    }

    const addGoalHandler = () => {
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />
                <TextInput
                    value={enteredGoalText}
                    style={styles.textInput}
                    placeholder='Your course goal!'
                    onChangeText={goalInputHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title='Add Goal'
                            color='#5e0acc'
                            onPress={addGoalHandler}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' color='#f31282' onPress={onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#311b6b'
    },
    image: {
      width: 100,
      height: 100,
      margin: 20
    },
    textInput: {
        width: '100%',
        padding: 12,
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8
    }
})
