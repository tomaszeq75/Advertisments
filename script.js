const advertisments = [
    {
        id: 0,
        priority: 10,
        shown: 0,
        showCounter: 0,
    },
    {
        id: 1,
        priority: 10,
        shown: 0,
        showCounter: 0,
    },
    {
        id: 2,
        priority: 7,
        shown: 0,
        showCounter: 0,
    },
    {
        id: 3,
        priority: 10,
        shown: 0,
        showCounter: 0,
    },
    {
        id: 4,
        priority: 6,
        shown: 0,
        showCounter: 0,
    },
    {
        id: 5,
        priority: 2,
        shown: 0,
        showCounter: 0,
    },
    {
        id: 6,
        priority: 4,
        shown: 0,
        showCounter: 0,
    },
    {
        id: 7,
        priority: 3,
        shown: 0,
        showCounter: 0,
    },
    {
        id: 8,
        priority: 2,
        shown: 0,
        showCounter: 0,
    },
    {
        id: 16,
        priority: 4,
        shown: 0,
        showCounter: 0,
    },
    {
        id: 17,
        priority: 3,
        shown: 0,
        showCounter: 0,
    },
    {
        id: 18,
        priority: 2,
        shown: 0,
        showCounter: 0,
    },
    {
        id: 26,
        priority: 4,
        shown: 0,
        showCounter: 0,
    },
    {
        id: 27,
        priority: 3,
        shown: 0,
        showCounter: 0,
    },
    {
        id: 28,
        priority: 2,
        shown: 0,
        showCounter: 0,
    },
    {
        id: 9,
        priority: 1,
        shown: 0,
        showCounter: 0,
    },
];

const orderTable = document.getElementById("order-table");

const priorityQuantity = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
countPriority(advertisments, priorityQuantity);
// console.table(priorityQuantity);

const priorityGroups = getPriorityGroups(advertisments);

chooseAdvertisment(priorityGroups);
console.log(advertisments);

function countPriority(adverts, priorityQuantity) {
    adverts.forEach(({ priority }) => {
        ++priorityQuantity[priority - 1];
    });
}

function getPriorityGroups(adverts) {
    const priorityGroups = [];

    for (let index = 1; index <= 10; index++) {
        priorityGroups[index] = adverts.filter(
            ({ priority }) => priority == index,
        );
    }

    return priorityGroups;
}

function showAdvertisment(ad) {
    ad.showCounter++;
    ad.shown = 1;
    insertRow(ad)
}

function insertRow({ id, priority, showCounter }) {
    const row = orderTable.insertRow();
    const idCell = row.insertCell(0);
    const priorityCell = row.insertCell(1);
    const counterCell = row.insertCell(2);
    idCell.innerHTML = id;
    priorityCell.innerHTML = priority;
    counterCell.innerHTML = showCounter;
}

function chooseAdvertisment(priorityGroups) {
    // zaczynamy od najwyższego priorytetu
    for (let index = 10; index > 0; index--) {
        const currentGroup = priorityGroups[index];

        // powtarzamy tyle razy ile jest reklam o tym samym priorytecie
        for (let i = 0; i <= currentGroup.length; i++) {

            // wyświetlamy tyle razy jaki jest priorytet
            for (let j = 0; j < index; j++) {
                const currentAd = currentGroup.find((item) => {
                    return item.shown == 0;
                });
                if (currentAd) {
                    showAdvertisment(currentAd);
                } else {
                    // po pokazaniu wszystkich z grupy reset shown
                    currentGroup.forEach((ad) => {
                        ad.shown = 0;
                    });
                }
            }
        }
    }
}
