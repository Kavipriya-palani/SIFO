import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const Table = () => {
  const [loading, setLoading] = useState(true);

  const columndata = [
    {
      Name: "John Doe",
      Country: "USA",
      Agent: "Agent A",
      Date: "2023-11-14",
      Balance: 1000.5,
      Status: "Active",
      Activity: "Purchase",
      Verified: true,
    },
    {
      Name: "Jane Smith",
      Country: "Canada",
      Agent: "Agent B",
      Date: "2023-11-13",
      Balance: 250.75,
      Status: "Inactive",
      Activity: "Sale",
      Verified: false,
    },
  ];

  useEffect(() => {
    setLoading(false);
  }, []);

  const columns = Object.keys(columndata[0]).map((key) => ({
    field: key,
    header: key.charAt(0).toUpperCase() + key.slice(1),
  }));

  const dynamicColumns = columns.map((col) => (
    <Column
      key={col.field}
      field={col.field}
      header={col.header}
      filterPlaceholder={`Search by ${col.header.toLowerCase()}`}
      style={{ minWidth: "12rem" }}
    />
  ));

  return (
    <div>
      <h2>Table</h2>
      <DataTable
        value={columndata}
        paginator
        className="p-datatable-gridlines"
        showGridlines
        rows={10}
        dataKey="Name"
        filters={{}}
        filterDisplay="menu"
        loading={loading}
        responsiveLayout="scroll"
        emptyMessage="No customers found."
      >
        {dynamicColumns}
      </DataTable>
    </div>
  );
};

export default Table;
