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
        },
        {
            id: 'ethereum',
            bg: 'linear-gradient(147.966deg, rgb(106, 114, 203) 0%, rgb(55, 62, 138) 100%)',
            balanceHTML: `
                <span class="card-label">ETH Balance</span>
                <span class="card-value">12.304 ETH</span>
                <span class="card-approx">≈ $32,145.00</span>
            `,
            badgeHTML: `
                <span class="badge-text" style="background: rgba(255,255,255,0.15);">Staked</span>
            `,
            numberHTML: `
                <span class="card-label">Wallet</span>
                <span class="card-number">ETH</span>
            `,
            logoHTML: `
                <div class="circle circle-left" style="background: rgba(255,255,255,0.2);"></div>
                <div class="circle circle-right" style="background: rgba(255,255,255,0.1);"></div>
            `
        },
        {
            id: 'savings',
            bg: 'linear-gradient(147.966deg, rgb(255, 87, 87) 0%, rgb(180, 20, 20) 100%)',
            balanceHTML: `
                <span class="card-label">High-Yield Savings</span>
                <span class="card-value">$85,200.00</span>
                <span class="card-approx">+4.5% APY</span>
            `,
            badgeHTML: `
                <span class="badge-text" style="color: var(--color-red-400); background: var(--color-white)">Locked</span>
            `,
            numberHTML: `
                <span class="card-label">Account ending in</span>
                <span class="card-number">•••• 9901</span>
            `,
            logoHTML: `
                <div class="circle circle-left" style="background: rgba(255,255,255,0.1);"></div>
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
