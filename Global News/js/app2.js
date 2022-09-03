const loadNewsCatagoriess = () => {
    fetch(`https://openapi.programming-hero.com/api/news/category/01`)
        .then(res => res.json())
        .then(data => displayCatagoriess(data.data))
};




const displayCatagoriess = (news) => {
    console.log(news);

    const catagoriesSection = document.getElementById('fuckfahim');
    news.forEach(news => {
        // console.log(news);

        const catagoryDiv = document.createElement('div');
        catagoryDiv.classList.add('card', 'mb-3')

        catagoryDiv.innerHTML = `
        <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${news.title}</h5>
                            <p> ${news.details}</p>
                           
                        </div>
                    </div>

                    <div class="col-md-8">
                    <div class="d-flex mb-3">
                        <p><i class="fa-regular fa-eye mx-5"><span class="fw-bold">${news.total_view}</span></i> </p>
                        <p class="px-5"><i class="fa-solid fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </p>
                        <p><i class="fa-solid fa-right-long px-5"></i></p>
                    </div>
    
                </div>

                </div>
                    
            
        `;
        // catagoryDiv = document.createElement('/div');
        // catagoryDiv.classList.add('col-md-8')
        // catagoryDiv.classList.add('display')
        // catagoryDiv.innerHTML = `
        // <h5> ${news.title} </h5>

        // `;
        catagoriesSection.appendChild(catagoryDiv);
        // console.log(news)
    })
}
loadNewsCatagoriess()
