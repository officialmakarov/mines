
document.addEventListener("DOMContentLoaded", function () {
  const playButton = document.getElementById("playButton");
  const mask = document.querySelector(".cells-board-mask");
  const svgFiles = ["image_102217.svg", "image_108373.svg", "image_115081.svg", "image_11641.svg", "image_121237.svg", "image_127381.svg", "image_134077.svg", "image_140221.svg", "image_146917.svg", "image_153061.svg", "image_159757.svg", "image_18337.svg", "image_24493.svg", "image_31201.svg", "image_37357.svg", "image_44065.svg", "image_50221.svg", "image_5450.svg", "image_56929.svg", "image_63085.svg", "image_69793.svg", "image_75949.svg", "image_82645.svg", "image_89353.svg", "image_95509.svg"];

  function getRandomSVG() {
    return svgFiles[Math.floor(Math.random() * svgFiles.length)];
  }

  function generateStars() {
    if (!mask) return;
    mask.innerHTML = "";
    for (let i = 0; i < 25; i++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      const img = document.createElement("img");
      img.src = "output_svgs/" + getRandomSVG();
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.objectFit = "contain";
      cell.appendChild(img);
      mask.appendChild(cell);
    }
  }

  playButton?.addEventListener("click", generateStars);
});
