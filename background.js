// Background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "scanEmail") {
      // Implement email scanning and phishing detection logic here
      const emailContent = request.emailContent;
      // Placeholder detection logic
      const isPhishing = detectPhishing(emailContent);
      sendResponse({ isPhishing });
    }
  });
  
  function detectPhishing(emailContent) {
    // Placeholder function for demo purposes
    // Replace with actual machine learning model or detection logic
    // For simplicity, just check for the presence of "phishing" in the email content
    return emailContent.toLowerCase().includes("phishing");
  }
  
