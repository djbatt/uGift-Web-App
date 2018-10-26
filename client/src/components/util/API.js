import axios from "axios";  

export default {

  addBusiness: function(business) {
    return axios.post('/api/business/add', business);
  },

  //Delete a business
  deleteBusiness: function(businessID) {
    return axios.delete(`/api/business/${businessID}`);
  }
};
