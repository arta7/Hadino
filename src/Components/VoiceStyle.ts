import {StyleSheet} from 'react-native'


export default StyleSheet.create({
  container: {
    flex: 1,
  },
  float: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  top: {
    width: '100%',
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
  },
  topBar: {
    backgroundColor: '#ef7145',
    height: 140,
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width:'100%',
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#e20e30',
    marginTop: 250 
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ef7145',
    flex: 1,
  },
  title: {
    color: '#f0efef',
    fontSize: 36,
  },
  subText: {
    color: '#c8c8c8',
    fontSize: 25,
  },
  iconImg:{
    height: 32,
    width: 32, 
    alignSelf:'center'
  },
  btnStopCall: {
    height:65,
    width:65,
    // flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:32,
    backgroundColor: "#FF0000",
    position:'absolute',
    bottom:160,alignSelf:'center'
  },
  btnAction: {
    height:45,
    width:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:22,
    backgroundColor: "#fff",
  },
  shadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  }
})