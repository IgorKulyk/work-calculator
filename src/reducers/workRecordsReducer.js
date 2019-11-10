// import _ from "lodash";

const initialState = [
  {
    city: "Jerusalem",
    end: "2019-11-07T20:00",
    location: "Restaurant",
    start: "2019-11-07T10:00",
    workTime: 600,
    salary: 35,
    totalPayment: 350
  },
  {
    city: "Lod",
    end: "2019-11-08T20:00",
    location: "Hotel",
    start: "2019-11-08T10:00",
    workTime: 600,
    salary: 35,
    totalPayment: 350
  },
  {
    city: "Lod2",
    end: "2019-11-08T20:00",
    location: "Hotel",
    start: "2019-11-08T10:00",
    workTime: 600,
    salary: 35,
    totalPayment: 350
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_WORK":
      return [...state, action.payload];
    case "DELETE_WORK":
      return state.filter((record, index) => index !== action.payload);
    case "EDIT_WORK":
      return state;
    default:
      return state;
  }
};
