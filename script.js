const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const proposeContainer = document.getElementById('proposeContainer');
const gifContainer = document.getElementById('gifContainer');
const hugKissGif = document.getElementById('hugKissGif');
const container = document.querySelector('.container'); // Get the container element
const youtubeContainer = document.querySelector('.youtube-container'); // Get the YouTube container

yesBtn.addEventListener('click', () => {
    proposeContainer.style.display = 'none';
    gifContainer.style.display = 'block'; // Show the GIF and message
    youtubeContainer.style.display = 'block';   //Show you tube container
    loadYoutubeIframe(); // Load the YouTube iframe
    // Optional: Disable the buttons after clicking "Yes"
    yesBtn.disabled = true;
    noBtn.disabled = true;
});

noBtn.addEventListener('click', () => {
    const newYesBtn = document.createElement('button');
    newYesBtn.id = 'yesBtn';
    newYesBtn.textContent = 'Yes';
    newYesBtn.addEventListener('click', () => {
        proposeContainer.style.display = 'none';
        gifContainer.style.display = 'block'; // Show the GIF
        youtubeContainer.style.display = 'block';   //Show you tube container
        loadYoutubeIframe(); // Load the YouTube iframe
        // Optional: Disable the buttons after clicking "Yes"
        newYesBtn.disabled = true;
        noBtn.disabled = true;
    });

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    const buttonWidth = 80; // Approximate width of the button
    const buttonHeight = 30; // Approximate height of the button

    const randomX = Math.floor(Math.random() * (containerWidth - buttonWidth));
    const randomY = Math.floor(Math.random() * (containerHeight - buttonHeight));

    newYesBtn.style.position = 'absolute';
    newYesBtn.style.left = `${randomX}px`;
    newYesBtn.style.top = `${randomY}px`;

    container.appendChild(newYesBtn);
});

function loadYoutubeIframe() {
    const videoId = youtubeContainer.dataset.videoId;
    const iframe = document.createElement('iframe');
    iframe.width = "560";
    iframe.height = "315";
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&start=57`;
    iframe.title = "YouTube video player";
    iframe.frameborder = "1";
    iframe.allow = "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;

    youtubeContainer.innerHTML = '';  // Clear the container
    youtubeContainer.appendChild(iframe); // Add the iframe
}