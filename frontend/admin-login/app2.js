document.addEventListener("DOMContentLoaded",()=>{
    const user=document.querySelector(".user");
    const pass=document.querySelector(".pass");
    const msg=document.querySelector(".msg");
    const msg1=document.querySelector(".msg1");
     const msg2=document.querySelector(".msg2");
    const btn=document.querySelector(".btn");
    const eye = document.querySelector(".toggle-eye");
    const toggleIcon = document.querySelector(".togglePassword");



  toggleIcon.addEventListener("click", () => {

    
    if (pass.type === "password") {
      pass.type = "text";          
      toggleIcon.classList.add("fa-eye-slash");
      toggleIcon.classList.remove("fa-eye");
    } 
    else {
      pass.type = "password";      
      toggleIcon.classList.add("fa-eye");
      toggleIcon.classList.remove("fa-eye-slash");
    }

  });



    btn.addEventListener("click",()=>{
        const us=user.value.trim();
        const ps=pass.value.trim();


      msg.textContent = "";
    msg1.textContent = "";
    msg2.textContent = "";


    msg1.classList.remove("error-glow");
    msg.classList.remove("error-glow");
        msg2.classList.remove("error-glow");

        if(us==="" || ps===""){
            msg2.textContent = "Username or password cannot be empty";
            msg2.style.fontSize="0.75rem";
            msg2.style.color="red";
            msg2.style.textAlign="center";
            msg2.classList.add("error-glow");


        }


else if(us==="Admin01@gmail.com" && ps==="12345678"){
     msg2.textContent = "Login successful";
        msg2.style.color = "green";
        msg2.style.textAlign="center";
        msg2.classList.add("error-glow");
        msg2.style.fontSize="0.75rem";


        window.location.href="admin_dashboard.html";

}

    else {
        msg2.textContent = "Invalid username or password";
        msg2.classList.add("error-glow");
         msg2.style.fontSize="0.75rem";
          msg2.style.color = "red";
        msg2.style.textAlign="center";
        return;
    }
    });





});