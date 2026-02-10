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

});



