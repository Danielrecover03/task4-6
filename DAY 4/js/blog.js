let dataBlog = []

function addBlog(event) {
    event.preventDefault()

    let name = document.getElementById("input-project-name").value
    let startDate = document.getElementById("input-start-data").value
    let endDate = document.getElementById("input-end-data").value
    let description = document.getElementById("input-description").value
    let reactJs = document.getElementById("input-reactjs").checked
    let nodeJs = document.getElementById("input-nodeJs").checked
    let square = document.getElementById("input-square").checked
    let vuejs = document.getElementById("input-vuejs").checked
    let image = document.getElementById("input-image").files

    // untuk membuat object file menjadi URL secara sementara, agar tampil
    
    if (image) { 
        image = URL.createObjectURL(image[0])
    }

    console.log(image[0]);

    if (reactJs) {
        reactJs = `<i class="fa-brands fa-react"></i>`
    } else {
        reactJs = ''
    }
    if (nodeJs) {
        nodeJs = `<i class="fa-brands fa-node"></i>`
    } else {
        nodeJs = ''
    }
    if (square) {
        square = `<i class="fa-brands fa-square-js"></i>`
    } else {
        square = ''
    }
    if (vuejs) {
        vuejs = `<i class="fa-brands fa-vuejs"></i>`
    } else {
        vuejs = ''
    }


    let blog = {
        name,
        startDate,
        endDate,
        description,
        reactJs,
        nodeJs,
        square,
        vuejs,
        image, // bentuknya blob url (sementara)
    }

    dataBlog.push(blog)
    renderBlog()

    console.log(dataBlog)

    if (name == "") {
        return alert("Input the value first");
      } else if (startDate == "") {
        return alert("Input the value first");
      } else if (endDate == "") {
        return alert("Input the value first");
      } else if (description == "") {
        return alert("Input the value first");
      } else if (file == "") {
        return alert("Input the value first");
      }
}

function renderBlog() {
    document.getElementById("view1").innerHTML = ''

    for (let index = 0; index < dataBlog.length; index++) {
        document.getElementById("view1").innerHTML += 
        `<div class="view">
            <div class="view-img">
                <img src="${dataBlog[index].image}" alt=""/>
                <h3>${dataBlog[index].project}</h3>
                <h5>Durasi: 3 bulan</h5>
                <h5>${dataBlog[index].description}</h5>
                <div class="iconss">
                  ${dataBlog[index].reactJs}
                  ${dataBlog[index].nodeJs}
                  ${dataBlog[index].square}
                  ${dataBlog[index].vuejs}
                </div>    
                <div class="botton-group">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>`
    }
} 