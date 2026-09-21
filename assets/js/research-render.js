document.addEventListener("DOMContentLoaded", function () {

    if (!window.RESEARCH_DATA) {
        console.warn("RESEARCH_DATA was not found.");
        return;
    }


    /*
      =========================================================
      HOMEPAGE RESEARCH CARDS
      =========================================================
    */

    const homeContainer =
        document.getElementById("homepage-research");


    if (homeContainer) {

        /*
         * Show only the first three research areas
         * on the homepage.
         */

        const homeResearch =
            window.RESEARCH_DATA.slice(0, 3);


        homeResearch.forEach(function (item) {

            const card =
                document.createElement("article");


            card.className =
                "mini-card";


            card.innerHTML = `


                <h3>
                    ${escapeResearchHTML(item.title)}
                </h3>

                <p>
                    ${escapeResearchHTML(item.shortDescription)}
                </p>

            `;


            homeContainer.appendChild(card);

        });

    }



    /*
      =========================================================
      FULL RESEARCH PAGE
      =========================================================
    */

    const fullContainer =
        document.getElementById("full-research-list");


    if (fullContainer) {

        window.RESEARCH_DATA.forEach(function (item) {

            const card =
                document.createElement("article");


            card.className =
                "card research-detail-card";


            /*
             * Generate topic labels.
             */

            let topicHTML = "";


            if (
                item.topics &&
                item.topics.length > 0
            ) {

                topicHTML = `

                    <div class="research-topics">

                        ${item.topics.map(function (topic) {

                            return `
                                <span class="text-chip">
                                    ${escapeResearchHTML(topic)}
                                </span>
                            `;

                        }).join("")}

                    </div>

                `;

            }


            card.innerHTML = `

                <div class="card-body">


                    <h2>
                        ${escapeResearchHTML(item.title)}
                    </h2>

                    <p>
                        ${escapeResearchHTML(item.description)}
                    </p>

                    ${topicHTML}

                </div>

            `;


            fullContainer.appendChild(card);

        });

    }

});



/*
  =============================================================
  HTML escaping
  =============================================================
*/

function escapeResearchHTML(value) {

    if (!value) {
        return "";
    }


    return String(value)

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");
}