document.getElementById("tab_register").style.display = "block"
document.getElementById("tab_listPendaftar").style.display = "none"

function tabRegister(){
    document.getElementById("tab_register").style.display = "block"
    document.getElementById("tab_listPendaftar").style.display = "none"
}

function tabListPendaftar(){
    document.getElementById("tab_register").style.display = "none"
    document.getElementById("tab_listPendaftar").style.display = "block"
}

function submitRegister(){
    let nama =  document.getElementById("inputNama")
    let umur =  document.getElementById("inputUmur")
    let sangu =  document.getElementById("inputSangu")
    let resume =  document.getElementById("resume")
    let total_umur = 0 
    let total_sangu = 0 
    let rata_rata_umur = 0 
    let rata_rata_sangu = 0 
    if(Number(umur.value) >= 25){
        if(Number(sangu.value) >= 100000 && Number(sangu.value) <= 1000000){
            if(nama.value.length >= 10){
                data.push({
                    nama : nama.value,
                    umur : umur.value,
                    sangu : sangu.value
                })
                const trdel = document.getElementsByTagName("tbody")[0]
                trdel.remove()
                tableList = document.getElementById("tableList")
                const tbody = document.createElement("tbody")
                for(let i = 0; i< data.length; i++){
                    const tr = document.createElement("tr")

                    const tdNama = document.createElement("td")
                    const valueNama = document.createTextNode(data[i].nama)
                    tdNama.appendChild(valueNama)

                    const tdUmur = document.createElement("td")
                    const valueUmur = document.createTextNode(data[i].umur)
                    tdUmur.appendChild(valueUmur)

                    const tdSangu = document.createElement("td")
                    const valueSangu = document.createTextNode(data[i].sangu)
                    tdSangu.appendChild(valueSangu)

                    // table >> tbody >> tr >> td
                    tr.appendChild(tdNama)
                    tr.appendChild(tdUmur)
                    tr.appendChild(tdSangu)
                    tbody.appendChild(tr)
                    total_umur += Number(data[i].umur)
                    total_sangu += Number(data[i].sangu)
                }
                // cara lama
                // rata_rata_umur = total_umur/ data.length
                // rata_rata_sangu = total_sangu/ data.length
                
                const stats = new Statistik(data)
                
                // cara kedua hanya OOP
                // stats.hitungTotalUmur()
                // stats.hitungTotalSangu()
                // stats.outputData()

                stats.hitungAll()
                rata_rata_umur = stats.totalUmur / data.length
                rata_rata_sangu = stats.totalSangu / data.length
                resume.innerHTML = `Rata Rata Pendaftar memiliki uang sangu sebesar ${Math.round(rata_rata_sangu)} dengan Rata Rata Umur ${Math.round(rata_rata_umur)}`
                tableList.appendChild(tbody)
            }else{
                alert("Nama Salah, nama minimal 10 karakter")
            }
        }else{
            alert("Sangu Salah, sangu minimal 100 ribu dan maksimal 1 juta")
        }
    }else{
        alert("Umur Salah, umur minimal 25 tahun")
    }
}

let data = []
console.log(data)