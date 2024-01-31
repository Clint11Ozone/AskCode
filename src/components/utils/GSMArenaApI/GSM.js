import axios from "axios";

const brandQuery = (brand) => {
    return new Promise((resolve, reject) => {
      // get data
      axios
        .get(`http://localhost:4000/brand/${brand}`)
        .then((response) => {
          console.log(response?.data);
          return resolve(response?.data);
        })
        .catch((e) => {
          console.log("Query Failed", e);
          return reject(e);
        });
    });
  };

  export default brandQuery;