
/* code for changing text on title screen when hovered in the methodology text */

const items = {
    cad: "CAD workflows integrate directly with our structural modeling pipeline for precision execution.",
    mapping: "3D mapping captures every site condition, informing structural decisions from day one.",
    sustainability: "Sustainability metrics are embedded into material selection at every project phase."
};

const methodologyText = document.getElementById('methodology-text');

if (methodologyText){

const defaultText = methodologyText.textContent;
document.querySelectorAll('[data-topic]').forEach(el => {
    el.addEventListener('mouseenter', () => {
        methodologyText.textContent = items[el.dataset.topic];
    });

    el.addEventListener('mouseleave', () => {
        methodologyText.textContent = defaultText;
    });
});

}


/* project list array */


const projects = [
    {
        year: 2024,
        number: "001",
        title: "Vortex Housing Complex",
        location: "Stockholm, SE",
        tags: ["Urban", "Residential"],
        url: "projects/vortex-housing.html",
        image: "project-card-images/vortex-housing.jpg",
        description: "Compact residential forms balancing privacy, natural light, and communal spaces.",
    },
    {
        year: 2024,
        number: "002",
        title: "The Linear Observatory",
        location: "Atacama, CL",
        tags: ["Science", "Minimalist"],
        url: "projects/linear-observatory.html",
        image: "project-card-images/linear-observatory.jpg",
        description: "An elongated structure framing the surrounding landscape through carefully positioned openings.",
    },
    {
        year: 2024,
        number: "003",
        title: "Brutalist Atrium",
        location: "Berlin, DE",
        tags: ["Public", "Interior"],
        url: "projects/brutalist-atrium.html",
        image: "project-card-images/brutalist-atrium.jpg",
        description: "Raw concrete forms organized around a central atrium filled with natural light.",
    },
        
    {
        year: 2023,
        number: "004",
        title: "Monolith Pavilion",
        location: "Detroit, US",
        tags: ["Urban", "Modern"],
        url: "projects/monolith-pavilion.html",
        image: "project-card-images/monolith-pavilion.jpg",
        description: "A sculptural structure exploring geometry, movement, and the surrounding public space.",
    },

    {
        year: 2023,
        number: "005",
        title: "Concrete House",
        location: "London, UK",
        tags: ["Residential", "Concrete"],
        url: "projects/concrete-house.html",
        image: "project-card-images/concrete-house.jpg",
        description: "A minimalist residence combining exposed concrete with carefully controlled natural light.",
    },

    {
        year: 2023,
        number: "006",
        title: "Shadow Studies",
        location: "Tokyo, JP",
        tags: ["Minimalist", "Urban"],
        url: "projects/shadow-studies.html",
        image: "project-card-images/shadow-studies.jpg",
        description: "An exploration of how changing light and shadows transform architectural surfaces.",
    }
];

/* code for changing project list on dropdown menu on home page */


const projectList = document.querySelector("#project-list");
const sort = document.querySelector("#sort");

if (projectList){

function displayProjects(year) {

    const filteredProjects = projects.filter(
        project => project.year === Number(year)
    );

    projectList.innerHTML = filteredProjects.map(project => `
        <article class="grid grid-cols-[10%_25%_15%_25%_25%] items-center py-6 pl-10 w-full">

            <span class="text-sm">
                ${project.number}
            </span>

            <a class="hover:underline" href="${project.url}">
                ${project.title}
            </a>

            <span class="text-sm font-normal">
                ${project.location}
            </span>

            <div class="flex gap-2">
                ${project.tags.map(tag => `
                    <span class="bg-gray-200 px-2 py-1 text-xs uppercase">
                        ${tag}
                    </span>
                `).join("")}
            </div>

        </article>
    `).join("");
}
}

if (sort) {
sort.addEventListener("change", () => {
    displayProjects(sort.value);
});

displayProjects(sort.value);

}


/* email subscription submission form */

const form = document.querySelector("#newsletter-form");
const email = document.querySelector("#email");
const message = document.querySelector("#message");

if (form) {
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const emailAddress = email.value;

    message.textContent = `Thank you! ${emailAddress} has been added to the mailing list.`;

    email.value = "";
});
}

/* project cards appearing on project screen */
const projectCards = document.querySelector("#project-cards");

if (projectCards) {
function displayProjectCards() {

    projectCards.innerHTML = projects.map(project => `
        
        <div class="p-8 border border-gray-300 ">

        <article class=" p-4">

            <a href="${project.url}">

                <img
                    src="${project.image}"
                    alt="${project.title}"
                    class="w-full aspect-[4/3] object-cover border border-transparent hover:border-gray-500 border-5"
                >
            </a>


                <div class="mt-4">

                    <div class="flex justify-between items-start">

                        <a href="${project.url}">

                        <h2 class="font-bold uppercase hover:underline decoration-gray-500 decoration-3">
                            ${project.title}
                        </h2>
                        </a>

                        <span class="text-xs border p-2 border-gray-300 bg-gray-100">
                            ID_${project.number}
                        </span>

                    </div>

                    <p class="mt-3 text-sm font-normal normal-case">
                        ${project.description}
                    </p>

                    <div class="mt-6 flex gap-4">
                        ${project.tags.map(tag => `
                            <span class="bg-gray-200 px-2 py-1 text-xs uppercase">
                                ${tag}
                            </span>
                        `).join("")}
                    </div>

                </div>

        </article>
        </div>
    `).join("");
}

displayProjectCards();
}

const loadMore = document.querySelector("#load-more");
const pageNumber = document.querySelector("#page-number");

let currentPage = 1;
const totalPages = 4;

if (loadMore) {
loadMore.addEventListener("click", () => {

    if (currentPage < totalPages) {
        currentPage++;

        pageNumber.textContent =
            `VIEWING PAGE 0${currentPage} OF 0${totalPages}`;
    }

});

}