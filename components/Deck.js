import React, { Component } from 'react';
import { connect } from 'react-redux';
import FCText from './FCText';
import FCView from './FCView';
import FCButton from './FCButton';
import { StyleSheet, View } from 'react-native';

class Deck extends Component {
    render() {
        const { id } = this.props.navigation.state.params;
        const deck = this.props.decks[id];

        if(!deck) {
            return (
            <FCText style={{fontSize: 30, margin: 10}}>
                LOADING
            </FCText>)
        }

        return (
            <FCView>
                <View style={[styles.center, {height: '100%'}]}>
                    <FCText style={{fontSize: 30, margin: 10}}>
                        {deck.name}
                    </FCText>
                    <FCText style={{color: '#888', marginBottom: 50}}>
                        {deck.questions.length} questions included
                    </FCText>
                    <View style={{flexDirection: 'row'}}>
                        <FCButton onPressFunction={() => this.props.navigation.navigate("NewQuestion", {deckId: id})} icon='plus-circle' text='Add Question'/>
                        <FCButton onPressFunction={() => this.props.navigation.navigate("Quiz", {deckId: id})} icon='question-circle' text='Start Quiz' disabled={deck.questions.length === 0}/>
                    </View>
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
  }
})

export default connect(mapStateToProps)(Deck)