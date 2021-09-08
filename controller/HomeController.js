
class HomeController{
    static homePage(req,res) {
        res.status(200).send("This is Home Page")
    }
}


module.exports = HomeController