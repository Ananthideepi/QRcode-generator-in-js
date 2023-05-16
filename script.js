const form =document.getElementById("form");
const outout=document.querySelector(".output");
const loading=document.getElementById("loading");
const qr_element=document.querySelector("#qrcode");
const buttonsave=document.querySelector("#buttonsave");
form.addEventListener("submit",genqrcode);

function genqrcode(e){
    qr_element.innerHTML=" ";
   e.preventDefault();
   const url=document.getElementById("url").value;
   const size=document.getElementById("size").value;
   const darkcolor=document.getElementById("darkcolor").value;
   const lightcolor=document.getElementById("lightcolor").value;
   loading.setAttribute("style","display:flex");
        setTimeout(()=>{
            loading.setAttribute("style","display:none");
             const qrcode=new QRCode("qrcode",{
                text:url,
                width:size,
                height:size,
                coloeDark:darkcolor,
                colorLight:lightcolor,
                correctLevel: QRCode.CorrectLevel.H
            });
        },1000);

        downloadlink();
   
}

function downloadlink(){
    const imgSrc=document.querySelector("#img").src;
    console.log(imgSrc)
    buttonsave.href=imgSrc; 
}
buttonsave.addEventListener("click",()=>{
   setTimeout(() => {
      buttonsave.download="qrcode";
}, 50);

});