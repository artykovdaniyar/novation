const calcScroll = () => {
	let div = document.createElement("div");
	div.style.width = "50px";
	div.style.height = "50px";
	div.style.overflowY = "scroll";
	div.style.visibility = "hidden";

	document.body.appendChild(div);
	let scrollWidth = div.offsetWidth - div.clientWidth;
	div.remove();

	return scrollWidth;
};

const nonScrolled = () => {
	const scroll = calcScroll();
	document.body.style.marginRight = `${scroll}px`;
};
const scrolled = () => {
	document.body.style.marginRight = `0px`;
};

const unscrollBody = () => {
	if (!document.body.classList.contains("non-scroll")) {
		document.body.classList.add("non-scroll");
		nonScrolled();
	} else {
		document.body.classList.remove("non-scroll");
		scrolled();
	}
};
export default unscrollBody;
