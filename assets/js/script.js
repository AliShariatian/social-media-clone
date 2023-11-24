const createPostInput = document.getElementById("create-post");
const createPostContainer = document.getElementById("create-post-container");

createPostInput.addEventListener("focusin", () => {
    createPostContainer.classList.remove("border-color");
    createPostContainer.classList.add("shadow");
});

createPostContainer.addEventListener("focusout", () => {
    createPostContainer.classList.add("border-color");
    createPostContainer.classList.remove("shadow");
});
