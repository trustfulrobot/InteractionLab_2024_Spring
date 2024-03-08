const containerEl = document.querySelector("#blocks_container");
const createBlocksBtn = document.querySelector("#create_blocks_btn");
const removeBlocksBtn = document.querySelector("#remove_blocks_btn");

const foreground_colors = [
  "blue",
  "red",
  "green"
];
const background_colors = [
  "yellow",
  "orange",
  "brown"
];

console.log(containerEl)

function createBlocks() {
  // first, remove the example blocks
  containerEl.innerHTML = "";
  console.log("create blocks");
}
function removeBlocks() {
  console.log("remove blocks");
  containerEl.innerHTML = "";
}

createBlocksBtn.addEventListener("click", createBlocks);
removeBlocksBtn.addEventListener("click", removeBlocks);


for(let i = 0; i < foreground_colors.length; i++) {
  console.log("color: ", foreground_colors[i]);
}