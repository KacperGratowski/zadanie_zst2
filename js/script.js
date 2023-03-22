var canvas = document.getElementById("myCanvas");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      document.body.appendChild(canvas);
      var ctx = canvas.getContext('2d');
      ctx.fillStyle = 'red';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 100, 0, 2 * Math.PI);
      ctx.fill();
	  /* make it 2 times bigger */
ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 200, 0, 2 * Math.PI);
ctx.fill();

/* make inside it black dot */
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 10, 0, 2 * Math.PI);
ctx.fill();

/* make black dot it 4 times bigger */
ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 40, 0, 2 * Math.PI);
ctx.fill();

/* Make 4 another dots the same colour and size */
ctx.beginPath();
ctx.arc(canvas.width / 2 - 100, canvas.height / 2 - 100, 40, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(canvas.width / 2 + 100, canvas.height / 2 - 100, 40, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(canvas.width / 2 - 100, canvas.height / 2 + 100, 40, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(canvas.width / 2 + 100, canvas.height / 2 + 100, 40, 0, 2 * Math.PI);
ctx.fill();

/* Make vertical line coloured black which passes the center dot */
ctx.beginPath();
ctx.moveTo(canvas.width / 2, canvas.height / 2 - 100);
ctx.lineTo(canvas.width / 2, canvas.height / 2 + 100);
ctx.stroke();

/* Make it going through full red dot */
ctx.beginPath();
ctx.moveTo(canvas.width / 2, canvas.height / 2 - 200);
ctx.lineTo(canvas.width / 2, canvas.height / 2 + 200);
ctx.stroke();

/* make it a little bit more bold */
ctx.lineWidth = 5;
ctx.beginPath();
ctx.moveTo(canvas.width / 2, canvas.height / 2 - 200);
ctx.lineTo(canvas.width / 2, canvas.height / 2 + 200);
ctx.stroke();

/* Make a bald border coloured black around red diot */
ctx.lineWidth = 1;
ctx.strokeStyle = 'black';
ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 200, 0, 2 * Math.PI);
ctx.stroke();

/* make it 2 times bolder */
ctx.lineWidth = 2;
ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 200, 0, 2 * Math.PI);
ctx.stroke();

/* make it 4 times bolder */
ctx.lineWidth = 4;
ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 200, 0, 2 * Math.PI);
ctx.stroke();

/* make black dots a little bit bigger */
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(canvas.width / 2 - 100, canvas.height / 2 - 100, 50, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(canvas.width / 2 + 100, canvas.height / 2 - 100, 50, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(canvas.width / 2 - 100, canvas.height / 2 + 100, 50, 0, 2 * Math.PI);
ctx.fill();
ctx.beginPath();
ctx.arc(canvas.width / 2 + 100, canvas.height / 2 + 100, 50, 0, 2 * Math.PI);
ctx.fill();

/* Make border around red dot 6 times bolder */
ctx.lineWidth = 6;
ctx.beginPath();
ctx.arc(canvas.width / 2, canvas.height / 2, 200, 0, 2 * Math.PI);
ctx.stroke();
ctx.stroke();