// implementation of HOF
const invokeIf = (condition, fnTrue, fnFalse) =>
  condition ? fnTrue() : fnFalse();

const showWelcome = () => console.log('Welcome!!!');
const showUnauthorized = () => console.log('Unauthorized!!!');
invokeIf(true, showWelcome, showUnauthorized);

// get Fake person
// const getFakePeople = (count) =>
//   new Promise((resolves, rejects) => {
//     const api = `https://api.randomuser.me/?nat=US&results=${count}`;
//     const request = new XMLHttpRequest();
//     request.open('GET', api);
//     request.onload = () =>
//       request.status === 200
//         ? resolves(JSON.parse(request.response).results)
//         : rejects(Error(request.statusText));
//     request.onerror = (err) => rejects(err);
//     request.send();
//   });

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

const userLogs = (userName) => (message) =>
  console.log(`${userName} -> ${message}`);

const log = userLogs('grandpa23');
log('attempted to load 20 fake members');
getPeople(5).then(
  (members) => log(`successfully loaded ${members.length} members`),
  (error) => log(`encountered an ${error} loading members`)
);
