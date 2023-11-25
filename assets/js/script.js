// Input create post
const createPostInput = document.getElementById("create-post");
const createPostContainer = document.getElementById("create-post-container");

// Notification
const menuItems = document.querySelectorAll(".menu-item");
const notificationsPopup = document.querySelector(".notifications-popup");
const noticicationsCount = document.querySelector("#notification .notification-count");

// Message
const messageNotification = document.querySelector("#message-notifications");
const messagesBox = document.querySelector(".messages");
const messageCount = document.querySelector("#message-notifications .notification-count");
const allMessages = document.querySelectorAll(".message");
const messageSearch = document.getElementById("search-message");

// Theme
const theme = document.getElementById("theme");
const themeBox = document.querySelector(".customize-theme");
const closeBoxBtn = document.querySelector("#close");

// Font size
const fontSizesElem = document.querySelectorAll(".choose-size span");
// -----------------------------------------------------------

// Input create post box shadow effect
createPostInput.addEventListener("focusin", () => {
    createPostContainer.classList.remove("border-color");
    createPostContainer.classList.add("shadow");
});

createPostInput.addEventListener("focusout", () => {
    createPostContainer.classList.add("border-color");
    createPostContainer.classList.remove("shadow");
});

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach((item) => {
        item.classList.remove("active");
    });
};

// show notification box
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

// Message box hilight when message item clicked
messageNotification.addEventListener("click", () => {
    messagesBox.style.boxShadow = "0 0 1rem var(--color-primary)";
    messageCount.style.display = "none";
    setTimeout(() => {
        messagesBox.style.boxShadow = "none";
    }, 2000);
});

// Search messages
messageSearch.addEventListener("keyup", () => {
    const value = messageSearch.value.toLowerCase();

    allMessages.forEach((user) => {
        let name = user.querySelector("h5").textContent.toLowerCase();

        if (name.indexOf(value) != -1) {
            user.style.display = "flex";
        } else {
            user.style.display = "none";
        }
    });
});

// open theme box
theme.addEventListener("click", () => {
    themeBox.style.display = "grid";
});

// close theme box
const closeThemeBox = (ev) => {
    if (ev.target.classList.contains("customize-theme") || ev.target.classList.contains("close")) {
        themeBox.style.display = "none";
    }
};

themeBox.addEventListener("click", closeThemeBox);
closeBoxBtn.addEventListener("click", closeThemeBox);

// Change font size
const removeSizeSelector = () => {
    fontSizesElem.forEach((size) => {
        size.classList.remove("active");
    });
};

fontSizesElem.forEach((size) => {
    size.addEventListener("click", () => {
        removeSizeSelector();
        let fontSize;
        size.classList.add("active");

        if (size.classList.contains("font-size-1")) {
            fontSize = "10px";
        } else if (size.classList.contains("font-size-2")) {
            fontSize = "13px";
        } else if (size.classList.contains("font-size-3")) {
            fontSize = "16px";
        } else if (size.classList.contains("font-size-4")) {
            fontSize = "19px";
        } else if (size.classList.contains("font-size-5")) {
            fontSize = "22px";
        }

        // change root and create post input font size
        document.querySelector("html").style.fontSize = fontSize;
        createPostInput.style.fontSize = fontSize;
    });
});
