import React from 'react';
import { Text, Button, View, Pressable } from 'react-native';

import { styles } from './BatButtonStyle';

export function BatButton() {
  return (
    <View style={styles.container}>
        <Button 
        onPress={()=>{console.log("olá")}}
        title='Click Aqui'
        accessibilityLabel='click em mim'
        color="#831584"
        />
        <Pressable 
        onPress={()=>{console.log("fui Pressionado")}}
        >
        <Text>⚡Copy</Text>
        </Pressable>
    </View>
  );
}