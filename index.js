import { faq } from "./data.js";

// select and style the body
const body = document.querySelector("body");
body.style.backgroundColor = "grey";

// create a container
const container = document.createElement("div");
container.id = "container";
container.innerHTML = "This is a Prototipe Collapse Component </br> style it as you want creating a better user experience";
body.appendChild(container);

// create a collapse container
const collapse = document.createElement("div");
collapse.id = "collapse";
container.appendChild(collapse)

faq.map((item, index) => {

    item.state = false
    //create the container
    const faqContainer = document.createElement("div");
    faqContainer.className = "faq-container";
    //create the question
    const question = document.createElement("p");
    question.id = `question-${index}`;
    question.className = "question"
    question.innerHTML = item.q;

    question.onclick = () => {

        //get all the questions and change the class name, except the target one
        let questions = document.querySelectorAll(".question");
        [...questions].map((ans, i) => {
            if (i != index)
                ans.className = "question"
        })
        // toggle the class 
        question.classList.toggle('selected');

        //now, same with answers

        //get all the answer and change the class name, except the target one
        let answers = document.querySelectorAll(".collapsed");
        [...answers].map((ans, i) => {
            if (i != index)
                ans.className = "collapsed"
        })
        // toggle the class 
        answer.classList.toggle('active');
    }

    question.onmousemove = (e) => e.target.style.cursor = "help";
    // crate the answer
    const answer = document.createElement("p");
    answer.id = `answer-${index}`;
    // set by default the class in collapsed
    answer.className = "collapsed";
    answer.innerHTML = item.a;

    faqContainer.appendChild(question);
    faqContainer.appendChild(answer);
    collapse.appendChild(faqContainer);
})






