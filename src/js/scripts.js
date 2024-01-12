if (document.querySelector('.portfolio')) {
    const portfolio = document.querySelector('.portfolio');
    const portfolioListMenu = portfolio.querySelectorAll('li');
    const gridImg = portfolio.querySelector('.grid__img');
    const gridImgList = gridImg.querySelectorAll('img');

    function handleVisionAll() {
        gridImgList.forEach(element => {
            if (element.classList.contains('invise')) {
                element.classList.remove('invise');
            }
        });
    }
    function handleNoVisionAll() {
        gridImgList.forEach(element => {
            if (!element.classList.contains('invise')) {
                element.classList.add('invise');
            }
        });
    }

    function handleRemoveFilter() {
        portfolioListMenu.forEach(element => {
            if (element.classList.contains("filter__active")) {
                element.classList.remove("filter__active");
            }
        });
    }

    portfolioListMenu.forEach(element => {
        element.addEventListener('click', () => {
            handleRemoveFilter();
            element.classList.add("filter__active");
            if (element.id == 0) {
                handleVisionAll();
            } else {
                handleNoVisionAll();
                gridImgList.forEach(imgEl => {
                    if (imgEl.id == element.id) {
                        imgEl.classList.remove('invise');
                    }
                });
            }
        })
    });
}