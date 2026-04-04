// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});


// Hero buttons functionality
const primaryBtn = document.querySelector(".btn-primary");
const secondaryBtn = document.querySelector(".btn-secondary");

if (primaryBtn) {
    primaryBtn.addEventListener("click", () => {
        document.querySelector("#products").scrollIntoView({ behavior: "smooth" });
    });
}

if (secondaryBtn) {
    secondaryBtn.addEventListener("click", () => {
        document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    });
}


// Contact form handler (WhatsApp integration)
function handleSubmit(e) {
    e.preventDefault();

    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const phone = document.querySelector('input[type="tel"]').value;
    const message = document.querySelector('textarea').value;

    if (!name || !email || !phone || !message) {
        alert("Please fill all fields");
        return;
    }

    const whatsappMessage = `New Inquiry:
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}`;

    window.open(
        `https://wa.me/966570644951?text=${encodeURIComponent(whatsappMessage)}`,
        "_blank"
    );

    e.target.reset();
}


// Analytics button
const analyticsBtn = document.querySelector(".analytics-btn");

if (analyticsBtn) {
    analyticsBtn.addEventListener("click", () => {
        alert("Analytics dashboard coming soon!");
    });
}


// Product card tracking (basic)
document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
        console.log("Product clicked:", card.innerText);
    });
});
