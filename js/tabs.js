const tabBar = document.querySelector('.tab-bar')
const tabPanelContainer = document.querySelector('.tab-panel-container')
const tabs = Array.from(tabBar.children);
const tabPanels = Array.from(tabPanelContainer.children);
console.log(tabs);
console.log(tabPanels);

console.log(tabBar);
tabBar.addEventListener('click', e => {
  // determine which tab was clicked
  targetTab = e.target.closest('.tab');
  // get the index of the clicked tab
  targetIndex = tabs.findIndex(tab => tab === targetTab);
  // get the clicked tab
  targetTab = tabs[targetIndex];
  targetTabPanel = tabPanels[targetIndex];

  // determine which tab was reviously active
  currentTab = tabBar.querySelector('.active-tab');
  currentTabPanel = tabPanelContainer.querySelector('.active-panel');
  // remove active class from previously selected tab
  currentTab.classList.remove('active-tab');
  currentTabPanel.classList.remove('active-panel');

  // add active class to target tab
  targetTab.classList.add('active-tab');
  targetTabPanel.classList.add('active-panel');

  // updateTabs(tabs, targetTab, targetIndex);
  // updateArrows(targetIndex, previous_button, next_button);
  // updateSlidePos(track, currentSlide, targetSlide);

});


const updateTabs = (dots, targetTab, targetIndex) => {
  if (targetTab) {
    currentTab = dotsNav.querySelector('.currentDot');
    currentDot.classList.remove('currentDot');
    targetDot.classList.add('currentDot');

    console.log(next_button.style.display);
    console.log(previous_button.style.display);
  };
};
