import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { addCounter, decrement, deletResult, increment, storeResult } from './storage/action/Action';

const Calculation = (props) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: 'white' }}>Open up App.js to start working on your app!</Text>
            <h1 style={{ color: "white" }}>
                Value= {props.cal}
            </h1>

            <Button style={styles.btn} title='Increment' onPress={props.incre} />
            <Button style={styles.btn} title='Decrement' onPress={props.decre} />
            <Button style={styles.btn} title='Add 10' onPress={props.add} />
            <Button style={styles.btn} title='Storing result' onPress={props.storingResult} />
            <ul>

                {props.res.map((stResult) => (
                    <li
                        style={{ color: 'white' }}
                        key={stResult.id}
                        onClick={() => props.deletResult(stResult.id)}>
                        {stResult.value}
                    </li>
                ))}

            </ul>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn: {
        marginBottom: 20,
    },
});

const mapPropsToState = (state) => {
    return {

        cal: state.cal.counter,
        res: state.cal.result
    }

}
const mapDispatchToProps = (dispatch) => {

    return {
        incre: () => dispatch(increment()),
        decre: () => dispatch(decrement()),
        add: () => dispatch(addCounter(10)),
        storingResult: () => dispatch(storeResult()),
        deletResult: (id) => dispatch(deletResult(id))

    }


}
export default connect(mapPropsToState, mapDispatchToProps)(Calculation);