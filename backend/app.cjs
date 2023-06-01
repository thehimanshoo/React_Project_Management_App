const express = require("express");
const app = express();
const port = 5001;
const cors = require("cors");

app.use(cors());

let details = [
  {
    id: 1,
    country: "Malaysia",
    itb: "2200028337",
    product: "Synflorix",
    target: "All",
    tender: "4,576,000",
    sub: "16-04-2021",
    del: "16-04-2021",
    favorite: true,
  },
  {
    id: 2,
    country: "Maxico",
    itb: "2200064427",
    product: "Synflorix",
    target: "All",
    tender: "4,500,000",
    sub: "20-04-2021",
    del: "20-04-2021",
    favorite: false,
  },
  {
    id: 3,
    country: "Malaysia",
    itb: "2200021185",
    product: "Synflorix",
    target: "All",
    tender: "4,897,000",
    sub: "25-04-2021",
    del: "25-04-2021",
    favorite: false,
  },
  {
    id: 4,
    country: "Maxico",
    itb: "2200064427",
    product: "Synflorix",
    target: "All",
    tender: "7,500,000",
    sub: "13-07-2021",
    del: "13-07-2021",
    favorite: false,
  },
  {
    id: 5,
    country: "Malaysia",
    itb: "2200028337",
    product: "Synflorix",
    target: "All",
    tender: "9,780,000",
    sub: "11-09-2021",
    del: "11-09-2021",
    favorite: false,
  },
  {
    id: 6,
    country: "Maxico",
    itb: "2200064427",
    product: "Synflorix",
    target: "All",
    tender: "1,890,000",
    sub: "13-09-2021",
    del: "13-09-2021",
    favorite: true,
  },
  {
    id: 7,
    country: "Malaysia",
    itb: "2200021185",
    product: "Synflorix",
    target: "All",
    tender: "2,670,000",
    sub: "19-08-2021",
    del: "19-08-2021",
    favorite: false,
  },
  {
    id: 8,
    country: "Maxico",
    itb: "2200028337",
    product: "Synflorix",
    target: "All",
    tender: "3,500,000",
    sub: "19-01-2022",
    del: "19-01-2022",
    favorite: true,
  },
  {
    id: 9,
    country: "Malaysia",
    itb: "2200064427",
    product: "Synflorix",
    target: "All",
    tender: "4,321,000",
    sub: "10-04-2022",
    del: "10-04-2022",
    favorite: false,
  },
  {
    id: 10,
    country: "Maxico",
    itb: "2200021185",
    product: "Synflorix",
    target: "All",
    tender: "4,765,200",
    sub: "16-04-2022",
    del: "16-04-2022",
    favorite: false,
  },
  {
    id: 11,
    country: "Malaysia",
    itb: "2200028337",
    product: "Synflorix",
    target: "All",
    tender: "8,890,210",
    sub: "26-05-2022",
    del: "26-05-2022",
    favorite: false,
  },
  {
    id: 12,
    country: "Maxico",
    itb: "2200064427",
    product: "Synflorix",
    target: "All",
    tender: "6,578,089",
    sub: "26-05-2022",
    del: "26-05-2022",
    favorite: false,
  },
  {
    id: 13,
    country: "Malaysia",
    itb: "2200021185",
    product: "Synflorix",
    target: "All",
    tender: "4,500,431",
    sub: "29-05-2022",
    del: "26-06-2022",
    favorite: true,
  },
  {
    id: 14,
    country: "Maxico",
    itb: "2200028337",
    product: "Synflorix",
    target: "All",
    tender: "4,520,678",
    sub: "26-07-2022",
    del: "26-07-2022",
    favorite: false,
  },
  {
    id: 15,
    country: "Malaysia",
    itb: "2200064427",
    product: "Synflorix",
    target: "All",
    tender: "6,589,420",
    sub: "28-08-2022",
    del: "28-08-2022",
    favorite: false,
  },
];

app.get("/details", (req, res) => {
  res.send(details);
});
app.get("/:id", (req, res) => {
  let id = req.params.id;
  for (let i = 0; i < details.length; i++) {
    if (details[i].id == id) {
      res.send(details[i]);
    }
  }
});

app.listen(port, () => {
  console.log("Example app listening on port ${port}");
});
