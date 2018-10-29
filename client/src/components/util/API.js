import axios from "axios";  

export default {

  addBusiness: function(business) {
    return axios.post('/api/business/add', business);
  },

  addUser: function(user) {
    return axios.post('/api/user/add', user);
  },

  //Delete a business
  deleteBusiness: function(businessID) {
    return axios.delete(`/api/business/${businessID}`);
  }
};
