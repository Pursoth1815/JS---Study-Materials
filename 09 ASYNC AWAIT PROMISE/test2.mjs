// 

let users;

export default (async () => {
  const url = 'https://mysafeinfo.com/api/data?list=englishmonarchs&format=json';
  const response = await fetch(url);
  users = await response.json();
})();

export { users };