// Query Selector
console.log("--- ACP: ", document.querySelector("#signup"));

// getElementById
console.log("--- ACP: ", document.getElementById("signup"));

document.querySelector("#signup").addEventListener("submit", function(event) {
    console.log("--- ACP: Event: ", event);
    event.preventDefault();
});
