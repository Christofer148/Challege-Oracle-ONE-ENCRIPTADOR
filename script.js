let textOutput = document.getElementById('messageEncrypted');
textOutput.style.display = 'none';

function eraseText(){
    let message = document.getElementById('message-to-encrypt');
    if(message.value == "Ingrese el texto aquí."){
        message.value = "";
    }
}

function encryptText(){
    let imagenOutput = document.getElementById('dibujoDisappear');
    let text1Output = document.getElementById('message1Disappear');
    let text2Output = document.getElementById('message2Disappear');
    let message = document.getElementById('message-to-encrypt');
    let textOutput = document.getElementById('messageEncrypted');
    let copyButton = document.getElementById('btnCopy');
    let messageToEncrypt = message.value;
    
    if(messageToEncrypt == ""){
        textOutput.style.display = 'none';
        copyButton.style.display = 'none';
        text1Output.style.display = 'block';
        text2Output.style.display = 'block';
        
        if(screen.width <= 768){
            imagenOutput.style.display = 'none';
        }else{
            imagenOutput.style.display = 'block';
        }  
    }else{
        message.value = "";
        // filtro para la letra e
        let messageEfilter = messageToEncrypt.replaceAll(/[e]/g, "enter");
        // filtro para la letra i
        let messageIfilter = messageEfilter.replaceAll(/[i]/g, "imes");
        // filtro para la letra a
        let messageAfilter = messageIfilter.replaceAll(/[a]/g, "ai");
        // filtro para la letra o
        let messageOfilter = messageAfilter.replaceAll(/[o]/g, "ober");
        // filtro para la letra u
        let messageOutput = messageOfilter.replaceAll(/[u]/g, "ufat");
        //message.value = messageOutput;
        imagenOutput.style.display = 'none';
        text1Output.style.display = 'none';
        text2Output.style.display = 'none';
        textOutput.style.display = 'block';
        copyButton.style.display = 'inline-block';
        
        textOutput.textContent = messageOutput;
    }
    
}

function unencryptText(){
    let imagenOutput = document.getElementById('dibujoDisappear');
    let text1Output = document.getElementById('message1Disappear');
    let text2Output = document.getElementById('message2Disappear');
    let message = document.getElementById('message-to-encrypt');
    let textOutput = document.getElementById('messageEncrypted');
    let copyButton = document.getElementById('btnCopy');
    let messageToEncrypt = message.value;

    if(messageToEncrypt == ""){
        textOutput.style.display = 'none';
        copyButton.style.display = 'none';
        text1Output.style.display = 'block';
        text2Output.style.display = 'block';
        
        if(screen.width <= 768){
            imagenOutput.style.display = 'none';
        }else{
            imagenOutput.style.display = 'block';
        }
    }else{
        message.value = "";
        // filtro para la letra ufat
        let messageUfatFilter = messageToEncrypt.replaceAll("ufat", "u");
        // filtro para la letra ober
        let messageOberFilter = messageUfatFilter.replaceAll("ober", "o");
        // filtro para la letra ai
        let messageAiFilter = messageOberFilter.replaceAll("ai", "a");
        // filtro para la letra imes
        let messageImesFilter = messageAiFilter.replaceAll("imes", "i");
        // filtro para la letra enter
        let messageOutput = messageImesFilter.replaceAll("enter", "e");
        //message.value = messageOutput;
        imagenOutput.style.display = 'none';
        text1Output.style.display = 'none';
        text2Output.style.display = 'none';
        textOutput.style.display = 'block';
        copyButton.style.display = 'inline-block';
        
        textOutput.textContent = messageOutput;
    }

    
}

function copyContent(){
    let textOutput = document.getElementById('messageEncrypted');
    let btnCopy = document.getElementById('btnCopy');
    
    updateClipboard(textOutput.textContent, btnCopy);
    
    setTimeout(() => {
        let btnCopy = document.getElementById('btnCopy');
        btnCopy.innerHTML = 'Copiar';
    }, 5000);
}

function updateClipboard(newClip, btnCopy) {
    navigator.clipboard.writeText(newClip).then(() => {
        /* clipboard successfully set */
        btnCopy.innerHTML = 'Copiado!';
    }, () => {
        /* clipboard write failed */
        console.log('failed');
    });
}