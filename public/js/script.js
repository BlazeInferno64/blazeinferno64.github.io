const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mob-nav");

const copyEgBtn = document.querySelector(".copy");
const egCode = document.querySelector(".gt-main-2");

const apiLink = document.querySelector(".gt-main");
const copyApiLinkBtn = document.querySelector(".copy-api");

const firstNameInput = document.querySelector(".fname");
const lastNameInput = document.querySelector(".lname");
const countryInput = document.querySelector(".country");
const queryInput = document.querySelector(".query");
const otherCountry = document.querySelector(".ot");
const form = document.querySelector("#form");
const totalWords = document.querySelector("#wrds");

const submitContactFormBtn = document.querySelector(".submit");
const resetContactFormBtn = document.querySelector(".reset");

const newsForm = document.querySelector(".news-form");
const newsEmailInput = document.querySelector("#email-news");
const submitEmailNewsFormBtn = document.querySelector(".sub");

const loadBg = document.querySelector(".load-bg");
//const loadingText = document.querySelector(".txt");
const Body = document.querySelector("body");

const topBtn = document.querySelector(".top-btn");
const header = document.querySelector(".head");

const githubLink = document.querySelector("#lin");
const footerFluid = document.querySelector(".fluid");

const aboutDb = document.querySelector("#ab-db");
const select = document.querySelector(".country");

const visitorCount = document.querySelector(".visitor-count");

const lazyLoad = document.querySelector(".lazy-load");
const avatar = document.querySelector(".avatar");
const cardLazyLoad = document.querySelector(".card-lazy-load");
const cardAvatar = document.querySelector(".c-av");

const profileCard = document.querySelector(".card");
const projectCards = document.querySelectorAll(".project-card");

const codeDemo = document.querySelectorAll(".gt");

const images = document.querySelectorAll("img");

const img = document.querySelector(".img");

const websiteUpdateText = document.querySelector(".lst-up");

const loaderText = document.querySelector(".loader-txt");

const parentNav = document.querySelector(".nav");

let isShown = false;

images.forEach(img => {
    img.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    });
})

/*
const updateLoadProgress = () => {
    if (!loaderText) return;

    if (document.readyState === 'loading') {
        loaderText.innerText = '25%';
    }
    else if (document.readyState === 'interactive') {
        loaderText.innerText = '50%';
        //progressBar.style.width = '50%';
    }
    else if (document.readyState === 'complete') {
        loaderText.innerText = '100%';

        //progressBar.style.width = '100%';

        // Handle the fade-out and removal seamlessly once complete
        setTimeout(() => {
            //progressBar.style.opacity = '0';
            loadBg.classList.add("hide");
            setTimeout(() => loadBg.remove(), 400);
        }, 400);
    }
}*/


// Count expected assets from the DOM as our denominator
const expectedAssets = document.querySelectorAll(
    "img, script[src], link[rel='stylesheet'], link[rel='preload'], video, audio, source"
).length;

let loadedCount = 0;

const resourceObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries()) {
        loadedCount++;
        const name = entry.name.split('/').pop();

        const percent = expectedAssets > 0
            ? Math.min(100, Math.round((loadedCount / expectedAssets) * 100))
            : 100;

        loaderText.innerText = `Loading: ${name} - ${percent}%`;

        if (loadedCount >= expectedAssets) {
            window.addEventListener('load', (e) => {
                setTimeout(() => {
                    loadBg.classList.add("hide");
                    Body.classList.remove("no-scroll");
                    loaderText.innerText = `Everything loaded successfully!`;
                    setTimeout(() => loadBg.remove(), 400);
                }, 400);
            })
        }
    }
});

resourceObserver.observe({ type: "resource", buffered: true });

// Listen for lifecycle transitions (interactive & complete)
//document.addEventListener('readystatechange', updateLoadProgress);


const username = "blazeinferno64";

const formatDate = (date) => {
    const d = new Date(date);

    const day = d.getDate();
    const year = d.getFullYear();

    const month = d.toLocaleString('en-US', { month: 'long' });

    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');

    const getOrdinal = (n) => {
        if (n > 3 && n < 21) return 'th';
        switch (n % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    return `${day}${getOrdinal(day)} ${month}, ${year} at ${hours}:${minutes}`;
};


const lastUpdated = (date) => {
    const lastModifiedDate = new Date(date);
    const now = new Date();
    const timeDiff = Math.floor((now - lastModifiedDate) / 1000);

    let timeAgo;

    if (timeDiff < 60) {
        timeAgo = "just now";
    } else if (timeDiff < 3600) {
        const minutes = Math.floor(timeDiff / 60);
        timeAgo = `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (timeDiff < 86400) {
        const hours = Math.floor(timeDiff / 3600);
        timeAgo = `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (timeDiff < 604800) { // Less than 7 days
        const days = Math.floor(timeDiff / 86400);
        timeAgo = `${days} day${days !== 1 ? 's' : ''} ago`;
    } else if (timeDiff < 2592000) { // Less than 30 days (but more than or equal to 7 days)
        const weeks = Math.floor(timeDiff / 604800); // 604800 seconds in a week
        timeAgo = `${weeks} week${weeks !== 1 ? 's' : ''} ago`;
    } else if (timeDiff >= 2592000 && timeDiff < 5184000) { // Less than 2 months (but more than or equal to 30 days)
        timeAgo = '1 month ago'; //For anything 30 days or more but less than 2 months
    } else if (timeDiff < 31556952) { // Less than a year
        const months = Math.floor(timeDiff / 2592000); // 2592000 seconds in a month
        timeAgo = `${months} month${months !== 1 ? 's' : ''} ago`;
    } else {
        const years = Math.floor(timeDiff / 31556952); // 31556952 seconds in a year
        timeAgo = `${years} year${years !== 1 ? 's' : ''} ago`;
    }

    return timeAgo;
}

const loadVisitors = async (e) => {
    try {
        const res = await fetch("https://counter-api-kappa.vercel.app/api/count");
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const formattedResponse = await res.json();
        visitorCount.innerText = `Visitors: ${formattedResponse.data.data.up_count ? formattedResponse.data.data.up_count : 0}`;
    } catch (error) {
        //alert(`Could not load visitor count!`);
        visitorCount.innerText = `Visitors: 0`;
        console.error("Error fetching visitor count:", error);
        throw `[Visitor_Count_Error]\nWell it seems like an error occured while loading visitor count!\nPlease try refreshing this page again!`;
    }
}

const loadAvatar = (e) => {
    lazyLoad.classList.add("hide");
    lazyLoad.classList.add("absolute");
    avatar.classList.remove("hide");
    avatar.classList.remove("absolute");
}

const loadCardAvatar = (e) => {
    cardLazyLoad.classList.add("hide");
    cardLazyLoad.classList.add("absolute");
    cardAvatar.classList.remove("hide");
    cardAvatar.classList.remove("absolute");
}

// If image already loaded (cached)
if (avatar.complete) {
    loadAvatar();
    console.log("Avatar loaded from cache!");
} else {
    avatar.addEventListener("load", loadAvatar);
    console.log("Avatar loaded normally!");
}

if (cardAvatar.complete) {
    loadCardAvatar();
    console.log("Card Avatar loaded from cache!");
} else {
    cardAvatar.addEventListener("load", loadCardAvatar);
    console.log("Card Avatar loaded normally!");
}


hamburger.addEventListener("click", (e) => {
    parentNav.classList.toggle("shadow");
    mobileNav.classList.toggle("mob-hght");
    //const checked = document.getElementById("check");
})

function change(x) {
    x.classList.toggle("change");
}

copyEgBtn.addEventListener("click", async (e) => {
    try {
        const alertCopied = document.querySelector(".cc");

        await navigator.clipboard.writeText(egCode.innerText);

        alertCopied.innerText = `Copied!`;

        alert(
            `Successfully copied!

⚠ Please Note:
This snippet is only meant for display!
In a real scenario, you must wrap this code inside an async function (or use it inside an ES module)!`
        );

        setTimeout(() => {
            alertCopied.innerText = `Copy Code`;
        }, 3000);

    } catch (error) {
        console.error("Copy failed:", error);
    }
});


copyApiLinkBtn.addEventListener("click", async (e) => {
    try {
        const alertCopied = document.querySelector(".cp");
        await navigator.clipboard.writeText(apiLink.innerText);
        alertCopied.innerText = `Copied!`;
        alert(`Sucessfully copied: ${apiLink.innerText}!`)
        setTimeout(() => {
            alertCopied.innerText = `Copy Code`
        }, 3000);
    } catch (error) {

    }
})


function updateFormButtons() {
    const allFilled =
        firstNameInput.value.trim() !== "" &&
        lastNameInput.value.trim() !== "" &&
        queryInput.value.trim() !== "" &&
        countryInput.value !== "default";

    if (allFilled) {
        submitContactFormBtn.classList.remove("none");
        resetContactFormBtn.classList.remove("none");
    } else {
        submitContactFormBtn.classList.add("none");
        resetContactFormBtn.classList.add("none");
    }
}

// Run on typing or selection change
[firstNameInput, lastNameInput, queryInput].forEach(input => {
    input.addEventListener("input", updateFormButtons);
});
countryInput.addEventListener("change", updateFormButtons);


newsForm.addEventListener("submit", (e) => {
    //popupBg.classList.add("ok");
    //popupInfo.innerText = `Sending...`;
    resetPopupMsg();
    changePopupMsg(`Submitting the form hold on...`);
    openPopup();
    alert(`Thanks for subscribing to my Email newsletter! You will be kept updated about everything!`);
})

queryInput.addEventListener("input", (e) => {
    totalWords.innerText = queryInput.value.length
})


newsForm.addEventListener("input", (e) => {
    if (newsEmailInput.value.length <= 0) {
        submitEmailNewsFormBtn.classList.add("none");
    }
    else {
        submitEmailNewsFormBtn.classList.remove("none");
    }
})

form.addEventListener("submit", (e) => {
    if (countryInput.value === "default") {
        resetPopupMsg();
        changePopupMsg(`Please select your country!`)
        openPopup();
        //alert(`Please select your country!`);
        e.preventDefault(); // Prevent form submission
        return;
    }
    resetPopupMsg();
    changePopupMsg(`Submitting contact form hold on...`)
    openPopup();
    //popupBg.classList.add("ok");
    //popupInfo.innerText = `Sending...`;
    alert(`Thanks for contacting me! I’ll try to respond as soon as I can. However, please keep in mind that it may take up to 24–48 hours to get a reply!`);
    return console.log(`Form submitted!`);
})



// ─────────────────────────────────────────────────────────────────────────────
// PROJECTS CONFIG — add / remove / reorder entries here, nothing else changes.
// ─────────────────────────────────────────────────────────────────────────────
const PROJECTS = [
    {
        repo: "blaze-audio-player",
        logo: "https://blaze-audio-player.vercel.app/public/img/icon.png",
        logoBg: "",
    },
    {
        repo: "NotePlus",
        logo: "https://note-plus-mu.vercel.app/public/img/icon.png",
        logoBg: "",
    },
    {
        repo: "blazed.js",
        logo: "https://github.com/BlazeInferno64/blazed.js/releases/download/v3.4.0/blazed.js-logo-new.png",
        logoBg: "#1e2021",
    },
    {
        repo: 'QR-Codify',
        logo: 'https://qr-codify.vercel.app/logo',
        logoBg: '',
    }
    // ── Add more projects below ──────────────────────────────────────────────
    // {
    //     repo: "your-repo-name",          // GitHub repo name (case-sensitive)
    //     logo: "https://...",              // URL to the project logo image
    //     logoBg: "",                       // Optional background colour for the logo box
    // },
    // ────────────────────────────────────────────────────────────────────────
];

/**
 * Creates and injects a project card into #projects-grid,
 * then fetches real data from GitHub and populates it.
 */
const renderProjectCard = async (projectConfig, index) => {
    const { repo, logo, logoBg } = projectConfig;
    const grid = document.querySelector("#projects-grid");
    if (!grid) return;

    const uid = `proj-${index}`;

    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
        <div class="project-head">
            <p id="${uid}-title">Loading...</p>
        </div>
        <div class="project-main">
            <div class="project-logo"${logoBg ? ` style="background-color:${logoBg}"` : ""}>
                <img src="${logo}" alt="${repo} logo" class="pr-logo" />
            </div>
            <br>
            <div class="project-ab">
                <p class="proj-name" id="${uid}-name">Loading...</p>
                <p class="proj-about" id="${uid}-about">Loading...</p>
            </div>
            <div class="project-in">
                <ul>
                    <li>
                        <i class="fa fa-star"></i>
                        <p id="${uid}-stars">Stars: —</p>
                    </li>
                    <li>
                        <i class="fa fa-code-fork"></i>
                        <p id="${uid}-forks">Forks: —</p>
                    </li>
                    <li>
                        <i class="fa-regular fa-calendar"></i>
                        <p id="${uid}-created">Created: —</p>
                    </li>
                    <li>
                        <i class="fa-regular fa-clock"></i>
                        <p id="${uid}-updated">Updated: —</p>
                    </li>
                </ul>
            </div>
            <div class="project-options">
                <ul>
                    <li>
                        <a id="${uid}-demo" href="#" target="_blank" rel="noopener noreferrer">
                            Live demo <i class="fa-solid fa-arrow-up-right-from-square"></i>
                        </a>
                    </li>
                    <li>
                        <a id="${uid}-repo" href="#" target="_blank" rel="noopener noreferrer">
                            GitHub Repo <i class="fa fa-github"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    `;

    grid.appendChild(card);

    // Fetch & populate
    try {
        const data = await client.getSpecificRepo(username, repo);

        document.getElementById(`${uid}-title`).innerText = data.name;
        document.getElementById(`${uid}-name`).innerText = data.name;
        document.getElementById(`${uid}-about`).innerText = data.description || "No description provided.";
        document.getElementById(`${uid}-stars`).innerText = `Stars: ${data.stargazers_count}`;
        document.getElementById(`${uid}-forks`).innerText = `Forks: ${data.forks_count}`;
        document.getElementById(`${uid}-demo`).href = data.homepage || data.html_url;
        document.getElementById(`${uid}-repo`).href = data.html_url;

        document.getElementById(`${uid}-created`).innerText =
            `${formatDate(data.created_at)} (${lastUpdated(data.created_at)})`;
        document.getElementById(`${uid}-updated`).innerText =
            `${formatDate(data.updated_at)} (${lastUpdated(data.updated_at)})`;
    } catch (error) {
        console.error(`Failed to load project "${repo}":`, error);
        document.getElementById(`${uid}-title`).innerText = repo;
        document.getElementById(`${uid}-name`).innerText = repo;
        document.getElementById(`${uid}-about`).innerText = "Could not load project data.";
    }
};

/**
 * Renders all projects listed in the PROJECTS array.
 */
const loadAllProjects = () => {
    PROJECTS.forEach((project, i) => renderProjectCard(project, i));
};



const loadCountries = async () => {
    try {
        const countries = await countryClient.fetchCountryList();

        select.innerHTML = select.options[0].outerHTML;

        countries.forEach(country => {
            const option = document.createElement("option");
            option.value = country.toLowerCase(); // in, us, etc.
            option.textContent = country.toLocaleString("utf-8");
            select.appendChild(option);
        })
    } catch (error) {
        console.error("Error loading countries:", error);
        throw `[Country_List_Error]\nAn unexpected error occured while loading country lists!\nPlease try refreshing this page again!`;
    }
}


window.onload = async (e) => {
    try {
        isShown = true;
        await loadCountries();

        console.log("Loaded window!");
        //loadBg.classList.add("hide");
        //Body.classList.remove("no-scroll");

        setTimeout(() => {
            resetPopupMsg()
            openPopup();
            //popupBg.classList.add("ok");
            //popupInfo.innerText = `Welcome here :D!`;
        }, 500);

        await loadVisitors();
        const userRepo = await client.getSpecificRepo(username, "BlazeInferno64");
        const user = await client.getUser(username);
        //console.log(user);
        //const updatedDate = new Date(user.updated_at);

        aboutDb.datetime = userRepo.updated_at;
        document.querySelector(".info-db").title = `This was last updated on ${formatDate(userRepo.updated_at)} (${lastUpdated(userRepo.updated_at)})`;
        document.querySelector(".followers").innerText = `Followers: ${user.followers}`;
        document.querySelector(".following").innerText = `Following: ${user.following}`;
        aboutDb.innerText = `${formatDate(userRepo.updated_at)} (${lastUpdated(userRepo.updated_at)})`;

        const mainInfo = await client.getSpecificRepo(username, "blazeinferno64.github.io");
        websiteUpdateText.innerText = `Last updated: ${formatDate(mainInfo.updated_at)} (${lastUpdated(mainInfo.updated_at)})`;



        // Render all projects from the PROJECTS config array (see top of this file)
        loadAllProjects();

    } catch (error) {
        if (navigator && !navigator.onLine) {
            throw `[Network_Error]\nNo internet connection detected!\nPlease try again after connectuing back to internet or try refreshing this page again!`;
        }
        if (isShown) {
            // Use a slight delay to ensure it doesn't clash with the loading screen transition
            setTimeout(() => {
                //closePopup(); // Ensure any existing popup is cleared
                resetPopupMsg();
                openPopup();
                changePopupMsg(error);
            }, 600);
        }
        //alert(error);
        console.error(error);
    }
}

closePopupBtn.addEventListener("click", (e) => {
    popupBg.classList.remove("ok");
})

githubLink.addEventListener("mouseover", (e) => {
    footerFluid.style.width = '100%';
})

githubLink.addEventListener("mouseout", (e) => {
    footerFluid.style.width = '0'
})

//let cardShown = false;
//let projectCardShown = false;

window.addEventListener("scroll", () => {
    const y = window.scrollY;

    // Top button
    topBtn.classList.toggle("no", y <= 50);

    //if (!profileCard) return;

    if (profileCard) {
        if (y > 120) {
            profileCard.classList.add("pop");
            //cardShown = true;
        } else {
            profileCard.classList.remove("pop");
        }
    }
    if (y > 700) {
        document.querySelectorAll(".project-card").forEach(card => card.classList.add("pop"));
    } else {
        document.querySelectorAll(".project-card").forEach(card => card.classList.remove("pop"));
    }
    if (codeDemo) {
        if (y > 900) {
            codeDemo.forEach(card => {
                card.classList.add("pop");
            })
        } else {
            codeDemo.forEach(card => {
                card.classList.remove("pop");
            })
        }
    }
    if (img) {
        if (y > 1200) {
            img.classList.add("pop");
            //cardShown = true;
        } else {
            img.classList.remove("pop");
        }
    }
    //console.log(y);
});

/*

const originalFetch = window.fetch;

window.fetch = async (...args) => {
    const url = args[0]; // The URL being requested
    console.log("🚀 Fetch Request Started:", url);

    try {
        const response = await originalFetch(...args);

        // Check if the HTTP status is NOT in the 200-299 range (e.g., 404 or 500)
        if (!response.ok) {
            handleFetchError(`Request to ${url} failed with status: ${response.status}`);
        }

        console.log("✅ Fetch Request Finished:", url, "Status:", response.status);
        return response;
    } catch (error) {
        // This catches network errors (e.g., user is offline, DNS failure)
        handleFetchError(`Network error while fetching ${url}: ${error.message}`);
        console.error("❌ Fetch Request Failed:", url, error);
        throw error;
    }
};

/**
 * Helper to display the error in your existing popup system
 */
/*
function handleFetchError(message) {
    resetPopupMsg();
    changePopupMsg(message);
    openPopup();
}
*/

const tryCodeBtn = document.querySelector(".try-jolt");

tryCodeBtn.addEventListener("click", (e) => {
    //alert(`This will open Jolt, an online JavaScript playground, in a new tab with the code already filled in for you to try out!`);
    changePopupMsg(`This will open Jolt, an online JavaScript playground, in a new tab with the code already filled in for you to try out!`);
    openPopup();
    const myCodeURL = '?code=Ly8gUHVibGljIGlwIGxvb2t1cCBhcGkgLS0%2BIGZyZWUgcHVibGljIGlwIGxvb2t1cCBzZXJ2aWNlCmNvbnN0IGlwVVJMID0gImh0dHBzOi8vYmxhemUtc2VydmVyLXg3NXAub25yZW5kZXIuY29tL2FwaS9pcCI7Ci8vVXNlcnMgYXBpIC0%2BIGZldGNoZXMgZHVtbXkgdXNlcnMgZGF0YQpjb25zdCB1c2Vyc1VSTCA9ICJodHRwczovL2JsYXplLXNlcnZlci14NzVwLm9ucmVuZGVyLmNvbS9hcGkvdXNlcnMiCi8vUHJveHkgYXBpIC0%2BIGp1c3QgYWRkID91cmw9e3NvbWVfdXJsfSB0byBsb2FkIGl0CmNvbnN0IHByb3h5VVJMID0gImh0dHBzOi8vYmxhemUtc2VydmVyLXg3NXAub25yZW5kZXIuY29tL2FwaS9wcm94eSIKLy8gU3RhcnQgdGhpcyByZXF1ZXN0IHVzaW5nIGZldGNoIGFwaQpjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1c2Vyc1VSTCk7CmNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpOwpjb25zb2xlLmxvZyhkYXRhKTs%3D&run=true';
    const constructedLink = `${window.location.origin}/jolt.html${myCodeURL}`;
    setTimeout(() => {
        window.open(constructedLink, "_blank");
    }, 1000);
})