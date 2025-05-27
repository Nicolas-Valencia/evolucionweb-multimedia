document.addEventListener('DOMContentLoaded', function() {
    const button_timeline = document.querySelector('#button-timeline');
    const button_design = document.querySelector('#button-design');
    const button_HTMLCSS = document.querySelector('#button-HTMLCSS');
    const button_javascript = document.querySelector('#button-javascript');
    const button_responsive = document.querySelector('#button-responsive');
    const button_metodologias = document.querySelector('#button-metodologias');
    const button_tendencias = document.querySelector('#button-tendencias');
    const button_futuro = document.querySelector('#button-futuro');

    if (button_timeline) {
        button_timeline.addEventListener('click', function() {
            window.location.href = 'timeline.html';
        });
    }

    if (button_design) {
        button_design.addEventListener('click', function() {
            window.location.href = 'design.html';
        });
    }

    if (button_HTMLCSS) {
        button_HTMLCSS.addEventListener('click', function() {
            window.location.href = 'timelines/HTMLCSS.html';
        });
    }

    if (button_javascript) {
        button_javascript.addEventListener('click', function() {
            window.location.href = 'timelines/Javascript.html';
        });
    }

    if (button_responsive) {
        button_responsive.addEventListener('click', function() {
            window.location.href = 'timelines/responsive.html';
        });
    }

    if (button_metodologias) {
        button_metodologias.addEventListener('click', function() {
            window.location.href = 'timelines/metodologias.html';
        });
    }

    if (button_tendencias) {
        button_tendencias.addEventListener('click', function() {
            window.location.href = 'timelines/tendencias.html';
        });
    }

    if (button_futuro) {
        button_futuro.addEventListener('click', function() {
            window.location.href = 'timelines/futuro.html';
        });
    }
   
    
});