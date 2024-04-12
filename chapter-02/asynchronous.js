// Asynchronous JavaScript
// JavaScript is a single-threaded language, meaning only one operation can be executed at a time. However, JavaScript can be asynchronous, meaning that operations can be executed in the background. This is useful for operations that take a long time to complete, such as reading a file or making a network request.

// Simple Promises and fetch
// Promises are a way to handle asynchronous operations. A Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value. The Promise object can be in one of three states: pending, fulfilled, or rejected.

// The fetch() method is used to make network requests. It returns a Promise that resolves to the Response to that request, whether it is successful or not.

// The following example demonstrates how to use fetch() to make a network request:

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
// Output: an array of objects

// Async/Await
// Async functions enable the use of the await keyword within them. The await keyword is used to wait for a Promise. It can only be used inside an async function.

// The following example demonstrates how to use async/await with fetch():

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
// Output: an array of objects

// Building promises
// Promises can be created using the Promise constructor. The Promise constructor takes a function as an argument, which has two parameters: resolve and reject. The resolve function is used to fulfill the promise, and the reject function is used to reject the promise.

// The following example demonstrates how to create a promise:

const getPeople = (count) =>
  new Promise((resolve, reject) => {
    const api = `https://randomuser.me/api/?results=${count}`;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', api);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      }
    };
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });

getPeople(5);
// Output: an array of objects
