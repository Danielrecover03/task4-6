let dataBlog = [];

// fungsi untuk menambahkan blog baru
function addBlog(event) {
  event.preventDefault();

  //   untuk mengambil smeua nilai inputan
  let name = document.getElementById("input-project-name").value;
  let startDate = document.getElementById("input-start-data").value;
  let endDate = document.getElementById("input-end-data").value;
  let description = document.getElementById("input-description").value;
  let reactJs = document.getElementById("input-reactjs").checked;
  let nodeJs = document.getElementById("input-nodeJs").checked;
  let square = document.getElementById("input-square").checked;
  let vuejs = document.getElementById("input-vuejs").checked;
  let image = document.getElementById("input-image").files;
  let selisih = selisihWaktu(startDate, endDate);
  let blogId = dataBlog.length + 1;

  //   untuk mengecek inputan masih 0
  if (name == "" || startDate == "" || endDate == "" || description == "") {
    return alert("Terdapat inputan yang masih kosong");
  }

  //   untuk mengecek inputan gambar masih null ap tdk
  let imageInput = document.getElementById("input-image");
  if (imageInput.files.length === 0) {
    return alert("Anda belum memasukan gambar");
  }
  //   untuk validasi tanggal
  if (endDate < startDate) {
    scrollKeAtas();
    return alert("End Date tidak boleh lebih kecil dari star date");
  }

  // untuk membuat object file menjadi URL secara sementara, agar tampil

  console.log(image);

  image = URL.createObjectURL(image[0]);

  console.log(image[0]);

  if (reactJs) {
    reactJs = `<i class="fa-brands fa-react"></i>`;
  } else {
    reactJs = "";
  }
  if (nodeJs) {
    nodeJs = `<i class="fa-brands fa-node"></i>`;
  } else {
    nodeJs = "";
  }
  if (square) {
    square = `<i class="fa-brands fa-square-js"></i>`;
  } else {
    square = "";
  }
  if (vuejs) {
    vuejs = `<i class="fa-brands fa-vuejs"></i>`;
  } else {
    vuejs = "";
  }

  let blog = {
    blogId,
    name,
    startDate,
    endDate,
    description,
    reactJs,
    nodeJs,
    square,
    vuejs,
    image, // bentuknya blob url (sementara)
    selisih,
  };

  dataBlog.push(blog);
  console.log(dataBlog);
  renderBlog();
  resetInput();
  alert("sukses menambahkan");
}

//fungsi untuk mencari selisih waktu
function selisihWaktu(tanggalAwal, tanggalAkhir) {
  const selisih = new Date(tanggalAkhir) - new Date(tanggalAwal);

  const detik = Math.floor(selisih / 1000);
  const menit = Math.floor(detik / 60);
  const jam = Math.floor(menit / 60);
  const hari = Math.floor(jam / 24);

  const sisaDetik = detik % 60;
  const sisaMenit = menit % 60;
  const sisaJam = jam % 24;

  return `${hari}hari ${sisaJam}jam ${sisaMenit}menit ${sisaDetik}detik`;
}

// fungsi untuk mendelete object
function deleteBlog(blogId) {
  console.log("kamu akan menghapus project no: " + blogId);
  for (let i = 0; i < dataBlog.length; i++) {
    if (dataBlog[i].blogId == blogId) {
      const index = dataBlog.indexOf(dataBlog[i]);
      if (index > -1) {
        // kenapa harus >-1, karna jika index < atau = -1 berarti blog tidak ada di dalam array data blog
        dataBlog.splice(index, 1); // 2nd parameter means remove one item only
      }
    }
  }
  console.log("berhasil delete");
  console.log(dataBlog);
  // renderBlog();
  scrollKeAtas();
}

// fungsi untuk me reset input2
function resetInput() {
  document.getElementById("input-project-name").value = "";
  document.getElementById("input-start-data").value = "";
  document.getElementById("input-end-data").value = "";
  document.getElementById("input-description").value = "";
  document.getElementById("input-reactjs").checked = false;
  document.getElementById("input-nodeJs").checked = false;
  document.getElementById("input-square").checked = false;
  document.getElementById("input-vuejs").checked = false;
  document.getElementById("input-image").value = ""; // Untuk input tipe file, tidak dapat diatur nilai secara langsung, hanya bisa direset dengan mengganti tipe elemen
}

// Menetapkan posisi tampilan layar ke paling atas
function scrollKeAtas() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// edit blog ntar aja
// function editBlog(blogId) {
//   for (let i = 0; i < dataBlog.length; i++) {
//     if (dataBlog[i].blogId == blogId) {
//       document.getElementById("input-project-name").value = "";
//       document.getElementById("input-start-data").value = "";
//       document.getElementById("input-end-data").value = "";
//       document.getElementById("input-description").value = "";
//       document.getElementById("input-reactjs").checked = false;
//       document.getElementById("input-nodeJs").checked = false;
//       document.getElementById("input-square").checked = false;
//       document.getElementById("input-vuejs").checked = false;
//       document.getElementById("input-image").value = "";
//     }
//   }
// }

// fungsi untuk mengubah dataBlog menjadi elemen html
function renderBlog() {
  document.getElementById("view1").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    document.getElementById(
      "view1"
      ).innerHTML += `<div class="view" id="view-${dataBlog[index].blogId}">
            <div class="view-img">
                <img src="${dataBlog[index].image}" alt=""/>
                <h6>${dataBlog[index].name}</h6>
                <h6> StarDate : ${dataBlog[index].startDate}</h6> 
                <h6> EndDate : ${dataBlog[index].endDate}</h6>
                <h6> Durasi : ${dataBlog[index].selisih}</h6>
                <h6>${dataBlog[index].description}</h6>
                <div class="iconss">
                  ${dataBlog[index].reactJs}
                  ${dataBlog[index].nodeJs}
                  ${dataBlog[index].square}
                  ${dataBlog[index].vuejs}
                </div>    
                <div class="botton-group">
                    <button onClick="coba(${dataBlog[index].blogId})">Edit</button>
                    <button  onClick="deleteBlog(${dataBlog[index].blogId})">Delete</button>
                </div>
            </div>
        </div>`;
  }
}

function coba() {
  let users = [];
  let tomi = {
    "nama": "tomi",
    "umur": 19,
    "menikah": true
  };
  users.push(tomi);

  let tina = {
    "nama": "tina",
    "umur": 124,
    "menikah": true
  };
  users.push(tina);

  let nama = "tono";
  let umur = 35;
  let menikah = true;

  let tono = {
    nama,
    umur,
    menikah,
  }
  users.push(tono);

  nama = "rina"
  umur = 29
  menikah = false

  let rina = {nama,umur,menikah,}
  users.push(rina);

  console.log(tomi)
  console.log(tina)
  console.log(tono)
  console.log(rina)



  for (let i = 0; i < users.length; i++) {
    console.log("urutan : " + i);
    console.log("nama : " + users[i].nama);

    document.getElementById("helenbelajar").innerHTML += `
    <div class="view">
    <h6>Nama: ${users[i].nama},</h6>
    <h6>umur: ${users[i].umur},</h6>
    <h6>menikah: ${users[i].menikah},</h6>
    </div>
    <hr />
  `;
  }
}
