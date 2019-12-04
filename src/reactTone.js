import Tone from "tone"
import React from"react" 
import useKeyPress from './KeyPressHook'
import {useState, useEffect} from 'react'
import API from "./API"
import Three from './three-test'
import Popup from 'reactjs-popup'
import SaveModal from './Components/SaveModal'


const ReactTone = (props) => {

const changeBackgroundColour = (colour) => {
  document.body.style.backgroundColor= colour
  let header = document.getElementById("header")
  header.style.backgroundColor = colour
 
}

const changeNightModeColour = (colour) => {
  let header = document.getElementById("header")
  header.style.color = "white"
  header.style.backgroundColor ="black"
  document.body.style.backgroundColor= colour
 
  let headertext = document.getElementById("headertext")
  headertext.style.color ="white"

}

const playAudio = () =>{

 let drumbeat =  document.getElementById("b")
 drumbeat.play()

}

const pauseAudio = () => {
  let drumbeat =  document.getElementById("b")
  drumbeat.pause()

}


////////////////////////////////STATES\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
const [happyMode, setHappyMode] = useState(false)

    const [nightMode, setNightMode] = useState(false)
    const [sadMode, setSadMode] = useState(false)
    const [angryMode, setAngryMode] = useState(false)
    const [startRecording, setStartRecording]= useState(false)
    const [stopRecording, setStopRecording]= useState(false)
    const [hashData, setHashData] = useState("")
    const [handleOpen, setHandleOpen] = useState(false)
    const [saveSongState, setSaveSongState]= useState(false)
    const [file, setFile] = useState()
    const [handlestopRecording2, setHandleStopRecording2]= useState(true)


////////////////////TONEJS||\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    const audio = document.querySelector('audio')
    const synth = new Tone.Synth()
    const toneSynth = new Tone.PluckSynth()
    const polySynth = new Tone.PolySynth()
    const duoSynth = new Tone.DuoSynth()
    const membraneSynth = new Tone.MembraneSynth()
    synth.oscillator.type = "sine"
    const actx  = Tone.context;
    const dest  = actx.createMediaStreamDestination()
    const recorder = new MediaRecorder(dest.stream, { mimeType: 'audio/webm'})
    const output = Tone.Master

    duoSynth.connect(dest)
    duoSynth.toMaster()


    membraneSynth.connect(dest)
    membraneSynth.toMaster()


    polySynth.connect(dest)
    polySynth.toMaster()

    toneSynth.connect(dest)
    toneSynth.toMaster()

    synth.connect(dest);
    synth.toMaster()
 
    const chunks = [];
  ///////////////////////////RECORDING FUNCTIONS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  
    const handlestartRecording = () => {

    if (handlestopRecording2 === true){
     let recordButton = document.getElementById("record")

     recordButton.innerText = "recording"
     recordButton.style.backgroundColor ="red"
      
    output.connect(dest)
    recorder.start()
    recorder.ondataavailable = evt => chunks.push(evt.data);
    setHandleStopRecording2(false)
      }    

      else if (handlestopRecording2 === false){
        return(alert("you are already recording!"))
      }

      else {
        return null
      }
     }

    const handlestopRecording = () =>{ 

      if (startRecording === true){
     
      let recordButton = document.getElementById("record")
      recordButton.innerText = "record your song"
      recordButton.style.backgroundColor ="white"
       
      document.getElementById("outer-2").style.display ="block"
      setStopRecording(true)
      setStartRecording(false)

          recorder.stop();
        
        recorder.onstop = evt => {
        let blob = new Blob(chunks, { mimeType: 'audio/mp3' });
        audio.src = URL.createObjectURL(blob);
        let file = new File ([blob], "bob.mp3", {type:"audio/mp3"});
     
          setFile(file)
     
      };}

      else {
        return alert("you are not currently recording!"), props.history.push('/synth') 
      }
  }

  
    const saveSong = () => {
      API.postPinata(file).then(pinatadata =>  {   
            let data = {    
            name:"test ",
            song_hash: pinatadata.IpfsHash,
            user_id: props.user_id
          }
          API.postSong(data)
        })   

        console.log("Song")
}


////////////////////////////////HANDLE KEYPRESS\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    const keyQ = useKeyPress('q') 
    const keyW = useKeyPress('w') 
    const keyE = useKeyPress('e') 
    const keyR = useKeyPress('r') 
    const keyT = useKeyPress('t') 
    const keyY = useKeyPress('y') 
    const keyU = useKeyPress('u') 
    const keyI = useKeyPress('i') 
    const keyO = useKeyPress('o') 

   

    const keyA = useKeyPress('a') 
    const keyS = useKeyPress('s')
    const keyD = useKeyPress('d')
    const keyF = useKeyPress('f')
    const keyG = useKeyPress('g')
    const keyH = useKeyPress('h')
    const keyJ = useKeyPress('j')
    const keyK = useKeyPress('k')
    const keyL = useKeyPress('l')

    const keyZ = useKeyPress('z')
    const keyX = useKeyPress('x')
    const keyC = useKeyPress('c')
    const keyV = useKeyPress('v')
    const keyB = useKeyPress('b')
    const keyN = useKeyPress('n')





    const keyP = useKeyPress('p')
    const key1 = useKeyPress('1')
////////////////////////////////TRIGGER SOUND\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    const triggerAttack = (sound) => {
      polySynth.triggerAttackRelease(sound,0.2)
      return  createImage(sound) 
      }

    const triggerAttackTopRow = (sound) => {
      toneSynth.triggerAttackRelease(sound, 0.2)
      return createSmallRainDrops(sound) 

    }

    const triggerAttackBottomRow =(sound) => {
      synth.triggerAttackRelease(sound, 0.2)
      return createWaves(sound)
    }
////////////////////////////////RENDER IMAGES\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

    const createImage =(sound) =>{   
      
      if (angryMode) {
      
        
        let soundclass = sound.split("") 
        let actualsoundclass = `${soundclass[0]}angrymode`

      return <div className= "container"><div id= {actualsoundclass}  className ="animated fadeOutUp slower"></div></div>
    
    } else if (sadMode) {
      let soundclass = sound.split("") 
      let actualsoundclass = `${soundclass[0]}sadmode`
      return  <div className= "container"><div className ={`${actualsoundclass[0]}sadContainer`}> <div id= {actualsoundclass}  className ="animated fadeInDownBig  "></div></div></div>

    }
          
      else if (happyMode) {
        let soundclass = sound.split("") 
        let actualsoundclass = `${soundclass[0]}class2`
    
  return <div className= "container"><div id= {actualsoundclass}  className ="animated bounce "></div></div>
    }

    else  {
      let soundclass = sound.split("") 
      let actualsoundclass = `${soundclass[0]}class`
  
return <div className= "container"><div id= {actualsoundclass}  className ="animated bounce "></div></div>
  }
    }

    const createSmallRainDrops = (sound) => {
      let soundclass = sound.split("") 
      let actualsoundclass = `${soundclass[0]}smallsadmode`
      return  <div className= "container"><div className ={`${actualsoundclass[0]}smallsadContainer`}> <div id= {actualsoundclass}  className ="animated fadeInDownBig  "></div></div></div>
    }

    const createWaves = (sound)=> {

      return <div className ="container"><div className="animated slideInRight" id= "wavy-line"  ></div> </div>
    }
 
/////////////////////////////////MODES\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


const handleMode = (event) =>{
        if (event.target.id === "nightMode")
        {
         setNightMode(true)
         setSadMode(false)
         setAngryMode(false)
         setHappyMode(false)

         changeNightModeColour("black")
       
         
        }
        else if (event.target.id === "sadMode"){
         setNightMode(false);
         setSadMode(true);
         setAngryMode(false);
         setHappyMode(false);

         changeBackgroundColour("rgb(153, 204, 255)");

        }
        else if (event.target.id === "angryMode"){
         setNightMode(false);
         setSadMode(false);
         setAngryMode(true);
         setHappyMode(false);

         changeBackgroundColour("rgb(255, 163, 102)");

        }
        else if (event.target.id === "happyMode"){
          setNightMode(false);
          setSadMode(false);
          setAngryMode(false);
          setHappyMode(true)

          changeBackgroundColour("lightpink")
        }

        else if (event.target.id === "normal"){

          setNightMode(false);
          setSadMode(false);
          setAngryMode(false);
          setHappyMode(false)

          changeBackgroundColour("white")

        }
};

   


    useEffect(() => {
        let nightmodebutton = document.getElementById("nightMode")
        nightmodebutton.addEventListener('click', handleMode);  
        nightmodebutton.className= "ui button"

        let sadmodebutton = document.getElementById("sadMode")
        sadmodebutton.addEventListener('click', handleMode);  
        sadmodebutton.className= "ui button"

        

        let angrymodebutton = document.getElementById("angryMode")
        angrymodebutton.addEventListener('click', handleMode);  
        angrymodebutton.className= "ui button"


        let recordbutton = document.getElementById('record')
        recordbutton.addEventListener('click', handlestartRecording )
        recordbutton.className= "ui button"


        let stoprecordbutton = document.getElementById('stoprecording')
        stoprecordbutton.addEventListener('click', handlestopRecording  )
       stoprecordbutton.className= "ui button"

       let inner = document.getElementById('inner')
       inner.append(stoprecordbutton)

        let happybutton = document.getElementById('happyMode')
         happybutton.addEventListener('click', handleMode)
         happybutton.className= "ui button"

       document.getElementById("outer").style.display ="block"
    

       let normalbutton = document.getElementById('normal')
       normalbutton.addEventListener('click', handleMode)
       normalbutton.className= "ui button"
       
       
        return () => {
          nightmodebutton.removeEventListener('click',handleMode);
        };
      }, []);



     const whatModeToReturn = () =>{
        if (nightMode){
         return <div>    
           {keyA && triggerAttack("A2") && <Three cubeID = "aCube" color ="blue"/> }
           {keyS && triggerAttack("B2") &&<Three cubeID = "bCube" color ="lightblue"/>}
           {keyD && triggerAttack("C2") && <Three cubeID = "cCube" color ="red"/>}
           {keyF && triggerAttack("D2")&& <Three cubeID = "dCube" color ="yellow"/>}
           {keyG && triggerAttack("E2")&& <Three cubeID = "eCube" color ="pink"/> }
           {keyH && triggerAttack("F2")&& <Three cubeID = "fCube" color ="violet"/>}
           {keyJ && triggerAttack("G2") && <Three cubeID ="gCube" color ="purple"/>}
           {/* {keyK && triggerAttack("A1") } */}


                </div>
            }
        else  if (sadMode){
          return <div>         
          {keyA && triggerAttack("D3") }
          {keyS && triggerAttack("E3") }
          {keyD && triggerAttack("F3") }
          {keyF && triggerAttack("G3") }
          {keyG && triggerAttack("A3") }
          {keyH && triggerAttack("Bb3")}
          {keyJ && triggerAttack("C3") }
          {keyK && triggerAttack("D3") }
        
          {keyQ && triggerAttackTopRow("D4")}
          {keyW && triggerAttackTopRow("E4")}
          {keyE && triggerAttackTopRow("F4")}
          {keyR && triggerAttackTopRow("G4")}
          {keyT && triggerAttackTopRow("A4")}
          {keyY && triggerAttackTopRow("Bb4")}
          {keyU && triggerAttackTopRow("C4")}
          {keyI && triggerAttackTopRow("D5")}
          {keyO && triggerAttackTopRow("E5")}

          {keyZ && triggerAttackBottomRow("D2")}
          {keyX && triggerAttackBottomRow("E2")}
          {keyC && triggerAttackBottomRow("F2")}
          {keyV && triggerAttackBottomRow("G2")}
          {keyB && triggerAttackBottomRow("Bb2")}
          {keyN && triggerAttackBottomRow("A2")}

            </div>
        }
        else  if (angryMode){
            return <div>         
            {keyA && triggerAttack("A3") }
            {keyS && triggerAttack("B3") }
            {keyD && triggerAttack("C3") }
            {keyF && triggerAttack("D3") }
            {keyG && triggerAttack("E3") }
            {keyH && triggerAttack("F3") }
            {keyJ && triggerAttack("G#3")}
            {keyK && triggerAttack("A4") }
              </div>
          }
          else  if (happyMode){
            return <div>         
            {keyA && triggerAttack("A3") }
            {keyS && triggerAttack("B3") }
            {keyD && triggerAttack("C3") }
            {keyF && triggerAttack("D3") }
            {keyG && triggerAttack("E3") }
            {keyH && triggerAttack("F3") }
            {keyJ && triggerAttack("G#3")}
            {keyK && triggerAttack("A4") }
              </div>
          }


        else {
            return <div>
            {keyA && triggerAttack("A3") }
            {keyS && triggerAttack("D4") }
            {keyD && triggerAttack("E4") }
            {keyF && triggerAttack("F4") }
            {keyG && triggerAttack("G4") }
            {keyH && triggerAttack("A4") }
            {keyJ && triggerAttack("B4") }
            {keyK && triggerAttack("C5") }
            {keyQ && triggerAttackTopRow("C5") }


            {key1 && playAudio()}
            {keyP && pauseAudio()}

            </div>
        } ;
      }
  

    
        return(
        <div>
           { whatModeToReturn()}
          <SaveModal  saveSong ={saveSong} file = {file} stopRecording ={stopRecording}/>  
        </div>
    )

}

export default ReactTone


