let main = document.querySelector("#main");
let page = document.querySelector("#pageList");
let numberPage = 1;
let serchnumberPage = 1;
let serchbox = document.querySelector("#serchfilm");
let startSerchfilm = document.querySelector("#startSerchFilm");
let ul = document.querySelector('ul');
let nextPage = document.createElement("p");
let lang = document.querySelector("#lang");
async function modal() {
    try {
        let res = await fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/4664634", {
            method: 'GET',
            headers: {
                'X-API-KEY': 'd7121e90-ece4-4aaf-8898-0c42b7a27b88',
                'Content-Type': 'application/json',
            },
        });

        let data = await res.json();
    }
    catch (e) {
        console.error(e);
    }
}
modal()
async function searchContent() {
    try {
        let res = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films?keyword=${serchbox.value}&page=${serchnumberPage}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'd7121e90-ece4-4aaf-8898-0c42b7a27b88',
                'Content-Type': 'application/json',
            },
        });
        let data = await res.json();
        console.log(data);
        if (data[`total`] === 0) {
            alert("not found film!");
            ul.style.display = "none";
        }
        else {
            ul.style.display = "flex";
        }
        return data;
    }
    catch (e) {
        console.error(e);
    }
}

function serchData() {
    try {
        searchContent().then((film) => {
            let docs = document.querySelectorAll(".block");
            docs.forEach((e) => {
                e.remove();
            })
            console.log(film);
            for (let i = 0; i < film['items'].length; i++) 
            {
                let doc = document.createElement('div');
                doc.classList.add("block");

                let raiting = document.createElement("h6");

                let divRaiting = document.createElement("div");

                divRaiting.classList.add("raiting");

                if (String(film["items"][`${i}`][`ratingKinopoisk`]!="nul")) 
                {
                    if (String(film["items"][`${i}`][`ratingKinopoisk`]).length > 3) 
                    {
                        let rait = String(film["items"][`${i}`][`ratingKinopoisk`]).slice(0, 1) + "." + String(film["items"][`${i}`][`ratingKinopoisk`]).slice(3, 4);
                        raiting.textContent = rait;
                    }
                    else
                        raiting.textContent = String(film["items"][`${i}`][`ratingKinopoisk`]).slice(0, 3);
                }
                else 
                {
                    if (String(film["items"][`${i}`][`ratingImdb`]).length > 3)
                    {
                        let rait = String(film["items"][`${i}`][`ratingImdb`]).slice(0, 1) + "." + String(film["items"][`${i}`][`ratingImdb`]).slice(3, 4);
                        raiting.textContent = rait;
                    }
                    else
                        raiting.textContent = String(film["items"][`${i}`][`ratingImdb`]).slice(0, 3);
                }

                if (film["items"][`${i}`][`ratingImdb`] > 8) {
                    divRaiting.style.border = "2px solid green";
                }

                else if (film["items"][`${i}`][`ratingImdb`] > 5) divRaiting.style.border = "2px solid orange";

                else divRaiting.style.border = "2px solid red";

                divRaiting.appendChild(raiting);
                let h1 = document.createElement('h1');
                let imageSrc = String(film["items"][`${i}`][`posterUrl`]);
                let img = document.createElement("img");
                img.src = `${imageSrc}`;
                img.style.height = "400px";
                img.style.width = "200px";
                if (lang.value === "RU")
                    h1.textContent = String(film[`items`][`${i}`][`nameRu`]);
                else
                    h1.textContent = String(film[`films`][`${i}`][`nameEn`]);

                lang.addEventListener("change", () => {
                    if (lang.value === "RU")
                        h1.textContent = String(film[`items`][`${i}`][`nameRu`]);
                    else
                        h1.textContent = String(film[`films`][`${i}`][`nameEn`]);
                })
                doc.append(h1, img, divRaiting);
                main.append(doc);
                let allLinks = document.querySelectorAll("li");
                let allLink = document.querySelectorAll("a");
                for (let i = 0; i < allLinks.length; i++) {
                    allLinks[i].remove();
                    allLink[i].remove();
                    nextPage.style.display = "none";
                }
                for (let i = 1; i < film['totalPages'] + 1; i++) {
                    let li = document.createElement("li");
                    let link = document.createElement("a");
                    link.textContent = i;
                    li.append(link);
                    serchnumberPage = Number(link.textContent);
                    li.classList.add("pageList");
                    page.append(li);
                    if (i > 6) {
                        li.style.display = "none";
                        document.querySelector("ul").appendChild(nextPage);
                        nextPage.innerText = "...";
                        nextPage.classList.add("pageList");
                        nextPage.style.marginTop = "0";
                        page.append(nextPage);
                    }
                }
                let allLinkPages = document.querySelectorAll("li");
                let pageNamber = 0;
                allLinkPages.forEach((item) => {
                  
                    item.addEventListener("click", (event) => {
                        item.classList.toggle("active");
                        event.preventDefault();
                        let continie = document.querySelector("p");
                        if (item.textContent < allLinkPages.length) {
        
                            continie.style.display = "block";
                            if ((allLinkPages[Number(item.textContent)]).style.display === "none") {
                                (allLinkPages[Number(item.textContent)]).style.display = "block";
                                allLinkPages[pageNamber].style.display = "none";
                                pageNamber++;
                            }
                            console.log(pageNamber);
                            if (allLinkPages[pageNamber].style.display === "none") {
                                allLinkPages[pageNamber].style.display = "block";
                            }
                        }
                        else {
                            continie.style.display = "none";
                        }
                        /*  item.style.color="red";  */
                        serchnumberPage = Number(item.textContent)
                        let doc = document.querySelectorAll(".block");
                        doc.forEach((e) => {
                            e.remove();
                        })

                        searchContent().then((e) => {
                            for (let i = 0; i < e[`items`].length; i++) {
                                let doc = document.createElement('div');
                                doc.classList.add("block");

                                let raiting = document.createElement("h6");
                                let divRaiting = document.createElement("div");
                                divRaiting.classList.add("raiting")

                                // оценочная система рейтинга
                                if (String(e[`items`][`${i}`][`rating`]).length > 3) {
                                    let rait = String(e[`items`][`${i}`][`ratingImdb`]).slice(0, 1) + "." + String(e[`items`][`${i}`][`ratingImdb`]).slice(3, 4);
                                    raiting.textContent = rait;
                                }
                                else
                                    raiting.textContent = String(e[`items`][`${i}`][`ratingImdb`]).slice(0,4);

                                    if (String(e["items"][`${i}`][`ratingKinopoisk`]!="nul")) 
                                    {
                                        if (String(e["items"][`${i}`][`ratingKinopoisk`]).length > 3) 
                                        {
                                            let rait = String(e["items"][`${i}`][`ratingKinopoisk`]).slice(0, 1) + "." + String(e["items"][`${i}`][`ratingKinopoisk`]).slice(3, 4);
                                            raiting.textContent = rait;
                                        }
                                        else
                                            raiting.textContent = String(e["items"][`${i}`][`ratingKinopoisk`]).slice(0, 3);
                                    }
                                    else 
                                    {
                                        if (String(e["items"][`${i}`][`ratingImdb`]).length > 3)
                                        {
                                            let rait = String(e["items"][`${i}`][`ratingImdb`]).slice(0, 1) + "." + String(film["items"][`${i}`][`ratingImdb`]).slice(3, 4);
                                            raiting.textContent = rait;
                                        }
                                        else
                                            raiting.textContent = String(e["items"][`${i}`][`ratingImdb`]).slice(0, 3);
                                    }





                                if (e[`items`][`${i}`][`ratingImdb`] > 8) {
                                    divRaiting.style.border = "2px solid green";
                                }
                                else if (e[`items`][`${i}`][`ratingImdb`] > 5) divRaiting.style.border = "2px solid orange";
                                else divRaiting.style.border = "2px solid red";
                                divRaiting.appendChild(raiting);

                                //добавление Элементов в дом дерево
                                let h1 = document.createElement('h1');
                                let imageSrc = String(e[`items`][`${i}`][`posterUrl`]);
                                let img = document.createElement("img");
                                img.src = `${imageSrc}`;
                                img.style.height = "400px";
                                img.style.width = "200px";

                                if (lang.value === "RU")
                                    h1.textContent = String(film[`items`][`${i}`][`nameRu`]);
                                else
                                    h1.textContent = String(film[`films`][`${i}`][`nameEn`]);

                                lang.addEventListener("change", () => {
                                    if (lang.value === "RU")
                                        h1.textContent = String(e[`items`][`${i}`][`nameRu`]);
                                    else
                                        h1.textContent = String(e[`films`][`${i}`][`nameEn`]);
                                })
                                doc.append(h1, img, divRaiting);
                                main.append(doc);
                            }
                        });

                    })
                })
            }
        })
        searchContent().then((film) => {
            for (let i = 0; i < film['items'].length; i++) {
                let doc = document.createElement('div');
                doc.classList.add("block");
                let raiting = document.createElement("h6");
                let divRaiting = document.createElement("div");
                divRaiting.classList.add("raiting")

                if (String(film["items"][`${i}`][`ratingKinopoisk`]).length > 3) {
                    let rait = String(filma["items"][`${i}`][`ratingKinopoisk`]).slice(0, 1) + "." + String(filma["items"][`${i}`][`ratingKinopoisk`]).slice(3, 4);
                    raiting.textContent = rait;
                }
                else
                    raiting.textContent = String(film["items"][`${i}`][`ratingImdb`]).slice(0, 3);

                if (film[`items`][`${i}`][`ratingImdb`] > 8) {
                    divRaiting.style.border = "2px solid green";
                }
                else if (film[`items`][`${i}`][`ratingImdb`] > 5) divRaiting.style.border = "2px solid orange";
                else divRaiting.style.border = "2px solid red";

                divRaiting.appendChild(raiting);
                let h1 = document.createElement('h1');
                let imageSrc = String(film[`items`][`${i}`][`posterUrl`]);
                let img = document.createElement("img");
                img.src = `${imageSrc}`;
                img.style.height = "400px";
                img.style.width = "250px";

                if (lang.value === "RU")
                    h1.textContent = String(film[`items`][`${i}`][`nameRu`]);
                else
                    h1.textContent = String(film[`films`][`${i}`][`nameEn`]);

                lang.addEventListener("change", () => {
                    if (lang.value === "RU")
                        h1.textContent = String(film[`items`][`${i}`][`nameRu`]);
                    else
                        h1.textContent = String(film[`films`][`${i}`][`nameEn`]);
                })

                doc.append(h1, img, divRaiting);
                main.append(doc);
            }
            let imgArray = document.querySelectorAll("img");
            imgArray.forEach((item) => {
                item.addEventListener("click", () => {
                    //модальное окно 
                    let modal = document.querySelector(".modal");
                    let h1_titile = document.querySelector("#film_title");
                    

                    searchContent().then((film) => {
                        for (let i = 0; i < film['items'].length; i++) {
                            h1_titile.textContent = String(film[`items`][`${item}`][`nameRu`]);
                        }
                    })
                    modal.style.display = "block";
                    let span = document.querySelector(".close");
                    span.addEventListener("click", () => {
                        modal.style.display = "none";
                    })
                    window.onclick = function (event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    }
                })
            })
        })
    }
    catch (e) {
        console.error(e);
    }
}


startSerchfilm.addEventListener("click", () => serchData())
serchbox.addEventListener("keydown", (e) => { if (e.code === 'Enter') serchData() })

async function pageList() {
    try {
        let res = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${numberPage}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'd7121e90-ece4-4aaf-8898-0c42b7a27b88',
                'Content-Type': 'application/json',
            },
        });
        let data = await res.json();
        return data;
    }
    catch (e) {
        console.error(e);
    }
}

async function connect() {
    try {
        let respons = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1', {
            method: 'GET',
            headers: {
                'X-API-KEY': 'd7121e90-ece4-4aaf-8898-0c42b7a27b88',
                'Content-Type': 'application/json',
            },
        });
        let data = await respons.json();
        for (let i = 1; i < data["pagesCount"]; i++) {
            let li = document.createElement("li");
            let link = document.createElement("a");
            link.textContent = i;
            li.append(link);
            numberPage = Number(link.textContent);
            li.classList.add("pageList");
            page.append(li);
            if (i > 5) {
                li.style.display = "none";
                document.querySelector("ul").appendChild(nextPage);
                nextPage.innerText = "...";
                nextPage.classList.add("pageList");
                nextPage.style.marginTop = "0";
                page.append(nextPage);
            }
        }
        // работа с страницами
        let pageNamber = 0;
        let allLinks = document.querySelectorAll("li");
        allLinks.forEach((item) => {
            item.addEventListener("click", (event) => {
                event.preventDefault();
                let continie = document.querySelector("p");
                if (item.textContent < allLinks.length) {

                    continie.style.display = "block";
                    if ((allLinks[Number(item.textContent)]).style.display === "none") {
                        (allLinks[Number(item.textContent)]).style.display = "block";
                        allLinks[pageNamber].style.display = "none";
                        pageNamber++;
                    }
                    console.log(pageNamber);
                    if (allLinks[pageNamber].style.display === "none") {
                        allLinks[pageNamber].style.display = "block";
                    }
                }
                else {
                    continie.style.display = "none";
                }
                /*  item.style.color="red";  */
                numberPage = Number(item.textContent)
                let doc = document.querySelectorAll(".block");
                doc.forEach((e) => {
                    e.remove();
                })
                pageList().then((e) => {
                    for (let i = 0; i < e[`films`].length; i++) {
                        let doc = document.createElement('div');
                        doc.classList.add("block");

                        let raiting = document.createElement("h6");
                        let divRaiting = document.createElement("div");
                        divRaiting.classList.add("raiting")
                        // оценочная система рейтинга
                        if (String(data[`films`][`${i}`][`rating`]).length > 3) {
                            let rait = String(data[`films`][`${i}`][`rating`]).slice(0, 1) + "." + String(data[`films`][`${i}`][`rating`]).slice(3, 4);
                            raiting.textContent = rait;
                        }
                        else
                            raiting.textContent = String(data[`films`][`${i}`][`rating`]).slice(0, 3);
                        if (e[`films`][`${i}`][`rating`] > 8) {
                            divRaiting.style.border = "2px solid green";
                        }
                        else if (e[`films`][`${i}`][`rating`] > 5) divRaiting.style.border = "2px solid orange";
                        else divRaiting.style.border = "2px solid red";
                        divRaiting.appendChild(raiting);

                        //добавление Элементов в дом дерево
                        let h1 = document.createElement('h1');
                        let imageSrc = String(e[`films`][`${i}`][`posterUrl`]);
                        let img = document.createElement("img");
                        img.src = `${imageSrc}`;
                        img.style.height = "400px";
                        img.style.width = "200px";
                        if (lang.value === "RU")
                            h1.textContent = String(e[`films`][`${i}`][`nameRu`]);
                        else
                            h1.textContent = String(e[`films`][`${i}`][`nameEn`]);
                        lang.addEventListener("change", () => {
                            if (lang.value === "RU")
                                h1.textContent = String(e[`films`][`${i}`][`nameRu`]);
                            else
                                h1.textContent = String(e[`films`][`${i}`][`nameEn`]);
                        })
                        doc.append(h1, img, divRaiting);
                        main.append(doc);
                    }
                });
            })
        })
        for (let i = 0; i < data[`films`].length; i++) {
            let doc = document.createElement('div');
            doc.classList.add("block");
            let raiting = document.createElement("h6");
            let divRaiting = document.createElement("div");
            divRaiting.classList.add("raiting")
            if (String(data[`films`][`${i}`][`rating`]).length > 3) {
                let rait = String(data[`films`][`${i}`][`rating`]).slice(0, 1) + "." + String(data[`films`][`${i}`][`rating`]).slice(3, 4);
                raiting.textContent = rait;
            }
            else
                raiting.textContent = String(data[`films`][`${i}`][`rating`]).slice(0, 3);
            if (data[`films`][`${i}`][`rating`] > 8) {
                divRaiting.style.border = "2px solid green";
            }
            else if (data[`films`][`${i}`][`rating`] > 5) divRaiting.style.border = "2px solid orange";

            else divRaiting.style.border = "2px solid red";

            divRaiting.appendChild(raiting);
            let h1 = document.createElement('h1');
            let imageSrc = String(data[`films`][`${i}`][`posterUrl`]);
            let img = document.createElement("img");
            img.src = `${imageSrc}`;
            img.style.height = "400px";
            img.style.width = "250px";
            if (lang.value === "RU")
                h1.textContent = String(data[`films`][`${i}`][`nameRu`]);
            else
                h1.textContent = String(data[`films`][`${i}`][`nameEn`]);

            lang.addEventListener("change", () => {
                if (lang.value === "RU")
                    h1.textContent = String(data[`films`][`${i}`][`nameRu`]);
                else
                    h1.textContent = String(data[`films`][`${i}`][`nameEn`]);
            })
            doc.append(h1, img, divRaiting);
            main.append(doc);
        }
    }
    catch (e) {
        console.error(e);
        alert(e);
    }
}
connect()