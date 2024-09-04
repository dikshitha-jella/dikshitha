/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Grocery Delivery store' });
   };
module.exports = {
index
};