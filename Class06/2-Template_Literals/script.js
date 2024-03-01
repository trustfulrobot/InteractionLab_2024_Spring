const content = [
  "dog",
  "cat",
  "salamander",
  "elephant",
  "tiger",
  "bear",
  "dolphin",
  "eagle"
]

const containerEl = document.querySelector("#blocks_container");
const createBlocksBtn = document.querySelector("#create_blocks_btn");
createBlocksBtn.addEventListener("click", createBlocks);

function createBlocks() {
  console.log("create blocks");
  for (let i=0; i < content.length; i++){
    let blockEl = `
      <div class="block">
        ${ content[i] }
      </div>
    `;
    containerEl.insertAdjacentHTML('beforeend', blockEl)
  }
}

// Anonymous function version of lines 14-26):
// createBlocksBtn.addEventListener("click", () => {
//   console.log("create blocks");
//   for (let i=0; i < content.length; i++){
//     let blockEl = `
//       <div class="block">
//         ${ content[i] }
//       </div>
//     `;
//     containerEl.insertAdjacentHTML('beforeend', blockEl)
//   }
// });