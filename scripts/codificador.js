

	var displayInText = document.querySelector('#input-entrada');
	var displayOutText = document.querySelector('#input-saida');
	var matrizCode = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
	var matrizDecode = [['enter', 'e'], ['imes', 'i'], ['ai', 'a'], ['ober', 'o'], ['ufat', 'u']];
	

	function code(textCode){

		textCode = textCode.toLowerCase();
		for (let i = 0; i < matrizCode.length; i++){

			if(textCode.includes(matrizCode[i][0])) {

				textCode = textCode.replaceAll(matrizCode[i][0], matrizCode[i][1]);
			}
		}
		return textCode;
	}
			

	function decode(textDecode){

		textDecode = textDecode.toLowerCase();
		for (let i = 0; i < matrizDecode.length; i++){

			if(textDecode.includes(matrizDecode[i][0])) {

				textDecode = textDecode.replaceAll(matrizDecode[i][0], matrizDecode[i][1]);
			}
		}
		return textDecode;
 
	}

	function clearDisplayIn() {

		displayInText.value = (' ');
		displayInText.focus();
	}

	function clearDisplayOut(){
		displayOutText.value = (' ');
		displayInText.focus();
	}

	function clearBackGroud () {

	return displayOutText.style.backgroundImage="none";

	}

	function setBackGroud() {
		
		return displayOutText.style.backgroundImage="url('img/imagem_display.png')";
	
	}

	function btnCode() {

		let textCode = code(displayInText.value);
		displayOutText.value = textCode;

		clearDisplayIn();
		clearBackGroud();

	}

	function btnDecode() {

		let textCode = decode(displayInText.value);
		displayOutText.value = textCode;

		clearDisplayIn();
		clearBackGroud();
		

	}

	function btnCopy() {
		
		let msg = document.querySelector('#input-saida');
		msg.select();
		document.execCommand('copy');

		clearDisplayOut();
		setBackGroud();

	}


buttonCode = document.getElementById('btn-codificar');
buttonCode.onclick = btnCode;
buttonDecode = document.getElementById('btn-decodificar');
buttonDecode.onclick = btnDecode;
buttonCopy = document.getElementById('btn-copiar');
buttonCopy.onclick = btnCopy;