const express = require("express");
const resourceController = require("../controllers/resourceController");

const router = express.Router();

// Routes for resource operations

// Create a resource
router.post("/:resourceType", resourceController.createResource);
// Get all resources
router.get("/resources", resourceController.getAllResources);
// Get all resources of a specific type
router.get("/:resourceType", resourceController.getAllResourcesOfSpecificType);
// Get a single resource by ID
router.get("/:resourceType/:id", resourceController.getResourceById);
// Update a resource
router.put("/:resourceType/:id", resourceController.updateResource);
// Delete a resource
router.delete("/:resourceType/:id", resourceController.deleteResource);


module.exports = router;
