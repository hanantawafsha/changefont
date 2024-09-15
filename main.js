function biggerFontSize(){
 document.querySelector("p").classList.remove("smaller");
  document.querySelector("p").classList.add("bigger");
  //document.querySelector("p").style.fontSize ="20px"

}

function smallerFontSize(){
    document.querySelector("p").classList.remove("bigger");
    document.querySelector("p").classList.add("smaller");
   // document.querySelector("p").style.fontSize ="12px"
    
}

document.querySelector(".increaseFontBtn").onclick = biggerFontSize;
document.querySelector(".decreaseFontBtn").onclick = smallerFontSize;