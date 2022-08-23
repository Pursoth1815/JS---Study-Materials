import promise,{ users } from "./test2.mjs";

function render(users) {
  if (!users) {
    throw 'The user list is not available.';
  }
  let list = users
    .map((user) => {
      return `<li> ${user.Name}(<a href="email:${user.Reign}">${user.Reign}</a>)</li>`;
    })
    .join(' ');

  return `<ol>${list}</ol>`;
}

promise.then(() => {
  let container = document.querySelector('.container');
  try {
    container.innerHTML = render(users);
  } catch (error) {
    container.innerHTML = error;
  }
});