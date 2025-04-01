// Sample novel data
const novelsData = [
    {
        id: 1,
        title: "The Shadow King",
        author: "Martha Wells",
        cover: "assets/images/novel1.jpg",
        rating: 4.5,
        price: 9.99,
        category: "Fantasy",
        chapters: 24
    },
    {
        id: 2,
        title: "Midnight Whispers",
        author: "Emily St. John",
        cover: "assets/images/novel2.jpg",
        rating: 4.2,
        price: 7.99,
        category: "Mystery",
        chapters: 18
    },
    {
        id: 3,
        title: "Starlight Journey",
        author: "Robert Chen",
        cover: "assets/images/novel3.jpg",
        rating: 4.8,
        price: 12.99,
        category: "Sci-Fi",
        chapters: 32
    },
    {
        id: 4,
        title: "The Last Rose",
        author: "Sarah Johnson",
        cover: "assets/images/novel4.jpg",
        rating: 4.0,
        price: 6.99,
        category: "Romance",
        chapters: 15
    },
    {
        id: 5,
        title: "Dark Forest",
        author: "Michael Brown",
        cover: "assets/images/novel5.jpg",
        rating: 4.7,
        price: 10.99,
        category: "Horror",
        chapters: 22
    },
    {
        id: 6,
        title: "Ocean's Call",
        author: "Lisa Wong",
        cover: "assets/images/novel6.jpg",
        rating: 4.3,
        price: 8.99,
        category: "Adventure",
        chapters: 19
    }
];

// DOM Elements
const featuredNovelsEl = document.getElementById('featuredNovels');
const topNovelsEl = document.getElementById('topNovels');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderNovels(featuredNovelsEl, novelsData);
    renderNovels(topNovelsEl, [...novelsData].sort((a, b) => b.rating - a.rating).slice(0, 4));
    
    // Mobile menu toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// Render novels to the page
function renderNovels(container, novels) {
    container.innerHTML = novels.map(novel => `
        <div class="novel-card" data-id="${novel.id}">
            <img src="${novel.cover}" alt="${novel.title}" class="novel-cover">
            <div class="novel-info">
                <h3 class="novel-title">${novel.title}</h3>
                <p class="novel-author">By ${novel.author}</p>
                <div class="novel-stats">
                    <div class="novel-rating">
                        ${renderRatingStars(novel.rating)}
                    </div>
                    <div class="novel-price">$${novel.price}</div>
                </div>
            </div>
        </div>
    `).join('');

    // Add click event to novel cards
    document.querySelectorAll('.novel-card').forEach(card => {
        card.addEventListener('click', () => {
            const novelId = card.getAttribute('data-id');
            window.location.href = `novel-detail.html?id=${novelId}`;
        });
    });
}

// Render rating stars
function renderRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    
    return `
        ${'<i class="fas fa-star"></i>'.repeat(fullStars)}
        ${halfStar ? '<i class="fas fa-star-half-alt"></i>' : ''}
        ${'<i class="far fa-star"></i>'.repeat(emptyStars)}
        <span>(${rating})</span>
    `;
}
