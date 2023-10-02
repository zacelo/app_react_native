import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/Colors'


export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    justifyContent: 'space-around',
    width: '90%',
    height: '46%',
    backgroundColor: Colors.two,
    borderRadius: 17,
    alignItems: 'center',
  },
  modalButtonsContainer: {
    flexDirection: 'row'
  },
  modalButton: {
    margin: 10,
    backgroundColor: Colors.four,
    paddingHorizontal: 8,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  modalTextContainer: {
    alignItems: 'center'
  },
  modalButtonText: {
    color: Colors.one,
    fontFamily: 'JosefinSemiBoldItalic',
    fontSize: 18
  },
  modalText: {
    fontSize: 23,
    color: Colors.four,
    fontFamily: 'JosefinSemiBoldItalic',
    textAlign: 'center'
  },
  modalTextTitle: {
    fontSize: 30,
    marginBottom: 8
  },
  img: {
    width: 130,
    height: 110,
    borderRadius: 180,
    borderColor: Colors.one,
    borderWidth: 6,
  },
})