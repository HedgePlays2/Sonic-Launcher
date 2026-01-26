const games = document.querySelectorAll(".game");
let index = 0;

function showGame(i) {
  games.forEach(g => g.classList.remove("active"));
  games[i].classList.add("active");
}

document.getElementById("left").onclick = () => {
  index = (index - 1 + games.length) % games.length;
  showGame(index);
};

document.getElementById("right").onclick = () => {
  index = (index + 1) % games.length;
  showGame(index);
};
