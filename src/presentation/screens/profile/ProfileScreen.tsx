import { View, Text, Pressable } from 'react-native'
import { styles } from '../../../config/app-theme'
import { useProfileStore } from '../../store/profile-store'


const ProfileScreen = () => {

  const name = useProfileStore(state => state.name)
  const email = useProfileStore(state => state.email)
  const changeProfile = useProfileStore(state => state.changeProfile)



  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{email}</Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({name:'mau'})}
      >
        <Text>Cambiar nombre</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => useProfileStore.setState({email:'mau@tatd.com'})}
      >
        <Text>Cambiar email</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => changeProfile('Jhon Doe', 'ad@gg.com')}
      >
        <Text>Regresar a Jhon Doe</Text>
      </Pressable>

    </View>
  )
}
export default ProfileScreen