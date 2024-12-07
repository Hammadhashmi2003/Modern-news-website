const api_key = "7bdb6d1ff56741a5b69fcd377bfedb7c";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener('load',fetch_news("Paris Olympics"));

async function fetch_news(query){
   const resp= await fetch(`${url}${query}&apiKey=${api_key}`);
   const data = await resp.json();
   console.log(data);
   bind_data(data.articles);
}

function bind_data(articles){
   const card_container = document.getElementById("card-container");
   const template_news_card = document.getElementById("template-news-card");
   card_container.innerHTML="";

   articles.forEach(article => {
    if(!article.urlToImage) return;

    const card_clone = template_news_card.content.cloneNode(true);
    postDATA_inCARD(card_clone,article);
    card_container.appendChild(card_clone);

    
   });

   async function postDATA_inCARD(card_clone,article) {
    const newsImg = card_clone.querySelector("#news-img");
    const newsTitle = card_clone.querySelector("#news-title");
    const newsSource = card_clone.querySelector("#news-date-source");
    const newsDesc = card_clone.querySelector("#news-desc");


     newsImg.src = article.urlToImage;
     newsTitle.innerHTML = article.title;
     newsDesc.innerHTML = article.description;

     const date = new Date(article.publishedAt).toLocaleString("en-US",{
        timezone:"Asia/Jakarta"
     });
     newsSource.innerHTML = `${article.source.name}  ${date}`;

     card_clone.firstElementChild.addEventListener('click',()=>
        window.open(article.url,"_blank")
     );
     
} 

}

const psl = document.getElementById("psl-news");
const crypto_news = document.getElementById("#crypto-news");
const politics_news = document.getElementById("#politics-news");

let current_selected_tab = null
async function on_nav_link_click(id){
   fetch_news(id);
   const navItem = await document.getElementById(id);
   current_selected_tab?.classList.remove('active');

   current_selected_tab = navItem;
   current_selected_tab.classList.add('active');



}
function changeBorder(id){
   const get_sb = document.getElementById(id);
  get_sb.classList.add('border-color');

}
document.addEventListener('DOMContentLoaded', () => {
   const button_click = document.querySelector('#button');
   const text_search = document.querySelector('#search');
   
 });



  

const button_click = document.querySelector('#button');
const text_search = document.querySelector('#search');
console.log(button_click);
button_click.addEventListener('click',()=>{
   const query_input = text_search.value;
    if(!query_input) return;
    fetch_news(query_input);
    current_selected_tab?.classList.remove("active");
    current_selected_tab = null;
  
});

// const query1 = text_search.value;

// console.log(query1);
// console.log(text_search);

// const query2 = document.querySelector("search-button");
// console.log(query2);