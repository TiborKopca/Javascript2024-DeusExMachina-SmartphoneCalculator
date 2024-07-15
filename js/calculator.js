// console.log("test");

//ORIENTATION CHANGE - LOADING DIFFERENT PAGES
window.addEventListener("orientationchange", function () {
    if(this.screen.orientation.type === "portrait-primary") {
        this.window.location.href = "index.html";
    }else if(this.screen.orientation.type === "landscape-primary") {
        this.window.location.href = "calculator.html";
    }
});