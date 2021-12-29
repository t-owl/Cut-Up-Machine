

let paragraphs = [];

let inputText = "";

function setup() {
	noCanvas();

	input = select('#textinput');
	//Choose a file calls the file selected function
 	//chooseFile = createFileInput(fileSelected);

	//call button from html, when pressed loadSample function is called
 	var sampleButton = select("#loadsamplepoem");
	sampleButton.mousePressed(loadsamplepoem);
	
	//call button from html, when pressed loadSample function is called
	var sampleButton = select("#loadsamplestory");
	sampleButton.mousePressed(loadsamplestory);
	 
	//Call handel input when submit button pressed
	cWordsButton = select('#cutUpByWords');
	cWordsButton.mousePressed(handleInputWords);

	//Call handel input when submit button pressed
	cWordsLButton = select('#cutUpByWordsLines');
	cWordsLButton.mousePressed(handleInputWordsLines);

	//Call handel input when submit button pressed
	cLinesLButton = select('#cutUpByLines');
	cLinesLButton.mousePressed(handleInputLines);

	//Call handel input when submit button pressed
	cLinesLButton = select('#cutUpBySentence');
	cLinesLButton.mousePressed(handleInputSentence);


	// Selected the div which will be the "drop zone"
	// for dragging and dropping files
	dropZone = select("#drop_zone");
	// Here are the events to handle
	dropZone.dragOver(highlight);
	dropZone.dragLeave(unHighlight);

	dropZone.drop(gotFile, unHighlight);

	//call button fromhtml, when pressed clear text function is called 
	clearButton = select('#clear');
	clearButton.mousePressed(clearText);

}

//Load Sample text
function loadsamplepoem(){
	loadStrings("samples/poem.txt", sampleLoaded);
}

//Load Sample text
function loadsamplestory(){
	loadStrings("samples/story.txt", sampleLoaded);
}

// Creates a paragraph once sample has been loaded
function sampleLoaded(data){
	//append to input data box

	let txt = data.join('\n');
	input.html(txt);
}



function gotFile(file) {
	if (file.type === 'text') {
	  // process(file.data);
	  let inputText = '';
	  inputText += file.data + '\n\n';
	  input.html(inputText);
	} else {
	  // In case it's some weird other kind of file
	  alert('this is not a text file.');
	}
}
// Handle the text input field (#cutup.js)
function handleInputWords() {
	processWords(input.value());
}  

// Handle the text input field (#cutup.js)
function handleInputWordsLines() {
	processWordsLines(input.value());
}

// Handle the text input field (#cutup.js)
function handleInputLines() {
	processLines(input.value());
}

// Handle the text input field (#cutup.js)
function handleInputSentence() {
	processSentence(input.value());
}

// Handle dropzone events
function highlight() {
  dropZone.style("background", "#AAA");
}
function unHighlight() {
  dropZone.style("background","");
}


// Clear all the divs with remove()
function clearText() {
	input.html('');
	for (let i = 0; i < paragraphs.length; i++) {
	paragraphs[i].remove();
	}
	paragraphs = [];
}
