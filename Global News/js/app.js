const loadNewsCatagories = () => {
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
        .then(res => res.json())
        .then(data => displayCatagories(data.data.news_category))
};




const displayCatagories = (news) => {
    const catagoriesSection = document.getElementById('catagories-Section');
    news.forEach(news => {
        // console.log(news);
        const catagoryDiv = document.createElement('div');
        catagoryDiv.classList.add('p-4')
        catagoryDiv.innerHTML = `
        <p id="${news.category_id}">${news.category_name} </p>
        `;
        catagoriesSection.appendChild(catagoryDiv);
        // console.log(news)
    })


}
loadNewsCatagories()
