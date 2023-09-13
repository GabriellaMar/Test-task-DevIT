// #### **=== GIT ===**

// **Рабочее окружение**

// Вы закончили работу над задачей для клиента и у вас есть рабочий код, который был создан без использования git. Клиент создал пустой репозиторий [git@example.com](mailto:git@example.com):example/test.git и расшалил для вас доступ.

// **Задание №  1**

// Опишите ваши дальнейшие действия что бы ваш код появился в ветке master в репозитории [git@example.com](mailto:git@example.com):example/test.git

// **Відповідь**
// Для того, щоб відправити робочий у гілку master в репозиторію [git@example.com](mailto:git@example.com):example/test.git, потрібно: 
// - створити цей репозиторій локально, тобто склонувати його до себе на ком'ютер за допомогою команди git clone. Буде створена локально порожня версія репозиторія;
// - Перейти в склонований репозиторій і додати робочий код в робочу директорію;
// - Зберегти зміни та зробити коміт за допомогою команд  git add .  та  git commit -m 'Написати коментарій про внесені зміни';
// - відправити зміни на сервер за допомогою команди git push origin master(перед тим як запушити зміни можна стягнути зміни з основної гілки master за допомогою команди git pull origin master, на випадок,
//    якщо інша особа вносила якісь зміни, після того як був склонований репозиторій.



// #### **=== JS логика ===**
// -----------------------------------------------Задача №1

// function deepEqual(obj1, obj2) {
//     // Перевірка на тип даних
//     if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;
//     // перевірка на строгу рівність
//     if (obj1 === obj2) return true;

//     // Перевірка на рівність ключів  в об'єктів 
//     const keys1 = Object.keys(obj1);
//     console.log(keys1);
//     const keys2 = Object.keys(obj2);
//     console.log(keys2);
//     const value1 = Object.values(obj1);
//     console.log(value1);
//     const value2 = Object.values(obj2);


//     for (const key of keys1) {
//         if (!keys2.includes(key)) return false;
//     }

//     // Перевірка на рівність значень ключів  в об'єктів 
//     for (const value of value1) {
//         if (!value2.includes(value)) return false;
//     }

//     //  Перевікра на кількість ключів в об'єктах
//     if (keys1.length !== keys2.length) return false;

//     //  Перевікра на кількість ключів в об'єктах
//     if (keys1.length !== keys2.length) return false;

//     return true;

// }

// console.log(deepEqual({ name: 'test' }, { name: 'test' })) // output true
// console.log(deepEqual({ name: 'test' }, { name: 'test1' }))// output false
// console.log(deepEqual({ name: 'test', data: { value: 1 } }, { name: 'test', data: { value: 2 } })) // output false
// console.log(deepEqual({ name: 'test' }, { name: 'test', age: 10 })) // false
// const arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];


// -----------------------------------------Задача #2

// function* chunkArray(array, sliceSize){
// // Пробігаємося за допомогою цуклу for по масиву і за допомогою метода slice відсікаємо потрібну нам частину масива
//   for(let i = 0; i<array.length; i+=sliceSize){
//  yield array.slice(i, i+sliceSize);
//   }
// }

// const iterator = chunkArray([1,2,3,4,5,6,7,8], 3);
// console.log(iterator.next()) // { value: [1,2,3], done: false }
// console.log( iterator.next()) // { value: [4,5,6], done: false }
// console.log( iterator.next()) // { value: [7,8], done: false }
// // Останній ітератор почне перебір вже з індексу 9, якого вже немає вмасиві, отже результат буде underfind
// console.log( iterator.next()) // { value: undefined, done: true }


// ---------------------------------------Задача № 3
// function bulkRun(array){
//   // Створюємо масив промісів, кожен з яких представляє виконання однієї операції.
//   //  Використовуємо псевдомасив  аргументів, коли точна кількість переданих аргументів у функцію невідома. 
// const promises = array.map(([func, args])=>{
//   // Повертаємо новий проміс
//   return new Promise(resolve =>
//      // Викликаємо функцію з аргументами і передаємо в resolve результат виконання
//     func(...args, (value) => {
//       resolve(value);
//   }))
// })
// // використовуємо метод Promise.all ( очікування виконання всіх операцій)
// return Promise.all(promises);
// }


// const f1 = (cb) => {
//   cb(1);
// };

// const f2 = (a, cb) => {
//   cb(a);
// };

// const f3 = (a, b, cb) => {
//   setTimeout(() => cb([a, b]), 1000);
// };

// bulkRun([
//   [f1, []],
//   [f2, [2]],
//   [f3, [3, 4]],
// ]).then(console.log)


// ---------------------------------------Задача №4

// const arr = [['name', 'developer'], ['age', 5], ['skills', [['html',4], ['css', 5], ['js',5]]]];


// function arrayToObject(arr) {
//     const obj = {};
//   // За допомогою циклу for...of  проходимось по всім елементам, де кожен елемент -це масив  
//     for (const [key, value] of arr) {
//       if (Array.isArray(value)) {
//         // Перевіряємо, чи value є масивом за допомогою Array.isArray(value)
//         // Якщо це масив , тоді викликаємо функцію arrayToObject рекурсивно для цього масиву та присвоюємо її результат новому об'єкту з ключем key.
//         //  Це дозволяє обробити вкладеність усередині масиву.
//         obj[key] = arrayToObject(value);
//       } else {
//         obj[key] = value;
//       }
//     }
  
//     return obj;
//   }

//   console.log(arrayToObject(arr))

// -----------------------------Задача № 5

  // const obj = {
  //   name: 'developer',
  //   age: 5,
  //   skills: {
  //     html: 4,
  //     css: 5,
  //     js: 5,
  //   }
  // };
  
  // function objectToArray(obj) {
  //   const arr = [];
  //  // Перетворюємо об'єкт obj в масив, елементами якого будуть масиви ключ-значення
  // const arrOfObjects = Object.entries(obj);
  // // За допомогою цикла  for...of проходимо всі елементи масиву   де кожен елемент -це масив  
  //   for (const [key, value] of arrOfObjects) {
  //     if (typeof value === 'object') {
  //       // Якщо значенням масиву є об'єкт, рекурсивно викликаємо функцію та додаємо його в новий масив
  //       arr.push([key, objectToArray(value)]); 
  //     } else {
  //       arr.push([key, value]);
  //     }
  //   }
  
  //   return arr;
  // }
  
  // console.log(objectToArray(obj));


// ---------------------------------------------  Задача №7
// const obj = {
//   a: {
//     b: {
//       c: 12,
//       d: 'Hello World'
//     },
//     e: [1,2,3]
//   }
// };


// function mapObject(obj) {
//   // Перетворюємо об'єкт obj в масив, елементами якого будуть масиви ключ-значення
//   const arr = Object.entries(obj);
//   // За допомогою методу масива flatMap розгладжуємо масивмасивів та робимо перевірку, чи є значення масиву об'єктом, масивом та за допомогою рекурсії
//   //  проходимо по всім значенням, повертаючи результат  у вигляді, заданому в умові задачі.
//   return arr.flatMap(([key, value]) => {
    
//     if (typeof value === 'object' && !Array.isArray(value)) {
//       return mapObject(value).map(([newKey, newValue]) => {
//         return [key + '/' + newKey, newValue];
//       });
//     } else {
//       return [[key, value]];
//     }
//   });
// }
// const flatArray = mapObject(obj);
// // Використовуємо зворотній метод до методу Object.entries, який перетворить масив масивів в потрібним нам об'єкт
// const flatObject = Object.fromEntries(flatArray);
// console.log(flatObject)





// ----------------------------------------------Задача № 9
// Використовуємо метод замикання в Java Script, де внутрішня функція, буде мати доступ до всіх аргументів зовніщньої функції

// function add(n){
//   let sum = n;
// // Внутрішея innerAdd- функція, яка здійснює додавання аргументу, переданого у функцію add з наступним аргументом,який передаємо далі, і повертає саму себе,
// // що дозволяє створювати ланцюг викликів.
// // В результаті буде виведено тіло функції у вигляді рядка.
//   function innerAdd(nextNum){
//     sum += nextNum;
//     return innerAdd
//   }
// // Щоб правильно виконати математичну операцію і перевести виклик функції Add з послідовно переданими аргументами в число,
// //  потрібно перевизначити рядкове представлення функції та вивести поточне числове значення sum замість текстового представлення функції.
//   innerAdd.toString = ()=>{
//     return sum
//   }

//   return innerAdd;
// }

// // console.log(Number(add(1)(2)(5))); // == 3
// // console.log((add(1)(2)(5))); // == 8
// // Number(add(1)(2)(-3)(4)); //  == 4
// console.log(Number(add(1)(2)(3)(4)(-5))); // == 5
 