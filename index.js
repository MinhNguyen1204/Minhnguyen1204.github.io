document.addEventListener("DOMContentLoaded", () => {
	const navItem = document.querySelectorAll(".nav-item");
	const mainMenu = document.querySelectorAll(".main-menu") || [];

	const getPercentOfScrollpage = (currentScroll) => {
		const html = document.querySelector("html");
		if (currentScroll <= 0) return 0;
		return (currentScroll / (html.scrollHeight - html.clientHeight)) * 100;
	};
	const handleScroll = () => {
		const scrollDistance = document.querySelector("html")?.scrollTop;
		if (!mainMenu?.length) return;
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

	const handleClickNavItem = (element, idx) => {
		if (!mainMenu.length || !mainMenu[idx]) return;

		mainMenu[idx].scrollIntoView({
			behavior: "smooth",
		});
	};
	document.addEventListener("scroll", handleScroll, true);

	if (navItem.length) {
		navItem.forEach((ele, idx) => {
			ele.onclick = () => handleClickNavItem(ele, idx);
		});
	}
});
