const loadTemplate = () => {
    const element = document.createElement('div');
    element.className = 'load_backdrop';
    element.innerHTML = `
        <div class="load">
            <div class="load__item blue"></div>
            <div class="load__item purple"></div>
            <div class="load__item yellow"></div>
        </div>
    `;
    return element;
}

// Удаление load

const loadRemove = ($element, callback) => {}

const load = (callback = null) => {
    const $element = loadTemplate();
    // document.querySelector('body').append($element);
    setTimeout(loadRemove.bind(null, $element, callback), 5900);
}

// Анимации

load(pageAnimations);