let WIDTH;
let HEIGHT;
let m;
let a;
let sorted;
let count;
let masterList;
let index;
function setup() {
  a = [];
  masterList = [];
  WIDTH = 720;
  HEIGHT = 400;
  count = 250;
  index = 0;


  for (let i = count; i > 0; i--) {
    a.push(i);
  }
  a = shuffle(a);


  m = new SelectionSort();
  m.sort(a);
  masterList = m.getList();
  createCanvas(WIDTH, HEIGHT);

  // input = createInput();
  // input.position(20, 65);

  // print(input)

  // button = createButton('submit');
  // button.position(input.x + input.width, 65);


}

function keyPressed() {
  let keyIndex = -1;
  if (key == 'a') {
    mastercList = m.getList();
    print(masterList);
  }
  if (key == 'd') {
    index++;
    print(masterList[index]);
  }
}

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function draw() {
  background(127);
  //noStroke();
  //fill(129, 206,15)
  let x = 0; let y = 400;
  for (let i = 0; i < a.length; i++) {
    let width = WIDTH / a.length;
    let height = masterList[index][i];
    rect(x, y, width, -height);
    x += width;
  }
  index++;
  if (index == masterList.length) {
    sleep(1000);
  }
  index %= masterList.length;


}


function sleep(seconds) {
  var e = new Date().getTime() + (seconds);
  while (new Date().getTime() <= e) { }
}

function mousePressed() {
}






class Board {

  constructor() {
    this.list = [];
  }

  getBoard() {
    return this.list;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }


  createRandomList(N) {
    console.log("createRandomList()");
    for (var i = 0; i < N; i++) {
      var r = new Rectangle(50, this.getRandomInt(200));
      this.list.push(r);
    }
  }





}



function redraw() {



}

class Rectangle {

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }
}
