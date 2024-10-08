import React from "react";
import  { NavigationContainer } from "@react-navigation/native";
import Rotas from "./components/Rotas";
import RotasAcesso from "./components/RotasAcesso";

function App() {
  return (
    <NavigationContainer>
      <RotasAcesso/>
    </NavigationContainer>
  );
}

export default App;