import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";

import {SignedInStack, SignedOutStack} from "./screens/navigation";

import { firebase } from './firebase';

export default function App() {

  const [ currentUser, setCurrentUser ] = useState(null)

  const userHandler = (user) => {
  user ? setCurrentUser(user) : setCurrentUser(null)
  }

  useEffect(() => firebase.auth().onAuthStateChanged(user => userHandler(user))
  ,[]
  )

    return currentUser ? <SignedInStack /> : <SignedOutStack />
}

