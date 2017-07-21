
function getItemSize(item) {
    if (item == "Square [75 X 75]") {
        return 75;
    }
    if (item == "Large Square") {
        return 150;
    }
    if (item == "Thumbnail") {
        return 100;
    }
    if (item == "Small") {
        return 240;
    }
    if (item == "Medium") {
        return 500;
    }
    if (item == "Original") {
        return 640;
    }
    return 75; // default size
}

