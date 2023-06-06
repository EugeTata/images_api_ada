import ImageScheme from "../models/images.js";


/**
 * Get images
 * @param {*} req
 * @param {*} res
 */

export const getItems = async (req, res) => {
   try {
    const data = await ImageScheme.find({})
    res.send({ data });
   } catch(error) {
     res.status(500).send({message: "Error to get data"});
   }
};

/**
 * Get image
 * @param {*} req 
 * @param {*} res 
 */

export const getItem = async (req, res) => { 
   try {
    const id = req.params.id;
    const data = await ImageScheme.findOne({ _id: id }).exec();
    res.send({ data });
   } catch (error) {
    res.status(500).send({ message: "Image not found" });
   }
};

/**
 * Create image
 * @param {*} req 
 * @param {*} res 
 */

export const createItem = async (req, res) => {
    try {
        const body = req.body;
        const data = await ImageScheme.create(body);
        res.send({ data });  
    } catch (error) {
       res.status(400).send({ message: "Error to create image" }); 
    }
};

/**
 * Delete image
 * @param {*} req
 * @param {*} res
 */

export const deleteItem = async (req, res) => {
   try {
    const id = req.params.id;
    await ImageScheme.findByIdAndDelete(id).exec();
    res.send({ message: "Item deleted successful" });
   } catch (error) {
    res.status(500).send({ message: "Error to delete image" });
   }
};

/**
 * Update image
 * @param {*} req
 * @param {*} res
 */

export const updateItem = async (req, res) => {
 try {
  const id = req.params.id;
  const body = req.body;
  const updateImage = await ImageScheme.findByIdAndUpdate(id, body, {
    new: true,
  }).exec();
  res.send({ updateItem });
 } catch (error) {
  res.status(500).send({ message: "Error to update image" });
 }
};
