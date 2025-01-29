document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const overlayBtn2 = document.getElementById("overlayBtn2");

    function toggleForm() {
        container.classList.toggle("right_panel-active");
    }

    document.querySelectorAll("button").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            if (e.target.id === "overlayBtn2" || e.target.innerText.includes("Sign")) {
                toggleForm();
            }
        });
    });
});
