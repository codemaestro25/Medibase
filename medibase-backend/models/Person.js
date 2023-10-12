import mongoose from "mongoose";


const PersonSchema = mongoose.Schema({
    fingerprint: {
        type: [
          {
            type: String,
          },
        ],
      },
     
      iris: {
        type: [
          {
            type: String,
          },
        ],
      },
      aadhar: {
        type: Number,
        get: (value) => {
          if (typeof value === 'object' && value['$numberLong']) {
            return Number(value['$numberLong']);
          }
          return value;
        }
      },
      mobile: {
        type: Number,
        get: (value) => {
          if (typeof value === 'object' && value['$numberLong']) {
            return Number(value['$numberLong']);
          }
          return value;
        }
      },
      rel1_mob: {
        type: Number,
        get: (value) => {
          if (typeof value === 'object' && value['$numberLong']) {
            return Number(value['$numberLong']);
          }
          return value;
        }
      },
      rel2_mob: {
        type: Number,
        get: (value) => {
          if (typeof value === 'object' && value['$numberLong']) {
            return Number(value['$numberLong']);
          }
          return value;
        }
      },
    name : {
        type : String
    },
    address : {
        type : String
    },
    dob : {
        type : String
    },
    rel1_name : {
        type : String
    },
    rel2_name : {
        type : String
    },
    bldgrp : {
        type : String
    },
    age : {
        type : String
    }
   

});

const Person = mongoose.model("Person", PersonSchema, "Persons");

export default Person;