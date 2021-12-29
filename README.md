# Cut-Up-Machine

In this project the idea of human interaction in creative writing will be challenge, by applying the cut-up technique presented by Surrealist writers (Andre Breton, Tristan Tzara, Guillaume Apollinaire, etc) to a source text. And generating a new piece of literature. The cut-up method in its purest form involve random manipulation of source text(s). The aim of this project is to implement a system which given one (or more) input texts, generates a new text using cut-up.

Four cut-up algorithms were built. Cut-up by words, it divides the text into words and then shuffles the words. Cut-up by sentences, divides the text into sentences and then shuffles the sentences. Cut-up by words with paragraphs, divides the text into words and then shuffles the words but also keeps a paragraph structure. Cut-up by paragraphs, divides the text into paragraphs and then shuffles the paragraphs.
A user interface was built for users to access these algorithms.

In this project the use of JavaScript is further explored, in conjunction with functionality and design.

![](https://i.imgur.com/WZLky6E.png)



## Installation

NodeJS is needed if user wants to run the software locally

1. Download and install NodeJS from https://nodejs.org/en/
2. Once downloaded open the command prompt
3. Type the following command on the command prompt

```shell
npm install --global http-server
```

This will install http-server globally so that it may be run from the command line anywhere.

Once http server is installed find the path of the project and run the server locally by typing the following command:

![](https://i.imgur.com/D3OZM5l.png)

This will start the server Now you can visit http://localhost:8080 to view your server

## How it works

### Input section (Main Page)

![](https://i.imgur.com/KEwvK0c.png)

1. **Title**
2. **Introductory paragraph -** It presents a short description of the cut-up method as well as the objective of the project
3. **Samples -** It gives the user the option to try a poem or a short story as a sample
4. **Drag box -** Allows the user to drag a text file as input
5. **Text box -** Allows the user to input text on this box
6. **cut-up options -** cut-up technique gets applied to the source text by selecting one of the options
7. **Clear -** It clears the output section as well as the input

### Output Section (Main Page)

![](https://i.imgur.com/ly9TuMr.png)

1. **Title (Cut up option selected)**
2. **Output text -** It outputs the original text once the algorithm has been applied
