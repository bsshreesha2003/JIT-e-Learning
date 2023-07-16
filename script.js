const fileInput = document.getElementById('fileInput');
const uploadedImage = document.getElementById('uploadedImage');

fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      uploadedImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
