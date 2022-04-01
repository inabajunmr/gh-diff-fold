function fold() {
    Array.from(document.getElementsByClassName("file")).forEach(e => {e.classList.remove("open"); e.classList.remove("Details--on");});
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request === "fold") {
			fold();
		}
	}
  );