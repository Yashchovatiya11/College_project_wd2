const jsonfile = '../json/staff.json'
const services = '../json/services.json'

const staffdel = document.querySelector('#staff-detail');
const servic = document.querySelector('#serv');


fetch(jsonfile).then(response => {
    return response.json();
})
    .then(data => {
        console.log(data.staff);

        data.staff.map(staff => {
            const { image, name, work, experience, email, about, age } = staff;
            console.log(image, name);

            staffdel.innerHTML += `
                <div class="col-lg-3 col-md-6 wow bounceInUp" data-wow-delay="0.1s">
                    <div class="team-item rounded">
                        <img class="img-fluid rounded-top " src="${image[0].url}" alt="${name}">
                        <div class="team-content text-center py-3 bg-dark rounded-bottom">
                            <h4 class="text-primary">${name}</h4>
                            <div class="more bg-dark rounded-bottom text-light p-4"> 
                                <h5 class="text-light">${work}</h5>
                                <p class="text-light">Age: ${age}</p>
                                <p class="text-light">Experience: ${experience}</p>
                                <p class="text-light">Email: ${email}</p>
                                <p class="text-light">About: ${about}</p>
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

        })


    })


fetch(services).then(response => {
    return response.json();
})

    .then(data => {

        data.services.map(services => {
            const { iconclass, sname, sdetails } = services;

            console.log("aaa");
            servic.innerHTML += `
                    <div class="col-lg-3 col-md-6 col-sm-12 wow bounceInUp" data-wow-delay="0.1s">
                        <div class="bg-light rounded service-item">
                            <div class="service-content d-flex align-items-center justify-content-center p-4">
                                <div class="service-content-icon text-center">
                                    <i class="${iconclass}"></i>
                                    <h4 class="mb-3">${sname}</h4>
                                    <p class="mb-4">${sdetails}</p>
                                    <a href="#" class="btn btn-primary px-4 py-2 rounded-pill">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
        `

        })

    })