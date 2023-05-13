var technologies = [];
// const content = null || document.getElementById('content');
const angular = null || document.getElementById('angular');
const react = null || document.getElementById('react');
const javascript = null || document.getElementById('javascript');
const python = null || document.getElementById('python');
const worpress = null || document.getElementById('worpress');
const html5 = null || document.getElementById('html5');
const css = null || document.getElementById('css');
const tailwind = null || document.getElementById('tailwind');

try {

    fetch('https://iconos-c3a1b-default-rtdb.firebaseio.com/technologies.json/', {
        method: 'GET',
        headers: {
            'Acept': 'application/json'
        }
    })
        .then((response) => response.json())
        .then((text) => {            

            technologies.push(text); 
            let title_angular = technologies[0].one;
            let title_react = technologies[0].two;
            let title_javascript = technologies[0].three;
            let title_python = technologies[0].four;   
            let title_worpress = technologies[0].five;
            let title_html5 = technologies[0].six;
            let title_css = technologies[0].seven;
            let title_tailwind = technologies[0].eight;          
            
            angular.innerHTML = title_angular;
            react.innerHTML = title_react;
            javascript.innerHTML = title_javascript;
            python.innerHTML = title_python;
            worpress.innerHTML = title_worpress;
            html5.innerHTML = title_html5;
            css.innerHTML = title_css;
            tailwind.innerHTML = title_tailwind;

        })
        .catch((error) => { console.log(error) });

} catch (error) {
    console.log(error);
}