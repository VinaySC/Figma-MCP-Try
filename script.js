document.addEventListener('DOMContentLoaded', () => {
    const cardsData = [
        {
            id: 'primary',
            bg: 'linear-gradient(147.966deg, rgb(154, 230, 0) 0%, rgb(0, 188, 125) 100%)',
            balanceHTML: `
                <span class="card-label">Balance</span>
                <span class="card-value">$12,453.87</span>
            `,
            badgeHTML: `
                <span class="badge-text">Main</span>
                <img src="http://localhost:3845/assets/089a64bd2c14570269df061a0d09b4788bdb7bd1.svg" class="card-icon" alt="">
            `,
            numberHTML: `
                <span class="card-label">Card Number</span>
                <span class="card-number">•••• 4532</span>
            `,
            logoHTML: `
                <div class="circle circle-left"></div>
                <div class="circle circle-right"></div>
            `
        },
        {
            id: 'bitcoin',
            bg: 'linear-gradient(147.966deg, rgb(255, 137, 4) 0%, rgb(254, 154, 0) 100%)',
            balanceHTML: `
                <span class="card-label">BTC Balance</span>
                <span class="card-value">0.4582 BTC</span>
                <span class="card-approx">≈ $19,244.40</span>
            `,
            badgeHTML: `
                <img src="http://localhost:3845/assets/918504b894fb91d75c0e7434c1a685e026cf38af.svg" class="card-icon" alt="">
            `,
            numberHTML: `
                <span class="card-label">Wallet</span>
                <span class="card-number">BTC</span>
            `,
            logoHTML: `
                <img src="http://localhost:3845/assets/84230d9254c4803d8c194be3d66830e5e16db752.svg" class="btc-watermark" alt="">
            `
        }
    ];

    const pills = document.querySelectorAll('.pill');
    const dots = document.querySelectorAll('.dot');
    
    const mainCard = document.querySelector('.main-card');
    const cardBalanceInfo = document.querySelector('.card-balance-info');
    const cardBadge = document.querySelector('.card-badge');
    const cardNumberInfo = document.querySelector('.card-number-info');
    const cardLogo = document.querySelector('.card-logo');

    pills.forEach((pill, index) => {
        pill.addEventListener('click', () => {
            // Update pills
            pills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            // Update pagination dots (animate smoothly)
            dots.forEach(d => d.classList.remove('active'));
            if (dots[index]) {
                dots[index].classList.add('active');
            }

            // For now, only handle first two indexes
            const cardData = cardsData[index] || cardsData[0]; // fallback to primary if no data
            
            // Update Card Styles and DOM
            mainCard.style.background = cardData.bg;
            cardBalanceInfo.innerHTML = cardData.balanceHTML;
            cardBadge.innerHTML = cardData.badgeHTML;
            cardNumberInfo.innerHTML = cardData.numberHTML;
            cardLogo.innerHTML = cardData.logoHTML;
        });
    });
});
