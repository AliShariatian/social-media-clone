const createPostInput = document.getElementById("create-post");
const createPostContainer = document.getElementById("create-post-container");

const menuItems = document.querySelectorAll(".menu-item");
const notificationsPopup = document.querySelector(".notifications-popup");
const noticicationsCount = document.querySelector("#notification .notification-count");

// Input create post box shadow effect
createPostInput.addEventListener("focusin", () => {
    createPostContainer.classList.remove("border-color");
    createPostContainer.classList.add("shadow");
});

createPostInput.addEventListener("focusout", () => {
    createPostContainer.classList.add("border-color");
    createPostContainer.classList.remove("shadow");
});

// Sidebar
// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach((item) => {
        item.classList.remove("active");
    });
};

menuItems.forEach((item) => {
    item.addEventListener("click", () => {
        changeActiveItem();
        item.classList.add("active");

        if (item.id != "notification") {
            notificationsPopup.style.display = "none";
        } else {
            notificationsPopup.style.display = "block";
            noticicationsCount.style.display = "none";
        }
    });
});
