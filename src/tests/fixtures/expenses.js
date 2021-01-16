import moment from "moment";

export default [
  {
    id: 1,
    description: "one",
    note: "note",
    amount: 195,
    createdAt: 0,
  },
  {
    id: 2,
    description: "two",
    note: "note2",
    amount: 109500,
    createdAt: moment(0)
      .subtract(4, "days")
      .valueOf(),
  },
  {
    id: 3,
    description: "three",
    note: "note3",
    amount: 4500,
    createdAt: moment(0)
      .add(4, "days")
      .valueOf(),
  },
];
