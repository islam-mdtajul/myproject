const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const gifContainer = document.getElementById('gifContainer');
const hugKissGif = document.getElementById('hugKissGif');
const container = document.querySelector('.container'); // Get the container element

yesBtn.addEventListener('click', () => {
    gifContainer.style.display = 'block'; // Show the GIF and message
    // Optional: Disable the buttons after clicking "Yes"
    yesBtn.disabled = true;
    noBtn.disabled = true;
});

noBtn.addEventListener('click', () => {
    const newYesBtn = document.createElement('button');
    newYesBtn.id = 'yesBtn';
    newYesBtn.textContent = 'Yes';
    newYesBtn.addEventListener('click', () => {
        gifContainer.style.display = 'block'; // Show the GIF
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