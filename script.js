const form = document.getElementById('songRequestForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const songName = document.getElementById('songName').value;

  // ส่งข้อมูลไปยังเซิร์ฟเวอร์ (ตัวอย่าง: ส่งไปยังไฟล์ request.php)
  fetch('/request.php', {
    method: 'POST',
    body: JSON.stringify({ songName })
  })
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
});
