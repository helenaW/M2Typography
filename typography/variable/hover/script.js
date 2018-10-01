function onDocumentReady() {
  
  document
    .getElementById('close')
    .addEventListener('pointerover', closing);
  
  document
    .getElementById('open')
    .addEventListener('pointerover', opening);
}

function closing(e) {
  //console.log('Animate hour');

  // Two keyframes: start and stop
  const keyframes = [
    { fontVariationSettings: '\'wght\' 25, \'term\' 100, \'wdth\' 0' },
    { fontVariationSettings: '\'wght\' 250,\'term\' 0, \'wdth\' 0' }
  ];
  // Set up some options so anim loops continuously
  const options = {
    iterations: Infinity,
    delay: 50,
    direction: 'alternate',
    duration: 700,
    easing: 'ease-in-out'
  };

  let el = e.target;

  // Animate!
  let player = el.animate(keyframes, options);

  // Use this helper function to stop the animation
  handleStop(el, player);
}



function opening(e) {
  //console.log('Animate second');
  var bu2 = document.getElementById("button2");
  const keyframes = [
    { fontVariationSettings: '\'wght\' 200, \'term\' 0, \'wdth\' 0 ,\'inkt\' 0'
    },
    { fontVariationSettings: '\'wght\' 50, \'term\' 100, \'wdth\' 0, \'inkt\' 100'
     }
  ];
  const options = {
    iterations: Infinity,
    delay: 10,
    direction: 'alternate',
    duration: 700,
    easing: 'ease-in-out'
  };
  let el = e.target;
  let player = el.animate(keyframes, options);
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

//Changes between Buttons
function buttonFunc(){
  var open = document.getElementById("open");
  var close = document.getElementById("close");
  if (close.style.display === "none") {
    close.style.display = "block";
    open.style.display = "none";
    
    
  } else {
    close.style.display = "none";
    open.style.display = "block";
    
  }

}
