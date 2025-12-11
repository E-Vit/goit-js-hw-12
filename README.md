homework 12

Проєкт зібраний за допомогою Vite Консоль в інструментах розробника не містить
помилок, попереджень і консоль логів Елементи на сторінці стилізовані згідно з
макетом (або власні стилі) Проєкт містить код із попередньої ДЗ У файлі
pixabay-api.js є функція getImagesByQuery(query, page) для виконання
HTTP-запитів У файлі render-functions.js створено екземпляр SimpleLightbox та є
функції для відображення елементів інтерфейсу: createGallery(images),
clearGallery(), showLoader(), hideLoader(), showLoadMoreButton(),
hideLoadMoreButton() У файлі main.js описана вся логіка роботи додатку Усі
асинхронні запити відрефакторені і реалізовані за допомогою синтаксиса
async/await За один запит у відповідь приходить 15 елементів Нові зображення
додаються в DOM за одну операцію На сторінці під галереєю міститься кнопка Load
more, при кліку на яку відправляється запит на наступну сторінку Після додавання
нових елементів до списку зображень на екземплярі SimpleLightbox викликається
метод refresh() Коли користувач отримує результати за максимально можливою
сторінкою для конкретного пошукового слова, тобто вже немає чого підвантажувати,
кнопка Load more зникає і з’являється відповідне повідомлення При кожному новому
сабміті форми номер сторінки скидається до дефолтного 1 і результати попередніх
запитів зникають При кліку на маленьке зображення в галереї відкривається його
збільшена версія у модальному вікні з використанням бібліотеки SimpleLightbox

The project is built using Vite.

The console in the developer tools contains no errors, warnings, or console
logs.

Page elements are styled according to the design (or with custom styles).

The project includes code from the previous homework assignment.

In the file pixabay-api.js, there is a function getImagesByQuery(query, page)
for making HTTP requests.

In the file render-functions.js, a SimpleLightbox instance is created, and there
are functions for rendering interface elements: createGallery(images),
clearGallery(), showLoader(), hideLoader(), showLoadMoreButton(),
hideLoadMoreButton().

In the file main.js, all application logic is described.

All asynchronous requests are refactored and implemented using async/await
syntax.

Each request returns 15 items.

New images are added to the DOM in a single operation.

Below the gallery on the page, there is a Load more button, which sends a
request to the next page when clicked.

After adding new items to the image list, the refresh() method is called on the
SimpleLightbox instance.

When the user reaches the maximum possible page for a given search term, meaning
there are no more items to load, the Load more button disappears and an
appropriate message appears.

On every new form submission, the page number resets to 1, and the results of
previous requests are cleared.

Clicking on a small image in the gallery opens its enlarged version in a modal
window using the SimpleLightbox library.
