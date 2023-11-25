// Input create post box shadow effect
const createPostInput = document.getElementById("create-post");
const createPostContainer = document.getElementById("create-post-container");

createPostInput.addEventListener("focusin", () => {
    createPostContainer.classList.remove("border-color");
    createPostContainer.classList.add("shadow");
});

createPostInput.addEventListener("focusout", () => {
    createPostContainer.classList.add("border-color");
    createPostContainer.classList.remove("shadow");
});

