let names = [
    { firstName: "Marley" },
    { firstName: "Jevon" },
    { firstName: "Andy" },
    { firstName: "Olivia" },
    { firstName: "Eileen" },
    { firstName: "Thomas" }
];


function createSections(names) {
    const studentsContainer = document.getElementById('students');

    names.forEach((name)=> {
        const studentSection = document.createElement('section');
        studentSection.setAttribute('class', 'student-box');

        const h1 = document.createElement('h1');
        h1.setAttribute('class', 'name');
        h1.innerText = name.firstName;

        studentSection.appendChild(h1);

        for (let i = 1; i <= 3; i++) {
            const behaviorDiv = document.createElement('div');
            behaviorDiv.setAttribute('class', 'behavior');

            const minusButton = document.createElement('button');
            minusButton.setAttribute('class', 'minus');
            minusButton.innerText = '-';

            const numberBehaviorDiv = document.createElement('div');
            numberBehaviorDiv.setAttribute('class', 'number-behavior');

            const count = document.createElement('h3');
            count.setAttribute('class', 'count');
            count.innerText = '0';

            const behaviorLabel = document.createElement('h2');
            behaviorLabel.innerText = 'Behavior';

            const plusButton = document.createElement('button');
            plusButton.setAttribute('class', 'plus');
            plusButton.innerText = '+';

            const clearButton = document.createElement('button');
            clearButton.setAttribute('class', 'clear');
            clearButton.innerText = 'Clear';

            numberBehaviorDiv.appendChild(count);
            numberBehaviorDiv.appendChild(behaviorLabel);

            behaviorDiv.appendChild(minusButton);
            behaviorDiv.appendChild(numberBehaviorDiv);
            behaviorDiv.appendChild(plusButton);
            behaviorDiv.appendChild(clearButton);

            studentSection.appendChild(behaviorDiv);
        }
        studentsContainer.appendChild(studentSection);
    });
}

function addStudents() {
    const nameElements = document.querySelectorAll('.name');
    nameElements.forEach((h1, index)=> {
        if (names[index]) {
            h1.innerText = `${names[index].firstName}`;
        }
    });
}

function clearCount() {

}

document.addEventListener('DOMContentLoaded', () => {
    createSections(names);

    

    document.querySelectorAll('.plus').forEach(button => {
        button.addEventListener('click', () => {
            let countElement = button.parentElement.querySelector('.count');
            countElement.textContent = parseInt(countElement.textContent) + 1;
        });
    });

    document.querySelectorAll('.minus').forEach(button => {
        button.addEventListener('click', () => {
            let countElement = button.parentElement.querySelector('.count');
            let currentValue = parseInt(countElement.textContent);
            if (currentValue > 0) {
                countElement.textContent = currentValue - 1;
            }
        });
    });

   document.querySelectorAll('.clear').forEach(button => {
        button.addEventListener('click', () => {
            let countElement = button.parentElement.querySelector('.count');
            let currentValue = parseInt(countElement.textContent);
            if (currentValue > 0) {
                countElement.textContent = 0;
            }
        })
   })

})