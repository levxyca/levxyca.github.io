fetch("https://dev.to/api/articles?username=levxyca")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    for (let key in myJson) {
      if (key < 5) {
        let title = myJson[key].title;
        let description = myJson[key].description;
        let date = myJson[key].readable_publish_date;
        let url = myJson[key].url;
        let codeBlock = `
        <article class='blog__post'>
          <a href='${url}' target='_blank'>
            <h3 class='blog__post-title'><strong>${title}</strong></h3>
            <p class='blog__post-description'>${description}</h3>
            <p class='blog__post-date'>${date}</p>
          </a>
        </article>
        `;
        const container = document.getElementById("blog__container");
        container.innerHTML += codeBlock;
      }
    }
  });
