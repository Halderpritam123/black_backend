const Data = require('../models/data');

const dataController = {
  addData: async (req, res) => {
    try {
      const newData = new Data(req.body);
      await newData.save();
      res.status(201).json(newData);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  getFilteredData: async (req, res) => {
    try {
      const filters = req.query;
      const filteredData = await Data.find(filters);
      res.json(filteredData);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  editData: async (req, res) => {
    try {
      const id = req.params.id;
      const updatedData = req.body;
      const result = await Data.findByIdAndUpdate(id, updatedData, {
        new: true,
      });

      if (!result) {
        return res.status(404).json({ message: 'Data not found' });
      }

      res.json(result);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  deleteData: async (req, res) => {
    try {
      const id = req.params.id;
      const deletedData = await Data.findByIdAndDelete(id);

      if (!deletedData) {
        return res.status(404).json({ message: 'Data not found' });
      }

      res.json({ message: 'Data deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = dataController;
