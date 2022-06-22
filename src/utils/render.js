import AbstractView from "../view/abstract-view";

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
export const render = (container, child, place) => {
    if (container instanceof AbstractView) {
        container = container.element;
    }

    if (child instanceof AbstractView) {
        child = child.element;
    }

    switch(place) {
        case RenderPosition.BEFOREBEGIN:
            container.before(child);
            break;
        case RenderPosition.AFTERBEGIN:
            container.prepend(child);
            break;
        case RenderPosition.BEFOREEND:
            container.append(child);
            break;
        case RenderPosition.AFTEREND:
            container.after(child);
            break;
    }
};

export const replace = (newChild, oldChild) => {
    if (oldChild instanceof AbstractView) {
        oldChild = oldChild.element;
    }

    if (newChild instanceof AbstractView) {
        newChild = newChild.element;
    }

    const parent = oldChild.parentElement;

    if (parent === null || oldChild === null || newChild === null) {
        throw new Error('Can\'t replace unexisting elements');
    }

    parent.replaceChild(newChild, oldChild);
}

// [?] Зачем нужна ф-ия createElement ?
// [A]  - Для создания DOM элементов из строк.
// [A]  - Нам нужно получить DOM элемент и никуда его не добавлять
// [A]  - Change 'firstChild' to div.childNodes to support multiple top-level nodes.
export const createElement = (template) => {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;

    return newElement.firstChild;
};
