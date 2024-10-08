import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { Firebase } from "../firebase";

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
     const [initializing, setInitializing] = useState(true);
     const [user, setUser] = useState();

     function dados (user) {
            setUser(user);
            if (initializing) setInitializing(false);
     }

     function logar() {
        Firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(() => {
    if(user){
        alert('Usuário não existe');
        return;
    }
    navigation.navigate('Rotas',{email});

        })
        .catch((error) => {
            alert(error);
            navigation.navigate('Login');
        })
        

     }
  return (
    <View style={estilo.container}>
      <Text style={estilo.titulo}> Login </Text>
      <TextInput style={estilo.input} placeholder="Digite seu email" />
      <TextInput style={estilo.input} placeholder="Digite sua senha" />
      <TouchableOpacity style={estilo.botaoLogar}>
        <Text style={estilo.textoBotaoLogar}>Logar</Text>
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
      backgroundColor: '#4CAF50',
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 15,
    },
    textoBotaoLogar: {
      color: 'white',
      fontSize: 18,
    },
  });
  
