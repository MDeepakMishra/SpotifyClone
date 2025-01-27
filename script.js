console.log("WElCOME TO SPOTIFY ");

//Initialize te Varibles 
let songIndex = 0 ;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');

let songs =[
    { songName :"Salam-e-Ishq" , filepth:"G:\songs", coverpath:"cover/1.jpg"},
    { songName :"Salam-e-Ishq" , filepth:"songs/2.mp3", coverpath:"cover/1.jpg"},
    { songName :"Salam-e-Ishq" , filepth:"sons/3.mp3", coverpath:"cover/1.jpg"},
    { songName :"Salam-e-Ishq" , filepth:"songs/4.mp3", coverpath:"cover/1.jpg"},
    { songName :"Salam-e-Ishq" , filepth:"songs/5.mp3", coverpath:"cover/1.jpg"},
    { songName :"Salam-e-Ishq" , filepth:"songs/6.mp3", coverpath:"cover/1.jpg"},
    { songName :"Salam-e-Ishq" , filepth:"songs/7.mp3", coverpath:"cover/1.jpg"},
    { songName :"Salam-e-Ishq" , filepth:"songs/8.mp3", coverpath:"cover/1.jpg"},
    { songName :"Salam-e-Ishq" , filepth:"songs/9.mp3", coverpath:"cover/1.jpg"},
    { songName :"Salam-e-Ishq" , filepth:"songs/10.mp3", coverpath:"cover/1.jpg"},
]


//audioElement.play();
//Handle Play/Oause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused ||= audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1 ;
    } 
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0 ;
    }
})
//Listen to Events 
audioElement.addEventListener('timeupdate',()=>{
    
    //update Seekbar
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myProgressBar.value =progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value *audioElement.duration/100;
})