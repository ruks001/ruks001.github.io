document.addEventListener("DOMContentLoaded", function () {

    if (!window.NEWS_DATA) {
        console.warn("NEWS_DATA was not found.");
        return;
    }


    /*
      ---------------------------------------------------------
      Sort newest first
      ---------------------------------------------------------
    */

    const newsItems = [...window.NEWS_DATA].sort(function (a, b) {

        return new Date(b.sortDate) - new Date(a.sortDate);

    });



    /*
      =========================================================
      HOMEPAGE NEWS
      =========================================================
    */

    const homeNewsContainer =
        document.getElementById("homepage-news-list");


    if (homeNewsContainer) {

        /*
          Number of news items displayed on homepage.
        */

        const latestNews =
            newsItems.slice(0, 3);


        latestNews.forEach(function (item) {

            const row =
                document.createElement("div");


            row.className =
                "news-row";


            /*
              Homepage is intentionally compact.
            */

            row.innerHTML = `

                <div class="news-date">
                    ${escapeHTML(item.date)}
                </div>

                <p>

                    <strong>
                        ${escapeHTML(item.title)}
                    </strong>

                    ${item.description
                        ? " — " + escapeHTML(item.description)
                        : ""
                    }

                    ${item.link
                        ? `
                            <a href="${escapeAttribute(item.link)}"
                               target="_blank"
                               rel="noopener noreferrer">
                                ${escapeHTML(item.linkText || "Read more")} →
                            </a>
                          `
                        : ""
                    }

                </p>

            `;


            homeNewsContainer.appendChild(row);

        });

    }



    /*
      =========================================================
      FULL NEWS PAGE
      =========================================================
    */

    const fullNewsContainer =
        document.getElementById("full-news-list");


    if (fullNewsContainer) {

        newsItems.forEach(function (item) {

            const row =
                document.createElement("div");


            row.className =
                "news-row";


            /*
              Full News page displays title and description
              separately for a cleaner academic layout.
            */

            row.innerHTML = `

                <div class="news-date">
                    ${escapeHTML(item.date)}
                </div>


                <div class="news-content">

                    <h3>
                        ${escapeHTML(item.title)}
                    </h3>


                    ${
                        item.description

                        ? `
                            <p>
                                ${escapeHTML(item.description)}
                            </p>
                          `

                        : ""
                    }


                    ${
                        item.link

                        ? `
                            <p class="news-link">

                                <a href="${escapeAttribute(item.link)}"
                                   target="_blank"
                                   rel="noopener noreferrer">

                                    ${escapeHTML(item.linkText || "Read more")} →

                                </a>

                            </p>
                          `

                        : ""
                    }

                </div>

            `;


            fullNewsContainer.appendChild(row);

        });

    }

});



/*
  =============================================================
  BASIC HTML ESCAPING
  =============================================================
*/

function escapeHTML(value) {

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



function escapeAttribute(value) {

    return escapeHTML(value);

}