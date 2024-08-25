document.addEventListener('DOMContentLoaded', function () {

    const radios = document.querySelectorAll('.offer-card .radio');
    const detailedOffers = document.querySelectorAll('.detailed-offer');

    
    detailedOffers.forEach(offer => offer.style.display = 'none');

    radios.forEach((radio, index) => {
        radio.addEventListener('change', function () {
            detailedOffers.forEach(offer => offer.style.display = 'none');

            if (this.checked) {
                detailedOffers[index].style.display = 'block';
            }

        });
    });
});
