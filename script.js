console.log("Ini Javascript is available");

let nama = "Ridwan";

let usia = 23;
// usia = 47;

console.log("Nama saya " + nama + " dengan usia " + usia + " tahun");

let batas = 10;

function biodata(params) {

    let golongan;
    // if statement usia
    if (usia < 0){
        golongan = "Maaf umur anda salah";
    } else if (usia < 2) {
        golongan = "Saya seorang balita";
    } else if (usia < 13){
        golongan = "Saya seorang anak-anak";
    } else if (usia < 20){
        golongan = "Saya seorang remaja";
    } else if (usia < 60){
        golongan = "Saya seorang dewasa";
    } else {
        golongan = "Saya seorang lansia";
    }

    return console.log(golongan);
}

biodata();

function penjumlahan(){

    let a = 1;
    let b = 2;

    let c = a + b;

    return c;
}

console.log(penjumlahan());




// for (let i = 0; i < batas; i++) {

//     let alamat = "jalan";
//     console.log("Index");
//     console.log("Index " + alamat + " ke-" + (i + 1));
//     // console.log("Alamat");
//   }




// Section About 
document.getElementById("myform").addEventListener("submit", function(event) {

    event.preventDefault();

    const angkaA = parseFloat(document.getElementById("angkaA").value);
    const angkaB = parseFloat(document.getElementById("angkaB").value);

    const angkaC = angkaA + angkaB;

    let hasil = document.getElementById("hasil");

    hasil.innerHTML = angkaC;
    
});








let tahunBerdiri = document.getElementById("tahunBerdiri");

let tahun = "Didirikan pada tahun 2018";

tahunBerdiri.innerHTML = tahun;