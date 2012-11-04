
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'CAOS | The Choir and Orchestral Society | University of Manchester' })
};