const createElement = (tag = "", id = "", content = "", classes = "") => {
    const elem = document.createElement(tag);
    elem.setAttribute('id', id);
    elem.setAttribute('class', classes);
    elem.textContent = content;
    return elem;
};

export default createElement