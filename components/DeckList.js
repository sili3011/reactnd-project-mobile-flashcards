import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, TouchableOpacity, View, FlatList } from 'react-native';
import { addDeckHandler } from '../actions/decks';
import FCText from './FCText';
import FCView from './FCView';

class DeckList extends Component {

    addDeck = () => {
        const id = this.props.decks.length;
        this.props.dispatch(addDeckHandler({id: `Deck${id}`, name: `Deck${id}`, questions: []}));
    }

    renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate("Deck", {id: item.id})}>
            <FCText text={ item.name }/>
        </TouchableOpacity>
    );

    render() {
        console.log(this.props);
        let { decks } = this.props;
        return (
            <FCView>
                <View style={{height: '90%'}}>
                    <FlatList
                        data={decks}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={styles.containerCenter}>
                    <TouchableOpacity onPress={this.addDeck}><FCText text={'Add Deck'}/></TouchableOpacity>
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