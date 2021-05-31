var possi = document.getElementById("possi");
var count = 0;
for (i = 0; i < 316; i++) {
    var row = document.createElement("div");
    row.classList.add("row");
    row.id = "r" + i;
    for (j = 0; j < 640; j++) {
        var col = document.createElement("div");
        col.classList.add("col");

        var fly = document.createElement("div");
        fly.classList.add("firefly");
        fly.id = "f" + count;
        col.appendChild(fly);
        count++;
        row.appendChild(col);
    }
    possi.appendChild(row);
}

for (i = 0; i < count; i++) {
    var id = "f" + i;
    var f = document.getElementById(id);

    setInterval(function() {
        f.style.display = (f.style.display == 'none' ? '' : 'none');
    }, 1000);
}