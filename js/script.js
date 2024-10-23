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
const today = new Date();
const time = today.getTimezoneOffset();
const day = today.getDate();
const month = today.getMonth()+1;
const year = today.getFullYear();

// console.log(time);


// console.log(day, month, year);
// console.log(tglLahir.value.Date());

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    document.getElementById("currentDate").innerHTML = day+" - ";
    document.getElementById("currentMonth").innerHTML = month+" - ";
    document.getElementById("currentYear").innerHTML = year;
    document.getElementById("namaUser").innerHTML = namaUser.value;
    document.getElementById("tglUser").innerHTML = tglLahir.value;
    document.getElementById("pesanUser").innerHTML = pesanUser.value;

    var gender = document.getElementsByName("jk");
    
    for (let i = 0; i <= gender.length; i++) {
        if(gender[i].checked){
            document.getElementById("jKelamin").innerHTML = gender[i].value;
            // console.log(gender);
        }
        
    }
    
    
    
    
    // for(i = 0; i<gender.length; i++){
    //     if(gender[i].checked){
    //         document.getElementById("jKelamain").innerHTML = gender[i].value;
    //     }
    // }
    // if (namaUser.value === "") {
    //     alert("isi yang lengkap ya");
    // }
})