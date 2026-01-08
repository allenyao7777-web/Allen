
// 展開/收合資訊
function toggleInfo(id) {
  const info = document.getElementById(id);
  info.classList.toggle('hidden');
}

// 回到頂端按鈕
window.onscroll = function() {
  document.getElementById('backToTop').style.display =
    window.scrollY > 200 ? 'block' : 'none';
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
