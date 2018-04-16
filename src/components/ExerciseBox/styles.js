import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    margin: 10,
  },
  name: {
    backgroundColor: '#1e7ca7',
    textAlign: 'center',
    padding: 15,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  },
  lastSession: {
    backgroundColor: '#263A40',
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 50,
  },
  lastSessionText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  table: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  td: { // table data
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#e2e2e2',
  },
  targetsContainer: {
    alignItems: 'center',
    backgroundColor: '#edf5f0',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#91969880',
  },
  targetsHeading: {
    fontSize: 15,
    fontStyle: 'italic',
    marginBottom: 4,
    fontWeight: 'bold',
    color: '#2a4032',
    padding: 5,
  },
  targets: {
    fontSize: 15,
    color: '#2a4032',
  },
  btnAddSet: {
    backgroundColor: '#00a442',
    margin: 10,
    padding: 10,
    width: 316,
    alignSelf: 'center',
  },
  btnSave: {
    backgroundColor: '#00a442',
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
    width: 316,
    alignSelf: 'center',
  },
  btnCancel: {
    backgroundColor: '#ff6f4d',
    marginTop: 8,
    marginBottom: 10,
    padding: 10,
    width: 316,
    alignSelf: 'center',
  },
  ptNoteContainer: {
    backgroundColor: '#eee',
    padding: 10,
    borderBottomWidth: 2,
    borderColor: '#263A40',
  },
  ptNoteHeading: {
    fontWeight: 'bold',
    color: '#263A40',
  },
  ptNoteText: {
    color: '#263A40',
  },
  formContainer: {
    marginBottom: 10,
    marginTop: 10,
  },
  formInput: {
    borderColor: '#222',
    backgroundColor: '#fff',
    paddingLeft: 8,
    paddingRight: 8,
  },
  formLabel: {
    color: '#eee',
    marginBottom: 4,
  },
  textBold: {
    fontWeight: 'bold',
  },
});

export default styles;
