import {Button, FlatList, StyleSheet, View} from 'react-native';
import {useState} from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import {StatusBar} from "expo-status-bar";

export default function App() {
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [courseGoals, setCourseGoals] = useState([])

    const startAddGoalHandler = () => {
        setModalIsVisible(true)
    }

    const endAddGoalHandler = () => {
        setModalIsVisible(false)
    }

    const addGoalHandler = (enteredGoalText) => {
        setCourseGoals(prev => [...prev, {id: Math.random().toString(), text: enteredGoalText}])
        endAddGoalHandler()
    }

    const deleteGoalHandler = (id) => {
        setCourseGoals(prev => prev.filter(goal => goal.id !== id))
    }

  return (
    <>
        <StatusBar style='light' />
        <View style={styles.appContainer}>
            <Button title='Add New Goal' onPress={startAddGoalHandler} color='#5e0acc' />
            <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler} />
            <View style={styles.goalsContainer}>
                <FlatList
                    data={courseGoals}
                    renderItem={itemData => {
                        return (
                            <GoalItem
                                goal={itemData.item}
                                onDeleteGoal={deleteGoalHandler}
                            />
                        )
                    }}
                    keyExtractor={(item/*, index*/) => item.id}
                    alwaysBounceVertical={false}
                />
            </View>
        </View></>
  );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
        backgroundColor: '#1e085a'
    },
    goalsContainer: {
        flex: 5
    }
});
