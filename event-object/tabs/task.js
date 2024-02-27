const tabs = Array.from(document.getElementsByClassName("tab"))
const tabContent = Array.from(document.getElementsByClassName('tab__content'))
for (let tab of tabs) {
  tab.addEventListener('click', () => {
    let actTabs = document.getElementsByClassName('tab_active');
    for (const elem of actTabs) {
      elem.className = 'tab';
    }
    tab.className = "tab tab_active";

    let ind = tabs.indexOf(tab)

    let actTabsContent = document.getElementsByClassName('tab__content tab__content_active');
    for (const elem of actTabsContent) {
      elem.className = 'tab__content';
    }
    tabContent[ind].className = 'tab__content tab__content_active'
  })
}