// const filterContainer = document.querySelector(".gallery-filter");
// const galleryItems = document.querySelectorAll(".gallery-item");

// filterContainer.addEventListener("click", (event) =>
// {
//    if(event.target.classList.contains("filter-item")){
//        filterContainer.querySelector(".active").classList.remove("active");
//        event.target.classList.add("active");
//        const filterValue = event.target.getAttribute("data-filter");
       
//        galleryItems.forEach((item) =>{
//            if(item.classList.contains(filterValue)){
//             item.classList.remove("hide");

//             item.classList.add("show");

//            }
//            else{
//                item.classList.add("hide");
//                item.classList.remove("show");

//            }
//        });
//     }
// });

function funn(c){
  if(c=="all"){
           let carr = ["aa","bb","cc","dd"];
           for(i=0;i<carr.length;i++){
           let l = carr[i];
           console.log(l);
        // document.getElementsByClassName('a')[0].style.display = 'none';
           let z =document.getElementsByClassName(l);
           let y = document.getElementsByClassName(l).length;
  
           for(j=0;j<y;j++){
           z[j].style.display = "block";
           console.log(z)
           }
          }
        }
else{
    let carr = ["aa","bb","cc","dd"];
    for(i=0;i<carr.length;i++){
  let l = carr[i];
  console.log(l);
    // document.getElementsByClassName('a')[0].style.display = 'none';
    let z =document.getElementsByClassName(l);
    let y = document.getElementsByClassName(l).length;
  
    for(j=0;j<y;j++){
     z[j].style.display = "none";
    console.log(z)
    }

    let m = c+c;
    let v =document.getElementsByClassName(m);
    let w = document.getElementsByClassName(m).length;
    for(k=0;k<y;k++){
        v[k].style.display = "block";
       console.log(v)
       }
}
}
}