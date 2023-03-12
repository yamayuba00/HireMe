function displayJSONData() {
    fetch('./json/kategori.json')
        .then(response => response.json())
        .then(data => {
            let munculkanData = data.data
            let cetak = '<div class="row text-center">'
            munculkanData.forEach(element => {
                cetak += `
                <div class="col-12 col-md-3 col-lg-2 col-sm-12 my-2">
                    <div class="card bg-white shadow-sm rounded-sm">
                        <div class="card-body"> ${element.nama} </div>
                    </div>
                </div>`
            });
            cetak += '</div>'
            // jsonData.forEach(function(item) {
            //     output += '<li>' + item.nama +'</li>';
            // });
            document.getElementById('kategori').innerHTML = cetak;
        });
}
displayJSONData();