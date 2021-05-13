import React, { Component } from 'react';
import { connect } from 'react-redux';
import FCText from './FCText';
import FCView from './FCView';
import { TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import FCButton from './FCButton';
import uuid from 'react-native-uuid';
import { addDeck } from '../actions/decks';

class NewDeck extends Component {

    state = {
        inputName: '',
    }

    nameChanged = (input) => {
        this.setState(() => ({
            inputName: input
        }));
    }

    onSubmit = () => {
        const id = uuid.v4();
        this.props.dispatch(addDeck({id: id, name: this.state.inputName.trim(), questions: []}));
        this.props.navigation.navigate("Deck", {id: id})
    }

    render() {
        return (
            <FCView>
                <KeyboardAvoidingView behavior='padding' style={[styles.center, {height: '100%'}]}>
                    <FCText style={{fontSize: 20, margin: 10}}>
                        Adding a new Deck
                    </FCText>
                    <TextInput style={styles.input} placeholder='Deck name' value={this.state.inputAnswer} onChangeText={this.nameChanged}></TextInput>
                    <FCButton text='Submit' disabled={this.state.inputName === ''} onPressFunction={this.onSubmit}></FCButton>
                </KeyboardAvoidingView>
            </FCView>
        );
    }
}

function mapStateToProps({decks}) {
    return {
        decks
    }
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#444',
    width: '90%',
    borderRadius: 25,
    color: '#fff'
  },
});

export default connect(mapStateToProps)(NewDeck)