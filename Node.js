const express = require('express');
const app = express();

app.use(express.json());

app.post('/request.php', (req, res) => {
  const songName = req.body.songName;
  const command = `echo "ขอเพลง: ${songName}"`;
  // เรียกใช้คำสั่งใน CMD
  // ...
  res.send('Request received');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
