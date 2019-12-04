
const API_ENDPOINT = "http://localhost:4000"
const SIGN_UP_URL =  "http://localhost:4000/users/"
const SIGN_IN_URL = `${API_ENDPOINT}/signin`;
const SONGS_URL = "http://localhost:4000/songs/"
const AUDD_API_ENDPOINT = "https://api.audd.io/"

const VALIDATE_URL = `${API_ENDPOINT}/validate`; 


const get = (url) => {

    fetch(url).then(resp=> resp.json())
}

const post = (url,data) => {
    // debugger
    let configObject = generateConfigObject("POST",data);
    return fetch(url, configObject)
}

const signUp = (data) => {
    let configObject = generateConfigObject("POST",data);
    return fetch(SIGN_UP_URL, configObject)

}

const generateConfigObject = (method, data) => {
    return {
        method: method, 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        
    }
}
const validate = () => {
    return fetch(VALIDATE_URL, {
        headers: {
            Authorization: localStorage.getItem('token')
        } 
    }).then(resp => resp.json())
}

const signOut = () => {
    localStorage.clear()
}


const signIn = (email, password) => {

       let data = { 
            email: email,
            password: password 
        }
        return post(SIGN_IN_URL, data).then(resp=> resp.json())
}

const postSong = (data) => {

    return post('http://localhost:4000/songs', data).then(resp=> resp.json()).then(resp => console.log(resp))
}

const postPinata = (file) =>{

   let data = new FormData()
    data.append('file', file, "filename.mp3")
    return fetch("https://api.pinata.cloud/pinning/pinFileToIPFS",{

        method:"POST", 
        headers: { 

        'pinata_api_key': 'ccee3b7419ae2534ea00' ,
        'pinata_secret_api_key': 'aa238db96c0d90daff78d621ef1c624190e74522d3c1c9418fca95fbfe28bbe4' ,
        },        
        body: data       
        }).then(resp=>resp.json())
    
    }

const getPinataPin = () => {
 
     return fetch("https://gateway.temporal.cloud/ipfs/hash",{

        method:"POST", 
        headers: { 
        
        'pinata_api_key':'ccee3b7419ae2534ea00' ,
        'pinata_secret_api_key': 'aa238db96c0d90daff78d621ef1c624190e74522d3c1c9418fca95fbfe28bbe4',
       
        },        
        
        
        

})}

const getSongs = (data) =>{

// debugger
let configObject = generateConfigObject("GET",data);
return fetch(SIGN_UP_URL+data)

}


const getAudd = (blob) => {
    // debugger
let data = {

    'file': blob,
    'return': 'spotify',

}
// debugger
return post(AUDD_API_ENDPOINT, data).then(resp => resp.json()).then(resp => console.log(resp))

   
}
      
    

export default{

    post,
    signIn,
    signUp,
    postSong,
    getAudd, 
    postPinata,
    getSongs, 
    validate,
    signOut
}