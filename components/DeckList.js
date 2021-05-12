import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, ScrollView, TouchableOpacity, View } from 'react-native';
import { addDeckHandler } from '../actions/decks';

export class DeckList extends Component {

    addDeck = () => {
        const id = this.props.decks.length;
        this.props.dispatch(addDeckHandler({id: id, name: `Deck${id}`}));
    }

    render() {
        let { decks } = this.props;
        return (
            <View>
                {/* <ScrollView>
                    {decks.map(deck => (
                        <Text key={deck.id} style={{color: '#fff'}}>{deck.name}</Text>))
                    }
                </ScrollView> */}
                <TouchableOpacity onPress={this.addDeck}><Text>Add</Text></TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps (state) {
    console.log(state.decks)
    const d  = state.decks ? state.decks : [];
    console.log(d)
    return {
        decks: d
    }
}

export default connect(mapStateToProps)(DeckList);