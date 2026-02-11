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
        window.location.href = "../user_dashboard/user_dashboard.html";
    });

    document.querySelector(".admin")?.addEventListener("click", () => {
        window.location.href = "../admin_dashboard/admin_dashboard.html";
    });

    document.getElementById("btn1")?.addEventListener("click", () => {
        window.location.href = "../user-login/index.html";
    });

    document.getElementById("btn2")?.addEventListener("click", () => {
        window.location.href = "../admin-login/index2.html";
    });


    const chooseBtn = document.getElementById("choose");
    const submitBtn = document.getElementById("submit");
    const fileInput = document.getElementById("certificate");
    const fileName = document.getElementById("fileName");


    chooseBtn.addEventListener("click", () => {
        fileInput.click();
    });


    fileInput.addEventListener("change", () => {
        fileName.innerText = fileInput.files[0].name;
    });


    submitBtn.addEventListener("click", () => {

        const event = document.querySelector('input[placeholder="Event Name"]').value;
        const org = document.querySelector('input[placeholder="Organising Body"]').value;
        const date = document.querySelector('input[type="date"]').value;
        const type = document.getElementById("values").value;

        if (!event || !org || !date || !fileInput.files.length) {
            alert("Please fill all fields and upload certificate");
            return;
        }

        const studentData = {
            event,
            org,
            date,
            type,
            status: "Pending"
        };

        localStorage.setItem("studentCertificate", JSON.stringify(studentData));

        alert("Certificate uploaded successfully!");

        location.reload();
    });

});


