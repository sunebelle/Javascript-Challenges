const addList = document.getElementById("input");
// const addList = $("#input") - undefined



function todoList() {
    const value = addList.value;
    $(".input-field").after(`
        <div class="form-check d-flex ">
        <input
        class="form-check-input me-4"
        type="checkbox"
        value=""
        id="todolist"
        />
        <p class="form-check-label" for="todolist">
        ${value}
        </p>
        </div>`
    );
    
    input.value ="";
    const removeList = document.querySelector(".form-check");
    removeList.addEventListener("click", e => {
    removeList.remove();
    // console.log(e.toElement);
    });
};

// removeList.on("click", e => e.remove());
// document.querySelector(".form-check.mt-2").addEventListener("contextmenu", e => {
//     e.preventDefault();
//     removeList.remove();
// });

