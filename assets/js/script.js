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
// Color palette
const colorPaletteElem = document.querySelectorAll(".choose-color span");
const root = document.querySelector(":root");

// Background color
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");
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

// Remove active class handler
const removeActiveSelector = (parentElem) => {
    parentElem.forEach((elem) => {
        elem.classList.remove("active");
    });
};

// Change font size
fontSizesElem.forEach((size) => {
    size.addEventListener("click", () => {
        removeActiveSelector(fontSizesElem);
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

        // change root and createPostInput element font size
        document.querySelector("html").style.fontSize = fontSize;
        createPostInput.style.fontSize = fontSize;
    });
});

// Change primary color
colorPaletteElem.forEach((color) => {
    color.addEventListener("click", () => {
        removeActiveSelector(colorPaletteElem);
        let primaryHue;
        color.classList.add("active");

        if (color.classList.contains("color-1")) {
            primaryHue = 252;
        } else if (color.classList.contains("color-2")) {
            primaryHue = 52;
        } else if (color.classList.contains("color-3")) {
            primaryHue = 352;
        } else if (color.classList.contains("color-4")) {
            primaryHue = 152;
        } else if (color.classList.contains("color-5")) {
            primaryHue = 202;
        }

        root.style.setProperty("--primary-color-hue", primaryHue);
    });
});

// Backgroun color
let darkColorLightness;
let lightColorLihtness;
let whiteColorLightness;

const changeBG = () => {
    root.style.setProperty("--dark-color-lightness", darkColorLightness);
    root.style.setProperty("--light-color-lihtness", lightColorLihtness);
    root.style.setProperty("--white-color-lightness", whiteColorLightness);
};

bg1.addEventListener("click", () => {
    darkColorLightness = "17%";
    whiteColorLightness = "100%";
    lightColorLihtness = "95%";

    // add active class
    bg1.classList.add("active");

    // remove active class from the others
    bg2.classList.remove("active");
    bg3.classList.remove("active");
    changeBG();
});

bg2.addEventListener("click", () => {
    darkColorLightness = "95%";
    whiteColorLightness = "20%";
    lightColorLihtness = "15%";

    // add active class
    bg2.classList.add("active");

    // remove active class from the others
    bg1.classList.remove("active");
    bg3.classList.remove("active");
    changeBG();
});

bg3.addEventListener("click", () => {
    darkColorLightness = "95%";
    whiteColorLightness = "10%";
    lightColorLihtness = "0%";

    // add active class
    bg3.classList.add("active");

    // remove active class from the others
    bg1.classList.remove("active");
    bg2.classList.remove("active");
    changeBG();
});
