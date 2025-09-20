let buttonStick = document.getElementById('sticker');
    let soo = 0;
    let messages = {}; // Здесь будем хранить сообщения из JSON
    let messageKeys = []; // Ключи объекта messages (для итерации)

    // Загружаем JSON файл
    async function loadMessages() {
        try {
            const response = await fetch('arr.json');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            messages = await response.json();
            messageKeys = Object.keys(messages); // Получаем ключи только один раз
            console.log('Сообщения загружены:', messages);
        } catch (error) {
            console.error('Ошибка загрузки JSON:', error);
        }
    }


    buttonStick.addEventListener('click', function() {
        let messageDiv = document.querySelector('.message0');

        if (messageDiv) {
            while (messageDiv.firstChild) {
                messageDiv.removeChild(messageDiv.firstChild);
            }

            let newContentDiv = document.createElement('div');
            newContentDiv.className = 'message';

            newContentDiv.innerHTML = `<div class="soo she numbersoo1">
                <img src="img/coffe.png" alt="">
            </div>`;

            setTimeout(function(){
                messageDiv.appendChild(newContentDiv);

                getMySoo(); // Вызываем getMySoo после добавления newContentDiv
            }, 400);

            function getMySoo(){
                setTimeout(function(){
                    // Выбираем сообщение для отображения
                    let messageText = "";
                    if (soo < messageKeys.length) { // Убедитесь, что индекс в пределах массива
                        const key = messageKeys[soo];
                        messageText = messages[key];  // Берем нужное сообщение
                    } else {
                        messageText = "Сообщения закончились!";
                    }

                    console.log("soo:", soo, "Сообщение:", messageText);

                    // создаем div для сообщения
                    let messageElement = document.createElement('div');
                    messageElement.className = 'message';
                    messageElement.innerHTML = `<div class="soo me numbersoo1">${messageText}</div>`;
                    messageDiv.appendChild(messageElement); // Добавляем сообщение в .message0

                    soo = soo + 1; // Увеличиваем счетчик soo

                }, 500);
            }
        }
    });

    // Загружаем сообщения при загрузке страницы
    loadMessages();