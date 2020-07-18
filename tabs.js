document.addEventListener("DOMContentLoaded", function (event) {
    const tab = document.querySelector('.tab-component');
    const tabButtons = tab.querySelectorAll('[role="tab"]');
    const tabPanels = Array.from(tab.querySelectorAll('[role="tabpanel"]'));

    function tabClickHandler(event) {
        //hide all tabPanels
        // tabPanels.forEach(panel => {
        //     panel.hidden = 'true';
        // });

        hideTabs();

        showTabs(event);

        //deselect tab
        // tabButtons.forEach(button => {
        //     button.setAttribute('aria-selected', false);
        // });

        // //mark new tab as selected
        // event.currentTarget.setAttribute('aria-selected', 'true');

        // //show new Tab
        // const {
        //     id
        // } = event.currentTarget;

        // const currentTab = tabPanels.find(
        //     panel => panel.getAttribute('aria-labelledby') === id
        // );
        // currentTab.hidden = false;
    }

    const hideTabs = () => {
        console.log("I'm being hidden");
        tabButtons.forEach(button => {
            button.setAttribute('aria-selected', false);
        });
        tabPanels.forEach(panel => {
            panel.hidden = true;
        });
    }

    const showTabs = event => {
        event.currentTarget.setAttribute('aria-selected', true);

        //show new Tab
        const {
            id
        } = event.currentTarget;

        const currentTab = tabPanels.find(
            panel => panel.getAttribute('aria-labelledby') === id
        );
        currentTab.hidden = false;
    }



    tabButtons.forEach(button => {
        button.addEventListener('click', tabClickHandler);
    });
});
