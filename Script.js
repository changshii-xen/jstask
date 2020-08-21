// Fetch All data from API
fetch("https://randomuser.me/api/?results=10")
  .then(response => {
    return response.json();
  })
  //add api infor to ui
  .then(data => {
    // store data in varaible
    let userList = data.results;
    console.log(userList);
    // the element I want to put them in

    // create my elements from data
    return userList.map(user => {
      let div = document.getElementById("1");

      let card = document.createElement("div");
      card.className = "card";
      let content = document.createElement("div");
      content.className = "card-content";

      //   let gender = document.createElement("p");
      let name = document.createElement("h5");
      let last = document.createElement("h5");
      let email = document.createElement("p");
      //   let location = document.createElement("p");
      let phone = document.createElement("p");
      let picture = document.createElement("img");

      //   gender.innerHTML = user.gender;
      //   gender.href = user.url;
      email.innerHTML = user.email;
      email.href = user.url;
      //   location.innerHTML = user.location.city;
      //   location.href = user.url;
      name.innerHTML = user.name.first;
      name.href = user.url;
      last.innerHTML = user.name.last;
      last.href = user.url;
      phone.innerHTML = user.phone;
      phone.href = user.url;

      picture.src = user.picture.large;

      // setting element data
      content.appendChild(picture);
      content.appendChild(name);
      content.appendChild(last);
      content.appendChild(email);
      content.appendChild(phone);
      //   content.appendChild(location);
      //   content.appendChild(gender);

      card.appendChild(content);
      div.appendChild(card);
    });
  });
