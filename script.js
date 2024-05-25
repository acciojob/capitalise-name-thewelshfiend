//your JS code here. If required.

const nameBox = document.getElementById(`fname`);

nameBox.addEventListener(`input`, () => {
    const text = nameBox.value;
    nameBox.value = text.toUpperCase();

    return;
});