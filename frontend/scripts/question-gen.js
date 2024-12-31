
class Questions {
    constructor(amountQuestions) {
        /**
         * Initializes the number of questions.
         *
         * @param {amountQuestions} number - The first number to multiply.
         */

        this.amountQuestions = parseInt(amountQuestions.value, 10);
        this.generateQuestion(this.amountQuestions);
    }

    generateQuestion(amountQuestions) {
        /**
         * Dynamically creates question boxes.
         *
         * @param {amountQuestions} number - The first number to multiply.
         */
        for (let i = 1; i <= amountQuestions; i++) {

            let text = 'hello'
            this.createDiv(i)
            this.createHeader(i, text)
            this.createParagraph(i, text)
        }
    }

    createDiv(index){
        let divID = 'qbox';
        divID = divID + index
        console.log(divID)

        this.newDiv = document.createElement("div");
        this.newDiv.classList.add("question-box");
        document.body.appendChild(this.newDiv);
        this.newDiv.id = divID
    }

    createHeader(index, text){
        let divID = 'qbox';
        divID = divID + index
        console.log(divID)


        const newHeader = document.createElement("h3");
        const container = document.querySelector(`#${divID}`);
        container.appendChild(newHeader);
        newHeader.textContent = text
    }

    createParagraph(index, text){
        let divID = 'qbox';
        divID = divID + index

        const newParagraph = document.createElement("p");
        const container = document.querySelector(`#${divID}`);
        container.appendChild(newParagraph);
        newParagraph.textContent = text
    }


}

        
const amountQuestions = document.getElementById("amount-of-questions");
const gameStart = document.getElementById("game-settingsBTN").onclick = function (){
    const questionsInstance = new Questions(amountQuestions);

}
  