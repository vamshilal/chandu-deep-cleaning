/* =========================================================
   CHANDU DEEP CLEANING SERVICES
   JAVASCRIPT
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", function () {

        nav.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (nav.classList.contains("active")) {
            icon.classList.remove("bi-list");
            icon.classList.add("bi-x-lg");
        } else {
            icon.classList.remove("bi-x-lg");
            icon.classList.add("bi-list");
        }

    });


    nav.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            nav.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("bi-x-lg");
            icon.classList.add("bi-list");

        });

    });

}


/* ================= CURRENT YEAR ================= */

const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    },
    {
        threshold: 0.12,
        rootMargin: "0px 0px -70px 0px"
    }
);

revealElements.forEach(function (element) {
    revealObserver.observe(element);
});


/* ================= HEADER SHADOW ================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", function () {

    if (!header) return;

    if (window.scrollY > 20) {
        header.style.boxShadow =
            "0 8px 30px rgba(11, 31, 58, 0.08)";
    } else {
        header.style.boxShadow = "none";
    }

});


/* ================= BOOKING FORM ================= */

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    /* Prevent selecting previous dates */

    const dateInput = document.getElementById("bookingDate");

    if (dateInput) {

        const today = new Date();

        const yearValue = today.getFullYear();
        const monthValue = String(today.getMonth() + 1).padStart(2, "0");
        const dayValue = String(today.getDate()).padStart(2, "0");

        dateInput.min =
            `${yearValue}-${monthValue}-${dayValue}`;

    }


    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("customerName").value.trim();

        const phone =
            document.getElementById("customerPhone").value.trim();

        const service =
            document.getElementById("service").value;

        const date =
            document.getElementById("bookingDate").value;

        const time =
            document.getElementById("bookingTime").value;

        const address =
            document.getElementById("address").value.trim();

        const message =
            document.getElementById("message").value.trim();


        /* PHONE VALIDATION */

        if (!/^[6-9]\d{9}$/.test(phone)) {

            alert(
                "Please enter a valid 10-digit Indian mobile number."
            );

            return;
        }


        /* DATE */

        const selectedDate = new Date(date);

        const formattedDate =
            selectedDate.toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "long",
                year: "numeric"
            });


        /* WHATSAPP MESSAGE */

        let whatsappMessage =
`Hello Chandu Deep Cleaning Services,

I would like to book a cleaning service.

*Customer Details*
Name: ${name}
Phone: ${phone}

*Cleaning Service*
${service}

*Preferred Date*
${formattedDate}

*Preferred Time*
${time}

*Service Address*
${address}`;


        if (message) {

            whatsappMessage +=
`\n\n*Additional Requirements*
${message}`;

        }


        whatsappMessage +=
`\n\nPlease confirm the availability and booking details.

Thank you.`;


        /* OPEN WHATSAPP */

        const whatsappURL =
            "https://wa.me/919014391645?text=" +
            encodeURIComponent(whatsappMessage);


        window.open(whatsappURL, "_blank");

    });

}


/* ================= OUTSIDE MENU CLICK ================= */

document.addEventListener("click", function (event) {

    if (!nav || !menuBtn) return;

    const clickedInsideNav =
        nav.contains(event.target);

    const clickedMenu =
        menuBtn.contains(event.target);

    if (
        nav.classList.contains("active") &&
        !clickedInsideNav &&
        !clickedMenu
    ) {

        nav.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("bi-x-lg");
        icon.classList.add("bi-list");

    }

});