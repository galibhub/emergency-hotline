//==============================================================//
//function to GET INNERTEXT//
function getInnerText(id) {
    const element = document.getElementById(id);
    const span = element.querySelector("span");
    const elementValue = span.innerText;
    const elementValueNumber = parseInt(elementValue);
    return elementValueNumber;
}


//function to SET InnerText//

function setInnerText(id, value) {
    const element = document.getElementById(id);
    const span = element.querySelector("span");
    span.innerText = value;
    span.style.fontWeight = "bold";
}


// Heart-icon feature//

const heartIcons = document.getElementsByClassName("heart-icon");

for (const heartIcon of heartIcons) {
    heartIcon.addEventListener("click", function () {
        const currentHeartCount = getInnerText("heart-count");
        const newHeartCount = currentHeartCount + 1;
        setInnerText("heart-count", newHeartCount);

        //change the icon color to red when clicked//

        const heartElement = this.querySelector('i');
        this.style.color = "red";
    })

}

//===================================================================//

// Call button feature - SIMPLE WAY //
const callButtons = document.getElementsByClassName("call-btn");

for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].onclick = function () {

        const card = this.closest('.bg-white');


        const serviceName = card.querySelector('h1').innerText;

        const phoneNumber = card.querySelector('.text-4xl').innerText;


        const currentCoins = getInnerText("coin-count");

        if (currentCoins < 20) {
            alert("Insufficient Coin");
            return;
        }


        alert("Calling " + serviceName + " at " + phoneNumber);

        // Add to call history
        addToCallHistory(serviceName, phoneNumber);


        const newCoinCount = currentCoins - 20;
        setInnerText("coin-count", newCoinCount);
    };
}


//===================================================================//
// copy button//

const copyButtons = document.getElementsByClassName("copy-btn");

for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", function () {

        const navCopyButton = document.getElementById("copy-2");
        const copySpan = navCopyButton.querySelector("span");

        const currentCount = parseInt(copySpan.innerText);

        const newCount = currentCount + 1;

        copySpan.innerText = newCount;
        copySpan.style.fontWeight = "bold";

        const card = this.closest('.bg-white');
        const phoneNumber = card.querySelector('.text-4xl').innerText;

    });
}

//===================================================================//

// Call History Functions - SIMPLE WAY //

// Function to add call to history
function addToCallHistory(serviceName, phoneNumber) {
    const historyContainer = document.getElementById("call-history-container");

    // Get current time
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    // Create new call history item
    const historyItem = document.createElement("div");
    historyItem.className = "bg-white rounded-lg shadow-sm p-3 border border-gray-100 flex justify-between items-center mb-2";

    historyItem.innerHTML = `
        <div>
            <h2 class="text-black font-semibold text-sm">${serviceName}</h2>
            <span class="text-gray-600 text-sm">${phoneNumber}</span>
        </div>
        <span class="text-gray-500 text-xs">${timeString}</span>
    `;

    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
}

// Function to clear ONE call history item
function clearOneCallHistory() {
    const historyContainer = document.getElementById("call-history-container");
    const historyItems = historyContainer.children;

    if (historyItems.length > 0) {
        historyItems[0].remove();
    }
}

// Clear History Button Event
const clearHistoryBtn = document.getElementById("clear-history-btn");
clearHistoryBtn.addEventListener("click", function () {
    clearOneCallHistory();
});

//===================================================================//