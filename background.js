let username;

function deleteParticipant() {
  db.collection('participants').doc(username).delete();
}

chrome.runtime.onMessage.addListener(message => username = message.username);

chrome.tabs.onRemoved.addListener(deleteParticipant);
chrome.tabs.onReplaced.addListener(deleteParticipant);
chrome.windows.onRemoved.addListener(deleteParticipant);