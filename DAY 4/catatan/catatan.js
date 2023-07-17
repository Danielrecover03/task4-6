
let dataBlog = []

const addlog = (Event) => {

    /*untuk menghilangka reload*/
    Event.privedeafult()

    let name = document.getElementById("input-project-name").value;
    let stardate = document.getElementById("input-start-data").value;
    let enddate = document.getElementById("input-end-data").value;
    let deskreption = document.getElementById("input-deskription").value;
    let image = document.getElementById("input-image").value;

    let nodeJs = <i class="fa-brands fa-node"></i>
    let ReactJs = <i class="fa-brands fa-react"></i>
    let js =  <i class="fa-brands fa-square-js"></i>
    let viu = <i class="fa-brands fa-vuejs"></i>

    //menampilkan di bwah form

    let blog = {
        name,
        stardate,
        enddate,
        deskreption,
        image,
        postAt: "04 juli 2023"
    }

    image = URL.createObjectURL(image[0])

    



    dataBlog.push(blog)
    document.getElementById("content").innerHTML=''

    for(let x = 0; x < dataBlog.length; x++) {
        document.getElementById("content").innerHTML += `

        /*copykan yang dari html*/

        `
    }
    console.log(dataBlog)

}
    

              document.getElementById("contents").innerHTML = ''
              for (let index = 0; index < dataBlog.length; index++) {
                  document.getElementById("contents").innerHTML += `
                  <div class="blog-list-item">
                  
                      <div class="blog-image">
                      <img src="${dataBlog[index].image}" alt="" />
                      </div>


                      <div class="blog-content">
                      <div class="btn-group">
                          <button class="btn-edit">Edit Post</button>
                          <button class="btn-post">Delete Post</button>
                      </div>


                      <h1>
                          <a href="blog-detail.html" target="_blank">${dataBlog[index].title}</a>
                      </h1>


                      <div class="detail-blog-content">
                          ${dataBlog[index].postAt} | ${dataBlog[index].author}
                      </div>

                      <p>
                          ${dataBlog[index].content}
                      </p>


                      </div>
                  </div>
              }


              //buat array kosong
              let blog = [];
              
              
              
              function tambahBlog(event) {
              
              
                  //untuk menghilangkan default reload
                  event.preventDefault()
              
                  let nama = document.getElementById("nama").value;
                  let start = document.getElementById("start").value;
                  let endd = document.getElementById("endDate").value;
                  let deskripsi = document.getElementById("deskripsi").value;
              
                  //masukan ionc kedalam variabel
              
                  let nodejsic = ' <i class="fa-brands fa-node"></i>';
                  let reactic = '<i class="fa-brands fa-react"></i>';
                  let typeScriptic = '<i class="fa-brands fa-square-js"></i>';
                  let nextic = '<i class="fa-brands fa-vuejs"></i>';
              
                  //upload omage 
                  image = URL.createObjectURL(image[0]);
                  console.log(image);
              
                  //buat object
                  let blogs = {
                      nama,
                      detik,
                      menit,
                      jam,
                      hari,
                      bulan,
                      jarak,
                      tanggalDurasi,
                      tanggalSekarang,
                      start,
                      endd,
                      deskripsi,
                      iconnode,
                      iconreact,
                      iconnext,
                      typeScript,
                      image,
                      // postWaktu: new Date(),
                  };
              
                  //array kosong bloger masukan/tambahkan object blogs kedalam
                  blogr.push(blogs);
                  console.log(blogr);
              
                  //memanggil function ketika function tambah blog di jalankan
                  viewElement();
              
              }
              
              function viewElement() {
                  //ketika di klik
                  //document berdasarkan id contentView ubah menjadi kosong
                  document.getElementById("view").innerHTML = "";
              
                  for (let index = 0; index < blogr.length; index++) {
                      document.getElementById("view").innerHTML += `
                      <div class="view-grup">
                          <div class="view-img">
                              <img src="${blogr[index].image}" alt="badro" >
                          </div>
                          <div class="veiw-desk">
                              <h1>${blogr[index].nama}</h1>
                              <p>Dari ( ${blogr[index].start})  </p>
                              <p>Sampai ( ${blogr[index].endd})  </p>
                              <p>Durasi  ${blogr[index].bulan} Bulan atau ${blogr[index].hari} hari</p>
                              <p>${blogr[index].deskripsi}</p>
                          </div>
                          <div class="iconss">
                              ${blogr[index].iconnode}
                              ${blogr[index].iconreact}
                              ${blogr[index].iconnext}
                              ${blogr[index].typeScript}
                              </div>
                          <div class="buttonGrup">
                          <button><a href="detail.html">Detail</a> </button>
                              <button>Delete</button>
                          </div>
                      </div>
                  `;
                  }
              
              }
              