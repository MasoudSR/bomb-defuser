// sim pishrafte

const simPishrafteBtn = document.querySelector(".sim-pishrafte-btn");
const result = document.querySelector(".result");

simPishrafteBtn.addEventListener("click", simPishrafteHandler);

function simPishrafteHandler() {
	const red = document.getElementById("red").checked;
	const blue = document.getElementById("blue").checked;
	const star = document.getElementById("star").checked;
	const led = document.getElementById("led").checked;

	if (
		(red && !blue && !star && !led) ||
		(!red && blue && !star && !led) ||
		(red && blue && !star && !led) ||
		(red && blue && !star && led)
	) {
		result.innerText = "اگر آخرین رقم شماره سریال زوج است، سیم را ببرید";
	}

	if ((red && !blue && star && !led) || (!red && blue && !star && led) || (!red && blue && star && led)) {
		result.innerText = "اگر بمب یک درگاه موازی دارد، سیم را ببرید";
	}

	if ((red && !blue && !star && led) || (red && !blue && star && led) || (!red && !blue && star && led)) {
		result.innerText = "اگر بمب تعداد 2 یا بیشتر باتری دارد، سیم را ببرید";
	}

	if ((!red && !blue && !star && !led) || (red && !blue && star && !led) || (!red && !blue && star && !led)) {
		result.innerText = "سیم را ببرید";
	}

	if ((!red && blue && star && !led) || (red && blue && star && led) || (!red && !blue && !star && led)) {
		result.innerText = "سیم را نبرید";
	}
}

// tavali simha

const tavaliBtn = document.querySelector(".tavali-btn");
const tavaliResult = document.querySelector(".tavali-result");
const tavaliReset = document.querySelector(".tavali-rst");

let pishamadRed = 0;
let pishamadBlue = 0;
let pishamadBlack = 0;

tavaliBtn.addEventListener("click", tavaliHandler);
tavaliReset.addEventListener("click", tavaliReseter);

function tavaliHandler() {
	const red = document.getElementById("tavali-red").checked;
	const blue = document.getElementById("tavali-blue").checked;
	const black = document.getElementById("tavali-black").checked;
	const a = document.getElementById("a").checked;
	const b = document.getElementById("b").checked;
	const c = document.getElementById("c").checked;

	if (red) {
		switch (pishamadRed) {
			case 0:
				c ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadRed++;
				break;
			case 1:
				b ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadRed++;
				break;
			case 2:
				a ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadRed++;
				break;
			case 3:
				c || a ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadRed++;
				break;
			case 4:
				b ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadRed++;
				break;
			case 5:
				a || c ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadRed++;
				break;
			case 6:
				a || b || c ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadRed++;
				break;
			case 7:
				a || b ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadRed++;
				break;
			case 8:
				b ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadRed++;
				break;
			default:
				break;
		}
	}

	if (blue) {
		switch (pishamadBlue) {
			case 0:
				b ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadBlue++;
				break;
			case 1:
				a || c ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadBlue++;
				break;
			case 2:
				b ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadBlue++;
				break;
			case 3:
				a ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadBlue++;
				break;
			case 4:
				b ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadBlue++;
				break;
			case 5:
				b || c ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadBlue++;
				break;
			case 6:
				c ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadBlue++;
				break;
			case 7:
				a || c ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadBlue++;
				break;
			case 8:
				a ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadBlue++;
				break;
			default:
				break;
		}
	}
	if (black) {
		switch (pishamadBlack) {
			case 0:
				a || b || c ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadBlack++;
				break;
			case 1:
				a || c ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadBlack++;
				break;
			case 2:
				b ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadBlack++;
				break;
			case 3:
				c || a ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadBlack++;
				break;
			case 4:
				b ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadBlack++;
				break;
			case 5:
				b || c ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadBlack++;
				break;
			case 6:
				a || b ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadBlack++;
				break;
			case 7:
				c ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadBlack++;
				break;
			case 8:
				c ? (tavaliResult.innerText = "ببر") : (tavaliResult.innerText = "نبر");
				pishamadBlack++;
				break;
			default:
				break;
		}
	}
}

function tavaliReseter() {
	pishamadRed = 0;
	pishamadBlue = 0;
	pishamadBlack = 0;
	tavaliResult.innerText = "ریست شد";
}

// hafeze

const hafezeBtn = document.querySelector(".hafeze-btn");
const hafezeResult = document.querySelector(".hafeze-result");

let level = 1;
let levelsInfo = {
	1: {
		mogheiat: "1",
		barchasb: "1",
	},
	2: {
		mogheiat: "1",
		barchasb: "1",
	},
	3: {
		mogheiat: "1",
		barchasb: "1",
	},
	4: {
		mogheiat: "1",
		barchasb: "1",
	},
};

hafezeBtn.addEventListener("click", hafezeHandler);

function hafezeHandler() {
	const hafezeNumber = document.getElementById("hafeze-number").value;

	document.getElementById("label").disabled = true;
	document.getElementById("label").disabled = true;

	switch (level) {
		case 1:
			if (hafezeNumber == 1 || 2) {
				hafezeResult.innerText = "موقعیت دوم را فشار دهید";
				levelsInfo[level].mogheiat = 2;
				applyInfo(level, "barchasb");
			}
			if (hafezeNumber == 3) {
				hafezeResult.innerText = "موقعیت سوم را فشار دهید";
				levelsInfo[level].mogheiat = 3;
				applyInfo(level, "barchasb");
			}
			if (hafezeNumber == 3) {
				hafezeResult.innerText = "موقعیت چهارم را فشار دهید";
				levelsInfo[level].mogheiat = 4;
				applyInfo(level, "barchasb");
			}
			level++;
			break;
		case 2:
			if (hafezeNumber == 1) {
				hafezeResult.innerText = "دکمه با برچسب ۴ را فشار دهید";
				levelsInfo[level].barchasb = 4;
				applyInfo(level, "mogheiat");
			}
			if (hafezeNumber == 2 || 4) {
				hafezeResult.innerText = `دکمه با موقعیت ${levelsInfo[1].mogheiat} را فشار دهید`;
				levelsInfo[level].mogheiat = levelsInfo[1].mogheiat;
				applyInfo(level, "barchasb");
			}
			if (hafezeNumber == 3) {
				hafezeResult.innerText = "موقعیت اول را فشار دهید";
				levelsInfo[level].mogheiat = 1;
				applyInfo(level, "barchasb");
			}
			level++;
			break;
		case 3:
			if (hafezeNumber == 1) {
				hafezeResult.innerText = `دکمه با برچسب ${levelsInfo[2].barchasb} را فشار دهید`;
				levelsInfo[level].barchasb = levelsInfo[2].barchasb;
				applyInfo(level, "mogheiat");
			}
			if (hafezeNumber == 2) {
				hafezeResult.innerText = `دکمه با برچسب ${levelsInfo[1].barchasb} را فشار دهید`;
				levelsInfo[level].barchasb = levelsInfo[1].barchasb;
				applyInfo(level, "mogheiat");
			}
			if (hafezeNumber == 3) {
				hafezeResult.innerText = "موقعیت سوم را فشار دهید";
				levelsInfo[level].mogheiat = 3;
				applyInfo(level, "barchasb");
			}
			if (hafezeNumber == 4) {
				hafezeResult.innerText = "دکمه با برچسب ۴ را فشار دهید";
				levelsInfo[level].barchasb = 4;
				applyInfo(level, "mogheiat");
			}
			level++;
			break;
		case 4:
			if (hafezeNumber == 1) {
				hafezeResult.innerText = `دکمه با موقعیت ${levelsInfo[1].mogheiat} را فشار دهید`;
				levelsInfo[level].mogheiat = levelsInfo[1].mogheiat;
				applyInfo(level, "barchasb");
			}
			if (hafezeNumber == 2) {
				hafezeResult.innerText = "موقعیت اول را فشار دهید";
				levelsInfo[level].mogheiat = 1;
				applyInfo(level, "barchasb");
			}
			if (hafezeNumber == 3 || 4) {
				hafezeResult.innerText = `دکمه با موقعیت ${levelsInfo[2].mogheiat} را فشار دهید`;
				levelsInfo[level].mogheiat = levelsInfo[2].mogheiat;
				applyInfo(level, "barchasb");
			}
			level++;
			break;
		case 5:
			if (hafezeNumber == 1) {
				hafezeResult.innerText = `دکمه با برچسب ${levelsInfo[1].barchasb} را فشار دهید`;
			}
			if (hafezeNumber == 2) {
				hafezeResult.innerText = `دکمه با برچسب ${levelsInfo[2].barchasb} را فشار دهید`;
			}
			if (hafezeNumber == 3) {
				hafezeResult.innerText = `دکمه با برچسب ${levelsInfo[4].barchasb} را فشار دهید`;
			}
			if (hafezeNumber == 4) {
				hafezeResult.innerText = `دکمه با برچسب ${levelsInfo[3].barchasb} را فشار دهید`;
			}
			break;
		default:
			break;
	}
}

function applyInfo(level, item) {
	if (item === "barchasb") {
		const labelInput = document.getElementById("label");
		labelInput.disabled = false;
		labelInput.value = "";
		labelInput.addEventListener("change", () => {
			levelsInfo[level].barchasb = labelInput.value;
		});
	}
	if (item === "mogheiat") {
		const positionInput = document.getElementById("position");
		positionInput.disabled = false;
		positionInput.value = "";
		positionInput.addEventListener("change", () => {
			levelsInfo[level].mogheiat = labelInput.value;
		});
	}
}

document.querySelector(".hafeze-rst").addEventListener("click", () => {
	level = 1;
	const positionInput = document.getElementById("position");
	positionInput.disabled = true;
	positionInput.value = "";
	const labelInput = document.getElementById("label");
	labelInput.disabled = true;
	labelInput.value = "";
	document.getElementById("hafeze-number").value = "";
});

document.querySelector(".sim-pishrafte h1").addEventListener("click", () => {
	document.querySelector(".sim-pishrafte").classList.toggle("max");
	document.querySelector(".tavali-simha").classList.remove("max");
	document.querySelector(".hafeze").classList.remove("max");
});

document.querySelector(".tavali-simha h1").addEventListener("click", () => {
	document.querySelector(".tavali-simha").classList.toggle("max");
	document.querySelector(".sim-pishrafte").classList.remove("max");
	document.querySelector(".hafeze").classList.remove("max");
});

document.querySelector(".hafeze h1").addEventListener("click", () => {
	document.querySelector(".hafeze").classList.toggle("max");
	document.querySelector(".sim-pishrafte").classList.remove("max");
	document.querySelector(".tavali-simha").classList.remove("max");
});
