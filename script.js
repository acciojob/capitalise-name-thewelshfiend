//your JS code here. If required.

const nameBox = document.getElementById(`fname`);

nameBox.addEventListener(`change`, () => {
    const text = nameBox.value;
    nameBox.value = text.toUpperCase();

    return;
});