import md from '../../README.md';
document.body.innerHTML = md.replace(/\n/g, '<br />');