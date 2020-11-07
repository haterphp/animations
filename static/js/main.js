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

const loadRemove = ($element, callback) => {
    const timeout = 500;
    $element.animate([
        {'opacity': 1},
        {'opacity': 0}
    ], {duration: timeout, fill: 'forwards'})
    setTimeout(() => {
        $element.remove();
        if(callback)
            callback();
    }, timeout + 10)
}

const load = (callback = null) => {
    const $element = loadTemplate();
    document.querySelector('body').append($element);
    setTimeout(() => loadRemove($element, callback), 5900);
}

const pageAnimations = () => {
    const $elements = [...document.querySelectorAll('[data-anim]')]
    const duration = 200;
    const pageAnim = new Set();
    const options = {
        'scale': { duration }
    }
    $elements.forEach(item => pageAnim.add(item.getAttribute('data-anim')))
    pageAnim.forEach(anim => {
        const temp = $elements.filter(item => (item.getAttribute('data-anim') == anim))
        Object.entries(temp).forEach(([key, value]) => window[anim](value, options[anim], key))
    })
}

window.scale = ($element, option, number) => {
    $element.animate([
        { 'opacity': 0, 'transform': 'scale(0)' },
        { 'opacity': 1, 'transform': 'scale(1)' }
    ], {duration: option.duration, delay: number * 200, fill: "forwards"})
}

load(pageAnimations);