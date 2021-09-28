const h1 = document.querySelector(".heading-primary");

//Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
	headerEl.classList.toggle("nav-open");
});

// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach((link) => {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const href = link.getAttribute("href");
		console.log(href);

		// scroll back to top
		if (href === "#")
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		if (href !== "#" && href.startsWith("#")) {
			const sectionEL = document.querySelector(href);
			sectionEL.scrollIntoView({
				behavior: "smooth",
			});
			if (
				link.classList.contains("main-nav-link") &&
				headerEl.classList.contains("nav-open")
			) {
				headerEl.classList.toggle("nav-open");
			}
		}
	});
});

//Sticky Navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];
		if (!ent.isIntersecting) {
			document.body.classList.add("sticky");
		}
		if (ent.isIntersecting) {
			document.body.classList.remove("sticky");
		}
	},
	{
		// In the viewport
		root: null,
		threshold: 0,
		rootMargin: "-80px",
	}
);
obs.observe(sectionHeroEl);
