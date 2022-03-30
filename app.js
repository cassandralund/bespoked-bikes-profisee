//Imports
const express = require('express');
const mongoose = require('mongoose');
const Salesperson = require('./models/salesperson');
const Product = require('./models/product');
const Customer = require('./models/customer');
const Sale = require('./models/sale');

const app = express();

//Connecting to database
const dbURI = "mongodb+srv://appUser:yFi29Ji2v8zsSDE@nodetuts.t8vup.mongodb.net/bespokedBikes?retryWrites=true&w=majority";
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: false})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//Enabling EJS
app.set("view engine", "ejs");

//Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index", { title: "BeSpoked Bikes Sales Home"});
});

app.get("/products", (req, res) => {
    Product.find().sort({ createdAt: -1 })
    .then(result => {
        res.render('products', { products: result, title: 'BeSpoked Bikes Sales Products' });
    })
    .catch(err => {
        console.log(err);
    });
});

app.get("/salespeople", (req, res) => {
    Salesperson.find().sort({ createdAt: -1 })
    .then(result => {
        res.render('salespeople', { salespeople: result, title: 'BeSpoked Bikes Sales Salespeople' });
    })
    .catch(err => {
        console.log(err);
    });
});

app.get("/customers", (req, res) => {
    Customer.find().sort({ createdAt: -1 })
    .then(result => {
        res.render('customers', { customers: result, title: 'BeSpoked Bikes Sales Customers' });
    })
    .catch(err => {
        console.log(err);
    });
});

app.get("/sales", (req, res) => {
    Sale.find().sort({ salesDate: -1 })
    .then(result => {
        res.render('sales', { sales: result, title: 'BeSpoked Bikes Sales' });
    })
    .catch(err => {
        console.log(err);
    });
});

app.get("/report", (req, res) => {
    Sale.find().sort({ salesperson: -1 })
    .then(result => {
        res.render('report', { sales: result, title: 'BeSpoked Bikes Commission Reports' });
    })
    .catch(err => {
        console.log(err);
    });
})

app.post("/salespeople", (req, res) => {
    // console.log(req.body);
    // console.log(req.body.oldPhone);
    let salesperson = Salesperson.findOne({ phone: req.body.oldPhone }, (err) => {
        if (err) {
            console.log(err);
        }
    });
    salesperson.updateOne({firstName: req.body.firstName, lastName: req.body.lastName, phone: req.body.phone, address: req.body.address, 
        startDate: req.body.startDate, terminationDate: req.body.terminationDate, manager: req.body.manager}).clone()
    .then((result) => {
        res.redirect("/salespeople");
    })
    .catch((err) => {
        console.log(err);
    })
});

app.post("/products", (req, res) => {
    // console.log(req.body);
    // console.log(req.body.oldName);
    let product = Product.findOne({ phone: req.body.oldName }, (err) => {
        if (err) {
            console.log(err);
        }
    });
    product.updateOne({name: req.body.name, manufacturer: req.body.manufacturer, style: req.body.style, purchasePrice: req.body.purchasePrice, 
        salePrice: req.body.salePrice, qtyOnHand: req.body.qtyOnHand, comissionPercentage: req.body.comissionPercentage}).clone()
    .then((result) => {
        res.redirect("/products");
    })
    .catch((err) => {
        console.log(err);
    })
});
app.post("/sales", (req, res) => {
    const sale = new Sale(req.body);
    // console.log(req.body);

    sale.save()
    .then((result) => {
        res.redirect("/sales");
    })
    .catch((err) => {
        console.log(err);
    })
})