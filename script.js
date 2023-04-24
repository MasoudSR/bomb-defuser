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
