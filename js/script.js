// javascript for music player

const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById('play');
const artist = document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let isPlaying = false;

const songs = [
    {
        name:'lk1',
        title:'Kahani Suno',
        artist:'Kaifi Khalil'
    },
    {
        name:'lk2',
        title:'Kya loge tum',
        artist:'Jaani and B Praak'
    },
    {
        name:'lk3',
        title:'Maan Meri Jaan',
        artist:'Babbu Maan',
       
    },
    {
        name:'lk4',
        title:'O Bedardeya',
        artist:'Arjit Singh'
      
    }
]
// play function

const playMusic = ()=>{
    isPlaying = true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    img.classList.add('anime');
};

// for pause function

const pauseMusic = ()=>{
    isPlaying = false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    img.classList.remove('anime');
};


play.addEventListener('click',()=>{
    // if(isPlaying){
    //     pauseMusic();
    // }
    // else{
    //     playMusic();
    // }

    isPlaying?pauseMusic():playMusic();
});


const loadSong = (songs)=>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = 'music/' + songs.name + '.mp3';
    img.src = 'img/' + songs.name + '.jpg'; 
 }

//  loadSong(songs[0]);

let songIndex = 0;

const nextSong = ()=>{
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

const prevSong = ()=>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}




 next.addEventListener('click',nextSong);
 prev.addEventListener('click',prevSong);



