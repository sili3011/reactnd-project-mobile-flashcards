import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';
import { addDeckHandler } from '../actions/decks';
import FCText from './FCText';
import FCView from './FCView';
import FCButton from './FCButton';
import uuid from 'react-native-uuid';

class DeckList extends Component {
    renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate("Deck", {id: item.id})}>
            <FCText>{ item.name }</FCText>
            <FCText>{ `Number of questions: ${item.questions.length}` }</FCText>
        </TouchableOpacity>
    );

    render() {
        let { decks } = this.props;
        return (
            <FCView>
                <View style={{height: '80%'}}>
                    <FlatList
                        data={decks}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={styles.containerCenter}>
                    <FCButton onPressFunction={() => this.props.navigation.navigate("NewDeck")} icon='plus-circle' text='Add Deck'/>
                </View>
            </FCView>
        );
    }
}

const styles = StyleSheet.create({
  containerCenter: {
    flex: 1,
    backgroundColor: '#333',
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
  title: {
    fontSize: 32,
  },
});


function mapStateToProps ({decks}) {
    return {
        decks: decks ? Object.values(decks) : []
    }
}

export default connect(mapStateToProps)(DeckList);