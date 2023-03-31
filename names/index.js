const peopleName = require("../country/state/city/index");
const getFirstName = require("../utilities/utils/index");

const getPeopleInCity = (getFirstName) => {
  return peopleName(getFirstName);
};

module.exports = getPeopleInCity;
