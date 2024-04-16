// "Заказ продукта"
function validationNotification(event) {
    const firstName = document.getElementById("first_name");
    const lastName = document.getElementById("last_name");
    const telNumber = document.getElementById("telephone1");
    const destination = document.getElementById("destination");
    const date = document.getElementById("date");
    const time = document.getElementById("time");
    const quantity = document.getElementById("quantity");

    if (
        firstName.value === "" ||
        lastName.value === "" ||
        telNumber.value === "" ||
        destination.value === "" ||
        date.value === "" ||
        time.value === "" ||
        quantity.value === ""
    ) {
        alert("Заполнены не все поля");
        event.returnValue = false;
        return;
    } else if (
        firstName.style.color === "red" ||
        lastName.style.color === "red" ||
        telNumber.style.color === "red" ||
        destination.style.color === "red" ||
        date.style.color === "red" ||
        time.style.color === "red" ||
        quantity.style.color === "red"
    ) {
        alert("Некорректно заполнены поля");
        event.returnValue = false;
        return;
    }

    const notification = `Ваш заказ\nИмя: ${firstName.value}\nФамилия: ${lastName.value}\nНомер телефона: ${telNumber.value}\n` +
        `Место назначения: ${destination.value}\nДата и время: ${date.value}  ${time.value}\nКоличество: ${quantity.value}`;

    if (!confirm(notification)) {
        event.returnValue = false;
    }
}

// Валидация поля "Имя"
function validateFirstName() {
    const firstName = document.getElementById("first_name");
    const regex = /^[А-Яа-яЁёA-Za-z]{2,15}$/;

    if (regex.test(firstName.value)) {
        firstName.style.color = "black";
        return true;
    } else {
        firstName.style.color = "red";
        return false;
    }
}

// Валидация поля "Фамилия"
function validateLastName() {
    const lastName = document.getElementById("last_name");
    const regex = /^[А-Яа-яЁёA-Za-z]{2,20}$/;

    if (regex.test(lastName.value)) {
        lastName.style.color = "black";
        return true;
    } else {
        lastName.style.color = "red";
        return false;
    }
}

// Валидация поля "Номер телефона"
function validateTelephone() {
    const telNumber = document.getElementById("telephone1");
    const regex = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;

    if (regex.test(telNumber.value)) {
        telNumber.style.color = "black";
        return true;
    } else {
        telNumber.style.color = "red";
        return false;
    }
}

// Валидация поля "Адрес доставки"
function validateDestination() {
    const destination = document.getElementById("destination");
    const regex = /^[0-9А-Яа-яA-Za-z/,.\s\-]{5,50}$/;

    if (regex.test(destination.value)) {
        destination.style.color = "black";
        return true;
    } else {
        destination.style.color = "red";
        return false;
    }
}

// Валидация поля "Количество"
function validateQuantity() {
    const quantity = document.getElementById("quantity");
    const regex = /^[0-9]{1,3}$/;

    if (regex.test(quantity.value)) {
        quantity.style.color = "black";
        return true;
    } else {
        quantity.style.color = "red";
        return false;
    }
}

// "Заказ обратного звонка"
function notification(event) {
    const fullName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const telNumber = document.getElementById("telephone2").value;
    const theme = document.getElementById("theme").value;
    const isEnoughData = fullName !== "" && email !== "" && telNumber !== "" && theme !== "";

    if (isEnoughData) {
        const notification = `Ваш заказ]\nИмя: ${fullName}\nE-mail: ${email}\nНомер телефона: ${telNumber}\n` +
            `Интересующая тема: ${theme}`;

        if (!confirm(notification)) {
            event.returnValue = false;
        }
    }
}

const element1 = document.querySelector(".offer__title");
const element2 = document.querySelector(".main__title");

    // Изменение цвета текста offer__title
    element1.addEventListener("mouseover", function() {
        element1.style.color = "red";
    });

    element1.addEventListener("mouseout", function() {
        element1.style.color = "";
    });

    // Изменение фона у main__title
    element2.addEventListener("click", function() {
        element2.style.backgroundColor = "green";
    });
