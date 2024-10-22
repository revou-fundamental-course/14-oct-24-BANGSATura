function replaceName(){
    let nameUser = prompt("Siapa Nama Anda?","");
    document.getElementById("namaPengguna").innerHTML = nameUser
    // console.log("Test")
}
replaceName();

const namaUser = document.getElementById("nama");
const tglLahir = document.getElementById("tanggalLahir");
const pesanUser = document.getElementById("pesan");
const form = document.getElementById("formUser");

form.addEventListener("submit", (e)=>{
    document.getElementById("namaUser").innerHTML = namaUser.value;
    document.getElementById("tglUser").innerHTML = tglLahir.value;
    document.getElementById("pesanUser").innerHTML = pesanUser.value;
    
    if (namaUser.value === "" && pesanUser.value === "") {
        alert("isi yang lengkap ya")
        // console.log("test")
    }
    e.preventDefault();
})