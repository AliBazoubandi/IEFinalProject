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
  const { resourceType } = useParams();
  const [resourceDetails, setResourceDetails] = useState([]);
  const [error, setError] = useState(null);

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

  if (error) {
    return (
      <DetailContainer>
        <ErrorText>{error}</ErrorText>
      </DetailContainer>
    );
  }

  return (
    <DetailContainer>
      <DetailTitle>{resourceType.charAt(0).toUpperCase() + resourceType.slice(1)} Details</DetailTitle>
      {resourceDetails.length > 0 ? (
        <TableWrapper>
          <ResourceTable>
            <thead>
              <TableRow>
                {/* Dynamically render column headers */}
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
              {/* Render table rows for each instance */}
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
                        alert(`Reserving ${resource.name || resourceType}`)
                      }
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
