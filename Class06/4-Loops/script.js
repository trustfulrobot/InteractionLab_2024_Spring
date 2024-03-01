const containerEl = document.querySelector("#blocks_container");

for (let i=0; i < 5; i++){
  let blockEl = `
    <div class="block">
      Block ${ [i] }
    </div>
  `;
  containerEl.insertAdjacentHTML('beforeend', blockEl)
}