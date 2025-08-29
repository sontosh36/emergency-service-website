// select DOM
const coin = document.getElementById('coin-count');
const heart = document.getElementById('heart-count');
const heartBtn = document.getElementsByClassName('heartBtn');
const copyCount = document.getElementById('copy-count');
const callHostoryList = document.getElementById("call-history-list");

function getId(id){
   const idSelect = document.getElementById(id);
   const value = idSelect.innerText;
  return parseInt(value);
}
  for(const btn of heartBtn){
    btn.addEventListener("click", function(){
  let currentNumber = getId('heart-count');
  currentNumber += 1;
  heart.innerText = currentNumber;
})
};

// copy button function
const copyBtn = document.getElementsByClassName('copyBtn');
for(const btn of copyBtn){
  btn.addEventListener('click', function(){
    const card = btn.closest('.card-parent');
    const text = card.querySelector('.number');
    let textInner = text.innerText;
    navigator.clipboard.writeText(textInner);
   let currentCopy= getId('copy-count');
    copyCount.innerText = currentCopy +1;
    
    alert('copied successfully: ' + textInner);
  })
}
// call button function
const callBtn = document.getElementsByClassName('callBtn');
for (const btn of callBtn) {
  btn.addEventListener('click', function () {
    let currentCoin = getId('coin-count');

    if (currentCoin < 20) {
      alert("Not enough coins!");
      return;
    }

    const card = btn.closest('.card-parent');
    const title = card.querySelector('h2').innerText;
    const number = card.querySelector('.number').innerText;
    currentCoin -= 20;
    coin.innerText = currentCoin;
    alert(`Calling... ${title} Number: ${number}`);
    
    const nowTime = new Date();
    const exactTime = nowTime.toLocaleTimeString();
//call-history-list update
 callHostoryList.innerHTML += `
      <div class="bg-[#f0f0f0] p-3 rounded-lg shadow flex justify-between gap-2">
      <div class="w-[70%] mb-2">
        <h3 class="text-lg font-bold text-gray-800 mb-2">${title}</h3>
        <p class="mb-2 text-sm text-gray-600">${number}</p>
      </div>
      <div id="updateTime" class="w-[30%]"> ${exactTime}</div>
      </div>
    `;
  });
}

//clear btn function
const clearBtn = document.getElementById('clearBtn');
if(clearBtn){
clearBtn.addEventListener('click', function(){
  callHostoryList.innerHTML= '';
})
};