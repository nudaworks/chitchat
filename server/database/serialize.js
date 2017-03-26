const _ = require('underscore');

let Serialize = {};

Serialize.user = (data) => {
  let result = {};
  result.id = data._id || data.id;
  result.email = data.email;
  result.firstName = data.firstName ||  null;
  result.lastName = data.lastName || null;
  result.token = data.token || null;
  return result;
};

Serialize.product = (data) => {
  let result;
  
  if (_.isArray(data)) {
    result = [];
    _.each(data, (item, index, list) => {
      result.push(filterObj(item));
    });
    return result;
  }

  return filterObj(data);

  function filterObj(data, i) {
    let result = {};
    result.id = data._id || data.id;
    result.name = data.name;
    result.description = data.description ||  null;
    result.price = data.price || 0;
    return result;
  }
};


Serialize.product.saveFilter = (data) => {
  let result = {};
  result.name = data.name;
  result.description = data.description;
  result.price = data.price || 0;
  return result;
};


module.exports = Serialize;
