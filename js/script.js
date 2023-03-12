
//menu kategori JSON
function menuKategoriJson() {
    fetch('./json/kategori.json')
        .then(response => response.json())
        .then(data => {
            let munculkanData = data.data
            let menus = '<li>'
            munculkanData.forEach(menu => {
                menus += `
                <a class="dropdown-item" href="#">${menu.nama}</a>
               `
            });
            menus += '</li>'
            document.getElementById('menuKategori').innerHTML = menus;
        });
}
menuKategoriJson();


//kategori JSON
function displayJSONData() {
    fetch('./json/kategori.json')
        .then(response => response.json())
        .then(data => {
            let munculkanData = data.data
            let cetak = '<div class="row text-center">'
            munculkanData.forEach(element => {
                cetak += `
                <div class="col-12 col-md-3 col-lg-3 col-sm-12 my-2">
                    <div class="card bg-white shadow-sm rounded-sm">
                        <div class="card-body"> ${element.nama} </div>
                    </div>
                </div>`
            });
            cetak += '</div>'
            document.getElementById('kategori').innerHTML = cetak;
        });
}
displayJSONData();

// hireMe Json

function formatRupiah($rupiah){
   return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format($rupiah)
}
formatRupiah()

const sekarang = new Date();
const hariIni = sekarang.getDate()
const bulanIni = sekarang.getMonth()
const tahunIni = sekarang.getUTCFullYear()
const gabungHari = `"${hariIni}-${bulanIni}-${tahunIni}"`
console.log(gabungHari)

function hireMeJson(){
    fetch('./json/hireMe.json')
        .then(response => response.json())
        .then(data => {
            let munculkanData = data.data
            let iklan = ''  
            munculkanData.forEach(element => {
                if(element.tipe === "iklan"){
                    console.log(element)
                    console.log(sekarang.getUTCDate())
                    iklan += `
                    <div class="col-12 my-2">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex justify-content-between justify-center align-items-center gap-4">
                                    <div class="d-flex justify-content-start gap-3 items-center">
                                        <img src="https://ui-avatars.com/api/?name=${element.perusahaan.nama}&background=random" class="img-fluid img-width">
                                        <div>
                                            <h5 class="semat-title mt-1">${element.namaLowongan}</h5>
                                            <h6 class="semat-pt">${element.perusahaan.nama}</h6>
                                        </div>
                                    </div>
                                    <div>
                                    ${element.ekspetasi.gaji === 0 ? "Tidak menampilkan nominal" :formatRupiah(element.ekspetasi.gaji) }
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        `
                }
            });
            iklan += ''
            document.getElementById('iklan').innerHTML = iklan;
        });
}

hireMeJson()