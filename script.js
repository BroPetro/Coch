let cristal = 0;
const button = document.getElementById('darkModeButton');


button.addEventListener('click', function() {

    if (document.body.style.backgroundColor === 'black') {

        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        div1.style.backgroundColor = 'lightblue';
    } else {

        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        div1.style.backgroundColor = 'darkblue';

    }
});
