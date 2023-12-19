import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignitems: 'center'
    },
    text: {
        fontSize: 24,
        textAlign: 'center',
        marginTop: 200
    }
});

export default Login;