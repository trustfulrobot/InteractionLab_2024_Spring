const partiesContainer = document.querySelector('#parties');
const errors = document.querySelector('#errors');
const controller = document.querySelector('#controller');
let filterInput = document.querySelector('#filterInput');
const APP_TOKEN = 'I6P0LofetlBLmwW5IbfTd2iye'; // <- Replace this with your app token
const DATASET_IDENTIFIER = 'erm2-nwe9'; // <- Replace this with the ID for the data resource that you want to look up

// Construct the URL that we need to make requests
// This is a filtered dataset of only "Loud Music/Party" complaints in the past year
const url = `https://data.cityofnewyork.us/resource/${DATASET_IDENTIFIER}.json?$$app_token=${APP_TOKEN}&$query=SELECT%0A%20%20%60unique_key%60%2C%0A%20%20%60created_date%60%2C%0A%20%20%60closed_date%60%2C%0A%20%20%60agency%60%2C%0A%20%20%60agency_name%60%2C%0A%20%20%60complaint_type%60%2C%0A%20%20%60descriptor%60%2C%0A%20%20%60location_type%60%2C%0A%20%20%60incident_zip%60%2C%0A%20%20%60incident_address%60%2C%0A%20%20%60street_name%60%2C%0A%20%20%60cross_street_1%60%2C%0A%20%20%60cross_street_2%60%2C%0A%20%20%60intersection_street_1%60%2C%0A%20%20%60intersection_street_2%60%2C%0A%20%20%60address_type%60%2C%0A%20%20%60city%60%2C%0A%20%20%60landmark%60%2C%0A%20%20%60facility_type%60%2C%0A%20%20%60status%60%2C%0A%20%20%60due_date%60%2C%0A%20%20%60resolution_description%60%2C%0A%20%20%60resolution_action_updated_date%60%2C%0A%20%20%60community_board%60%2C%0A%20%20%60bbl%60%2C%0A%20%20%60borough%60%2C%0A%20%20%60x_coordinate_state_plane%60%2C%0A%20%20%60y_coordinate_state_plane%60%2C%0A%20%20%60open_data_channel_type%60%2C%0A%20%20%60park_facility_name%60%2C%0A%20%20%60park_borough%60%2C%0A%20%20%60vehicle_type%60%2C%0A%20%20%60taxi_company_borough%60%2C%0A%20%20%60taxi_pick_up_location%60%2C%0A%20%20%60bridge_highway_name%60%2C%0A%20%20%60bridge_highway_direction%60%2C%0A%20%20%60road_ramp%60%2C%0A%20%20%60bridge_highway_segment%60%2C%0A%20%20%60latitude%60%2C%0A%20%20%60longitude%60%2C%0A%20%20%60location%60%2C%0A%20%20%60%3A%40computed_region_efsh_h5xi%60%2C%0A%20%20%60%3A%40computed_region_f5dn_yrer%60%2C%0A%20%20%60%3A%40computed_region_yeji_bk3q%60%2C%0A%20%20%60%3A%40computed_region_92fq_4b7q%60%2C%0A%20%20%60%3A%40computed_region_sbqj_enih%60%0AWHERE%0A%20%20starts_with(%60descriptor%60%2C%20%22Loud%20Music%22)%0A%20%20AND%20(%60created_date%60%0A%20%20%20%20%20%20%20%20%20BETWEEN%20%222023-04-01T04%3A08%3A48%22%20%3A%3A%20floating_timestamp%0A%20%20%20%20%20%20%20%20%20AND%20%222023-04-07T04%3A08%3A48%22%20%3A%3A%20floating_timestamp)%0AORDER%20BY%20%60created_date%60%20DESC%20NULL%20LAST`;

// initialize parties DOM
let partiesDOM = "<ul>";

// initialize start & end dates
const startDate = new Date("2023-04-01");
const endDate = new Date("2023-04-07");

// initialize JSON data
let partiesJSON = [];

// define functions
const renderJSON = (json) => {
    // clear out current info
    errors.innerHTML = "Rendering data <span class='rotating'>&#x21bb</span>";
    partiesContainer.innerHTML = "";
    partiesJSON.forEach(function(party) {
        partiesDOM += `<li data-borough="${party.borough}">${formatDate(party.created_date)}: (${party.borough}) ${party.location_type}</li>`;
    });
    partiesDOM += `</ul>`;
    partiesContainer.innerHTML = partiesDOM;
    errors.innerHTML = "";
}

const formatDate = (dateTime) => {
    const dateObject = new Date(dateTime);
    return dateObject.toLocaleString("en-US");
};

const fetchJSON = async (url) => {
    // clear out current col
    errors.innerHTML = "Loading new data <span class='rotating'>&#x21bb</span>";
  
    console.log(`Fetching url - ${url}`);
    await fetch(url).then(response => {
        // clear out message
        errors.innerHTML = "";
        return response.json();
    })
    .then(response => {
        console.log(response);
        partiesJSON = response;
        renderJSON(partiesJSON);
    })
    .catch(error => {
        console.error(error);
        errors.innerHTML = error;
    });
}

const filterNames = () => {
    // Get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
  
    let parties = partiesContainer.querySelectorAll('li');
    console.log("filtervalue: ", filterValue);
  
    // Loop through collection-item lis
    parties.forEach((party) => {
      if (party.dataset.borough.toUpperCase().indexOf(filterValue) > -1) {
          party.style.display = "block";
      } else {
          party.style.display = "none";
      }
    });
  
  }


// execute functions
fetchJSON(url);

// set up event listeners
filterInput.addEventListener('keyup', filterNames);