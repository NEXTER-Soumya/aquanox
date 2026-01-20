// Product data
const products = {
    'classic': {
        name: 'Small Scale RO Plant',
        size: '1000 LPH Capacity',
        price: '₹2,50,000',
        images: [
            'assets/products/classic.png',
            'assets/products/classic-2.png',
            'assets/products/classic-3.png'
        ],
        video: 'assets/products/video5.mp4',
        description: 'Perfect for small-scale packaged drinking water businesses. This compact RO plant is ideal for startups and produces 500 liters per hour of purified water. Easy to install and maintain with low operational costs.',
        features: [
            'Capacity: 1000 Liters Per Hour',
            'Multi-stage filtration system',
            'Automatic operation with minimal supervision',
            'Low power consumption',
            'Complete installation support',
            '1 Year warranty on parts'
        ]
    },
    'premium': {
        name: 'Medium Scale RO Plant',
        size: '2000 LPH Capacity',
        price: '₹3,50,000',
        images: [
            'assets/products/premium.png',
            'assets/products/premium-2.png',
            'assets/products/premium-3.png'
        ],
        video: 'assets/products/video3b.mp4',
        description: 'Designed for growing businesses with medium production requirements. This RO plant delivers 1000 liters per hour with advanced purification technology and automated controls for consistent water quality.',
        features: [
            'Capacity: 2000 Liters Per Hour',
            'Advanced RO membrane technology',
            'Automated control panel',
            'High recovery rate',
            'Energy efficient operation',
            '1 Year comprehensive warranty'
        ]
    },
    'family': {
        name: 'Large Scale RO Plant',
        size: '6000 LPH Capacity',
        price: '₹4,50,000',
        images: [
            'assets/products/family.png',
            'assets/products/family-2.png',
            'assets/products/family-3.png'
        ],
        video: 'assets/products/video2.mp4',
        description: 'High-capacity RO plant for established water businesses. Produces 2000 liters per hour with superior filtration and minimal waste. Includes advanced monitoring systems and automatic cleaning features.',
        features: [
            'Capacity: 6000 Liters Per Hour',
            'Industrial-grade components',
            'Automatic CIP (Clean-in-Place) system',
            'Digital monitoring and control',
            'Low maintenance requirements',
            '2 Year warranty with AMC option'
        ]
    },
    'jar': {
        name: 'Industrial RO Plant',
        size: 'Custom Capacity',
        price: 'Contact for Price',
        images: [
            'assets/products/jar.png'
        ],
        video: 'assets/products/WhatsApp Video 2026-01-20 at 4.39.28 PM.mp4',
        description: 'Our flagship industrial RO plant for large-scale water production. Custom-built to meet your specific capacity requirements with the highest quality standards. Perfect for commercial water plants and bulk distribution businesses.',
        features: [
            'Custom Capacity based on requirements',
            'Heavy-duty industrial design',
            'Fully automated operation',
            'Remote monitoring capability',
            'Maximum efficiency and recovery',
            '2 Year comprehensive warranty + AMC'
        ]
    }
};

// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Load product details
if (productId && products[productId]) {
    const product = products[productId];
    
    document.getElementById('productName').textContent = product.name;
    document.getElementById('productSize').textContent = product.size;
    document.getElementById('productPrice').textContent = product.price;
    document.getElementById('productDescription').textContent = product.description;
    
    // Set main image
    const mainImageContainer = document.getElementById('mainImageContainer');
    mainImageContainer.innerHTML = `<img id="mainImage" src="${product.images[0]}" alt="${product.name}">`;
    
    // Create thumbnails (3 images + 1 video)
    const thumbnailGallery = document.getElementById('thumbnailGallery');
    
    product.images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = 'thumbnail' + (index === 0 ? ' active' : '');
        thumbnail.innerHTML = `<img src="${image}" alt="${product.name} ${index + 1}">`;
        thumbnail.onclick = function() {
            mainImageContainer.innerHTML = `<img id="mainImage" src="${image}" alt="${product.name}">`;
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumbnail.classList.add('active');
        };
        thumbnailGallery.appendChild(thumbnail);
    });
    
    // Add video thumbnail
    const videoThumbnail = document.createElement('div');
    videoThumbnail.className = 'thumbnail video-thumb';
    videoThumbnail.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;background:#000;color:#fff;font-size:2rem;">▶</div>';
    videoThumbnail.onclick = function() {
        mainImageContainer.innerHTML = `<video controls style="width:100%;height:100%;object-fit:contain;"><source src="${product.video}" type="video/mp4"></video>`;
        document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
        videoThumbnail.classList.add('active');
    };
    thumbnailGallery.appendChild(videoThumbnail);
    
    const featuresList = document.getElementById('productFeatures');
    product.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    document.getElementById('whatsappBtn').onclick = function() {
        buyWhatsApp(product.name, product.size, product.price);
    };
} else {
    window.location.href = 'products.html';
}
