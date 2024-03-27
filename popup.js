// Popup script
document.addEventListener("DOMContentLoaded", () => {
    const scanButton = document.getElementById("scanButton");
    const resultDiv = document.getElementById("result");
  
    scanButton.addEventListener("click", () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        chrome.scripting.executeScript({
          target: { tabId: activeTab.id },
          function: getEmailContent,
        }, (results) => {
          const emailContent = results[0].result;
          chrome.runtime.sendMessage({ action: "scanEmail", emailContent }, (response) => {
            const isPhishing = response.isPhishing;
            if (isPhishing) {
              resultDiv.textContent = "This email appears to be phishing!";
            } else {
              resultDiv.textContent = "This email seems legitimate.";
            }
          });
        });
      });
    });
  });
  
  function getEmailContent() {
    const emailNode = document.querySelector("div.email-content"); // Replace with actual selector
    return emailNode ? emailNode.textContent.trim() : "";
  }
  
