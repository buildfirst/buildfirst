module.exports = {
  getList: function (req, res) {
    res.json([
      { name: 'Banana', amount: 3 },
      { name: 'Strawberry', amount: 8 },
      { name: 'Almond', amount: 34 },
      { name: 'Chocolate Bar', amount: 1 }
    ]);
  }
};
