let primogems = 0;
let progress = 0;

let clickUpgrades = [
  {
    name: "Whale Energy",
    price: 100,
    quantity: 0, 
    multiplier: 2
  },
  {
    name: "Credit Card",
    price: 500,
    quantity: 0,
    multiplier: 10
  }
]

let automaticUpgrades = [
  {
    name: "Wish",
    price: 1000, 
    amountPerSecond: 1,
    perSecond: 0.5,
    quantity: 0
  },
  {
    name: "Pity Wish",
    price: 5000,
    amountPerSecond: 5, 
    perSecond: 1,
    quantity: 0
  }
]

function clickPrimogem() {
  // make image change size when clicked
  let imageElement = document.getElementById("image")
  imageElement?.classList.remove("image")
  // make clicked variable and add the multipliers, if there are any
  let clicked = 1;
  for (let i = 0; i < clickUpgrades.length; i++) {
    clicked += (clickUpgrades[i].multiplier * clickUpgrades[i].quantity)
  }
  // add the clicked to the total amount of primogems and draw the page
  primogems += clicked;
  saveObjects()
  drawPage()
  console.log("clicked")
  // reset the size of the primogem to regular on hover after 0.1 seconds
  setTimeout(unClickPrimogem, 100)
}

function unClickPrimogem() {
  let imageElement = document.getElementById("image")
  imageElement?.classList.add("image")
}

function automaticClick() {
  let primogemsCollectionModifier = 0;
  for (let i = 0; i < automaticUpgrades.length; i++) {
    primogemsCollectionModifier += (automaticUpgrades[i].amountPerSecond * automaticUpgrades[i].quantity) * automaticUpgrades[i].perSecond
  }
  primogems += primogemsCollectionModifier
  saveObjects()
  drawPage()
}

function drawPage() {
  // SECTION Main bar top
  let clickElement = document.getElementById("amountPerClick");
  let clicked = 1;
  for (let i = 0; i < clickUpgrades.length; i++) {
    clicked += (clickUpgrades[i].multiplier * clickUpgrades[i].quantity)
  }
  let clickTemplate = `
  <h4 class="no-margin">+${clicked}</h4>
  <h4 class="no-margin"><i class="mdi mdi-cursor-pointer"></i></h4>
  `
  if (clickElement && clickTemplate != "") {
    clickElement.innerHTML = clickTemplate
  }
  let amountElement = document.getElementById("amount");
  let amountTemplate = `
  <h1 class="no-margin large-text"><i class="mdi mdi-star-four-points"></i></h1>
  <h1 class="no-margin large-text">${primogems}</h1>
  `
  if (amountElement && amountTemplate != "") {
    amountElement.innerHTML = amountTemplate
  }
  let progressElement = document.getElementById("progressBar");
  let progressTemplate = `
  <div class="bg-light progress-${progress} min-height-sm">

  </div>
  `
  if (progressElement && progressTemplate != "") {
    progressElement.innerHTML = progressTemplate
  }
  let secondElement = document.getElementById("amountPerSecond");
  let primogemsCollectionModifier = 0;
  for (let i = 0; i < automaticUpgrades.length; i++) {
    primogemsCollectionModifier += (automaticUpgrades[i].amountPerSecond * automaticUpgrades[i].quantity) * automaticUpgrades[i].perSecond
  }
  let secondTemplate = `
  <h4 class="no-margin"><i class="mdi mdi-timer-outline"></i></h4>
  <h4 class="no-margin">+${primogemsCollectionModifier}</h4>
  `
  if (secondElement && secondTemplate != "") {
    secondElement.innerHTML = secondTemplate
  }
  // SECTION Main bar bottom show section
  let clickUpgradesShow1Element = document.getElementById("clickUpgradeShow1")
  let clickUpgradesShow1Template = `
  <div class="d-flex align-items-center">
    <div class="p-2 border border-light border-3 d-flex justify-content-center align-items-center me-2">
      <h4 class="no-margin fw-bold">${clickUpgrades[0].quantity}</h4>
    </div>
    <p class="no-margin fs-5">${clickUpgrades[0].name}</p>
  </div>
  <div class="d-flex align-items-center">
    <h4 class="no-margin"><i class="mdi mdi-arrow-right-bold"></i></h4>
    <div class="p-2 border border-light border-3 d-flex justify-content-center align-items-center ms-2">
      <h4 class="no-margin fw-bold">${(clickUpgrades[0].multiplier*clickUpgrades[0].quantity)}</h4>
    </div>
  </div>
  `
  if (clickUpgradesShow1Element && clickUpgradesShow1Template != "") {
    clickUpgradesShow1Element.innerHTML = clickUpgradesShow1Template
  }
  let clickUpgradesShow2Element = document.getElementById("clickUpgradeShow2")
  let clickUpgradesShow2Template = `
  <div class="d-flex align-items-center">
    <div class="p-2 border border-light border-3 d-flex justify-content-center align-items-center me-2">
      <h4 class="no-margin fw-bold">${clickUpgrades[1].quantity}</h4>
    </div>
    <p class="no-margin fs-5">${clickUpgrades[1].name}</p>
  </div>
  <div class="d-flex align-items-center">
    <h4 class="no-margin"><i class="mdi mdi-arrow-right-bold"></i></h4>
    <div class="p-2 border border-light border-3 d-flex justify-content-center align-items-center ms-2">
      <h4 class="no-margin fw-bold">${(clickUpgrades[1].multiplier*clickUpgrades[1].quantity)}</h4>
    </div>
  </div>
  `
  if (clickUpgradesShow2Element && clickUpgradesShow2Template != "") {
    clickUpgradesShow2Element.innerHTML = clickUpgradesShow2Template
  }
  let automaticUpgradesShow1Element = document.getElementById("automaticUpdateShow1")
  let automaticUpgradesShow1Template = `
  <div class="d-flex align-items-center">
    <div class="p-2 border border-light border-3 d-flex justify-content-center align-items-center me-2">
      <h4 class="no-margin fw-bold">${automaticUpgrades[0].quantity}</h4>
    </div>
    <p class="no-margin fs-5">${automaticUpgrades[0].name}</p>
  </div>
  <div class="d-flex align-items-center">
    <h4 class="no-margin"><i class="mdi mdi-timer-outline"></i></h4>
    <div class="p-2 border border-light border-3 d-flex justify-content-center align-items-center ms-2">
      <h4 class="no-margin fw-bold">${((automaticUpgrades[0].amountPerSecond * automaticUpgrades[0].quantity) * automaticUpgrades[0].perSecond)}</h4>
    </div>
  </div>
  `
  if (automaticUpgradesShow1Element && automaticUpgradesShow1Template != "") {
    automaticUpgradesShow1Element.innerHTML = automaticUpgradesShow1Template
  }
  let automaticUpgradesShow2Element = document.getElementById("automaticUpdateShow2")
  let automaticUpgradesShow2Template = `
  <div class="d-flex align-items-center">
    <div class="p-2 border border-light border-3 d-flex justify-content-center align-items-center me-2">
      <h4 class="no-margin fw-bold">${automaticUpgrades[1].quantity}</h4>
    </div>
    <p class="no-margin fs-5">${automaticUpgrades[1].name}</p>
  </div>
  <div class="d-flex align-items-center">
    <h4 class="no-margin"><i class="mdi mdi-timer-outline"></i></h4>
    <div class="p-2 border border-light border-3 d-flex justify-content-center align-items-center ms-2">
      <h4 class="no-margin fw-bold">${((automaticUpgrades[1].amountPerSecond * automaticUpgrades[1].quantity) * automaticUpgrades[1].perSecond)}</h4>
    </div>
  </div>
  `
  if (automaticUpgradesShow2Element && automaticUpgradesShow2Template != "") {
    automaticUpgradesShow2Element.innerHTML = automaticUpgradesShow2Template
  }
}

function drawPageBottomLeft() {
  // SECTION Main bar bottom buy section
  let clickUpgradesBuy1Element = document.getElementById("clickUpgradeBuy1")
  let clickUpgradesBuy1Template = `
  <button onclick="buyClickerUpgrade(0)" class="btn btn-info me-3 text-light">${clickUpgrades[0].price} <i class="mdi mdi-star-four-points"></i></button>
  <div>
    <p>${clickUpgrades[0].name}</p>
    <p>+${clickUpgrades[0].multiplier}</p>
  </div>
  `
  if (clickUpgradesBuy1Element && clickUpgradesBuy1Template != "") {
    clickUpgradesBuy1Element.innerHTML = clickUpgradesBuy1Template
  }
  let clickUpgradesBuy2Element = document.getElementById("clickUpgradeBuy2")
  let clickUpgradesBuy2Template = `
  <button onclick="buyClickerUpgrade(1)" class="btn btn-info me-3 text-light">${clickUpgrades[1].price} <i class="mdi mdi-star-four-points"></i></button>
  <div>
    <p>${clickUpgrades[1].name}</p>
    <p>+${clickUpgrades[1].multiplier}</p>
  </div>
  `
  if (clickUpgradesBuy2Element && clickUpgradesBuy2Template != "") {
    clickUpgradesBuy2Element.innerHTML = clickUpgradesBuy2Template
  }
  let automaticUpgradesBuy1Element = document.getElementById("automaticUpdateBuy1")
  let fullTime1 = 1/automaticUpgrades[0].perSecond;
  let automaticUpgradesBuy1Template = `
  <button onclick="buyAutomaticUpgrade(0)" class="btn btn-danger me-3 text-light">${automaticUpgrades[0].price} <i class="mdi mdi-star-four-points"></i></button>
  <div>
    <p>${automaticUpgrades[0].name}</p>
    <p>+${automaticUpgrades[0].amountPerSecond} / ${fullTime1}s</p>
  </div>
  `
  if (automaticUpgradesBuy1Element && automaticUpgradesBuy1Template != "") {
    automaticUpgradesBuy1Element.innerHTML = automaticUpgradesBuy1Template
  }
  let automaticUpgradesBuy2Element = document.getElementById("automaticUpdateBuy2")
  let fullTime2 = 1/automaticUpgrades[1].perSecond;
  let automaticUpgradesBuy2Template = `
  <button onclick="buyAutomaticUpgrade(1)" class="btn btn-danger me-3 text-light">${automaticUpgrades[1].price} <i class="mdi mdi-star-four-points"></i></button>
  <div>
    <p>${automaticUpgrades[1].name}</p>
    <p>+${automaticUpgrades[1].amountPerSecond} / ${fullTime2}s</p>
  </div>
  `
  if (automaticUpgradesBuy2Element && automaticUpgradesBuy2Template != "") {
    automaticUpgradesBuy2Element.innerHTML = automaticUpgradesBuy2Template
  }
} 

function progressUp() {
  let condition = false
  for (let i = 0; i < automaticUpgrades.length; i++) {
    if (automaticUpgrades[i].quantity > 0) {
      condition = true
    }
  }
  if (condition) {
    if (progress < 100) {
      progress += 10
    } else if (progress >= 100) {
      automaticClick()
      progress = 0
    }
    drawPage()
  } else {
    progress = 0
  }
}

function buyClickerUpgrade(index) {
  if (primogems >= clickUpgrades[index].price) {
    clickUpgrades[index].quantity++
    primogems -= clickUpgrades[index].price
    clickUpgrades[index].price = Math.floor(clickUpgrades[index].price * 1.1)
    drawPage()
    drawPageBottomLeft()
    saveObjects()
  } else {
    console.log("not enough primos")
  }
}

function buyAutomaticUpgrade(index) {
  if (primogems >= automaticUpgrades[index].price) {
    automaticUpgrades[index].quantity++
    primogems -= automaticUpgrades[index].price
    automaticUpgrades[index].price = Math.floor(automaticUpgrades[index].price * 1.1)
    drawPage()
    drawPageBottomLeft()
    saveObjects()
  } else {
    console.log("not enough primos")
  }
}

function saveObjects() {
  let localItem = [primogems, clickUpgrades[0].quantity, clickUpgrades[1].quantity, automaticUpgrades[0].quantity, automaticUpgrades[1].quantity]
  window.localStorage.setItem("primogemFarm", JSON.stringify(localItem))
  console.log("saved objects")
}

function loadObjects() {
  let localItem = window.localStorage.getItem("primogemFarm")
  if (localItem) {
    let localItems = JSON.parse(localItem);
    primogems = localItems[0]
    console.log(localItems[0])
    clickUpgrades[0].quantity = localItems[1]
    console.log(localItems[1])
    clickUpgrades[1].quantity = localItems[2]
    console.log(localItems[2])
    automaticUpgrades[0].quantity = localItems[3]
    console.log(localItems[3])
    automaticUpgrades[1].quantity = localItems[4]
    console.log(localItems[4])
  }
}

function setPrimosTo(number, string) {
  if (string == "PaSsWoRd!?!") {
    primogems = number
    drawPage()
    saveObjects()
    console.log("It has been done...")
  } else {
    console.log("Incorrect Password!")
  }
}

function resetUpgrades(string) {
  if (string == "PaSsWoRd!?!") {
    for (let i = 0; i < clickUpgrades.length; i++) {
      clickUpgrades[i].quantity = 0;
    } for (let i = 0; i < automaticUpgrades.length; i++) {
      automaticUpgrades[i].quantity = 0;
    } 
    saveObjects()
    console.log("It has been done...")
  } else {
    console.log("Incorrect Password!")
  }
  drawPage()
}

// setInterval(saveObjects, 1000)
setInterval(progressUp, 100)
loadObjects()
drawPage()
drawPageBottomLeft()
