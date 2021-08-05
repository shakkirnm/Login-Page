var express = require("express");
const app = require("../app");
const { route } = require("./users");
var router = express.Router();

function checkUser(req, res, next) {
    if (req.session.loggedIn) {
        next();
    } else {
        res.redirect("/");
    }
}
/* GET home page. */
router.get("/", (req, res, next) => {
    if (req.session.loggedIn) {
        res.redirect("home");
    } else {
        if (req.session.attempt) {
            res.header("Cache-Control", "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0");
            res.render("index", { error: "User Invalid" });
            req.session.attempt = false;
        } else {
            res.header(
                "Cache-Control","no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0");
            res.render("index");
        }
    }
});

router.post("/login", (req, res) => {
    if (req.body.email == Email && req.body.password == Password) {
        req.session.loggedIn = true;
        res.render("home",{products});
    } else {
        req.session.attempt = true;
        res.redirect("/");
    }
});

router.get("/home", checkUser, (req, res) => {
    res.header("Cache-Control", "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0");
    res.render("home", { products });
});

router.get("/logout", (req, res) => {
    delete req.session.loggedIn
    res.redirect("/");
    
});

let products = [
    {
        name: "Mini Cooper s",
        about: "Smallest Premium car, 3 door sports car",
        image: "https://images.unsplash.com/photo-1619861312543-2464f524b382?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
        name: "Porsche Carrera s",
        about: "Smallest Premium car, 3 door sports car",
        image: "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    },
    {
        name: "Ninja Zx10r",
        about: "Smallest Premium car, 3 door sports car",
        image: "https://images.unsplash.com/flagged/photo-1578240358966-610647316c40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
        name: "Ninja H2",
        about: "Smallest Premium car, 3 door sports car",
        image: "https://images.unsplash.com/photo-1623160850020-e98174120203?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=636&q=80",
    },
    {
        name: "BMW 5 Series",
        about: "Smallest Premium car, 3 door sports car",
        image: "https://images.unsplash.com/photo-1583356322882-85559b472f56?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
        name: "Royal Enfield GT",
        about: "Smallest Premium car, 3 door sports car",
        image: "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
    },
];

var Email = "sha@gmail.com";
var Password = "7070";

module.exports = router;
