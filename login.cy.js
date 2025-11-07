describe('Проверка авторизации', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru') // Ввели логин
        cy.get('#pass').type('qa_one_love1') // Ввели пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверка текста
        cy.get('#messageHeader').should('be.visible'); // Текст видно
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик и его видно
    })
it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').click(); // Нажал на кнопку забыли пароль
        cy.get('#mailForgot').type('123@gmail.com') // Ввели логин
        cy.get('#restoreEmailButton').click(); // Нажал отправить код
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик и его видно
    })
it('Неправильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('german@dolnikov.ru') // Ввели логин
        cy.get('#pass').type('qa_one_love2') // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик и его видно
    })
it('Неправильный логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('123@gmail.com') // Ввели неверный логин
        cy.get('#pass').type('qa_one_love1') // Ввели пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик и его видно
    })
it('Логин без @', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('germandolnikov.ru') // Ввели логин без @
        cy.get('#pass').type('qa_one_love1') // Ввели пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик и его видно
    })
it('Валидация логин', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru') // Ввели логин со строчными и заглавными буквами
        cy.get('#pass').type('qa_one_love1') // Ввели пароль
        cy.get('#loginButton').click(); // Нажал войти
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверка текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Крестик и его видно
    })
})
