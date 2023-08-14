function acak() {
	// Play sound
	// var audio = new Audio("assets/sound/dice-roll-sound-effect-1139.mp3");
	// audio.play();

  // Reset confetti
  document.getElementById("confetti-wrapper").innerHTML = "";

	// Generate random number
	for (let i = 0; i < 50; i++) {
		setTimeout(() => {
      // value 0 or 1
			let angka1 = Math.floor(Math.random() * 2);

      // value 0 - 9
			let angka2 = Math.floor(Math.random() * 10);

      // value 0 - 9
			let angka3 = Math.floor(Math.random() * 10);

      // angka2 max 6
      if (angka1 == 1) {
        angka2 = Math.floor(Math.random() * 7);
      }

      // angka1 and angka2 = 0
      if (angka1 == 0 && angka2 == 0) {
        angka3 = 1;
      }

      // angka3 max 0
      if (angka1 == 1 && angka2 == 6) {
        angka3 = 0;
      }

			document.getElementById("angka1").innerHTML = angka1;
			document.getElementById("angka2").innerHTML = angka2;
			document.getElementById("angka3").innerHTML = angka3;
		}, 100 * i);
	}
  celebrate();
}

function celebrate() {
  // reset timer
  clearTimeout(window.timer);
  for(i=0; i<100; i++) {
    // Random rotation
    var randomRotation = Math.floor(Math.random() * 360);
      // Random Scale
    var randomScale = Math.random() * 1;
    // Random width & height between 0 and viewport
    var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
    var randomHeight =  Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 500));
    
    // Random animation-delay
    var randomAnimationDelay = Math.floor(Math.random() * 15);
    console.log(randomAnimationDelay);

    // Random colors
    var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0']
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Create confetti piece
    var confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.top=randomHeight + 'px';
    confetti.style.right=randomWidth + 'px';
    confetti.style.backgroundColor=randomColor;
    // confetti.style.transform='scale(' + randomScale + ')';
    confetti.style.obacity=randomScale;
    confetti.style.transform='skew(15deg) rotate(' + randomRotation + 'deg)';
    confetti.style.animationDelay=randomAnimationDelay + 's';
    document.getElementById("confetti-wrapper").appendChild(confetti);
  }
}