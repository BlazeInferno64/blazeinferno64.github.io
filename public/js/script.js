
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

const popupBg = document.querySelector(".popup-bg");
const popupInfo = document.querySelector("#in");
const closePopupBtn = document.querySelector(".close");

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

images.forEach(img => {
    img.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    });
})

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
        alert(`Could not load visitor count!`);
        visitorCount.innerText = `Visitors: 0`;
        console.error("Error fetching visitor count:", error);
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
        alert(`Sucessfully copied!`)
        setTimeout(() => {
            alertCopied.innerText = `Copy Code`
        }, 3000);
    } catch (error) {

    }
})

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
    popupBg.classList.add("ok");
    popupInfo.innerText = `Sending...`;
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
        alert(`Please select your country!`);
        e.preventDefault(); // Prevent form submission
        return;
    }
    popupBg.classList.add("ok");
    popupInfo.innerText = `Sending...`;
    alert(`Thanks for contacting me! I’ll try to respond as soon as I can. However, please keep in mind that it may take up to 24–48 hours to get a reply!`);
    return console.log(`Form submitted!`);
})



const loadProject = async (repoName, prefix, project) => {
    try {
        const Project = document.querySelector(`#${project}`);
        const ProjectAbout = document.querySelector(`#${prefix}-about`);
        const ProjectName = document.querySelector(`#${prefix}`);
        const ProjectStars = document.querySelector(`#${prefix}-stars`);
        const ProjectForks = document.querySelector(`#${prefix}-fork`);
        const ProjectDemo = document.querySelector(`#${prefix}-demo`);
        const ProjectRepo = document.querySelector(`#${prefix}-repo`);
        const ProjectCreatedDate = document.querySelector(`#${prefix}-date-created`);
        const ProjectUpdatedDate = document.querySelector(`#${prefix}-date-updated`);

        const repo = await client.getSpecificRepo(username, repoName);

        Project.innerText = repo.name;
        ProjectName.innerText = repo.name;
        ProjectAbout.innerText = repo.description || "No description provided.";
        ProjectStars.innerText = `Stars: ${repo.stargazers_count}`;
        ProjectForks.innerText = `Forks: ${repo.forks_count}`;
        ProjectDemo.href = repo.homepage || repo.html_url;
        ProjectRepo.href = repo.html_url;

        ProjectCreatedDate.innerText =
            `${formatDate(repo.created_at)} (${lastUpdated(repo.created_at)})`;

        ProjectUpdatedDate.innerText =
            `${formatDate(repo.updated_at)} (${lastUpdated(repo.updated_at)})`;

    } catch (error) {
        alert(error);
        console.error(`Failed to load ${repoName}`, error);
    }
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
    }
}


window.onload = async (e) => {
    try {

        await loadCountries();

        console.log("Loaded window!");
        loadBg.classList.add("hide");
        Body.classList.remove("no-scroll");

        setTimeout(() => {
            popupBg.classList.add("ok");
            popupInfo.innerText = `Welcome to my website :)`;
        }, 500);

        
       /* await loadVisitors();
        const userRepo = await client.getSpecificRepo(username, "BlazeInferno64");
        const user = await client.getUser(username);
        //console.log(user);
        //const updatedDate = new Date(user.updated_at);

        aboutDb.datetime = userRepo.updated_at;
        document.querySelector(".info-db").title = `This was last updated on ${formatDate(userRepo.updated_at)} (${lastUpdated(userRepo.updated_at)})`;
        document.querySelector(".followers").innerHTML = `Followers: ${user.followers}`;
        document.querySelector(".following").innerHTML = `Following: ${user.following}`;
        aboutDb.innerText = `${formatDate(userRepo.updated_at)} (${lastUpdated(userRepo.updated_at)})`;

        await loadProject("blaze-audio-player", "first-project", "project1");
        await loadProject("NotePlus", "second-project", "project2");
        await loadProject("blazed.js", "third-project", "project3");*/
    } catch (error) {
        alert(error);
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
    if (projectCards) {
        if (y > 700) {
            projectCards.forEach(card => {
                card.classList.add("pop");
            })
        } else {
            projectCards.forEach(card => {
                card.classList.remove("pop");
            })
        }
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
