import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  DetailContainer,
  DetailTitle,
  TableWrapper,
  ResourceTable,
  TableHeader,
  TableRow,
  TableCell,
  ReserveButton,
  ErrorText,
  NoDataMessage,
} from "./ResourceDetail/style";

const ResourceDetail = () => {
  const { resourceType } = useParams(); // Get resource type from URL
  const [resourceDetails, setResourceDetails] = useState([]); // Store resource details
  const [error, setError] = useState(null); // Store error messages

  // Fetch resource details from the backend
  useEffect(() => {
    const fetchResourceDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/resources/${resourceType}`
        );
        setResourceDetails(response.data);
      } catch (err) {
        setError("Error fetching resource details");
      }
    };

    fetchResourceDetails();
  }, [resourceType]);

  // Handle reserve button click
  const handleReserve = async (resourceId) => {
    // Update the resource status locally for immediate UI feedback
    const updatedResources = resourceDetails.map((resource) =>
      resource._id === resourceId
        ? { ...resource, status: "in use" }
        : resource
    );
    setResourceDetails(updatedResources);

    try {
      // Send the updated status to the backend
      await axios.put(
        `http://localhost:5000/api/resources/${resourceType}/${resourceId}`,
        { status: "in use" }
      );
    } catch (err) {
      console.error("Error updating resource status:", err);
      setError("Failed to reserve resource. Please try again.");
    }
  };

  // Render error message if any
  if (error) {
    return (
      <DetailContainer>
        <ErrorText>{error}</ErrorText>
      </DetailContainer>
    );
  }

  return (
    <DetailContainer>
      <DetailTitle>
        {resourceType.charAt(0).toUpperCase() + resourceType.slice(1)} Details
      </DetailTitle>
      {resourceDetails.length > 0 ? (
        <TableWrapper>
          <ResourceTable>
            <thead>
              <TableRow>
                {/* Render column headers dynamically */}
                {Object.keys(resourceDetails[0]).map(
                  (key) =>
                    key !== "_id" &&
                    key !== "__v" &&
                    key !== "name" && (
                      <TableHeader key={key}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </TableHeader>
                    )
                )}
                <TableHeader>Reserve</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {/* Render table rows dynamically */}
              {resourceDetails.map((resource, index) => (
                <TableRow key={index}>
                  {Object.keys(resource).map(
                    (key) =>
                      key !== "_id" &&
                      key !== "__v" &&
                      key !== "name" && (
                        <TableCell key={key}>{resource[key]}</TableCell>
                      )
                  )}
                  <TableCell>
                    <ReserveButton
                      available={resource.status === "available"}
                      onClick={() =>
                        resource.status === "available" &&
                        handleReserve(resource._id)
                      }
                      disabled={resource.status !== "available"}
                    >
                      {resource.status === "available"
                        ? "Reserve"
                        : "Unavailable"}
                    </ReserveButton>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </ResourceTable>
        </TableWrapper>
      ) : (
        <NoDataMessage>No resources available</NoDataMessage>
      )}
    </DetailContainer>
  );
};

export default ResourceDetail;
