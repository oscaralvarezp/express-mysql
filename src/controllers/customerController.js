const controller = {};

controller.index = (req, res) => {
  req.getConnection((err, con) => {
      con.query('SELECT * FROM customer', (err, customers) => {
          if (err) {
              res.json(err);
          }
          res.render('customers', {
              data: customers
          });
      });
  })
};

controller.create = (req, res) => {
    const data = req.body; 
    req.getConnection((err, con) => {
        con.query('INSERT INTO customer set ?', [data], (err, customer) => {
            res.redirect('/');
        })
    });
};

controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, con) => {
        con.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
          res.redirect('/');  
        });
    });
};

controller.show = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, con) => {
        con.query('SELECT * FROM customer WHERE id = ?', [id], (err, customer) => {
           res.render('customer_edit.ejs', {
                data: customer[0]
           });             
        });
    });
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body
    req.getConnection((err, con) => {
        con.query('UPDATE customer set ? WHERE id = ?', [newCustomer, id], (err, rows) => {
            res.redirect('/');
        });
    });
}

module.exports = controller;