document.addEventListener("DOMContentLoaded",()=>{
    const user=document.querySelector(".user");
    const pass=document.querySelector(".pass");
    const msg=document.querySelector(".msg");
    const msg1=document.querySelector(".msg1");
     const msg2=document.querySelector(".msg2");
    const btn=document.querySelector(".btn");
    const btn1=document.querySelector(".btn1");
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


    msg1.classList.remove("error-glow");
    msg.classList.remove("error-glow");

     let users = JSON.parse(localStorage.getItem("users")) || [];
        const existingUser = users.find(u => u.username === us);
    console.log("Users from localStorage:", users);

        if(us==="" || ps===""){
            msg.textContent = "Username or password cannot be empty";
            msg.style.fontSize="0.75rem";
            msg.style.color="red";
            msg.style.textAlign="center";
            msg.classList.add("error-glow");
        }


    const validUser = users.find(
        u => u.username === us && u.password === ps
    );
    

    if (validUser) {
        msg2.textContent = "Login successful";
        msg2.style.color = "green";
        msg2.style.textAlign="center";
        msg2.classList.add("error-glow");
        msg2.style.fontSize="0.75rem";

    } 


      else if (users.length === 0) {
        msg2.textContent = "No account found. Please create an account first.";
        msg2.classList.add("error-glow");
         msg2.style.fontSize="0.75rem";
          msg2.style.color = "red";
        msg2.style.textAlign="center";
        return;}
    
    
   else  if (!existingUser) {
        msg2.textContent = "User not found. Please sign up.";
        msg2.classList.add("error-glow");
        msg2.style.fontSize="0.75rem";
          msg2.style.color = "red";
        msg2.style.textAlign="center";
        return;
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


    
    
    
    
    btn1.addEventListener("click",()=>{
window.location.href="index1.html";
        
    });



});