import React, { useState } from 'react';
import { Alert, TouchableOpacity, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { auth } from '../firebase'; // Importando o auth
import { signInWithEmailAndPassword } from "firebase/auth"; // Importando a função de login

function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);

    function logar() {
        if (!email || !senha) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        setLoading(true);
        
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Rotas', { email: user.email });
            })
            .catch((error) => {
                Alert.alert('Erro', error.message);
                setLoading(false);
            });
    }

    return (
        <View style={estilo.container}>
            <Text style={estilo.titulo}>Login</Text>

            <TextInput
                style={estilo.input}
                placeholder="Digite seu email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCompleteType="email"
            />
            <TextInput
                style={estilo.input}
                placeholder="Digite sua senha"
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
                autoCompleteType="password"
            />

            <TouchableOpacity style={estilo.botaoLogar} onPress={logar} disabled={loading}>
                {loading ? (
                    <ActivityIndicator size="small" color="#fff" />
                ) : (
                    <Text style={estilo.textoBotaoLogar}>Logar</Text>
                )}
            </TouchableOpacity>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 20,
    },
    titulo: {
        fontSize: 40,
        color: 'white',
        marginBottom: 30,
        textAlign: 'center',
    },
    input: {
        backgroundColor: 'white',
        width: '100%',
        maxWidth: 300,
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    botaoLogar: {
        height: 50,
        backgroundColor: '#a3d5ff',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,

    },
    textoBotaoLogar: {
        color: '#000',
        fontSize: 22,
        fontWeight: '800',
    },
});

export default Login;
