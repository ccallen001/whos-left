const RED = '#c8342d';
const GREEN = '#2dc834';

let username;
let userHasGone = false;

function participantNames() {
  return [...document.querySelectorAll('[data-self-name]')].filter((pN, i) => pN.textContent !== 'You' && i % 2 !== 0);
}

const checkForUsername = setInterval(() => {
  if (!username) username = [...document.querySelectorAll('a')].find(div => div.textContent === 'Switch account')?.previousElementSibling.title;

  if (username && participantNames().length) {
    clearInterval(checkForUsername);

    chrome.runtime.sendMessage({ username });

    db.collection('participants').doc(username).set({ hasGone: userHasGone });

    db.collection('participants').onSnapshot(collection => {
      let dbState = [];
      collection.docs.forEach(doc => dbState.push({ name: doc.id, hasGone: doc.data().hasGone }));
      participantNames().forEach(pN => pN.style.color = dbState.find(p => p.name === pN.textContent)?.hasGone ? GREEN : RED);
    });

    document.body.insertAdjacentHTML('afterbegin', `
      <button id="has-gone-btn" style="
        position: absolute;
        top: 32px;
        left: 32px;
        z-index: 10;
        padding: 8px 16px 9px;
        background-color: ${RED};
        color: #121212;
        border: none;
        border-radius: 16px;
        cursor: pointer;
        transition: transform 200ms linear;
      ">Toggle Gone Status</button>
    `);

    const hasGoneBtn = document.getElementById('has-gone-btn');
    hasGoneBtn.onclick = () => {
      userHasGone = !userHasGone;
      hasGoneBtn.style.backgroundColor = userHasGone ? GREEN : RED;
      db.collection('participants').doc(username).update({ hasGone: userHasGone });
    };
  }
}, 100);