const Classroom = require("../models/Classroom");
const Locker = require("../models/Locker");
const Amphitheater = require("../models/Amphitheater");
const Laptop = require("../models/Laptop");
const Laboratory = require("../models/Laboratory");

// Map resource types to their models
const resourceModels = {
  classroom: Classroom,
  locker: Locker,
  amphitheater: Amphitheater,
  laptop: Laptop,
  laboratory: Laboratory,
};

const resourceController = {
  // Create a new resource
  createResource: async (req, res) => {
    const { resourceType } = req.params; // Extract resource type from route parameter
    const Model = resourceModels[resourceType]; // Get the corresponding model

    if (!Model) {
      return res.status(400).json({ error: "Invalid resource type" });
    }

    try {
      const newResource = new Model(req.body); // Create a new instance of the model
      await newResource.save(); // Save to the database

      res.status(201).json({ message: `${resourceType} created successfully!`, resource: newResource });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // Get all resources of a specific type
  getAllResources: async (req, res) => {
    const { resourceType } = req.params; // Extract resource type from route parameter
    const Model = resourceModels[resourceType]; // Get the corresponding model

    if (!Model) {
      return res.status(400).json({ error: "Invalid resource type" });
    }

    try {
      const resources = await Model.find(); // Retrieve all resources of this type
      res.json(resources);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // Get a single resource by ID
  getResourceById: async (req, res) => {
    const { resourceType, id } = req.params;
    const Model = resourceModels[resourceType];

    if (!Model) {
      return res.status(400).json({ error: "Invalid resource type" });
    }

    try {
      const resource = await Model.findById(id); // Find resource by ID
      if (!resource) {
        return res.status(404).json({ error: `${resourceType} not found` });
      }
      res.json(resource);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // Update a resource
  updateResource: async (req, res) => {
    const { resourceType, id } = req.params;
    const Model = resourceModels[resourceType];

    if (!Model) {
      return res.status(400).json({ error: "Invalid resource type" });
    }

    try {
      const updatedResource = await Model.findByIdAndUpdate(id, req.body, { new: true });

      if (!updatedResource) {
        return res.status(404).json({ error: `${resourceType} not found` });
      }

      res.json({ message: `${resourceType} updated successfully!`, resource: updatedResource });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  // Delete a resource
  deleteResource: async (req, res) => {
    const { resourceType, id } = req.params;
    const Model = resourceModels[resourceType];

    if (!Model) {
      return res.status(400).json({ error: "Invalid resource type" });
    }

    try {
      const deletedResource = await Model.findByIdAndDelete(id);

      if (!deletedResource) {
        return res.status(404).json({ error: `${resourceType} not found` });
      }

      res.json({ message: `${resourceType} deleted successfully!` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = resourceController;
