import { Pressable, Text, TextInput, View } from 'react-native'
import React from 'react'
import { styles } from './ScreenRegister.style'

const ScreenRegister = () => {
  return (
    <>
            <View style={styles.container}>             
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email..."
                    />
                    <TextInput
                        style={styles.inputText}
                        placeholder="Contraseña..."
                    />
                    <TextInput
                        style={styles.inputText}
                        placeholder="Confirmar contraseña..."
                    />
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Registrar</Text>
                    </Pressable>
                    
                </View>
            </View>
        </>
  )
}

export default ScreenRegister