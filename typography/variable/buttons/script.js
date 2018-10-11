function onDocumentReady() {
  
  document
    .getElementById('lock')
    .addEventListener('pointerover', closing);
  
  
}

function closing(e) {
  //console.log('Animate hour');

  // Two keyframes: start and stop
  const keyframes = [
    
    { fontVariationSettings: '\'wght\' 100, \'term\' 100, \'wdth\' 0' },
    { fontVariationSettings: '\'wght\' 100, \'term\' 0, \'wdth\' 0' }
  ];
  // Set up some options so anim loops continuously
  const options = {
    iterations: 1,
    delay: 0,
    fill: 'forwards',
    duration: 700,
    easing: 'ease-in-out'
  };

  let el = e.target;

  // Animate!
  let player = el.animate(keyframes, options);

  // Use this helper function to stop the animation
  handleStop(el, player);
}






// Reusable function to stop animation when 'pointerout' happens on an element
function handleStop(el, player) {
  el.addEventListener(
    'pointerout',
    () => {
      console.log('Stopping animation');
      player.cancel();
    },
    { once: true }
  );
}



if (document.readyState != 'loading') {
  onDocumentReady();
} else {
  document.addEventListener('DOMContentLoaded', onDocumentReady);
}

