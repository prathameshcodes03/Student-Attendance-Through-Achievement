document.addEventListener("DOMContentLoaded", () => {



    document.querySelector(".home")?.addEventListener("click", () => {
        window.location.href = "../home/home.html";
    });

    document.querySelector(".about")?.addEventListener("click", () => {
        window.location.href = "../about/about.html";
    });

    document.querySelector(".con")?.addEventListener("click", () => {
        window.location.href = "../contact/contact.html";
    });


    document.querySelector(".stu")?.addEventListener("click", () => {
        const loggedInUser = localStorage.getItem("loggedInUser");

        if (loggedInUser) {
            window.location.href = "../user_dashboard/user_dashboard.html";
        } else {
            window.location.href = "../user-login/index.html";
        }
    });

   
    document.querySelector(".admin")?.addEventListener("click", () => {
        const adminLoggedIn = localStorage.getItem("adminLoggedIn");

        if (adminLoggedIn) {
            window.location.href = "../admin_dashboard/admin_dashboard.html";
        } else {
            window.location.href = "../admin-login/index2.html";
        }
    });

    document.getElementById("btn1")?.addEventListener("click", () => {
        window.location.href = "../user-login/index.html";
    });

    document.getElementById("btn2")?.addEventListener("click", () => {
        window.location.href = "../admin-login/index2.html";
    });


const loggedInUser = localStorage.getItem("loggedInUser");

if (document.body.classList.contains("dashboard-page")) {

    if (!loggedInUser) {
        window.location.href = "../user-login/index.html";
    }
}



    const chooseBtn = document.getElementById("choose");
    const submitBtn = document.getElementById("submit");

    if (chooseBtn && submitBtn) {

        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = ".pdf,.jpg,.png";

        let uploadedFile = null;

        chooseBtn.addEventListener("click", () => {
            fileInput.click();
        });

        fileInput.addEventListener("change", () => {
            uploadedFile = fileInput.files[0];
            chooseBtn.innerText = uploadedFile ? uploadedFile.name : "Choose File";
        });

        submitBtn.addEventListener("click", () => {

            if (!uploadedFile) {
                alert("Please upload certificate");
                return;
            }

            localStorage.setItem("certificateUploaded", uploadedFile.name);

            alert("Achievement submitted successfully ✅");

        });
    }

});

