class Perhitungan{
    constructor(data){
        this.data = data
    }

// OOP
    hitungTotalUmur(){
        this.totalUmur = 0
        for (let i = 0; i < data.length; i++){
            this.totalUmur += Number(data[i].umur)
        }
        console.log(this.totalUmur)
    }

    hitungTotalSangu(){
        this.totalSangu = 0
        for (let i = 0; i < data.length; i++){
            this.totalSangu += Number(data[i].sangu)
        }
        console.log(this.totalSangu)
    }

    asyncHitungTotalUmur = (data) =>{
        return new Promise((resolve,reject) =>{
            this.totalUmur = 0
            for(let i =0; i < data.length; i++){
                this.totalUmur += Number(data[i].umur)
            }
            resolve(this.totalUmur)
        })
    }

// Asyncronus
    asyncHitungTotalSangu = (data) =>{
        return new Promise((resolve,reject) =>{
            this.totalSangu = 0
            for(let i =0; i < data.length; i++){
                this.totalSangu += Number(data[i].sangu)
            }
            resolve(this.totalSangu)
        })
    }

    hitungAll(){
        Promise.all([this.asyncHitungTotalUmur(this.data), this.asyncHitungTotalSangu(this.data)]).then((result) =>{
            for(let cek of result){
                console.log(cek)
            console.log("Hitung Selesai")
        }
        })
    }
}

class Statistik extends Perhitungan{
    constructor (data){
        super(data)
    }
    outputData(){
        console.log("Total Umur " + this.totalUmur)
        console.log("Total Sangu " + this.totalSangu)
    }
}