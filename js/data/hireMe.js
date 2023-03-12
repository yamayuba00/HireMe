const hireMe = [
    {
        tipe: "reguler",
        namaLowongan: "Belajar perusahaan A",
        perusahaan: {
            nama : "PT Perusahaan A",
            logo: "https://ui-avatars.com/api/?name=",
        },
        pendaftaranTerakhir : "20 Maret 2023",
        ekspetasi : {
            gaji : 4000000
        }
    },
    {
        tipe: "iklan",
        namaLowongan: "Belajar perusahaan B",
        perusahaan: {
            nama : "PT Perusahaan B",
            logo: "https://ui-avatars.com/api/?name=",
        },
        pendaftaranTerakhir : "20 Maret 2023",
        ekspetasi : {
            gaji : 5000000
        }
    },
    {
        tipe: "iklan",
        namaLowongan: "Belajar perusahaan C",
        perusahaan: {
            nama : "PT Perusahaan C",
            logo: "https://ui-avatars.com/api/?name=",
        },
        pendaftaranTerakhir : "20 Maret 2023",
        ekspetasi : {
            gaji : 0
        }
    },
]
localStorage.setItem('hireMe', JSON.stringify(hireMe));