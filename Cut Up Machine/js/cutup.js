function processWords(data) {

    let output="";
    // Split text into words
    var words = splitTokens(data, " .,:;!@#$%&*()\n");

    //-----------Shuffle---------

    // shuffle words array 
    words = shuffle(words);
    
    output += "<h2>Cut-up by words</h2>";
    // convert words array into strings
    for (let i = 0; i < words.length; i++) {
       output += words[i] + " ";
    }

    
    let txt = createP(output);
    txt.class('text');
    paragraphs.push(txt);

}


function processWordsLines(data) {

    // Split text into words
    var words = splitTokens(data, " .,:;!@#$%&*()\n");

    // Split text into lines (Poetry)/paragraphs (Text)
    var line = splitTokens(data, "\n");

    //-----------Shuffle---------

    // shuffle words array 
    words = shuffle(words);

    // shuffle line array 
    line = shuffle(line)


    //-----------Convert arrays int strings 
    let output="";
    
    var newLine = "";

    var newLineArr = [];

    //set counter at 0 for iterating through words / this will start at 0 but inside the loop this will be incrementing as the for loop iterates through the loop 
    var startCounter = 0;


    // Convert words array into strings using same layout as lines/Paragraphs
    for (let i = 0; i < line.length; i++) {
        // using the ramdomised lines from text, WordsOnLine creates a array with the words of this ramdomized lines
        wordsOnLine = splitTokens(line[i], " .,:;!@#$%&*()\n");     // On line x (example line 1) creates an array with the words on that line
        
        //Using the number of words on line (length ) we create a new array containing the number of words
        newLine = "";
        endCounter = startCounter + (wordsOnLine.length );
        for(let x = startCounter; x < endCounter; x++){
            newLine += words[x] + " ";
            //add words to a string with space in between words 
            //add string to an array 
        }
        newLineArr.push(newLine);
        startCounter = endCounter;
        
        
        
    }

    output += "<h2>Cut-up by words with paragraphs</h2>";
    // adds each line with a space in between to the output
    for (let y = 0; y < newLineArr.length; y++) {
        output += newLineArr[y] + "<br/>";
    }

    
    let txt = createP(output);
            txt.class('text');
            paragraphs.push(txt);


}  

function processLines(data) {
    
    let output="";
    // Split text into lines (Poetry)/paragraphs (Text)
    var line = splitTokens(data, "\n");


    //-----------Shuffle---------

    // shuffle line array 
    line = shuffle(line)
    

    output += "<h2>Cut-up by paragraphs</h2>";
    // convert words array into strings
    for (let i = 0; i < line.length; i++) {
        output += line[i] + "<br/>";
    }

    
    let txt = createP(output);
    txt.class('text');
    paragraphs.push(txt);

}

function processSentence(data) {
    
    let output="";
    // Split text into sentences 
    var sentence = splitTokens(data, "\b((?!=|\,|\.).)+(.)\b");


    //-----------Shuffle---------

    // shuffle sentence array 
    sentence = shuffle(sentence)
    

    output += "<h2>Cut-up by sentences</h2>";
    // convert words array into strings
    for (let i = 0; i < sentence.length; i++) {
        output += sentence[i] + "<br/>";
    }

    
    let txt = createP(output);
    txt.class('text');
    paragraphs.push(txt);

}