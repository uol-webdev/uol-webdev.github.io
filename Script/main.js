window.onload = function () {
    //initialize swiper when document ready
    new Swiper('.swiper-container', {
        direction: 'horizontal',
        centeredSlides: true,
        // go back to first slide after last slide
        loop: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    let attractions = document.getElementsByClassName('attraction');
    let appliedFilters = {};

    function applyFilters() {
        // by default all attractions are hidden
        let visible = {};
        let attractionHidden = {};
        for (let i in attractions) {
            if (attractions.hasOwnProperty(i)) {
                // show only those attractions that match all selected filters
                for (let j in appliedFilters) {
                    if (appliedFilters.hasOwnProperty(j)) {
                        let attractionFilterValue = attractions[i].dataset[j];
                        if (appliedFilters[j] && attractionFilterValue !== appliedFilters[j]) {
                            // attraction does not match selected filter
                            visible[i] = false;
                            attractionHidden[i] = true;
                            break;
                        }
                    }
                }
                if (!attractionHidden[i]) {
                    // attraction matches all selected filters or none of the filters are selected
                    visible[i] = true;
                }
            }
        }

        for (let i in attractions) {
            if (attractions.hasOwnProperty(i)) {
                if (visible[i]) {
                    attractions[i].style.display = 'inline-block';
                } else {
                    attractions[i].style.display = 'none';
                }
            }
        }
    }

    let filterChangeEventListener = function (event) {
        appliedFilters[event.target.id.replace('attraction-', '')] = event.target.value;
        applyFilters();
    }

    let filters = document
        .getElementById('attractionsFilter')
        .getElementsByClassName('filter');
    for (let i in filters) {
        if (filters.hasOwnProperty(i)) {
            let select = filters[i].getElementsByTagName('select')[0];
            select.addEventListener('change', filterChangeEventListener);
            appliedFilters[select.id.replace('attraction-', '')] = '';
        }
    }
};