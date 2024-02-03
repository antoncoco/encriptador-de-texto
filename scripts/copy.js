function copyToClipboard() {
    const textToCopiedElement = document.getElementById("output-text");
    const textCopied = textToCopiedElement.value;
    navigator.clipboard.writeText(textCopied);
    const copiedTooltipElement = document.getElementById("copied-tooltip");
    copiedTooltipElement.classList.remove("hidden");
    setTimeout(() => {
        copiedTooltipElement.classList.add("hidden");
    }, 500);
}