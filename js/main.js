const filter_tabs = document.querySelectorAll(".filter-btn");
const filter_contents = document.querySelectorAll(".filter");

filter_tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        filter_tabs.forEach((tabs) => {
            tabs.classList.remove("active");
        });
        tab.classList.add("active");

        filter_contents.forEach((contents) => {
            contents.classList.remove("show");
        });
        target.classList.add("show");
    });
});