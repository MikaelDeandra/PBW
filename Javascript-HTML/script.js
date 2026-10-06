document.addEventListener("DOMContentLoaded", function() {

  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");
  const btn4 = document.getElementById("btn4");

  const tahap2 = document.getElementById("tahap2");
  const tahap3 = document.getElementById("tahap3");
  const tahap4 = document.getElementById("tahap4");
  const tahap5 = document.getElementById("tahap5");

  let jumlahPilihan = 0;
  let semuaPilihan = [];

  btn1.addEventListener("click", function() {
      const nama = document.getElementById("nama").value.trim();
      const jml = document.getElementById("jml").value.trim();
      
      if (nama === "") {
          alert("Nama tidak boleh kosong!");
          return;
      }
      if (jml === "" || isNaN(jml) || parseInt(jml) < 1) {
          alert("Jumlah Pilihan harus berupa angka yang lebih besar dari 0!");
          return;
      }

      jumlahPilihan = parseInt(jml);
      const containerPilihan = document.getElementById("container-pilihan");
      containerPilihan.innerHTML = ""; 
      for (let i = 1; i <= jumlahPilihan; i++) {
          containerPilihan.innerHTML += `
              <label>Pilihan ${i} :</label><br>
              <input type="text" id="pilihan${i}" class="input-pilihan"><br><br>
          `;
      }

      tahap2.style.display = "block";
      btn1.disabled = true; 
  });

  btn2.addEventListener("click", function() {
      semuaPilihan = [];
      let isValid = true;

      for (let i = 1; i <= jumlahPilihan; i++) {
          let val = document.getElementById(`pilihan${i}`).value.trim();
          if (val === "") {
              alert(`Pilihan ${i} belum diisi! Silakan isi semua pilihan.`);
              isValid = false;
              break;
          }
          semuaPilihan.push(val);
      }

      if (!isValid) return;

      const containerRadio = document.getElementById("container-radio");
      containerRadio.innerHTML = "";
      
      for (let i = 0; i < semuaPilihan.length; i++) {
          containerRadio.innerHTML += `
              <input type="radio" name="pilihanku" id="radio${i}" value="${semuaPilihan[i]}">
              <label for="radio${i}">${semuaPilihan[i]}</label><br><br>
          `;
      }

      tahap3.style.display = "block";
      btn2.disabled = true;
  });

  btn3.addEventListener("click", function() {
      const radios = document.getElementsByName("pilihanku");
      let adaYangDipilih = false;
      
      for (let i = 0; i < radios.length; i++) {
          if (radios[i].checked) {
              adaYangDipilih = true;
              break;
          }
      }

      if (!adaYangDipilih) {
          alert("Anda harus memilih salah satu pilihan pada Radio Button!");
          return;
      }

      tahap4.style.display = "block";
      btn3.disabled = true;
  });

  btn4.addEventListener("click", function() {
      const email = document.getElementById("email").value.trim();
      const polaEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

      if (!polaEmail.test(email)) {
          alert("Format email tidak valid! Gunakan format seperti: email@domain.com");
          return;
      }

      const nama = document.getElementById("nama").value.trim();
      
      const radios = document.getElementsByName("pilihanku");
      let pilihanFinal = "";
      for (let i = 0; i < radios.length; i++) {
          if (radios[i].checked) {
              pilihanFinal = radios[i].value;
              break;
          }
      }

      let daftarPilihanTeks = semuaPilihan.join(", ");

      const teksHasil = `Hallo, nama saya ${nama}, email ${email} saya mempunyai sejumlah ${jumlahPilihan} pilihan yaitu ${daftarPilihanTeks}, dan saya memilih ${pilihanFinal}`;

      document.getElementById("hasil-akhir").innerText = teksHasil;
      tahap5.style.display = "block";
      btn4.disabled = true; 
  });
});