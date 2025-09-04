//==============================================================//
//function to GET INNERTEXT//
function getInnerText(id) {
    const element = document.getElementById(id);
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue);
    return elementValueNumber;
}


//function to SET InnerText//

function setInnerText(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
    element.style.fontWeight="bold";
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
        this.style.color="red";
    })

}

//===================================================================//

// Call button feature - SIMPLE WAY //
const callButtons = document.getElementsByClassName("call-btn");

for (let i = 0; i < callButtons.length; i++) {
    callButtons[i].onclick = function() {
    
        const card = this.closest('.bg-white');
        
    
        const serviceName = card.querySelector('h1').innerText;
        
        const phoneNumber = card.querySelector('.text-4xl').innerText;
        
        
        const currentCoins = getInnerText("coin-count");
        
        if (currentCoins < 20) {
            alert("Insufficient Coin");
            return;
        }
        
    
        alert("Calling " + serviceName + " at " + phoneNumber);
        
    
        const newCoinCount = currentCoins - 20;
        setInnerText("coin-count", newCoinCount);
    };
}

 // copy button//
const copyButtons = document.getElementsByClassName("copy-btn");

for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", function() {
       
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