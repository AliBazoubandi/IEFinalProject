import styled from "styled-components";

// Main container for the detail page
export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eef2f6;
  min-height: 100vh;
  padding: 20px;
`;

// Title for the detail page
export const DetailTitle = styled.h1`
  font-size: 32px;
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
`;

// Table wrapper for resource details
export const TableWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
  margin-top: 20px;
`;

// Table for displaying resource instances
export const ResourceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

// Table header row
export const TableHeader = styled.th`
  background-color: #3498db;
  color: white;
  text-align: left;
  padding: 12px 16px;
  font-size: 16px;
  text-transform: uppercase;
`;

// Table row styling
export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f8f9fa;
  }

  &:hover {
    background-color: #eaf2f8;
  }
`;

// Table cell styling
export const TableCell = styled.td`
  padding: 10px 16px;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #ddd;
`;

// Reserve button
export const ReserveButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  color: #ffffff;
  background-color: ${(props) => (props.available ? "#28a745" : "#dc3545")};
  pointer-events: ${(props) => (props.available ? "auto" : "none")};
  opacity: ${(props) => (props.available ? "1" : "0.6")};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.available ? "#218838" : "#c82333"};
  }
`;

// Error message for the detail page
export const ErrorText = styled.p`
  color: #e74c3c;
  font-size: 18px;
  margin-top: 20px;
  text-align: center;
`;

// Fallback message for empty resources
export const NoDataMessage = styled.p`
  font-size: 18px;
  color: #555;
  text-align: center;
  margin-top: 20px;
`;
