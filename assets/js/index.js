(function() {
    const close = document.getElementById('modal-close');
    const modal = document.getElementById('modal');
    const modalOpen = document.getElementById('modal-open');

    if (close && modalOpen && modal) {
        modalOpen.addEventListener('click', () => {
            modal.style.display = 'block';
            document.body.overflow = 'hidden';
        });
    
        close.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.overflow = 'initial';
        });
    }

    /**burger-menu */
    const menu = document.getElementById('burger-menu');
    const menuClose = document.getElementById('burger-menu-close');
    const menuOpen = document.getElementById('burger-menu-open');
    const header = document.getElementById('header');
    const main = document.getElementById('main');
    const footer = document.getElementById('footer');

    if (menuOpen) {
        menuOpen.addEventListener('click', function() {
            if (menu) {
                menu.setAttribute('data-open', '');
                header.setAttribute('data-open', '');
                main.setAttribute('data-open', '');
                footer.setAttribute('data-open', '');
            }
        });
    }

    if (menuClose) {
        menuClose.addEventListener('click', function() {
            if (menu) {
                menu.removeAttribute('data-open');
                header.removeAttribute('data-open');
                main.removeAttribute('data-open');
                footer.removeAttribute('data-open');
            }
        });
    }

    /**header filters */
    const headerMenuItems = document.querySelectorAll('div.header__menu-item');
    const blockItems =  document.querySelectorAll('a.container-block__item');


    if(headerMenuItems.length && blockItems.length) {
        headerMenuItems.forEach(item => {
            item.addEventListener('click', () => {
                item.setAttribute('active', '');

                blockItems.forEach(blockItem => {
                    if(item.id != 'header-all') {
                        if(!blockItem.classList.contains(item.id.replace('header-','.'))){
                            blockItem.style.display = "none";
                        } else {
                            blockItem.style.display = "flex";
                        }
                    } else {
                        blockItem.style.display = "flex";
                    }
                });

                headerMenuItems.forEach(restelem => {
                    if(restelem != item) {
                        restelem.removeAttribute('active');
                    }
                });
            })
        });
    }
    /** templates html/scss selector*/
    const templateLanguageTabs = document.querySelectorAll('div.component__code-tab');
    if(!headerMenuItems.length) {
        templateLanguageTabs.forEach(item => {
            item.addEventListener('click', () => {
                console.log(item);
                templateLanguageTabs.forEach(restelem => {
                    if(restelem != item) {
                        restelem.removeAttribute('active');
                    }
                });
    
                item.setAttribute('active', '');
            })
        });
    }

    /** darktheme*/
    const changers = document.querySelectorAll('input.theme-changer__control');
    const html = document.documentElement;
    let currentTheme = sessionStorage.getItem('dark');

    if(sessionStorage.getItem('dark') == 'true'){
        html.toggleAttribute('data-theme-dark');
    }

    changers.forEach(changer => {
        changer.addEventListener('change', function() {
            menu.removeAttribute('data-open');
            header.removeAttribute('data-open');
            main.removeAttribute('data-open');
            footer.removeAttribute('data-open');
            html.toggleAttribute('data-theme-dark');
            sessionStorage.setItem('dark', sessionStorage.getItem('dark') == 'false' || 
                                           sessionStorage.getItem('dark') == 'null'  ? 'true' : 'false');
        });
    });

})();
