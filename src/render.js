export const RenderPosition = {
    BEFOREBEGIN: 'beforebegin',
    AFTERBEGIN: 'afterbegin',
    BEFOREEND: 'beforeend',
    AFTEREND: 'afterend'
};

export const renderTemplate = (container, template, place) => {
    container.insertAdjacentHTML(place, template);
};

// [?] Зачем использовать switch ?
// [?] Зачем нужна ф-ия renderElement ?
export const renderElement = (container, element, place) => {
    switch(place) {
        case RenderPosition.BEFOREBEGIN:
            container.before(element);
            break;
        case RenderPosition.AFTERBEGIN:
            container.prepend(element);
            break;
        case RenderPosition.BEFOREEND:
            container.append(element);
            break;
        case RenderPosition.AFTEREND:
            container.after(element);
            break;
    }
};

// [?] Зачем нужна ф-ия createElement ?
// [A]  - Для создания DOM элементов из строк.
// [A]  - Нам нужно получить DOM элемент и никуда его не добавлять
// [A]  - Change 'firstChild' to div.childNodes to support multiple top-level nodes.
export const createElement = (template) => {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;

    return newElement.firstChild;
};
