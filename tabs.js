document.addEventListener("DOMContentLoaded", function (event) {
    const tab = document.querySelector('.tab-component');
    const tabButtons = tab.querySelectorAll('[role="tab"]');
    const tabPanels = Array.from(tab.querySelectorAll('[role="tabpanel"]'));

    tabButtons.forEach(button => {
        button.addEventListener('click', event => {
            event.preventDefault();
            hideTab();
            showTab(event);
        });
    });

    const hideTab = () => {
        tabButtons.forEach(button => {
            button.setAttribute('aria-selected', false);
        });
        tabPanels.forEach(panel => {
            panel.hidden = true;
        });
    }

    const showTab = event => {
        event.currentTarget.setAttribute('aria-selected', true);

        const {
            id
        } = event.currentTarget;

        const currentTab = tabPanels.find(
            panel => panel.getAttribute('aria-labelledby') === id
        );
        currentTab.hidden = false;
    }
});
