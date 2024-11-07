const photoCountElement = document.querySelector('.photo-count');
const imageViewerElement = document.getElementById('image-viewer');
const closeButton = document.querySelector('.close-button');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const imageElement = document.querySelector('.image');
const titleElement = document.querySelector('.title');
const countElement = document.querySelector('.count');

// Sample image data
const images = [
  {
    src: 'https://example.com/image1.jpg',
    title: 'Juneau Vacation Rental | 2BR | 1BA | 1,115 Sq Ft | Stairs Required'
  },
  {
    src: 'https://example.com/image2.jpg',
    title: 'Another Image'
  },
  // Add more images as needed
];

let currentIndex = 0;

photoCountElement.addEventListener('click', () => {
  showImageViewer();
  updateImage(currentIndex);
});

closeButton.addEventListener('click', hideImageViewer);

prevButton.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateImage(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = Math.min(currentIndex + 1, images.length - 1);
  updateImage(currentIndex);
});

function showImageViewer() {
  imageViewerElement.style.display = 'block';
}

function hideImageViewer() {
  imageViewerElement.style.display = 'none';
}

function updateImage(index) {
  imageElement.src = images[index].src;
  titleElement.textContent = images[index].title;
  countElement.textContent = `${index + 1}/${images.length}`;

  prevButton.disabled = index === 0;
  nextButton.disabled = index === images.length - 1;
}