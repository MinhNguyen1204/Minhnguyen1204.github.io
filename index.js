document.addEventListener("DOMContentLoaded", () => {
	const getPercentOfScrollpage = (currentScroll) => {
		const html = document.querySelector("html");
		if (currentScroll <= 0) return 0;
		return (currentScroll / (html.scrollHeight - html.clientHeight)) * 100;
	};
	const handleScroll = () => {
		const mainMenu = document.querySelectorAll(".main-menu");
		if (!mainMenu?.length) return;

		const scrollDistance = document.querySelector("html")?.scrollTop;

		const navItem = document.querySelectorAll(".nav-item");
		mainMenu.forEach((item, index) => {
			if (
				scrollDistance + 20 >= item.offsetTop &&
				scrollDistance <= item.offsetTop + item.parentElement.offsetHeight
			) {
				navItem[index]?.classList?.add("active");
			} else {
				navItem[index]?.classList?.remove("active");
			}
		});

		const currentPercentPage = getPercentOfScrollpage(scrollDistance);

		const percentPage = document.querySelector(".percent-page");
		if (percentPage) percentPage.style.width = `${currentPercentPage}%`;
	};

	document.addEventListener("scroll", handleScroll, true);
});
