const GRID = 0;
const LIST = 1;

let viewSetting = GRID;

function gridview() {
    document.querySelector(".companycards").style.gridTemplateColumns = "1fr 1fr 1fr";
    viewSetting = GRID;
}

function listview() {
    document.querySelector(".companycards").style.gridTemplateColumns = "1fr";
    viewSetting = LIST;
}

function resize() {
    if ( window.innerWidth < 1024) {     
        document.querySelector(".companycards").style.gridTemplateColumns = "";
    }
    else {
        if (viewSetting == GRID) gridview();
        else if (viewSetting == LIST) listview();
    }
}

window.onresize = resize;