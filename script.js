
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
    },
    {
        year: 2024,
        number: "007",
        title: "Fractured Pavilion",
        location: "Porto, PT",
        tags: ["Public", "Modern"],
        url: "projects/fractured-pavilion.html",
        image: "project-card-images/fractured-pavilion.jpg",
        description: "Angular volumes shifted against one another to create a sequence of sheltered outdoor rooms.",
    },

    {
        year: 2024,
        number: "008",
        title: "The Timber Archive",
        location: "Oslo, NO",
        tags: ["Public", "Interior"],
        url: "projects/timber-archive.html",
        image: "project-card-images/timber-archive.jpg",
        description: "A repository of local records housed within a warm, exposed timber structural grid.",
    },

    {
        year: 2023,
        number: "009",
        title: "Threshold House",
        location: "Kyoto, JP",
        tags: ["Residential", "Minimalist"],
        url: "projects/threshold-house.html",
        image: "project-card-images/threshold-house.jpg",
        description: "A sequence of sliding thresholds blurring the boundary between interior rooms and garden.",
    },

    {
        year: 2023,
        number: "010",
        title: "Sunken Courtyard Museum",
        location: "Cairo, EG",
        tags: ["Public", "Concrete"],
        url: "projects/sunken-courtyard-museum.html",
        image: "project-card-images/sunken-courtyard-museum.jpg",
        description: "Gallery spaces arranged below grade around a central courtyard shielded from the desert heat.",
    },

    {
        year: 2023,
        number: "011",
        title: "Glass Reservoir",
        location: "Reykjavik, IS",
        tags: ["Science", "Modern"],
        url: "projects/glass-reservoir.html",
        image: "project-card-images/glass-reservoir.jpg",
        description: "A transparent research facility set against volcanic terrain, designed to track geothermal activity.",
    },

    {
        year: 2023,
        number: "012",
        title: "Terraced Housing Block",
        location: "Medellín, CO",
        tags: ["Urban", "Residential"],
        url: "projects/terraced-housing-block.html",
        image: "project-card-images/terraced-housing-block.jpg",
        description: "Stepped housing units following the hillside contour, each unit opening onto a shared terrace.",
    },
    
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
        <article class="grid grid-cols-[10%_25%_15%_25%_25%] items-center py-6 pl-10 gap-2 w-full">

            <span class="text-[6px] sm:text-sm">
                ${project.number}
            </span>

            <a class="hover:underline text-[10px] sm:text-base" href="${project.url}">
                ${project.title}
            </a>

            <span class="text-[6px] sm:text-sm font-normal">
                ${project.location}
            </span>

            <div class="flex gap-2">
                ${project.tags.map(tag => `
                    <span class="bg-gray-200 px-2 py-1 text-[6px] sm:text-xs uppercase">
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
const loadMore = document.querySelector("#load-more");
const loadLess = document.querySelector("#load-less");
const pageNumber = document.querySelector("#page-number");

const PAGE_SIZE = 6;
let currentPage = 1;

/*updates automatically as "projects" grows/shrinks */
const totalPages = Math.ceil(projects.length / PAGE_SIZE);
function displayProjectCards() {
    const start = (currentPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const pageItems = projects.slice(start, end);

    projectCards.innerHTML = pageItems.map(project => `
        <div class="p-8 border border-gray-300 ">
            <article class=" p-4 group">
                <a href="${project.url}">
                    <img
                        src="${project.image}"
                        alt="${project.title}"
                        class="w-full aspect-[4/3] object-cover border border-transparent group-hover:border-gray-500 border-5"
                    >
                </a>

                <div class="mt-4">
                    <div class="flex justify-between items-start">
                        <a href="${project.url}">
                            <h2 class="font-bold uppercase group-hover:underline decoration-gray-300 decoration-3">
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

    if (pageNumber) {
        pageNumber.textContent = `VIEWING PAGE 0${currentPage} OF 0${totalPages}`;
    }

    if (loadMore) {
        loadMore.disabled = currentPage >= totalPages;
    }

    if (loadLess) {
        loadLess.disabled = currentPage <= 1;
    }
}

/* shows project cards */
if (projectCards) {
    displayProjectCards();
}


/* loads next pages */
if (loadMore) {
    loadMore.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayProjectCards();
        }
    });
}


/* loads previous pages */
if (loadLess) {
    loadLess.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            displayProjectCards();
        }
    });
}