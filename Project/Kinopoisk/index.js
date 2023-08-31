let main = document.querySelector("#main");
let page = document.querySelector("#pageList");
let numberPage = 1;
let serchbox = document.getElementById("serchfilm");
let startSerchfilm = document.getElementById("startSerchFilm");
let counter = 0;
async function modal(){
    try{
        let res = await fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/4664634",{
            method: 'GET',
            headers: {
                'X-API-KEY': 'd7121e90-ece4-4aaf-8898-0c42b7a27b88',
                'Content-Type': 'application/json',
            },
        });

        let data = await res.json();
        console.log(data);

    }
    catch(e){
        console.error(e);
    }
}
modal()
async function searchContent(){
    try{
          let  res = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films?keyword=${serchbox.value}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'd7121e90-ece4-4aaf-8898-0c42b7a27b88',
                'Content-Type': 'application/json',
            },
        });
        let data = await res.json();
        return data;
    }
    catch(e){
        console.error(e);
    }
} 

startSerchfilm.addEventListener("click",()=>{
 
    searchContent().then((film)=>{
        console.log(film);
        let docs = document.querySelectorAll(".block");
            docs.forEach((e)=>{
                
            })
            
            for(let i =0;i<film['items'].length;i++)
            {
                let doc = document.createElement('div');
                doc.classList.add("block");

                let raiting = document.createElement("h6");

                let divRaiting = document.createElement("div");

                divRaiting.classList.add("raiting");
                
                raiting.textContent = String(film["items"][`${i}`][`ratingImdb`]);

                if(film["items"][`${i}`][`ratingImdb`]>8){
                    divRaiting.style.border="2px solid green";
                }
                else if(film["items"][`${i}`][`ratingImdb`]>5) divRaiting.style.border="2px solid orange";
        
                else divRaiting.style.border="2px solid red"; 

                divRaiting.appendChild(raiting);
                let h1 = document.createElement('h1');
                let imageSrc = String(film["items"][`${i}`][`posterUrl`]);
                let img = document.createElement("img");
                img.src=`${imageSrc}`;
                img.style.height="400px";
                img.style.width="200px";
                h1.textContent = String(film["items"][`${i}`][`nameRu`]); 
                doc.append(h1,img,divRaiting);
                main.append(doc);
                let allLinks = document.querySelectorAll("li");
                for(let i =0;i<allLinks.length;i++){
                    allLinks[i].remove();
                }
                let n = 0;
                if(film['items'].length>20){
                    n++;
                    let li = document.createElement("li");
                    let link = document.createElement("a");
                    link.textContent = i;
                    li.append(link);
                    li.classList.add("pageList");
                    page.append(li);
                }
             }        
         })
    });
    startSerchfilm.addEventListener("keydown",(e)=>{
    if(e.code === 'Enter'){
        searchContent().then((film)=>{
            console.log(film);
            let docs = document.querySelectorAll(".block");
                docs.forEach((e)=>{
                    
                })
                
                for(let i =0;i<film['items'].length;i++)
                {
                    let doc = document.createElement('div');
                    doc.classList.add("block");
    
                    let raiting = document.createElement("h6");
    
                    let divRaiting = document.createElement("div");
    
                    divRaiting.classList.add("raiting");
                    
                    raiting.textContent = String(film["items"][`${i}`][`ratingImdb`]);
    
                    if(film["items"][`${i}`][`ratingImdb`]>8){
                        divRaiting.style.border="2px solid green";
                    }
                    else if(film["items"][`${i}`][`ratingImdb`]>5) divRaiting.style.border="2px solid orange";
            
                    else divRaiting.style.border="2px solid red"; 
    
                    divRaiting.appendChild(raiting);
                    let h1 = document.createElement('h1');
                    let imageSrc = String(film["items"][`${i}`][`posterUrl`]);
                    let img = document.createElement("img");
                    img.src=`${imageSrc}`;
                    img.style.height="400px";
                    img.style.width="200px";
                    h1.textContent = String(film["items"][`${i}`][`nameRu`]); 
                    doc.append(h1,img,divRaiting);
                    main.append(doc);
                    let allLinks = document.querySelectorAll("li");
                    for(let i =0;i<allLinks.length;i++){
                        allLinks[i].remove();
                    }
                    let n = 0;
                    if(film['items'].length>20){
                        n++;
                        let li = document.createElement("li");
                        let link = document.createElement("a");
                        link.textContent = i;
                        li.append(link);
                        li.classList.add("pageList");
                        page.append(li);
                    }
                 }        
             })
    }
       
        });
    
async function pageList(){
    try{
          let  res = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=${numberPage}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'd7121e90-ece4-4aaf-8898-0c42b7a27b88',
                'Content-Type': 'application/json',
            },
        });
        let data = await res.json();
        return data;
    }
    catch(e){
        console.error(e);
    }
} 

async function connect(){
    try{
        let respons = await fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1', {
            method: 'GET',
            headers: {
                'X-API-KEY': 'd7121e90-ece4-4aaf-8898-0c42b7a27b88',
                'Content-Type': 'application/json',
            },
        });
        let data = await respons.json();
        let  smt = document.createElement("p");
        //создание страниц

        for(let i = 1 ;i<data["pagesCount"];i++)
        {     
            let li = document.createElement("li");
            let link = document.createElement("a");
            link.textContent = i;
            li.append(link);
            numberPage = Number(link.textContent);
            li.classList.add("pageList");
            page.append(li);
            if(i>5){
                li.style.display="none";
                document.querySelector("ul").appendChild(smt);
                smt.innerText = "...";
                smt.classList.add("pageList");
                smt.style.marginTop="0";
                page.append(smt);
            }
            console.log(data);
        }
        // работа с страницами
        let allLinks = document.querySelectorAll("a");
        allLinks.forEach((item)=>{
          item.addEventListener("click",()=>{
            item.style.color ="red";
            counter ++;
            numberPage=Number(item.textContent)           
            let doc = document.querySelectorAll(".block");
            doc.forEach((e)=>{
                e.remove();
            })
                pageList().then((e)=>{
                for(let i=0;i<e[`films`].length;i++)
                  {
                let doc = document.createElement('div');
                doc.classList.add("block");

            let raiting = document.createElement("h6");
            let divRaiting = document.createElement("div");
            divRaiting.classList.add("raiting")
            // оценочная система рейтинга
            raiting.textContent = String(e[`films`][`${i}`][`rating`]);
            if(e[`films`][`${i}`][`rating`]>8){
                divRaiting.style.border="2px solid green";
            }
            else if(e[`films`][`${i}`][`rating`]>5) divRaiting.style.border="2px solid orange";
            else divRaiting.style.border="2px solid red";
            divRaiting.appendChild(raiting);

            //добавление Элементов в дом дерево
            let h1 = document.createElement('h1');
            let imageSrc = String(e[`films`][`${i}`][`posterUrl`]);
            let img = document.createElement("img");
            img.src=`${imageSrc}`;
            img.style.height="400px";
            img.style.width="200px";
            h1.textContent = String(e[`films`][`${i}`][`nameRu`]); 
            doc.append(h1,img,divRaiting);
            main.append(doc);
        }});
        
    })})
        
        for(let i = 0 ;i<data[`films`].length;i++)
        {
            let doc = document.createElement('div');
            doc.classList.add("block");
            let raiting = document.createElement("h6");
            let divRaiting = document.createElement("div");
            divRaiting.classList.add("raiting")
            raiting.textContent = String(data[`films`][`${i}`][`rating`]);
            if(data[`films`][`${i}`][`rating`]>8){
                divRaiting.style.border="2px solid green";
            }
            else if(data[`films`][`${i}`][`rating`]>5) divRaiting.style.border="2px solid orange";
            else divRaiting.style.border="2px solid red";
            divRaiting.appendChild(raiting);
            let h1 = document.createElement('h1');
            let imageSrc = String(data[`films`][`${i}`][`posterUrl`]);
            let img = document.createElement("img");
            img.src=`${imageSrc}`;
            img.style.height="400px";
            img.style.width="250px";
            h1.textContent = String(data[`films`][`${i}`][`nameRu`]); 
            doc.append(h1,img,divRaiting);
            main.append(doc);
        }
        let imgArray = document.querySelectorAll("img");
        imgArray.forEach((item)=>{
            let modalblock =`
            <div id="myModal" class="modal">
            <div class="modal-content">
              <div class="modal-header">
                <span class="close">&times;</span>
                <h2>Шапка модального окна</h2>
              </div>
              <div class="modal-body">
                <p>Какой-то текст в теле модального окна</p>
                <p>Ещё другой текст...</p>
               
              </div>
              <div class="modal-footer">
                <h3>Футер модального окна</h3>
              </div>
            </div>`
            document.body.insertAdjacentHTML('afterend',modalblock);
            item.addEventListener("click",()=>{
                //модальное окно 
                let modal = document.querySelector(".modal");
                modal.style.display = "block";
                let span = document.querySelector(".close");
                span.addEventListener("click",()=>{
                    modal.style.display = "none";
                }) 
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                    }
                }
                
            })/* ["filmId"] */

            {/* <video width="320" height="240" controls>
            <source src="movie.mp4" type="video/mp4">
            </video>
            https://kinopoiskapiunofficial.tech/api/v2.2/films/4889667/videos */}
        })
        
    }
    catch(e){
        console.error(e);
        alert(e);
    }
}
connect()







