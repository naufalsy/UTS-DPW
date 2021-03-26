var jawaban = 10
var poin = 0

var jawabanBenar = new Array()
jawabanBenar[1] = 'c'
jawabanBenar[2] = 'e'
jawabanBenar[3] = 'd'
jawabanBenar[4] = 'd'
jawabanBenar[5] = 'a'

function nilai(jawaban1, jawaban2, jawaban3, jawaban4, jawaban5){
    if(jawaban1==jawabanBenar[1]){
        poin = poin + 20
    }
    if(jawaban2==jawabanBenar[2]){
        poin = poin + 20
    }
    if(jawaban3==jawabanBenar[3]){
        poin = poin + 20
    }
    if(jawaban4==jawabanBenar[4]){
        poin = poin + 20
    }
    if(jawaban5==jawabanBenar[5]){
        poin = poin + 20
    }
    alert("Selamat anda mendapatkan nilai " + poin)
}

function pemberitahuan(nama, email, pertanyaan){
    if(nama==null || email==null || pertanyaan==null){
        alert("Data anda belum lengkap")
    } else {
        alert("Pertanyaan terkirim")
    }
}
