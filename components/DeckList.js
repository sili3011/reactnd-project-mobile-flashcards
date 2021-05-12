import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';

export class DeckList extends Component {
    render() {
        return (
            <Text>DECKLIST</Text>
        );
    }
}

export default connect()(DeckList);