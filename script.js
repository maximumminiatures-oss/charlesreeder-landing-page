const galleryImages = Array.from(document.querySelectorAll('.gallery .photo img'));
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeButton = document.getElementById('lightbox-close');
const prevButton = document.getElementById('lightbox-prev');
const nextButton = document.getElementById('lightbox-next');
const TRANSITION_MS = 220;
const CAPTION_TRANSITION_MS = 180;

let currentIndex = 0;
let isAnimating = false;

function updateLightbox(index) {
    const image = galleryImages[index];

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    const captionSource = image.closest('.photo')?.querySelector('p');
    lightboxCaption.textContent = captionSource ? captionSource.textContent : image.alt;
}

function updateCaptionAnimated(newText) {
    lightboxCaption.classList.add('changing');

    window.setTimeout(() => {
        lightboxCaption.textContent = newText;
        lightboxCaption.classList.remove('changing');
    }, CAPTION_TRANSITION_MS);
}

function openLightbox(index) {
    currentIndex = index;
    updateLightbox(currentIndex);
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    lightboxImage.classList.add('from-zoom');
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            lightboxImage.classList.remove('from-zoom');
        });
    });
}

function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lightboxImage.src = '';
}

function showPrevious() {
    if (isAnimating) {
        return;
    }

    const targetIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    transitionToImage(targetIndex, 'prev');
}

function showNext() {
    if (isAnimating) {
        return;
    }

    const targetIndex = (currentIndex + 1) % galleryImages.length;
    transitionToImage(targetIndex, 'next');
}

function transitionToImage(targetIndex, direction) {
    isAnimating = true;

    const outClass = direction === 'next' ? 'to-left' : 'to-right';
    const inClass = direction === 'next' ? 'from-right' : 'from-left';

    lightboxImage.classList.add(outClass);

    const targetImage = galleryImages[targetIndex];
    const targetCaptionSource = targetImage.closest('.photo')?.querySelector('p');
    const targetCaption = targetCaptionSource ? targetCaptionSource.textContent : targetImage.alt;
    updateCaptionAnimated(targetCaption);

    window.setTimeout(() => {
        currentIndex = targetIndex;
        updateLightbox(currentIndex);

        lightboxImage.classList.remove(outClass);
        lightboxImage.classList.add(inClass);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                lightboxImage.classList.remove(inClass);
            });
        });

        window.setTimeout(() => {
            isAnimating = false;
        }, TRANSITION_MS);
    }, TRANSITION_MS);
}

galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => openLightbox(index));
});

closeButton.addEventListener('click', closeLightbox);
prevButton.addEventListener('click', showPrevious);
nextButton.addEventListener('click', showNext);

lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

document.addEventListener('keydown', (event) => {
    if (!lightbox.classList.contains('open')) {
        return;
    }

    if (event.key === 'Escape') {
        closeLightbox();
    }

    if (event.key === 'ArrowLeft') {
        showPrevious();
    }

    if (event.key === 'ArrowRight') {
        showNext();
    }
});
