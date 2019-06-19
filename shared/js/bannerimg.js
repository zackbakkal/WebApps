
function start() {
    var banner = document.getElementById("banner");

    var href = window.location.href;
    var index = href.lastIndexOf("/") + 1;
    href = href.substring(index);

    switch (href) {
        //part 2
        case "part2.htm":
            banner.style.backgroundImage = "url('../shared/images/tutorials.png')";
            break;
        case "tutorials.htm":
            banner.style.backgroundImage = "url('../../shared/images/tutorials.png')";
            break;
        case "html5.htm":
        case "javascript.htm":
        case "ajax.htm":
        case "intro.htm":
            banner.style.backgroundImage = "url('../../../shared/images/tutorials.png')";
            break;
        case "pagestructures.htm":
        case "inputtypes.htm":
        case "controlstatements.htm":
        case "datatypes.htm":
        case "methods.htm":
        case "properties.htm":
            banner.style.backgroundImage = "url('../../../../shared/images/tutorials.png')";
            break;
        // part4
        case "part4.htm":
            banner.style.backgroundImage = "url('../shared/images/tools.png')";
            break;
        case "tools.htm":
            banner.style.backgroundImage = "url('../../shared/images/tools.png')";
            break;
    }
}

window.addEventListener("load", start, false);