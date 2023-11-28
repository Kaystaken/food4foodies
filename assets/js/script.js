
//not really needed, just easier to copy and paste for me (will clean)
let requestUrl = 'https://api.edamam.com/api/recipes/v2?type=any&app_id=29fea8d3&app_key=5f514c87c541768c9fc42178e830dac2&q='
let APP_ID = "29fea8d3"
let API_KEY = "5f514c87c541768c9fc42178e830dac2"

//function to retrieve data from api
async function fetchData() {
  let response = await fetch(requestUrl);
  let json = await response.json();
  console.log(json);
}