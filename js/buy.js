function display(){
     str=`Placed Order Successfully!!`
    setTimeout(()=>{
    document.getElementById("msg").textContent=str
   setTimeout(()=>{
     window.location.href='../index.html'
   },1000)
    },2000)

    
}
display()