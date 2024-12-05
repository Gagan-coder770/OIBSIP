
const playButton = document.getElementById('playButton');
const audioPlayer = document.getElementById('audioPlayer');

// Add click event to the play button
let isPlaying = false; 

playButton.addEventListener('click', () => {
  if (isPlaying) {
    audioPlayer.pause(); // Pause 
    playButton.innerHTML = '&#9658;'; // Change icon to play
  } else {
    audioPlayer.play(); // Play 
    playButton.innerHTML = '&#10074;&#10074;'; // Change icon to pause
  }
  isPlaying = !isPlaying; // Toggle play 
});
