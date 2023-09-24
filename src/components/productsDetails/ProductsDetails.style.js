import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/Colors'

export const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: '85%',
        alignSelf: 'center',
        borderColor: 'black',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    img: {
        width: '100%',
        height: '40%',
        marginTop: 10
    },
    descriptionText: {
        fontSize: 19,
        textAlign: 'center',
        fontFamily: 'JosefinItalic',
    },
    priceText: {
        fontSize: 20,
        fontFamily: 'JosefinBoldItalic',
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.two,
        borderRadius: 15,
        paddingHorizontal: 25,
        paddingVertical: 10
    },
    buttonText: {
        fontSize: 25,
        color: Colors.four,
        fontFamily: 'JosefinBoldItalic',
    }
})