var a = 0;
function showHide() {
    if (a == 1) {
        document.getElementsByClassName('toggle-button').style.display="flex";
        a = 0;
    }
    else {
        document.getElementsByClassName('toggle-button').style.display="none";
        a = 1;
    }
}