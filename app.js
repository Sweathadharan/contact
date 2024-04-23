// create a function and following the progressions inside the function.

// Progression 1: Create a promise call which fetches data

function fetchData() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

fetchData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

// Progression 2: Display the fetched data in the form of list
const userListElement = document.getElementById('message');
const btnGet = document.getElementById('btnGet');

btnGet.addEventListener('click', () => {
  fetchData()
    .then(data => {
      userListElement.innerHTML = '';
      data.forEach(function (user) {
        userListElement.innerHTML += `<div class="user">
                      <div class="strength">Name : ${user.name}</div>
                      <div>Email   : ${user.email}</div>
                      <div>Phone   : ${user.phone}</div>
                      <div>Website : ${user.website}</div>
                      <div>Company : ${user.company.name}</div>
                      <div>City    : ${user.address.city}</div>
                      <div>Zipcode : ${user.address.zipcode}</div>
                     </div>`;
      });
    })
    .catch(error => {

      console.error("Error", error);
    });
});
// Progression 3: When the promise call is rejected then throw an error

