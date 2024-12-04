import styled from "styled-components";

// Main container for the dashboard and detail pages
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f4f7fc;
  min-height: 100vh;
  padding: 30px;
`;

// Title for the pages
export const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 30px;
  text-align: center;
`;

// Grid container for the resource cards on the dashboard
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-top: 30px;

  // For two rows with uneven items
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Individual resource card
export const ResourceCard = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  transition: transform 0.3s ease;
  cursor: pointer;
  text-align: center;
  &:hover {
    transform: scale(1.05);
  }
`;

// Resource name on the dashboard
export const ResourceName = styled.h3`
  font-size: 22px;
  color: #007bff;
  margin-bottom: 15px;
  font-weight: 600;
`;

// Summary of statuses (Available, In Use, Under Maintenance)
export const StatusSummary = styled.div`
  display: flex;
  flex-direction: column;
`;

// Individual status count
export const StatusCount = styled.div`
  font-size: 16px;
  color: #555;
  margin-top: 5px;
`;

// Error message
export const ErrorMessage = styled.p`
  color: red;
  font-size: 18px;
  text-align: center;
  margin-top: 30px;
`;

// Resource properties container for the detail page
export const ResourceProperties = styled.div`
  margin-top: 10px;
  text-align: left;
`;

// Individual property row for resource details
export const Property = styled.div`
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
  strong {
    font-weight: bold;
    color: #007bff;
  }
`;
