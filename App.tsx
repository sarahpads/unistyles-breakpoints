import React from 'react';
import { Dimensions, SafeAreaView } from 'react-native';
import { Display, mq, StyleSheet, useUnistyles } from 'react-native-unistyles';
import { Card, Text } from 'react-native-paper';

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints {
    mobile: number;
    tablet: number;
  }
}

StyleSheet.configure({
  breakpoints: {
    mobile: 0,
    tablet: 1024,
  }
})

export default function App() {
  const { rt } = useUnistyles();
  console.log(rt.breakpoint, Dimensions.get('window').width);
  return (
    <SafeAreaView style={styles.container}>
      <Display mq={mq.only.width('mobile', 'tablet')}>
        <Card>
          <Text>Mobile to Small Tablet</Text>
        </Card>
      </Display>

      <Display mq={mq.only.width('tablet')}>
        <Card>
          <Text>Small Tablet and up</Text>
        </Card>
      </Display>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
