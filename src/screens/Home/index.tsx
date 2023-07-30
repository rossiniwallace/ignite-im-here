
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';

import { Participant } from '../../components/Participant'

export function Home() {

  function handleParticipantAdd() {
    console.log('Você clicou no botão de Adicionar!')
  }

  function handleParticipantRemove(name: string) {
    console.log(`Você clicou em remover o participante ${name}`)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sexta, 4 de novembro de 2022.
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor={'#6B6B6B'}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <Participant name='Wallace' onRemove={() => handleParticipantRemove("Wallace")}/>
    </View>
  );
}
