const loadNewsCatagoriess = () => {
    fetch(`https://openapi.programming-hero.com/api/news/category/01`)
        .then(res => res.json())
        .then(data => displayCatagoriess(data.data))
};




const displayCatagoriess = (news) => {
    console.log(news);

    const catagoriesSection = document.getElementById('card-container');
    news.forEach(news => {
        // console.log(news);

        const catagoryDiv = document.createElement('div');
        catagoryDiv.classList.add('card', 'mb-3')

        catagoryDiv.innerHTML = `
        <div class="row g-0">
                    <div class="col-lg-4  col-sm-12 p-4">
                        <img src="${news.image_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-lg-8 col-sm-12">
                        <div class="card-body">
                            <h5 class="card-title">${news.title}</h5>
                            <p> ${news.details}</p>
                            <div class="col-md-8">
                    <div class="d-flex mb-3">
                    <img class="image b-radius" src="${news.author.img}" alt="">
                    <p class="ps-3 py-2"></>${news.author.name}</p>
                        <p class=" my-2"><i class="fa-regular fa-eye mx-5"><span class="fw-bold">${news.total_view}</span></i> </p>
                        <p class="my-2"><i class="fa-solid fa-star-half-stroke"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                            <i class="fa-regular fa-star"></i>
                        </p>
                        <button type="button" class="btn btn-primary mx-" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        More
                    </button>
                
                
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">More Details:</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                <p> ${news.details}</p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Ok</button>
                                </div>
                            </div>
                        </div>
                    </div>
                       
                </div>
            </div>
             </div>
        </div>
</div>
     `;

        catagoriesSection.appendChild(catagoryDiv);
        // console.log(news)
    })
}
loadNewsCatagoriess()
