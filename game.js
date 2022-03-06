class Graph {
  constructor(randomSpaces) {
    this.adjacencyList = {};
    if (randomSpaces) {
      this.emptySpaces = randomSpaces;
    } else {
      this.emptySpaces = [14, 22, 55, 58];
    }
    this.setEmptySpaces();
  }
  setEmptySpaces() {
    let blankTile = document.getElementById(this.emptySpaces[0]);
    blankTile.classList.add("blocked-tile");
    blankTile = document.getElementById(this.emptySpaces[1]);
    blankTile.classList.add("blocked-tile");
    blankTile = document.getElementById(this.emptySpaces[2]);
    blankTile.classList.add("blocked-tile");
    blankTile = document.getElementById(this.emptySpaces[3]);
    blankTile.classList.add("blocked-tile");
  }

  //   SOLVING ATTEMPT BELLOW
  //   addVertex(vertex) {
  //     if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  //   }
  //   addEdge(v1, v2) {
  //     if (this.emptySpaces.includes(v2)) return;
  //     if (!this.adjacencyList[v1].includes(v2)) {
  //       this.adjacencyList[v1].push(v2);
  //     }
  //     if (!this.adjacencyList[v2].includes(v1)) {
  //       this.adjacencyList[v2].push(v1);
  //     }
  //   }
  //   removeEdge(vertex1, vertex2) {
  //     this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
  //       (v) => v !== vertex2
  //     );
  //     this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
  //       (v) => v !== vertex1
  //     );
  //   }
  //   removeVertex(vertex) {
  //     while (this.adjacencyList[vertex].length) {
  //       const adjacentVertex = this.adjacencyList[vertex].pop();
  //       this.removeEdge(vertex, adjacentVertex);
  //     }
  //     delete this.adjacencyList[vertex];
  //   }
  //   depthFirstRecursive(start) {
  //     const result = [];
  //     const visited = {};
  //     const adjacencyList = this.adjacencyList;

  //     (function dfs(vertex) {
  //       if (!vertex) return null;
  //       visited[vertex] = true;
  //       result.push(vertex);
  //       adjacencyList[vertex].forEach((neighbor) => {
  //         if (!visited[neighbor]) {
  //           return dfs(neighbor);
  //         }
  //       });
  //     })(start);

  //     return result;
  //   }
  //   depthFirstIterative(start) {
  //     const stack = [start];
  //     const result = [];
  //     const visited = {};
  //     let currentVertex;

  //     visited[start] = true;
  //     while (stack.length) {
  //       currentVertex = stack.pop();
  //       result.push(currentVertex);

  //       this.adjacencyList[currentVertex].forEach((neighbor) => {
  //         if (!visited[neighbor]) {
  //           visited[neighbor] = true;
  //           stack.push(neighbor);
  //         }
  //       });
  //     }
  //     return result;
  //   }
  //   breadthFirst(start) {
  //     const queue = [start];
  //     const result = [];
  //     const visited = {};
  //     let currentVertex;
  //     visited[start] = true;

  //     while (queue.length) {
  //       currentVertex = queue.shift();
  //       result.push(currentVertex);

  //       this.adjacencyList[currentVertex].forEach((neighbor) => {
  //         if (!visited[neighbor]) {
  //           visited[neighbor] = true;
  //           queue.push(neighbor);
  //         }
  //       });
  //     }
  //     return result;
  //   }
}

// let g = new Graph();
// for (let i = 0; i < 100; i++) {
//   let vertex = i.toString();
//   g.addVertex(vertex);
// }

// for (let i = 0; i < 100; i++) {
//   let vertex = i.toString();
//   if (g.emptySpaces.includes(vertex)) {
//     continue;
//   }
//   let leftEdge = false;
//   let topEdge = false;
//   let rightEdge = false;
//   let bottomEdge = false;
//   if (i < 10) topEdge = true;
//   if (i % 10 === 0) leftEdge = true;
//   if (i >= 90) bottomEdge = true;
//   if ((i - 9) % 10 === 0) rightEdge = true;
//   let topVertex = (i - 10).toString();
//   let leftVertex = (i - 1).toString();
//   let rightVertex = (i + 1).toString();
//   let bottomVertex = (i + 10).toString();
//   switch (true) {
//     case leftEdge && bottomEdge:
//       g.addEdge(vertex, topVertex);
//       g.addEdge(vertex, rightVertex);
//       break;
//     case leftEdge && topEdge:
//       g.addEdge(vertex, bottomVertex);
//       g.addEdge(vertex, rightVertex);
//       break;
//     case rightEdge && bottomEdge:
//       g.addEdge(vertex, topVertex);
//       g.addEdge(vertex, leftVertex);
//       break;
//     case rightEdge && topEdge:
//       g.addEdge(vertex, bottomVertex);
//       g.addEdge(vertex, leftVertex);
//       break;
//     case rightEdge:
//       g.addEdge(vertex, bottomVertex);
//       g.addEdge(vertex, topVertex);
//       g.addEdge(vertex, leftVertex);
//       break;
//     case leftEdge:
//       g.addEdge(vertex, bottomVertex);
//       g.addEdge(vertex, topVertex);
//       g.addEdge(vertex, rightVertex);
//       break;
//     case topEdge:
//       g.addEdge(vertex, bottomVertex);
//       g.addEdge(vertex, rightVertex);
//       g.addEdge(vertex, leftVertex);
//       break;
//     case bottomEdge:
//       g.addEdge(vertex, topVertex);
//       g.addEdge(vertex, rightVertex);
//       g.addEdge(vertex, leftVertex);
//       break;
//     default:
//       g.addEdge(vertex, bottomVertex);
//       g.addEdge(vertex, rightVertex);
//       g.addEdge(vertex, topVertex);
//       g.addEdge(vertex, leftVertex);
//       break;
//   }
// }

// USER MOVEMENT GAME
let currentPosition = 0;
let actionOrders = [];
let actionNumberOrder = [];
let points = 0;
let pointsHtml = document.getElementById("points");
pointsHtml.innerHTML = points;

let badNumsList = [
  0, 1, 12, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 24, 36, 48, 60, 72, 84, 96, 108,
  120, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 131, 119,
  107, 95, 83, 71, 59, 47, 35, 23,
];
let whites = [];
let blacks = [];
let evens = false;
for (var i = 1; i < 144; i++) {
  if (i % 12 === 0) {
    evens = !evens;
  }
  if (!badNumsList.includes(i)) {
    if (evens) {
      if (i % 2 == 0) {
        blacks.push(i);
      } else {
        whites.push(i);
      }
    } else {
      if (i % 2 == 0) {
        whites.push(i);
      } else {
        blacks.push(i);
      }
    }
  }
}

console.log(whites);
console.log(blacks);

// let random = [Math.floor(Math.random() * 143), Math.floor(Math.random() * 143), Math.floor(Math.random() * 143), Math.floor(Math.random() * 143)];
let random = [
  getRandomFromList(whites),
  getRandomFromList(whites),
  getRandomFromList(blacks),
  getRandomFromList(blacks),
];
let g = new Graph(random);

let setTimeoutId;

document.getElementById("timer").innerHTML = 05 + ":" + 01;
startTimer();

function startTimer() {
  var presentTime = document.getElementById("timer").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond(timeArray[1] - 1);
  if (s == 59) {
    m = m - 1;
  }
  if (m < 0) {
    return;
  }
  if (m == 0 && s < 20) {
    document.getElementById("timer").style.color = "red";
  }
  document.getElementById("timer").innerHTML = m + ":" + s;
  setTimeoutId = setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {
    sec = "0" + sec;
  }
  if (sec < 0) {
    sec = "59";
  }
  return sec;
}

function getRandomFromList(list) {
  let randNum = Math.floor(Math.random() * list.length);
  num = list[randNum];
  return num;
}

function randomizeBoard() {
  let random = [
    getRandomFromList(whites),
    getRandomFromList(whites),
    getRandomFromList(blacks),
    getRandomFromList(blacks),
  ];
  g = new Graph(random);
}

function clearBoardRandomize() {
  this.clearBoard(false, false);
  this.randomizeBoard();
}

function clearBoardRandomizeReset() {
  this.clearBoard(false, true);
  this.randomizeBoard();
  clearTimeout(setTimeoutId)
  document.getElementById("timer").innerHTML = 05 + ":" + 01;
  startTimer();
}

function clearBoard(addTiles, resetPoints) {
  var odds = true;
  var one = document.getElementById("0");
  one.className = "tile player";
  this.removeAllChildNodes(one);
  one.innerHTML = "0";
  var curr = null;
  for (var i = 1; i <= 143; i++) {
    if (i % 12 === 0) {
      odds = !odds;
    }
    if (odds) {
      if (i % 2 !== 0) {
        curr = document.getElementById(i.toString());
        curr.className = "";
        curr.classList.add("tile-b");
      } else {
        curr = document.getElementById(i.toString());
        curr.className = "";
        curr.classList.add("tile");
      }
    } else {
      if (i % 2 !== 0) {
        curr = document.getElementById(i.toString());
        curr.className = "";
        curr.classList.add("tile");
      } else {
        curr = document.getElementById(i.toString());
        curr.className = "";
        curr.classList.add("tile-b");
      }
    }
    this.removeAllChildNodes(curr);
    curr.innerHTML = i.toString();
  }
  currentPosition = 0;
  actionOrders = [];
  if (resetPoints) {
    points = 0;
    document.getElementById("points").innerHTML = points;
  }

  if (addTiles) g = new Graph(random);
}

function createBoardFromInput() {
  const input1 = document.getElementById("point1");
  const input2 = document.getElementById("point2");
  const input3 = document.getElementById("point3");
  const input4 = document.getElementById("point4");

  clearBoard(false);
  random = [input1.value, input2.value, input3.value, input4.value];
  g = new Graph(random);
}

function clearSpecificTile(num) {
  var odds = true;
  for (var i = 1; i <= 143; i++) {
    if (i % 12 === 0) {
      odds = !odds;
    }
    if (i === num) {
      if (odds) {
        if (i % 2 !== 0) {
          curr = document.getElementById(i.toString());
          curr.className = "";
          curr.classList.add("tile-b");
        } else {
          curr = document.getElementById(i.toString());
          curr.className = "";
          curr.classList.add("tile");
        }
      } else {
        if (i % 2 !== 0) {
          curr = document.getElementById(i.toString());
          curr.className = "";
          curr.classList.add("tile");
        } else {
          curr = document.getElementById(i.toString());
          curr.className = "";
          curr.classList.add("tile-b");
        }
      }
      this.removeAllChildNodes(curr);
      curr.innerHTML = i.toString();
    }
  }
}

function goBack() {
  this.clearSpecificTile(currentPosition);
  const lastMove = actionNumberOrder.pop();
  actionOrders.pop();
  points -= 1;

  currentPosition = lastMove;
  this.clearSpecificTile(lastMove);
  const lastMoveEl = document.getElementById(lastMove.toString());
  lastMoveEl.classList.add("player");

  let pointsHtml = document.getElementById("points");
  pointsHtml.innerHTML = points;
}

document.addEventListener("keydown", function (event) {
  console.log("Current Position", currentPosition);
  if (event.keyCode == 37) {
    console.log("Moved Left");
    actionOrders.push("left");
    curr = document.getElementById(currentPosition.toString());
    actionNumberOrder.push(currentPosition);
    currentPosition -= 1;
    curr.classList.add("visited");

    var bar = document.createElement("div");
    if (
      actionOrders.length > 1 &&
      actionOrders[actionOrders.length - 2] === "down"
    ) {
      bar.classList.add("down-left");
    } else if (
      actionOrders.length > 1 &&
      actionOrders[actionOrders.length - 2] === "up"
    ) {
      bar.classList.add("up-left");
    } else {
      bar.classList.add("hl");
    }
    curr.appendChild(bar);

    curr = document.getElementById(currentPosition.toString());
    curr.classList.add("player");
    points += 1;
  } else if (event.keyCode == 39) {
    console.log("Moved Right");
    actionOrders.push("right");
    curr = document.getElementById(currentPosition.toString());
    actionNumberOrder.push(currentPosition);
    currentPosition += 1;
    curr.classList.add("visited");

    var bar = document.createElement("div");
    if (
      actionOrders.length > 1 &&
      actionOrders[actionOrders.length - 2] === "down"
    ) {
      bar.classList.add("down-right");
    } else if (
      actionOrders.length > 1 &&
      actionOrders[actionOrders.length - 2] === "up"
    ) {
      bar.classList.add("up-right");
    } else {
      bar.classList.add("hl");
    }
    curr.appendChild(bar);
    curr = document.getElementById(currentPosition.toString());
    curr.classList.add("player");
    points += 1;
  } else if (event.keyCode == 38) {
    console.log("Moved Up");
    actionOrders.push("up");
    curr = document.getElementById(currentPosition.toString());
    actionNumberOrder.push(currentPosition);
    currentPosition -= 12;
    curr.classList.add("visited");

    var bar = document.createElement("div");
    if (
      actionOrders.length > 1 &&
      actionOrders[actionOrders.length - 2] === "right"
    ) {
      bar.classList.add("down-left");
    } else if (
      actionOrders.length > 1 &&
      actionOrders[actionOrders.length - 2] === "left"
    ) {
      bar.classList.add("down-right");
    } else {
      bar.classList.add("vl");
    }
    curr.appendChild(bar);
    curr = document.getElementById(currentPosition.toString());
    curr.classList.add("player");
    points += 1;
  } else if (event.keyCode == 40) {
    console.log("Moved Down");
    actionOrders.push("down");
    curr = document.getElementById(currentPosition.toString());
    actionNumberOrder.push(currentPosition);
    currentPosition += 12;
    curr.classList.add("visited");

    var bar = document.createElement("div");
    if (
      actionOrders.length > 1 &&
      actionOrders[actionOrders.length - 2] === "right"
    ) {
      bar.classList.add("up-left");
    } else if (
      actionOrders.length > 1 &&
      actionOrders[actionOrders.length - 2] === "left"
    ) {
      bar.classList.add("up-right");
    } else {
      bar.classList.add("vl");
    }
    curr.appendChild(bar);
    curr = document.getElementById(currentPosition.toString());
    curr.classList.add("player");
    points += 1;
  }

  let pointsHtml = document.getElementById("points");
  pointsHtml.innerHTML = points;
  //console.log(actionOrders);
});

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//console.log(g.depthFirstRecursive("0"));

// 0  1  2  3  4  5  6  7  8  9
// 10 11 12 13 14 15 16 17 18 19
// 20 21 22 23 24 25 26 27 28 29
// 30 31 32 33 34 35 36 37 38 39
// 40 41 42 43 44 45 46 47 48 49
// 50 51 52 53 54 55 56 57 58 59
// 60 61 62 63 64 65 66 67 68 69
// 70 71 72 73 74 75 76 77 78 79
// 80 81 82 83 84 85 86 87 88 89
// 90 91 92 93 94 95 96 97 98 99

// LIST OF GAMES
// 16, 73, 78, 97 empty spaces
// 11, 26, 50, 79
// 21, 25, 50, 93
// 4, 46, 64, 81 (impossible)
// 14, 22, 36, 58 (impossible)
// 14, 22, 55, 58
