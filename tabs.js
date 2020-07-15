document.addEventListener("DOMContentLoaded", function (event) {
    const tab = document.querySelector('.tab-component');
    const tabButtons = tab.querySelectorAll('[role="tab"]');
    const tabPanels = Array.from(tab.querySelectorAll('[role="tabpanel"]'));

    function tabClickHandler(e) {
        //hide all tabPanels
        tabPanels.forEach(panel => {
            panel.hidden = 'true';
        });

        //deselect tab
        tabButtons.forEach(button => {
            button.setAttribute('aria-selected', 'false');
        });

        //mark new tab as selected
        e.currentTarget.setAttribute('aria-selected', 'true');

        //show new Tab
        const {
            id
        } = e.currentTarget;

        const currentTab = tabPanels.find(
            panel => panel.getAttribute('aria-labelledby') === id
        );
        currentTab.hidden = false;
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', tabClickHandler);
    });
});
