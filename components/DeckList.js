import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, ScrollView, TouchableOpacity, View } from 'react-native';
import { addDeckHandler } from '../actions/decks';

class DeckList extends Component {

    addDeck = () => {
        const id = this.props.decks.length;
        this.props.dispatch(addDeckHandler({id: id, name: `Deck${id}`}));
    }

    render() {
        let { decks } = this.props;
        return (
            <View>
                <View style={{height: '10%'}}>
                    <ScrollView>
                        {decks.map(deck => (
                            <Text key={deck.id} style={{color: '#fff'}}>{deck.name}</Text>))
                        }
                    </ScrollView>
                </View>
                <TouchableOpacity onPress={this.addDeck}><Text>Add</Text></TouchableOpacity>
            </View>
        );
    }
}

function mapStateToProps ({decks}) {
    return {
        decks: decks ? Object.values(decks) : []
    }
}

export default connect(mapStateToProps)(DeckList);