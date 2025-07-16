// 目前暫無功能，日後可擴充 JS 程式碼

document.addEventListener('DOMContentLoaded', () => {
  fetch('http://localhost:3000/books/all')
    .then(res => res.json())
    .then(data => {
      const container = document.querySelector('.card-container');
      if (!container) return;
      container.innerHTML = '';
      data.forEach(book => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${book.imageUrl}" alt="${book.title}" class="card-img">
          <h2>${book.title}</h2>
          <p><strong>作者：</strong>${book.author}</p>
        `;
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
          window.location.href = `book.html?isbn=${encodeURIComponent(book.isbn)}`;
        });
        container.appendChild(card);
      });
    })
    .catch(err => {
      const container = document.querySelector('.card-container');
      if (container) {
        container.innerHTML = '<p style="color:red">無法取得書籍資料，請確認 API 是否啟動。</p>';
      }
    });
}); 