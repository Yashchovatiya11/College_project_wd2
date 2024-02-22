

$.ajax({
    url: "./json/staff.json", success: function (result) {

        const dataarr = result.staff.map(datas => `
            
                    <div class="col-lg-3 col-md-6 wow bounceInUp" data-wow-delay="0.1s">
                        <div class="team-item rounded">
                            <img class="img-fluid rounded-top " src="${datas.image[0].url}" alt="${datas.name}">
                            <div class="team-content text-center py-3 bg-dark rounded-bottom">
                                <h4 class="text-primary">${datas.name}</h4>
                                <div class="more bg-dark rounded-bottom text-light p-4"> 
                                    <h5 class="text-light">${datas.work}</h5>
                                    <p class="text-light">Age: ${datas.age}</p>
                                    <p class="text-light">Experience: ${datas.experience}</p>
                                    <p class="text-light">Email: ${datas.email}</p>
                                    <p class="text-light">About: ${datas.about}</p>
                                </div>
                            </div>
                            <div class="team-icon d-flex flex-column justify-content-center m-4">
                                <a class="share btn btn-primary btn-md-square rounded-circle mb-2" href=""><i
                                        class="fas fa-share-alt"></i></a>
                                <a class="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i
                                        class="fab fa-facebook-f"></i></a>
                                <a class="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i
                                        class="fab fa-twitter"></i></a>
                                <a class="share-link btn btn-primary btn-md-square rounded-circle mb-2" href=""><i
                                        class="fab fa-instagram"></i></a>
                                        
                            
                            </div>
                        </div>
                    </div>
                    `
        );
        // console.log("hallll");

        const htmlString = dataarr.join('');

        $('#staff-detail').html(htmlString);

    }
});


$.ajax({
    url: "./json/services.json", success: function (result) {

        const dataarr = result.services.map(datas => `
            
                    <div class="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.1s">
                        <div class="bg-light rounded service-item">
                            <div class="service-content d-flex align-items-center justify-content-center p-4">
                                <div class="service-content-icon text-center">
                                    <i class="${datas.iconclass}"></i>
                                    <h4 class="mb-3">${datas.sname}</h4>
                                    <p class="mb-4">${datas.sdetails}</p>
                                    <a href="#" class="btn btn-primary px-4 py-2 rounded-pill">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    `
        );
        // console.log("hallll");

        const htmlString = dataarr.join('');

        $('#serv').html(htmlString);

    }
});
