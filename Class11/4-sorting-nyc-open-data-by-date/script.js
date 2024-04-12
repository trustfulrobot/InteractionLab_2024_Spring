/*                  */
/* SET UP VARIABLES */
/*                  */

const errors = document.querySelector('#errors');
const sortAsc = document.querySelector('#sort-asc');
const sortDesc = document.querySelector('#sort-desc');
const partiesContainer = document.querySelector('#parties');

const APP_TOKEN = 'I6P0LofetlBLmwW5IbfTd2iye'; // <- Replace this with your app token
const DATASET_IDENTIFIER = 'erm2-nwe9'; // <- Replace this with the ID for the data resource that you want to look up

// Construct the URL that we need to make requests
// This is a filtered dataset of only "Loud Music/Party" complaints in the past year
const url = `https://data.cityofnewyork.us/resource/${DATASET_IDENTIFIER}.json?$$app_token=${APP_TOKEN}&$query=SELECT%0A%20%20%60unique_key%60%2C%0A%20%20%60created_date%60%2C%0A%20%20%60closed_date%60%2C%0A%20%20%60agency%60%2C%0A%20%20%60agency_name%60%2C%0A%20%20%60complaint_type%60%2C%0A%20%20%60descriptor%60%2C%0A%20%20%60location_type%60%2C%0A%20%20%60incident_zip%60%2C%0A%20%20%60incident_address%60%2C%0A%20%20%60street_name%60%2C%0A%20%20%60cross_street_1%60%2C%0A%20%20%60cross_street_2%60%2C%0A%20%20%60intersection_street_1%60%2C%0A%20%20%60intersection_street_2%60%2C%0A%20%20%60address_type%60%2C%0A%20%20%60city%60%2C%0A%20%20%60landmark%60%2C%0A%20%20%60facility_type%60%2C%0A%20%20%60status%60%2C%0A%20%20%60due_date%60%2C%0A%20%20%60resolution_description%60%2C%0A%20%20%60resolution_action_updated_date%60%2C%0A%20%20%60community_board%60%2C%0A%20%20%60bbl%60%2C%0A%20%20%60borough%60%2C%0A%20%20%60x_coordinate_state_plane%60%2C%0A%20%20%60y_coordinate_state_plane%60%2C%0A%20%20%60open_data_channel_type%60%2C%0A%20%20%60park_facility_name%60%2C%0A%20%20%60park_borough%60%2C%0A%20%20%60vehicle_type%60%2C%0A%20%20%60taxi_company_borough%60%2C%0A%20%20%60taxi_pick_up_location%60%2C%0A%20%20%60bridge_highway_name%60%2C%0A%20%20%60bridge_highway_direction%60%2C%0A%20%20%60road_ramp%60%2C%0A%20%20%60bridge_highway_segment%60%2C%0A%20%20%60latitude%60%2C%0A%20%20%60longitude%60%2C%0A%20%20%60location%60%2C%0A%20%20%60%3A%40computed_region_efsh_h5xi%60%2C%0A%20%20%60%3A%40computed_region_f5dn_yrer%60%2C%0A%20%20%60%3A%40computed_region_yeji_bk3q%60%2C%0A%20%20%60%3A%40computed_region_92fq_4b7q%60%2C%0A%20%20%60%3A%40computed_region_sbqj_enih%60%0AWHERE%0A%20%20starts_with(%60descriptor%60%2C%20%22Loud%20Music%2FParty%22)%0A%20%20AND%20(%60created_date%60%0A%20%20%20%20%20%20%20%20%20BETWEEN%20%222022-04-07T22%3A58%3A53%22%20%3A%3A%20floating_timestamp%0A%20%20%20%20%20%20%20%20%20AND%20%222023-04-06T22%3A58%3A53%22%20%3A%3A%20floating_timestamp)%0AORDER%20BY%20%60created_date%60%20DESC%20NULL%20LAST`;

// initialize parties DOM
let partiesDOM = "";

// initialize local data
let localData = null;


/*                  */
/* SET UP FUNCTIONS */
/*                  */

// this reformats dates/times to different formats
const formatDate = (dateTime) => {
    const dateObject = new Date(dateTime);
    // return dateObject;
    // return dateObject.toString();
    // return dateObject.toDateString();
    // return dateObject.toLocaleDateString();
    // return dateObject.toLocaleTimeString();
    // return dateObject.toLocaleString();
    // return dateObject.toGMTString();
    // return dateObject.toUTCString();
    // return dateObject.toISOString();
    // return dateObject.toLocaleString("en-US");
    return dateObject.toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short"
    });
};

// this grabs data and returns a js object
const fetchData = (url) => {
    
    console.log(`Fetching url - ${url}`);

    // notify the user to wait
    errors.innerHTML = "Loading new data <span class='rotating'>&#x21bb</span>";

    fetch(url)
    .then((response) => response.json())
    .then((json) => {
        // console.log(json);

        // clear out user notification
        errors.innerHTML = "";

        // copy data to local array
        localData = json;

        renderData(localData);

        // enable sorting buttons
        sortAsc.disabled = false;
        sortAsc.addEventListener("click", () => {
            renderData(sortDatesAsc(localData));
        });
        sortDesc.disabled = false;
        sortDesc.addEventListener("click", () => {
            renderData(sortDatesDesc(localData));
        });
    });
}

// this takes data as json and creates an ordered list from it
const renderData = (json) => {
    console.log(json);
    // clear out current partiesContainer
    partiesContainer.innerHTML = "";
    console.log("partiesContainer.innerHTML: ", partiesContainer.innerHTML);
    
    // start ordered list
    partiesDOM = `<ol>`;

    // create list element for each row of data
    json.forEach(function(party) {
        partiesDOM += `<li>${formatDate(party.created_date)}: (${party.borough}) ${party.location_type}</li>`;
    });

    // end ordered list
    partiesDOM += `</ol>`;

    // add to partiesContainer
    partiesContainer.innerHTML = partiesDOM;
}

const sortDatesAsc = (json) => {
    console.log("sort asc");
    return json.sort((a,b) => {
        const dateA = new Date(a.created_date);
        const dateB = new Date(b.created_date);

        if (dateA > dateB) {
            return 1;
        } else {
            return -1;
        }
    });
}
const sortDatesDesc = (json) => {
    console.log("sort desc");
    return json.sort((a,b) => {
        const dateA = new Date(a.created_date);
        const dateB = new Date(b.created_date);

        if (dateB > dateA) {
            return 1;
        } else {
            return -1;
        }
    });
}


/*                    */
/* RUN YOUR FUNCTIONS */
/*                    */

fetchData(url);