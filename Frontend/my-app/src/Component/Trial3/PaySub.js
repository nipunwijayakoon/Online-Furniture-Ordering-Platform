var axios = require('axios');

var config = {
  method: 'post',
  url: 'https://localhost:5001/api/Pay',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
