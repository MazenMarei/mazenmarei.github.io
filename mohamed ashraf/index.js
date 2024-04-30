function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}



let ok = document.getElementById('ok');
let eror = document.getElementById('eror');
let tru = document.getElementById('tru');
let pob = document.getElementById('pob');
let pob2 = document.getElementById('pob2');


ok.onclick = function (e){
  e.preventDefault();
  let em = document.getElementById('em');
  let tx = document.getElementById('tx');
  
  if((em.value !== "")&&(tx.value !== "")&&(em.value.includes('@'))){
    pob.style.display='none';
    pob2.style.display='none';
    window.localStorage.setItem("email",em.value);
    tru.style.display='flex';
    setTimeout(() => {
      tru.style.display='none';
    }, 500);
  }
  else if((!em.value.includes('@'))&&(em.value !== "")){

     pob.innerText='enter email with @ and . !';
     pob.style.display='flex';
    
    eror.style.display='flex';
    setTimeout(() => {
      eror.style.display='none';
    }, 500)
  }
  if (em.value == ""){
    pob.innerText='write something !';
    pob.style.display='flex';
    eror.style.display='flex';
    setTimeout(() => {
      eror.style.display='none';
    }, 500)
  }
  if(em.value.includes('@')){
    pob.style.display='none';
  }

  if(tx.value == ""){
    pob2.style.display='flex';
    eror.style.display='flex';
    setTimeout(() => {
      eror.style.display='none';
    }, 500)
  }
  else if(tx.value !== ""){
    pob2.style.display='none';
  }

}