function acak() {
  // Reset confetti
  document.getElementById("confetti-wrapper").innerHTML = "";

  let jumlahdoorprize = document.getElementById("jumlahdoorprize").value;
	let jumlahhadirin = document.getElementById("jumlahhadirin").value;

	jumlahdoorprize = parseInt(jumlahdoorprize);
	jumlahhadirin = parseInt(jumlahhadirin);

	if (jumlahdoorprize == "" || jumlahhadirin == "") {
		alert("Masukkan jumlah doorprize dan jumlah hadirin!");
		return;
	} else if (jumlahdoorprize == 0 || jumlahhadirin == 0) {
		alert("Jumlah doorprize dan jumlah hadirin tidak boleh 0!");
		return;
	} else if (jumlahdoorprize > jumlahhadirin) {
		alert("Jumlah doorprize tidak boleh lebih besar dari jumlah hadirin!");
		return;
	}


	// split jumlahhadirin
	jumlahhadirin = jumlahhadirin.toString().split("");
	// map jumlahhadirin
	jumlahhadirin = jumlahhadirin.map(Number);

	if (jumlahhadirin.length == 1) {
		jumlahhadirin = [0, 0, jumlahhadirin[0]];
	} else if (jumlahhadirin.length == 2) {
		jumlahhadirin = [0, jumlahhadirin[0], jumlahhadirin[1]];
	}
		
	let jumlahhadirin1 = jumlahhadirin[0];
	let jumlahhadirin2 = jumlahhadirin[1];
	let jumlahhadirin3 = jumlahhadirin[2];

	console.log("Jumlah doorprize = " + jumlahdoorprize);
	console.log("Jumlah hadirin = " + jumlahhadirin1 + + jumlahhadirin2 + + jumlahhadirin3);

  let angkakeluar = document.getElementById("angkakeluar").value;
  angkakeluar = angkakeluar.split(",");
  angkakeluar = angkakeluar.map(Number);

  console.log(angkakeluar.length);

	// Generate random number
	for (let i = 0; i < jumlahdoorprize; i++) {
		setTimeout(() => {
      // value 0 or 1
			let angka1 = Math.floor(Math.random() * (jumlahhadirin1 + 1));

      // value 0 - 9
			let angka2 = Math.floor(Math.random() * 10);

      // value 0 - 9
			let angka3 = Math.floor(Math.random() * 10);

      // angka2 max jumlahhadirin2
      if (angka1 == jumlahhadirin1) {
        angka2 = Math.floor(Math.random() * (jumlahhadirin2 + 1));
      }

      // angka1 and angka2 = 0
      if (angka1 == 0 && angka2 == 0) {
        angka3 = Math.floor(Math.random() * 9) + 1;
      }

      // angka3 max 0, maximum number 160 
      if (angka1 == jumlahhadirin1 && angka2 == jumlahhadirin2) {
        angka3 = Math.floor(Math.random() * (jumlahhadirin3 + 1));
      }

			document.getElementById("angka1").innerHTML = angka1;
			document.getElementById("angka2").innerHTML = angka2;
			document.getElementById("angka3").innerHTML = angka3;

      // concat angka1, angka2, angka3
      let angka123 = angka1.toString() + angka2.toString() + angka3.toString();

      // convert string to int
      angka123 = parseInt(angka123);

      // if the length of angkakeluar is equal to the number of draws that came out + 1 because 0 is counted
      if (angkakeluar.length == (jumlahdoorprize + 1)) {
        document.getElementById("confetti-wrapper").innerHTML = "";
				let reset_info = "Selesai.\n" + jumlahdoorprize + " doorprize sudah habis.\nAcak undian ini akan direset ulang. \nAngka yang sudah keluar:\n" + angkakeluar;
        alert(reset_info);
        // reload page
        location.reload();
        document.getElementById("angkakeluar").value = "";
      } else {
        // if length i = jumlahdoorprize
        if (i == (jumlahdoorprize - 1)) {
          // if angka123 not in angkakeluar
          if (!angkakeluar.includes(angka123)) {
            // push angka123 to angkakeluar
            angkakeluar.push(angka123);
            console.log(angkakeluar);
            document.getElementById("angkakeluar").value = angkakeluar;
            celebrate();
          } else {
            acak();
          }
        }
      }
		}, 100 * i);
	}
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
    // console.log(randomAnimationDelay);

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

function info() {
	alert("1. Ubah jumlah doorprize dan jumlah hadirin sesuai kebutuhan di kolom input masing-masing.\n2. Jumlah doorprize dan jumlah hadirin maksimal adalah 999.\n3. Jumlah doorprize tidak boleh lebih besar daripada jumlah hadirin.\n4. Klik tombol Acak untuk memulai acak undian.");
}