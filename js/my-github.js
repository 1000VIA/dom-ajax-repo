// Write code here to communicate with Github

const reposList = document.querySelector("#repos-list");
const reposCount = document.querySelector("#repos-count");

fetch("https://api.github.com/users/1000VIA/repos")
  .then(response => response.json())
  .then(data =>
    data.forEach(repo => {
      const elementLi = document.createElement("li");
      const elementA = document.createElement("a");

      elementLi.className = "new-list";
      elementA.className = "repos-list";

      reposCount.innerHTML = data.length;
      elementA.href = repo.html_url;
      elementA.innerHTML = repo.name;

      reposList.appendChild(elementLi);
      elementLi.appendChild(elementA);
    })
  );
