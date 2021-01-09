import React, {useState} from "react";

import Screen from "./app/components/Screen";
import { Switch } from "react-native";

import AppText from "./app/components/AppText";

export default function App() {
  const [isNew, setIsNew] = useState(false)
  return (
    <Screen>
      <Switch 
        value={isNew}
        onValueChange={value => setIsNew(value)}
      />
      <AppText>{isNew ? 'Is New' : 'Not New'}</AppText>
    </Screen>
  );
}
