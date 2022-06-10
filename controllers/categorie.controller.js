const Categorie = require("../models/categorie");

//add categorie
exports.addCategorie = async (req, res) => {
    let { categorieName } = req.body;
    let isExest = await Categorie.findOne({ categorieName });
    if (isExest) {
      res.status(400).json({ msg: "categorie is already exist " });
    }
    try {
      let newCategorie = new Categorie({ categorieName });
      await newCategorie.save();
      res.send(newCategorie);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  exports.getCategorie = async (req, res) => {
    try {
      let Categories = await Categorie.find();
      res.send(Categories);
    } catch (error) {
      res.status(500).json({ errors: error.message });
    }
  };
  
  exports.deleteCategorie=async(req,res)=>{
    try {
    await Categorie.findByIdAndDelete(req.params.id)
    res.send("Categorie is deleted")
    } catch (error) {
        console.log(error.message)
    }
  }