import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Title,
  GridContainer,
  ResourceCard,
  ResourceName,
  StatusSummary,
  StatusCount,
  ErrorMessage,
} from "./Dashboard/style";

const Dashboard = () => {
  const [resources, setResources] = useState({
    classroom: [],
    locker: [],
    amphitheater: [],
    laptop: [],
    laboratory: [],
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const resourceTypes = ["classroom", "locker", "amphitheater", "laptop", "laboratory"];
        const resourcePromises = resourceTypes.map((type) =>
          axios.get(`http://localhost:5000/api/resources/${type}`)
        );

        const results = await Promise.all(resourcePromises);

        const newResources = {};
        results.forEach((response, index) => {
          const type = resourceTypes[index];
          newResources[type] = response.data;
        });
        setResources(newResources);
      } catch (err) {
        setError("Error fetching resources");
      }
    };

    fetchResources();
  }, []);

  const handleResourceClick = (type) => {
    navigate(`/resources/${type}`);
  };

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <Container>
      <Title>Resource Dashboard</Title>
      <GridContainer>
        {Object.keys(resources).map((type, index) => (
          <ResourceCard key={index} onClick={() => handleResourceClick(type)}>
            <ResourceName>{type.charAt(0).toUpperCase() + type.slice(1)}</ResourceName>
            <StatusSummary>
              <StatusCount>
                Available: {resources[type].filter(r => r.status === "available").length}
              </StatusCount>
              <StatusCount>
                In Use: {resources[type].filter(r => r.status === "in use").length}
              </StatusCount>
              <StatusCount>
                Under Maintenance: {resources[type].filter(r => r.status === "under maintenance").length}
              </StatusCount>
            </StatusSummary>
          </ResourceCard>
        ))}
      </GridContainer>
    </Container>
  );
};

export default Dashboard;
