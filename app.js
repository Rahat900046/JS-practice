const firstInput = document.querySelector('#firstname');
const lastInput = document.querySelector('#lastname');
const ageInput = document.querySelector('#age');
const submit = document.querySelector('.btn');
const nameList = document.querySelector('#book-list');


submit.addEventListener('click', function(e) {
    e.preventDefault()
    if( firstInput.value == '' || lastInput.value == '' || ageInput.value == '') {
        alert('vai kichu den...!');
    }else{
        const newRow = document.createElement('tr');

        const newFirstInput = document.createElement('td');
        newFirstInput.innerHTML = firstInput.value;
        newRow.appendChild(newFirstInput);

        const newLastInput = document.createElement('td');
        newLastInput.innerHTML = lastInput.value;
        newRow.appendChild(newLastInput);

        const newAgeInput = document.createElement('td');
        newAgeInput.innerHTML = ageInput.value;
        newRow.appendChild(newAgeInput);

        const crossX = document.createElement('td');
        const button = document.createElement('button');
        button.setAttribute('id', 'btnx');
        button.innerHTML = 'Close';
        crossX.appendChild(button);
        newRow.appendChild(crossX);

        nameList.appendChild(newRow);

        crossX.addEventListener('click', function() {
            crossX.parentElement.style.display = 'none';
        })


        firstInput.value = '';
        lastInput.value = '';
        age.value = '';
    }
})