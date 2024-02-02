import {
  Image,
  TouchableWithoutFeedback,
  Animated,
  View,
  PermissionsAndroid,
  TouchableOpacity,StyleSheet,ActivityIndicator,Text,Alert
} from "react-native";
import { GiftedChat, Bubble, Send, Actions } from "react-native-gifted-chat";
import * as Animatable from "react-native-animatable";
import moment from "jalali-moment";
import SoundPlayer from "react-native-sound-player";
import Modal from "react-native-modal";
import Label from 'native-base'
import {Icon,Avatar} from 'react-native-elements'
import { AudioRecorder, AudioUtils } from "react-native-audio";
import React,{ useEffect, useState,useRef ,Fragment}  from "react";
import {ChatsList} from './../Data/StableData'
import { widthPercentageToDP as wp,heightPercentageToDP as hp } from "react-native-responsive-screen";
// import * as Progress from 'react-native-progress';
import axios from "axios";
// import { APIMaster } from "../API/APIMaster";
// import { LoginData } from "../Redux/LoginData";
// import ImagePicker from 'react-native-image-crop-picker';
let timerInterval = null;
let filePath = "";
let lstTicket = "";
const ChatScreen =(props)=> {

  let voiceRecorderContainer = useRef(null)
  let _onFinishedPlayingVoice = null;
  let voiceInfoInterval=0;
  let voiceMsgInfo = { id: 0, type: "voice", path: "", duration: 0 }; //for dispathcing in redux

    moment.locale("fa");

      const[isLoading,setisLoading] = useState(true)
      const[showClose,setshowClose] = useState(false)
      const[showCloseInfoCount,setshowCloseInfoCount] = useState(0)
      const[showCloseInfo,setshowCloseInfo] = useState(false)
      const[isClose,setisClose] = useState(false)
      const[messages,setmessages] = useState([])
      const[msgType,setmsgType] = useState("text" || "image" || "sound")
      const[messageText,setmessageText] = useState('')
      const[lastTicket,setlastTicket] = useState(0)
      const[voiceTimerAnimValue,setvoiceTimerAnimValue] = useState(new Animated.Value(1))
      const[isRecording,setisRecording] = useState(false)

      const[timer,settimer] = useState(0)
      const[msgTypes,setmsgTypes] =useState('')
      const[audio,setaudio] = useState('')
      const[currentTime,setcurrentTime] = useState(0.0)
      const[isPlayingVoice,setisPlayingVoice] = useState(false)
      const[currentPlayingVoiceId,setcurrentPlayingVoiceId] = useState(-1)
      const[currentVoiceTime,setcurrentVoiceTime] = useState(0)
      const[recording,setrecording] = useState(false)
      const[paused,setpaused] = useState(false)
      const[stoppedRecording,setstoppedRecording] = useState(false)
      const[finished,setfinished] = useState(false)
      const[audioPath,setaudioPath] = useState( AudioUtils.DocumentDirectoryPath +
          "/" +
          "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
            let r = (Math.random() * 16) | 0,
              v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
          }).toString() 
           +
          ".aac")
      const[hasPermission,sethasPermission] = useState(undefined)
      const[MessageLoadingId,setMessageLoadingId] = useState(-1)
      const[imageSource,setimageSource] = useState(false)
      const[PickerModalVisiblity,setPickerModalVisiblity] = useState(false)
      const[sendingAudio,setsendingAudio] = useState(false)
      const[voiceRecorded,setvoiceRecorded] = useState(false)
      const[recordedVoicePlaying,setrecordedVoicePlaying] = useState(false)
      const[imageUrlImageViewer,setimageUrlImageViewer] = useState(null)
      const[imageModalisVisible,setimageModalisVisible] = useState(false)
      const[patientId,setpatientId] = useState(null)







  // let SendChatMessage=(messageText,isFile,FileImage)=>{
  //   var params={};
  //   var axiosConfig = {
  //     headers:{
  //       "accept": "*",
  //       'Authorization' :  LoginData.type + ' ' + LoginData.token,
  //       "Content-Type": "multipart/form-data"
  //             }
  //    }
  //    var formdata=new FormData();
  //    if(isFile)
  //    {
  //     formdata.append( "Text",messageText)
  //     formdata.append( "IsFile",isFile)
  //     formdata.append( "File",FileImage)
  //     formdata.append( "RequestId",LoginData.RequestId)
  //    }
  //     else
  //     {
  //       formdata.append( "Text",messageText)
  //       formdata.append( "RequestId",LoginData.RequestId)
  //     }
   
  //    console.log('formdata',formdata)
     
  //   axios.post(APIMaster.URL + APIMaster.ChatSystem.SendChatToChatService,formdata,axiosConfig)
  //   .then( (response)=> {
  //           console.log('response',response)
  //           GetAllMessages()
  //   })
  //   .catch( (error)=> {
  //     console.log('Error categoryitem',error)  
  //     Alert.alert('اخطار',error.response.data.errors[0])  
  //   })
  // }


  // const requestMicrophone = async () => {

  //   try {
  //     const granted = await PermissionsAndroid.reques(
  //       PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
  //       {
  //         title: 'Permissions for record audio',
  //         message: 'Give permission to your device to record audio',
  //         buttonPositive: 'ok',
  //       },
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('permission granted');
        
  //   AudioRecorder.requestAuthorization().then((isAuthorised) => {
  //       sethasPermission(isAuthorised)
  //     prepareRecordingPath(audioPath);

  //     AudioRecorder.onProgress = (data) => {
  //       setcurrentTime(Math.floor(data.currentTime))
  //       settimer(Math.floor(data.currentTime))

  //     };
  //   });
  //     } else {
  //       console.log('permission denied');
  //       return;
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //     return;
  //   }


  // }
  // let onSeeFilePress1=()=> {
  //   props.navigation.navigate("ShowFile", {
  //     id: id,
  //     comeFromChat: true,
  //   });
  // }
//  let sendFirtsChat=(msg1)=>{
//   var axiosConfig = {
//     headers:{
//       "Access-Control-Allow-Origin": "*",
//       'Authorization' :  LoginData.type + ' ' + LoginData.token,
//       "Content-Type": "application/json-patch+json"
//             }
//    }
//    var params={
//     firstMessage:msg1,
//     baseServiceId:props.navigation.getParam('serviceId',null)
//    }
//   axios.post(APIMaster.URL + APIMaster.ChatSystem.RequestToChat2,params,axiosConfig)
//   .then( (response)=> {
//     console.log('active service check ',response.data)
//          Alert.alert('هشدار','درخواست شما به این سرویس دهنده با موفقیت ارسال گردید بعد از تایید توسط سرویس دهنده این سرویس برای شما فعال می شود.')
//          props.navigation.goBack()
 
//         })
//   .catch( (error)=> {
//     console.log('Error categoryitem',error)  
  
//   })
//    }
//  let GetAllMessages=()=>{
//   var axiosConfig = {
//     headers:{
//       "Access-Control-Allow-Origin": "*",
//       'Authorization' :  LoginData.type + ' ' + LoginData.token
//             }
//    }
   
  




   
//   axios.get(APIMaster.URL + APIMaster.ChatSystem.GetChatsDetails+'?requestId='+LoginData.RequestId,axiosConfig)
//   .then( (response)=> {
          
//           console.log('chat request : ',response.data.result.data)  

//           var data =response.data.result.data;
//           var PushData=[]
//           for(let i=0;i<data.length;i++)
//           {
//             if(data[i].chatMessageType == 0)
//             {
//               PushData.push({_id: i,
//                 text: "",
//                 createdAt:  data[i].createDate,
//                 user: {
//                   _id:data[i].isMyMessage ? LoginData.id : 1
//                 },
//                 image:APIMaster.URL +'/'+ data[i].fileOrVoiceAddress,
//                 sent:true,
//                 received:data[i].isSeen
//               })
//             }
//             else
//             {
//             PushData.push({_id: i,
//               text: data[i].text,
//               createdAt:  data[i].createDate,
//               user: {
//                 _id:data[i].isMyMessage ? LoginData.id : 1
//               },
//               sent:true,
//               received:data[i].isSeen
//             })
//             }
//           }
//           setmessages(PushData.reverse())  
//   })
//   .catch( (error)=> {
//     console.log('Error categoryitem',error)  
  
//   })
//  }

//  let SeenAllChats=()=>{
//   console.log('LoginData show seen message',LoginData.RequestId)
//   const options = {
//     method: 'PUT',
//     headers: { "accept": "*",
//     'Authorization' : LoginData.type + ' ' + LoginData.token },
//     url:APIMaster.URL + APIMaster.ChatSystem.SeenAllLimitedChats+'?requestId='+LoginData.RequestId
//   };
// axios(options)
// .then( (response)=> {     
//         console.log('response seedn all message ',response.data)
//   // GetAllMessages()()
        
// })
// .catch( (error)=> {
//   if(error.response.status == 401)
//         {
//           console.log('SeenAllChats Error ',error)  
//           props.navigator.replace('Login')
//         }
//         else
//         {
//         console.log('SeenAllChats Error ',error)  
//         }
// })
//  }


  useEffect(()=>
  {
    
    // SeenAllChats()
    // GetAllMessages()
    // _stopVoice();
   
  //  requestMicrophone()

  },[])


 
let  onSend=()=> {
   
  }

let  onSendImage=(messages = [])=> {
    return (
      null
    )
  }

  let messageIdGenerator=()=> {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      let r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    }).toString();
  }

 let togglePickerModal=()=>{
    if (!isClose) 
    {
      setPickerModalVisiblity(!PickerModalVisiblity)
    }
  }
  // let pickImage=async(useCamera = false)=> {
  //   const opt = {
  //     width: 300,
  //     height: 400,
  //     cropping: true,
  //   }
  //   try {
  //     const imageSource1 = useCamera
  //       ? await ImagePicker.openCamera(opt)
  //       : await ImagePicker.openPicker(opt);
  //       setimageSource(imageSource1)
  //       setPickerModalVisiblity(false);

  //       var fileImage = {
  //           uri: imageSource1.path,
  //           type:imageSource1.mime,
  //           name:'test.png',
  //          }
  //          SendChatMessage('',true,fileImage)
          

  //     // if (showCloseInfoCount == 0) {

  //     //     setshowCloseInfoCoun(1)
  //     //     setshowCloseInfo(true)
  //     //       setTimeou(() => {
  //     //     setshowCloseInfo(false)
  //     //       }, 3000);

  //     // }

  //     // setshowClose(true)
  //   } catch {

  //   }
  // }

  let  startTimer=()=> {
    timerInterval = setInterval(() => {
      console.log(timer)
      settimer(timer+1)
    }, 1000);
  }
  let formatSeconds = (sec, minute = 0) => {
    return sec < 60
      ? `${minute}:${sec}`
      : formatSeconds(sec - 60, minute + 1);
  };
  let _startTimerContainerAnimation = () => {
  }
  let _stopRecording = async() => {

    setisRecording(false)
    settimer(0)
    setaudio('')
    setvoiceRecorded(false)
    clearInterval(timerInterval);

    await generateNewAudioPath();
    prepareRecordingPath(audioPath);
   
  }
  let _onSendVoice=() =>{
    setsendingAudio(true)
    uploadAudio(filePath,timer, () => {
      setisRecording(false)
      settimer(0)
      setaudio('')
      setvoiceRecorded(false)
      setsendingAudio(false)
      clearInterval(timerInterval);
       generateNewAudioPath();
      prepareRecordingPath(audioPath);
    });

    if (showCloseInfoCount == 0) {

          setshowCloseInfoCoun(1)
          setshowCloseInfo(true)

          setTimeou(() => {
            setshowCloseInfo(false)
          }, 3000);
    }
    setshowClose(true)
  }
  let prepareRecordingPath=(audioPath)=> {
    AudioRecorder.prepareRecordingAtPath(audioPath, {
      SampleRate: 22050,
      Channels: 1,
      AudioQuality: "Low",
      AudioEncoding: "aac",
      AudioEncodingBitRate: 32000,
    });
  }

  let  _stop=async()=> {
    setstoppedRecording(true)
    setrecording(false)
    setpaused(false)
    setvoiceRecorded(false)

    try {
      await AudioRecorder.stopRecording();
  
      if (Platform.OS === "android") {
        setfinished(true)
      }
      return filePath;
    } catch (error) {
      console.error(error);
    }
  }
  let generateNewAudioPath = async () => {
    // 
    const audio = AudioUtils.DocumentDirectoryPath +
    "/" +
    "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      let r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    }).toString() 
     +
    ".aac";
    await setaudioPath(audio)
  }
  let _record=async()=> {

    if (!hasPermission) {
      console.warn("Can't record, no permission granted!");
      popup.aler(("chat.voicePermisionRejected"));
      return;
    }
     {
       await generateNewAudioPath();
    }

    setrecording(true)
    setpaused(false)
    try {
          console.log('test record')
          AudioRecorder.stopRecording();
        filePath = await AudioRecorder.startRecording();
    } catch (error) {
      console.log(error);
    }
  }

  let  uploadAudio = (filePath, duration, callback = () => {}) => {
   

  }
  let  playSound = (id, path) => {
    console.log('id:'+ id)
    console.log('isPlayingVoice:'+ isPlayingVoice)

    if (recordedVoicePlaying) 
    {
      _stopVoice();
    }
    if (isPlayingVoice) {
      if (id != currentPlayingVoiceId)
       {
        console.log('load url111')
        _stopVoice();
        setTimeou(() => playSound(id, path), 200);
        return;
      }
      _stopVoice();
    } else {
      try {
        console.log('load url test : ' + hasDownloaded)
        SoundPlayer.loadUrl(path);
        SoundPlayer.play()
        
        voiceInfoInterval = setInterval(() => {
          getVoiceInfo();
        }, 1000);

      } catch (e) {
        console.warn(`cannot play the sound file`, e);
      }
      setcurrentPlayingVoiceId(id)
      setisPlayingVoice(true)
      console.log('warning ')
    }
  }
  let  playRecrodedVoice = () => {
    if (recordedVoicePlaying) {

      SoundPlayer.stop();
      console.log('stop state sound' +filePath )
      setrecordedVoicePlaying(false)
    } else {
      try {
        console.log('stop state sound' +filePath )
        SoundPlayer.loadUrl(filePath);
        SoundPlayer.play()
        setrecordedVoicePlaying(true)
      } catch (e) {
        console.warn(`cannot play the sound file`, e);
      }
    }
  }
  let _stopVoice=() =>{
    setisPlayingVoice(false)
    setcurrentPlayingVoiceId(-1)
    setcurrentVoiceTime("")
    SoundPlayer.stop();
    clearInterval(voiceInfoInterval);
  }
  let   getVoiceInfo=async()=> {
    try {
      let info = await SoundPlayer.getInfo();
      let time = info.duration - info.currentTime;

       console.log('info:' + JSON.stringify(info))
       console.log('time:' + time)
      setcurrentVoiceTime(formatSeconds(Math.floor(time).toFixed(0)))
     
    } catch (e) {
      console.log("There is no song playing", e);
    }

  }
  let getSavedVoiceInfoById = (id) => {

  }
  let download = (id, path) => {
    let dirs = RNFetchBlob.fs.dirs;
    setMessageLoadingId(id)
    const name = path.spli("/").pop();
    RNFetchBlob.config({
      fileCache: true,
      path: dirs.DocumentDir + "/" + name,
    })
      .fetch("GET", path)
      .progress((received, total) => {
      })
      .then((res) => {
        let status = res.info().status;
        setMessageLoadingId(-1)
        if (status === 200) {


          playSound(id, res.path());
        }
      });
  }
  let  dispatchToReduxVoiceInfo = async () => {
    try {
      const info = await SoundPlayer.getInfo();
      voiceMsgInfo.duration = info.duration;
      props.dispatch(addMsgPath(voiceMsgInfo));
    } catch (e) {
      console.log("There is no song playing", e);
    }
  }
  let  onSoundIconPressIn = () => {
    if (!isClose) 
    {

        setisRecording(true)
        console.log(timer)
          _record();
    }
  }
  let  onSoundIconPressOut = () => {
    {
      console.log('stop record')
      _stop();

      setvoiceRecorded(true)
      clearInterval(timerInterval);
    }
  }
  let onInputTextChanged=(value)=> {
    if (value != "") {
      setshowClose(false)
    } else if (showCloseInfoCount != 0) {
      setshowClose(true)
    }
  }
  let onClosePress=()=> {

setisClose(true)
setshowClose(false)
    
  }
  let _renderVoiceMessage = (props) => {
    const id = props.currentMessage._id;
   console.log('id:'+props.currentMessage._id)
    let msgInfo = getSavedVoiceInfoById(props.currentMessage._id);
    console.log('msgInfo:'+msgInfo)
    const hasDownloaded =  msgInfo !== undefined;
    let path = undefined;
    let duration = undefined;
    if (hasDownloaded) {
      path = 
       msgInfo.path
      duration = '0.0'
    }
    if (path === undefined) path = props.currentMessage.voice;
    const isPlaying = currentPlayingVoiceId == id;
    
    const hasOwnMsg = props.position != "left";
    return (
      <View
        style={[
          {
            backgroundColor: !hasOwnMsg ? "#f5f5f5" : "#0B7CC1",
            width: 150,
            height: 45,
          },
          styles.voiceMsgContainer,
        ]}
      >
        <TouchableOpacity
          onPress={() =>
            hasDownloaded ? playSound(id, path) : 
            download(id, path)}
        >
          {MessageLoadingId == id ? (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingHorizontal: 10,
              }}
            >
              <ActivityIndicator color={hasOwnMsg ? "#f5f5f5" : "#444036"} />
            </View>
          ) : (
            <Icon
              name={
                hasDownloaded
                  ? isPlaying
                    ? "stop-circle"
                    : "play-circle"
                  : "download"
              }
              size={26}
              style={{ paddingHorizontal: 10 }}
              color={hasOwnMsg ? "#f5f5f5" : "#444036"}
            />
          )}
        </TouchableOpacity>
        {!isPlaying && (
          <Label
            style={{
              color: hasOwnMsg ? "#f5f5f5" : "#444036",
              fontSize: 10,
              marginTop: 4,
            }}
          >
            {MessageLoadingId != id
              ? hasDownloaded
                ? formatSeconds(Math.floor(duration).toFixed(0))
                : " پیام صوتی"
              : "در حال بارگذاری"}
          </Label>
        )}
        {isPlaying && (
          <Label
            style={{
              color: hasOwnMsg ? "#f5f5f5" : "#444036",
              fontSize: 10,
              marginTop: 4,
            }}
          >
            {currentVoiceTime}
          </Label>
        )}
        <Label
          style={{
            fontSize: 10,
            color: hasOwnMsg ? "#f5f5f5" : "#444036",
            position: "absolute",
            bottom: 3,
            right: 8,
          }}
        >
       
            {
              moment(props.currentMessage.createdAt, 'YYYY/M/D')
            }
        </Label>
      </View>
    );
  }
  let  renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: "#f5f5f5",
            elevation: 2,
            padding: 5,
            marginBottom:10
          },
          right: {
            backgroundColor: "#cc3333",
            elevation: 2,
            padding: 5,
            marginBottom:10
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
            fontFamily: "Digikala",
            fontSize: wp('3%'),
            padding:5
          },
          left: {
            color: "black",
            fontFamily: "Digikala",
            fontSize: wp('3%'),
            padding:5
          },
        }}
      />
    );
  }
  let  renderSend = (s) => {
    setmsgTypes(s.text)
  }
  let renderCustomActions = (props) => {
    return (
      <React.Fragment>
        <Actions
          {...props}
          containerStyle={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#eee",
            width: 30,
            height: 30,
            borderRadius: 15,
          }}
          icon={() => <Icon name="paper-plane" type='entypo' color="#cc3333" size={20} />}
          onPressActionButton={() => {
            if(messages.length == 0)
            {
              // sendFirtsChat(msgTypes)
              // props.onSend("", true)
            }
            else
            {
            // SendChatMessage(msgTypes,false,'')
            // props.onSend("", true)
            }
          }}
        />

          <Actions
          {...props}
          containerStyle={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#eee",
            width: 30,
            height: 30,
            borderRadius: 15,
          }}
          icon={() => <Icon name="attachment" type='entypo' color="#B00A44" size={20} />}
          onPressActionButton={() => {setPickerModalVisiblity(true)}}
        />

        {/* { (
          <Actions
            {...props}
            containerStyle={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#F05971",
              width: wp(20),
              height: 30,
              borderRadius: wp(5),
            }}
            icon={() => (
              <Label isBold style={{ color: "#fff", fontSize: 12 }}>
                {("بستن چت")}
              </Label>
            )}
            onPressActionButton={() => {onClosePress()}}
          />
        )} */}
      </React.Fragment>
    )
  }
  let  _renderTimeMessage = (props) => {
    <Label
      style={{
        fontSize: 10,
        color: props.position != "left" ? "#f5f5f5" : "#444036",
        marginHorizontal: 5,
      }}
    >
       
    </Label>
}

  
let renderMessageImage = (props) => {
    const uri = props.currentMessage.image;
    return (
      <TouchableWithoutFeedback onPress={() => {showImageMessage(uri)}}>
        <View>
          <Image
            source={{ uri }}
            style={{ width: 200, height: 200 }}
            resizeMode={"contain"}
          />
        </View>
      </TouchableWithoutFeedback>
    );
  }
  let  showImageMessage = (uri) => {
    if (imageModalisVisible) {
setimageModalisVisible(false)
      return;
    }
      setimageUrlImageViewer(uri)
      setimageModalisVisible(true)
  }
  let saveImageToGallery = async () => {
    try {
      const permision_result = await request_storage_runtime_permission();
      if (!permision_result) {
        popup.aler("خطا در گرفتن دسترسی");
        return;
      }
      downloadImage(imageUrlImageViewer);
    } catch {
      popup.aler("خطا در ذخیره عکس");
    }
  };
  let downloadImage = (url) => {
    if (url.toLowerCase().startsWith("file:")) {
      setimageModalisVisible(false)
      popup.aler("عکس از حافظه بارگذاری شده است .");
      return;
    }
    var date = new Date();
    var image_URL = url;
    var ext = getExtention(image_URL);
    ext = "." + ext[0];
    const { config, fs } = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          "/image_" +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: "Image",
      },
    };
    config(options)
      .fetch("GET", image_URL)
      .then((res) => {
        popup.aler("عکس با موفقیت دانلود شد.");
        setimageModalisVisible(false)
      });
  };
  let getExtention = (filename) => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };
  let request_storage_runtime_permission = async () => {
    try {
      const granted = await PermissionsAndroid.reques(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "دسترسی به حافظه",
          message: "برای ذخیره عکس نیاز به دسترسی می باشد .",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      popup.aler("خطا در گرفتن دسترسی");
      return false;
    }
    return false;
  }
    return (
      <View style={[{ flex: 1,backgroundColor:'grey' },props.callstyle]}>
         
         {/* <View style={{width:wp('100%'),height:hp('10%'),flexDirection:'row',borderBottomWidth:1,borderBottomColor:'transparent',elevation:5}}>
            <View style={{width:'30%',height:'100%',justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:wp('4%'),fontFamily:'Yekan',color:'black',textAlign:'center'}}>1/200</Text>
            </View>
            <View style={{width:'40%',height:'100%',justifyContent:'center',alignItems:'center'}}>
              <Text style={{fontSize:wp('4%'),fontFamily:'Yekan',color:'black',textAlign:'center'}}></Text>
            </View>

             <View style={{width:'30%',height:'100%',justifyContent:'center',alignItems:'flex-end',right:'10%'}}>
             <View style={{width:50,height:50,borderRadius:25,borderWidth:1,overflow:'hidden'}}>
              <Image style={{width:'100%',height:'100%'}} source={{uri:''}} resizeMode='contain' />
              </View>
           </View>
         </View> */}



        {!isLoading && (
          <View
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size="small" color="#0B7CC1" />
          </View>
        )}
       
        <Modal
          isVisible={PickerModalVisiblity}
          onBackdropPress={()=>{togglePickerModal()}}
        >
<View style={styles.modalContainer}>
              <Text style={{ textAlign: "center", paddingVertical: 10,fontFamily:'Digikala' }}>
                انتخاب عکس
              </Text>
              <View style={styles.line} />
              <View style={styles.modalInner}>
                <TouchableOpacity
                  style={styles.modalBtn}
                  onPress={() => {

                    // pickImage()
                  }}
                >
                  <Text style={styles.modalBtnText}>
                    انتخاب از گالری
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalBtn}
                  onPress={() => {
                    // pickImage(true)
                  }}
                >
                  <Text style={styles.modalBtnText}>
                    عکس
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
        
        </Modal>
        <GiftedChat
        messages={ChatsList.reverse()}
       user={{ _id: 1 }}
        renderBubble={renderBubble}
        renderSend={renderSend}
        placeholder={
          ("تایپ متن")
        }
        renderMessageImage={renderMessageImage}
        keyboardShouldPersistTaps={false}
        textInputProps={{
          editable: !isClose,
          style: {
            marginHorizontal: 5,
            textAlign: 'right',
            fontSize: wp('5%'),
            flex: 1,
           
          },
        }}
          shouldUpdateMessage={() => {
            return true;
          }}
          renderActions={renderCustomActions}
          onInputTextChanged={(value) => onInputTextChanged(value)}
          // messageIdGenerator={this.messageIdGenerator}

          // isLoadingEarlier={true}
          renderLoading={() => (
            <ActivityIndicator
              size="small"
              color="blue"
              style={{ marginVertical: 10 }}
            />
          )}
        />
        {showCloseInfo && (
          <View
            style={{
              position: "absolute",
              top: 6,
              alignSelf: "center",
              zIndex: 10,
              overflow: "hidden",
              padding: 10,
              borderRadius: 30,
              backgroundColor: "#F05971",
              opacity: 0.7,
              zIndex: 10,
            }}
          >
            <Label style={{ color: "#fff", fontSize: 12, textAlign: "center" }}>
              {("chat.closeInfo")}
            </Label>
          </View>
        )}

        {isRecording && (
          <Animatable.View
            useNativeDriver
             ref={voiceRecorderContainer}
            style={{
              position: "absolute",
              bottom: 0,
              width: voiceRecorded ? wp(100) : wp(90),
              zIndex: 1,
              overflow: "hidden",
              height: 45,
              backgroundColor: "#fff",
              alignItems: "center",
              flexDirection: Lang_row,
            }}
          >
            {sendingAudio ? (
              <View style={{ marginLeft: 10 }}>
                <ActivityIndicator />
              </View>
            ) : (
              <>
                {voiceRecorded ? (
                  <>
                    <View
                      style={{
                        flex: 2,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity onPress={()=>{_stopRecording()}}>
                        <Icon name="trash-o" color="#0B7CC1" size={20} />
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        flex: 6,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          backgroundColor: "#0B7CC1",
                          borderRadius: 20,
                          flexDirection: Lang_row,
                          justifyContent: "center",
                          alignItems: "center",
                          paddingHorizontal: 10,
                          paddingVertical: 4,
                        }}
                      >
                        <TouchableOpacity onPress={()=>{playRecrodedVoice()}}>
                          <Icon
                            name={
                              recordedVoicePlaying
                                ? "stop-circle"
                                : "play-circle"
                            }
                            color="#fff"
                            size={17}
                          />
                        </TouchableOpacity>
                        <Label
                          style={{
                            color: "#fff",
                            fontSize: 10,
                            paddingHorizontal: 10,
                          }}
                        >
                          {formatSeconds(timer)}
                        </Label>
                      </View>
                    </View>
                    <View
                      style={{
                        flex: 2,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <TouchableOpacity onPress={()=>{_onSendVoice()}}>
                        <Icon name="paper-plane" type='entypo' color="#B00A44" size={17} />
                      </TouchableOpacity>
                    </View>
                  </>
                ) : (
                  <>
                    <Animatable.View
                      useNativeDriver
                      animation={{
                        0: {
                          opacity: 1,
                        },
                        0.5: {
                          opacity: 0,
                        },
                        1: {
                          opacity: 1,
                        },
                      }}
                      iterationCount="infinite"
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: "red",
                        borderRadius: 50,
                        marginLeft: 15,
                      }}
                    />
                    <Label
                      style={{
                        color: "#0B7CC1",
                        fontSize: 10,
                        marginLeft: 5,
                      }}
                    >
                      {formatSeconds(timer)}
                    </Label>
                  </>
                )}
              </>
            )}
          </Animatable.View>
        )}


      </View>
    )
  
}

const styles = StyleSheet.create({
  voiceMsgContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    flexDirection: "row",
    marginVertical: 5,
    elevation: 2,
    borderRadius: 14,
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
  },

  modalContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    width: "80%",
    alignSelf: "center",
    height: 140,
  },
  modalInner: {
    flex: 1,
    justifyContent: "space-around",
    padding: 15,
  },
  modalBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalBtnText: {
    fontSize:10,
    color: "#0B7CC1",fontFamily:'Digikala'
  },
  line: {
    backgroundColor: "#ddd",
    width: "100%",
    height: 1,
  },
});

export default ChatScreen;
