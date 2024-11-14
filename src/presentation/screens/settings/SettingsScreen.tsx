import { View, Text, Pressable } from 'react-native'
import { styles } from '../../../config/app-theme'
import { UseCounterStore } from '../profile/counter-store'
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';


const SettingsScreen = () => {

  const count = UseCounterStore(state => state.count);
  const incrementBy = UseCounterStore(state => state.incrementBy);
  const naviagation = useNavigation();


  useEffect(() => {
    naviagation.setOptions({
      title:`Contador: ${count}`
    })
  }, [count])
  





  return (
    <View style={styles.container}>
      <Text style={styles.title}>Count:  {count}</Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => incrementBy(+1)}
      >
        <Text>+1</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
      >
        <Text>-1</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
      >
        <Text>Resetear</Text>
      </Pressable>

    </View>
  )
}
export default SettingsScreen