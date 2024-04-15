// imperative vs declarative programming
// making a string URL-friendly
// imperative approach
const string = 'My dog has fleas';
let urlFriendly = '';

for (let i = 0; i < string.length; i++) {
  if (string[i] === ' ') {
    urlFriendly += '-';
  } else {
    urlFriendly += string[i];
  }
}

console.log(urlFriendly); // My-dog-has-fleas

// declarative approach
const string2 = 'My dog has fleas';
const urlFriendly2 = string2.replace(/ /g, '-');

console.log(urlFriendly2); // My-dog-has-fleas

// Consider the following code snippet for declarative programming:
const loadAndMapMembers = compose(
  combineWithSession(sessionStorage, 'members'),
  save(sessionStorage, 'members'),
  scopeMembers(window),
  logMemberInfoToConsole,
  logFieldsToConsole('name.first'),
  countMembersBy('location.state'),
  prepStatesForMapping,
  save(sessionStorage, 'map'),
  renderUSMap
);

getFakeMembers(100).then(loadAndMapMembers);

// lets consider task for building DOM elements
// imperative approach
const target = document.getElementById('target');
const wrapper = document.createElement('div');
const headline = document.createElement('h1');

wrapper.id = 'welcome';
headline.innerText = 'Hello, World!';

wrapper.appendChild(headline);
target.appendChild(wrapper);

// declarative approach
const target2 = document.getElementById('target');
target2.innerHTML = `
  <div id="welcome">
	<h1>Hello, World!</h1>
  </div>
`;
render(<Welcome />, target2);
