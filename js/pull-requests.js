const pullRequestsList = document.querySelector("#pull-requests-list");
const input = document.querySelector("#search");

let pullFetch = "";
//se solicita pro primera vez datos al api
fetch("https://api.github.com/repos/codeyourfuture/js-exercises/pulls")
  .then(respose => respose.json())
  .then(data => {
    pullFetch = data;
    pullFetch.forEach(pull => {
      //se agregarn al dom
      const createElementLi = document.createElement("li");
      const createElementA = document.createElement("a");

      createElementLi.className = "new-list";
      createElementA.className = "pull-list";

      createElementA.href = pull.html_url;
      createElementA.innerHTML = pull.user.login + " - " + pull.title;

      pullRequestsList.appendChild(createElementLi);
      createElementLi.appendChild(createElementA);
    });
  });

input.addEventListener("keyup", function(e) {
  const userToFind = e.target.value;
  //console.log(pullFetch);
  const pullsFiltered = pullFetch.filter(
    pull => pull.user.login === userToFind
  );

  if (pullsFiltered.length == 0) {
    pullRequestsList.innerHTML = "";
  }

  if (userToFind == "") {
    pullFetch.forEach(pull => {
      const createElementLi = document.createElement("li");
      const createElementA = document.createElement("a");

      createElementLi.className = "new-list";
      createElementA.className = "pull-list";

      createElementA.href = pull.html_url;
      createElementA.innerHTML = pull.user.login + " - " + pull.title;

      createElementLi.appendChild(createElementA);
      pullRequestsList.appendChild(createElementLi);
    });
  }

  pullsFiltered.forEach(pull => {
    const createElementLi = document.createElement("li");
    const createElementA = document.createElement("a");

    createElementLi.className = "new-list";
    createElementA.className = "pull-list";

    createElementA.href = pull.html_url;
    createElementA.innerHTML = pull.user.login + " - " + pull.title;

    pullRequestsList.appendChild(createElementLi);
    createElementLi.appendChild(createElementA);
  });
});
