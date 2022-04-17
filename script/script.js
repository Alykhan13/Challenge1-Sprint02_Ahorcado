const btnCode = document.querySelector("#btn__code");
const btnDecode = document.querySelector("#btn__decode");
const btnCopy = document.querySelector("#btn__copy");
const btnClear = document.querySelector("#btn__clear");
const textArea = document.querySelector("textarea");
const outputText = document.querySelector(".output__msg");
const contactEmail = document.querySelector("#contact__email");
const contactWhatsapp = document.querySelector("#contact__whatsapp");
const standByDiv = document.querySelector(".standBy__container");
const btnsOutput = document.querySelector(".btns__output");

function checkStandBy() {
    if(outputText.textContent.length > 0){
        standByDiv.classList.add("hidden");
        btnsOutput.classList.remove("hidden");
    }
    else {
        standByDiv.classList.remove("hidden");
        btnsOutput.classList.add("hidden");
    }
}

btnCode.addEventListener("click",()=>{
    codeText();
    checkStandBy();
});

btnDecode.addEventListener("click",()=>{
    decodeText();
    checkStandBy();
});

btnCopy.addEventListener("click",()=>{
    let copyText = outputText.textContent;
    navigator.clipboard.writeText(copyText);
});

btnClear.addEventListener("click",()=>{
    outputText.textContent = "";
    checkStandBy();
});

checkStandBy();