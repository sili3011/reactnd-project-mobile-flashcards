import React, { Component } from 'react';
import { connect } from 'react-redux';
import FCText from './FCText';
import FCView from './FCView';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import FCButton from './FCButton';

class Quiz extends Component {

    state = {
        currentQuestionIndex: 0,
        correctlyAnswered: 0,
        showAnswer: false
    }

    toggleShowAnswer = () => {
        this.setState(() => ({
            showAnswer: !this.state.showAnswer
        }));
    }

    goOn = (correct) => {
        if(correct) {
            this.setState(() => ({
                correctlyAnswered: this.state.correctlyAnswered +1
            }));
        }
        this.setState(() => ({
            currentQuestionIndex: this.state.currentQuestionIndex +1
        }));
    }

    restart = () => {
        this.setState(() => ({
            correctlyAnswered: 0,
            currentQuestionIndex: 0
        }));
    }

    render() {
        const {deckId} = this.props.navigation.state.params;
        const deck = this.props.decks[deckId];
        const index = this.state.currentQuestionIndex;
        return (
            <FCView>
                <View style={[styles.center, {height: '100%'}]}>
                    { index < deck.questions.length ?
                    <View>
                        <FCText>
                            Question {index + 1} of {deck.questions.length}:
                        </FCText>
                        <View style={[styles.item, {margin: 20}]}>
                            <FCText>
                                {deck.questions[index].question}
                            </FCText>
                        </View>
                        <View style={styles.center}>
                            { this.state.showAnswer ?
                            <TouchableOpacity onPress={this.toggleShowAnswer}>
                                <FCText>
                                    {deck.questions[index].answer}
                                </FCText>
                            </TouchableOpacity> :
                            <TouchableOpacity onPress={this.toggleShowAnswer}>
                                <FCText>
                                    Click here to show answer
                                </FCText>
                            </TouchableOpacity>
                            }
                        </View>
                        <View style={{flexDirection: 'row', height: '100%', alignItems: 'flex-end'}}>
                            <FCButton style={{backgroundColor: '#27ae60'}} text='Correct' onPressFunction={() => this.goOn(true)}/>
                            <FCButton style={{backgroundColor: '#c0392b'}} text='Wrong' onPressFunction={() => this.goOn(false)}/>
                        </View>
                    </View> : 
                    <View style={styles.center}>
                        <FCText style={{fontSize: 30, margin: 10}}>
                            You have answered all questions of {deck.name}!
                        </FCText>
                        <FCText style={{marginBottom: 50}}>
                            You answered {this.state.correctlyAnswered} of {deck.questions.length} correct, that's {((this.state.correctlyAnswered/deck.questions.length)*100).toFixed(2)}%!
                        </FCText>
                        <View style={{flexDirection: 'row'}}>
                            <FCButton icon='chevron-left' text='Go back to Deck' onPressFunction={() => this.props.navigation.goBack()}/>
                            <FCButton icon='redo' text='Restart Quiz' onPressFunction={this.restart}/>
                        </View>
                    </View>}
                </View>
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
  item: {
    backgroundColor: '#444',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 25
  },
});

export default connect(mapStateToProps)(Quiz)