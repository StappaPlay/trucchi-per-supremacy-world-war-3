/**
 * StappaPlay - Simple media player prototype utility
 * Author: Luciano
 * License: Custom
 */

function initializePlayer(containerId, sourceUrl) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error('StappaPlay: Container not found.');
        return;
    }

    const video = document.createElement('video');
    video.src = sourceUrl;
    video.controls = true;
    video.style.width = '100%';
    video.style.height = 'auto';

    container.appendChild(video);
    console.log('StappaPlay: Player initialized.');
}

// Example usage
// initializePlayer('player-container', 'https://example.com/video.mp4');

module.exports = { initializePlayer };
