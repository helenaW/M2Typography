function onDocumentReady() {
  
  document
    .getElementById('distext')
    .addEventListener('pointerover', textTerm);
    
}

function textTerm(e) {
  //console.log('Animate hour');

  // Two keyframes: start and stop
  const keyframes = [
    /*{ fontVariationSettings: ' \'term\' 100, \'wdth\' 0' },
    { fontVariationSettings: '\'term\' 0, \'wdth\' 0' }

    { fontVariationSettings: ' \'wght\' 200, \'wdth\' 0' },
    { fontVariationSettings: '\'wght\' 20, \'wdth\' 0' }*/

   /* { fontVariationSettings: ' \'shrp\' 100, \'wdth\' 0' },
    { fontVariationSettings: '\'shrp\' 0, \'wdth\' 0' },

    { fontVariationSettings: ' \'dots\' 100, \'wdth\' 0' },
    { fontVariationSettings: '\'dots\' 0, \'wdth\' 0' }
*/
    { fontVariationSettings: ' \'inkt\' 200, \'wdth\' 0' },
    { fontVariationSettings: '\'inkt\' 0, \'wdth\' 0' }

    /*{ fontVariationSettings: ' \'wdth\' 0, \'term\' 100' },
    { fontVariationSettings: ' \'wdth\' 100, \'term\' 100' }*/
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

function myFunction() {
  var x = document.getElementById("frm1");
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
      text += x.elements[i].value + "<br>";
  }
  document.getElementById("distext").innerHTML = text;
}