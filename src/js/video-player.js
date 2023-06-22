const videoElements = document.querySelectorAll(".video-player__element");
const playButtons = document.querySelectorAll(".video-player__button");
const videoCaptions = document.querySelectorAll(".video-player__caption");

playButtons.forEach((playButton, index) => {
    playButton.addEventListener("click", () => {
        const video = videoElements[index];
        const caption = videoCaptions[index];
        video.classList.remove("video-player__element--no-controls");
        video.play();
        video.tabIndex = 0;
        playButton.style.display = "none";
        if (caption) caption.style.display = "none";
    });
});