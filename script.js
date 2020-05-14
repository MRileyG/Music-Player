const songs = [
    "bensound-buddy.mp3",
    "bensound-anewbeginning.mp3",
    "bensound-goinghigher.mp3",
    "bensound-hey.mp3",
    "bensound-inspire.mp3",
    "bensound-jazzyfrenchy.mp3",
    "bensound-retrosoul.mp3",
    "bensound-summer.mp3"
]

const createSongList = () => {
const list = document.createElement("ol")

for(let i = 0; i <songs.length; i++) {
    const item = document.createElement("li")
    item.appendChild(document.createTextNode(songs[i]))

    list.appendChild(item)
}
return list
}

document.getElementById("SongList").appendChild(createSongList())

SongList.onclick = (e) => {
 const clickedItem = e.target
 const source = document.getElementById("source")
 source.src = "Songs/" + clickedItem.innerText

 document.getElementById("CurrentlyPlayingSong").innerText = "Currently Playing: "
 document.getElementById("CurrentSong").innerText = clickedItem.innerText


 Player.load()
 Player.play()
}

const PlayAudio = () => {
    if(Player.readyState) {
        Player.play()
    }
}

const PauseAudio = () => {
    Player.pause()
}

const slider = document.getElementById("volumeSlider")
slider.oninput = (e) => {
  const volume = e.target.value
    Player.volume = volume
}

const updateProgress = () => {
    if(Player.currentTime > 0) {
    const progressBar = document.getElementById("Progress")
        progressBar.value = (Player.currentTime / Player.duration) * 100
    }

}