import React, { Component } from 'react';
import { connect } from 'react-redux';
import FCText from './FCText';
import FCView from './FCView';
import { StyleSheet } from 'react-native';

class Deck extends Component {
    render() {
        const {id} = this.props.navigation.state.params;
        return (
            <FCView style={styles.center}>
                <FCText text={this.props.decks[id].name}/>
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