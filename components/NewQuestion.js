import React, { Component } from 'react';
import { connect } from 'react-redux';
import FCText from './FCText';
import FCView from './FCView';
import { TextInput, StyleSheet, KeyboardAvoidingView } from 'react-native'
import FCButton from './FCButton';
import uuid from 'react-native-uuid';
import { addQuestionHandler } from '../actions/shared';

class NewQuestion extends Component {

    state = {
        inputQuestion: '',
        inputAnswer: '',
    }

    questionChanged = (input) => {
        this.setState(() => ({
            inputQuestion: input
        }));
    }

    answerChanged = (input) => {
        this.setState(() => ({
            inputAnswer: input
        }));
    }

    onSubmit = () => {
        this.props.dispatch(addQuestionHandler({id: uuid.v4(), question: this.state.inputQuestion, answer: this.state.inputAnswer, deckId: this.props.navigation.state.params.deckId}));
        this.props.navigation.goBack();
    }

    render() {
        const {deckId} = this.props.navigation.state.params;
        return (
            <FCView>
                <KeyboardAvoidingView behavior='padding' style={[styles.center, {height: '100%'}]}>
                    <FCText style={{fontSize: 20, margin: 10}}>
                        Adding a Question to {this.props.decks[deckId].name}
                    </FCText>
                    <TextInput style={styles.input} placeholder='Your Question' value={this.state.inputQuestion} onChangeText={this.questionChanged}></TextInput>
                    <TextInput style={styles.input} placeholder='Your Answer' value={this.state.inputAnswer} onChangeText={this.answerChanged}></TextInput>
                    <FCButton text='Submit' disabled={this.state.inputQuestion === '' || this.state.inputAnswer === ''} onPressFunction={this.onSubmit}></FCButton>
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

export default connect(mapStateToProps)(NewQuestion)