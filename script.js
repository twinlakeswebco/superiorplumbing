'use strict';
document.documentElement.classList.add('js');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');
if (menuButton && navigation) {
  const closeMenu = () => { menuButton.setAttribute('aria-expanded', 'false'); navigation.classList.remove('is-open'); };
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(expanded));
    navigation.classList.toggle('is-open', expanded);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') { closeMenu(); menuButton.focus(); }
  });
  navigation.addEventListener('click', (event) => { if(event.target.closest('a')) closeMenu(); });
}
const projectTabs = Array.from(document.querySelectorAll('[role="tab"]'));
function selectProject(tab) {
  projectTabs.forEach((item) => {
    const active = item === tab;
    item.setAttribute('aria-selected', String(active));
    item.tabIndex = active ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !active;
  });
}
projectTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectProject(tab));
  tab.addEventListener('keydown', (event) => {
    let next;
    if(event.key === 'ArrowRight') next = (index + 1) % projectTabs.length;
    if(event.key === 'ArrowLeft') next = (index - 1 + projectTabs.length) % projectTabs.length;
    if(event.key === 'Home') next = 0;
    if(event.key === 'End') next = projectTabs.length - 1;
    if(next !== undefined) { event.preventDefault(); selectProject(projectTabs[next]); projectTabs[next].focus(); }
  });
});
document.querySelectorAll('[data-year]').forEach((element) => { element.textContent = new Date().getFullYear(); });
