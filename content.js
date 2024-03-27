// Content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getSelectedEmail") {
      const emailContent = getEmailContent();
      sendResponse({ emailContent });
    }
  });
  
  function getEmailContent() {
    // Placeholder function for demo purposes
    // In a real scenario, you would extract the email content from the webpage
    return "URGENT: Verify your account information now!";
  }
  
