console.log("WElCOME TO SPOTIFY ");
let songIndex = 0 ;
let audioElement = new Audio('Mysongs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
 let songItem = Array.from(document.getElementsByClassName('songItem'));
 let songs = [
    { songName: "Ik_Mulaqaat", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Zaalima", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Apna_Bana_Le", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Maiyya_Mainu", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Kabhi_Jo_Badal_Barse", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "CALIFORNIA_LOVE", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "8_Parche", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "Jutti_Jharhke", filePath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "Mera_Mann", filePath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "Softly", filePath: "songs/10.mp3", coverPath: "covers/10.jpg" }
];


songItem.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});


//audioElement.play();
//Handle Play/Oause click
masterPlay.addEventListener('click', () => {
    console.log("Master Play button clicked!");  // Debugging
    console.log("Audio paused:", audioElement.paused);  // Check audio state

    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
     else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

//Listen to Events 
audioElement.addEventListener('timeupdate',()=>{
    
    //update Seekbar
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myProgressBar.value =progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value *audioElement.duration/100;
})

