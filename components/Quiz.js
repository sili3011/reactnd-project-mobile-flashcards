import React, { Component } from 'react';
import { connect } from 'react-redux';
import FCText from './FCText';
import FCView from './FCView';
import { StyleSheet, View } from 'react-native';

class Quiz extends Component {
    render() {
        return (
            <FCView>
                <View style={[styles.center, {height: '100%'}]}>
                    <FCText>
                        QUIZ TIME!
                    </FCText>
                </View>
            </FCView>
        );
    }
}

function mapStateToProps({decks, questions}) {
    return {
        decks,
        questions
    }
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default connect(mapStateToProps)(Quiz)