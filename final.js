
var matrixArr = [
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

var x = 19;
var y = 0;


var div = document.createElement('div');
div.classList.add('divStyle');
document.body.appendChild(div);
for (var i = 0; i < 20; i++ ) {
    var row = document.createElement('div');
    row.classList.add('rowStyle');
    for (var j = 0; j < 30; j++) {
        var cell = document.createElement('div');
        cell.classList.add('cellStyle');
        row.appendChild(cell);
        if (matrixArr[i][j] === 1){
            cell.classList.add('wall');
        }
    }
    div.appendChild(row);
}

document.addEventListener('keydown', logKey);

function logKey(e) {
    switch(e.keyCode) {
        case 38:
            console.log('up')
            if (x - 1 >= 0 && x - 1 < 20 && document.getElementsByClassName("divStyle")[0].childNodes[x - 1].childNodes[y].classList.contains('wall') === false) {
                deleteImg(x, y);
                x = x-1;
                addImg(x, y);
            }
            isFinished();
          break;
        case 40:
            console.log('down')
            if (x + 1 >= 0 && x + 1 < 20 && document.getElementsByClassName("divStyle")[0].childNodes[x + 1].childNodes[y].classList.contains('wall') === false) {
                deleteImg(x, y);
                x = x + 1;
                addImg(x, y);
            }
            isFinished();
          break;
        case 39:
            console.log('right')
            if (y + 1 >= 0 && y + 1 < 30 && document.getElementsByClassName("divStyle")[0].childNodes[x].childNodes[y + 1].classList.contains('wall') === false) {
                deleteImg(x, y);
                y = y + 1;
                addImg(x, y);
            }
            isFinished();
          break;
        case 37:
            console.log('left')
            if (y - 1 >= 0 && y - 1 < 30 && document.getElementsByClassName("divStyle")[0].childNodes[x].childNodes[y - 1].classList.contains('wall') === false) {
                deleteImg(x, y);
                y = y - 1;
                addImg(x, y);
            }
            isFinished();
            break;
        default:
        console.log('any key');
      }
}

var btnStart = document.createElement('img')
document.body.appendChild(btnStart);
btnStart.src = 'saveLives.jpg'
btnStart.classList.add('startStyle');

var house = document.createElement('img');
house.classList.add('house');
var home = document.getElementsByClassName("divStyle")[0].childNodes[0].childNodes[29];
home.appendChild(house);


btnStart.onclick = function() {
   
    deleteImg(x,y);
    x = 19;
    y = 0;
    addImg(x, y);
}

function addImg(row, cell){
    var div = document.getElementsByClassName("divStyle")[0].childNodes[row].childNodes[cell];
    var img = document.createElement('img');
    img.classList.add('health');
    div.appendChild(img);
}

function deleteImg(row , cell){
    document.getElementsByClassName("divStyle")[0].childNodes[row].childNodes[cell].innerHTML = '';
}

function isFinished () {
    if(x === 0 && y === 29){
        console.log("finish")
        deleteImg(x,y);
        var hands = document.createElement('img');
        hands.classList.add('wash');
        document.getElementsByClassName("divStyle")[0].childNodes[x].childNodes[y].appendChild(hands);
    }
}
