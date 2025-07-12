import { useState, useMemo } from "react";
import { mockEmployees, departments, roles } from "../../shared/employee.js";

export default function EmployeeDirectory() {
  // Initialize state for employee list and UI controls
  const [staff, setStaff] = useState(mockEmployees);
  const [query, setQuery] = useState(""); // Search input
  const [sortOption, setSortOption] = useState("--Select--"); // Sorting field
  const [limit, setLimit] = useState(10); // Items per page
  const [page, setPage] = useState(1); // Current page for pagination
  const [filterPanel, setFilterPanel] = useState(false); // Show/hide filter panel

  // Filter input fields
  const [filterInputs, setFilterInputs] = useState({
    firstName: "",
    department: "",
    role: "",
  });

  const [showModal, setShowModal] = useState(false); // Modal for add/edit
  const [editable, setEditable] = useState(null); // Employee being edited

  // Form data for employee
  const [employeeForm, setEmployeeForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    role: "",
  });

  // Compute filtered, searched, and sorted employees
  const visibleEmployees = useMemo(() => {
    let result = staff.filter((emp) => {
      const matchesQuery =
        emp.firstName.toLowerCase().includes(query.toLowerCase()) ||
        emp.lastName.toLowerCase().includes(query.toLowerCase()) ||
        emp.email.toLowerCase().includes(query.toLowerCase());

      const matchesFilters =
        (!filterInputs.firstName ||
          emp.firstName.toLowerCase().includes(filterInputs.firstName.toLowerCase())) &&
        (!filterInputs.department ||
          filterInputs.department === "all" ||
          emp.department === filterInputs.department) &&
        (!filterInputs.role ||
          filterInputs.role === "all" ||
          emp.role === filterInputs.role);

      return matchesQuery && matchesFilters;
    });

    // Sort by selected field
    if (sortOption === "firstName") {
      result.sort((a, b) => a.firstName.localeCompare(b.firstName));
    } else if (sortOption === "department") {
      result.sort((a, b) => a.department.localeCompare(b.department));
    }

    return result;
  }, [staff, query, filterInputs, sortOption]);

  // Pagination logic
  const total = Math.ceil(visibleEmployees.length / limit);
  const from = (page - 1) * limit;
  const currentItems = visibleEmployees.slice(from, from + limit);

  // Delete employee from list
  const removeEmployee = (id) => {
    if (confirm("Are you sure you want to delete this employee?")) {
      setStaff(staff.filter((emp) => emp.id !== id));
    }
  };

  // Prepare form for editing selected employee
  const editEmployee = (emp) => {
    setEditable(emp);
    setEmployeeForm({
      firstName: emp.firstName,
      lastName: emp.lastName,
      email: emp.email,
      department: emp.department,
      role: emp.role,
    });
    setShowModal(true);
  };

  // Open empty form to add new employee
  const openAddForm = () => {
    setEditable(null);
    setEmployeeForm({
      firstName: "",
      lastName: "",
      email: "",
      department: "",
      role: "",
    });
    setShowModal(true);
  };

  // Submit form to save or update employee
  const submitForm = () => {
    if (editable) {
      // Update existing employee
      setStaff(
        staff.map((emp) =>
          emp.id === editable.id ? { ...emp, ...employeeForm } : emp
        )
      );
    } else {
      // Add new employee with next available ID
      const newEmp = {
        id: Math.max(...staff.map((e) => e.id)) + 1,
        ...employeeForm,
      };
      setStaff([...staff, newEmp]);
    }
    setShowModal(false);
  };

  // Apply filters and reset pagination
  const applyFilterChanges = () => {
    setPage(1);
    setFilterPanel(false);
  };

  // Clear all filters and reset pagination
  const clearFilters = () => {
    setFilterInputs({ firstName: "", department: "", role: "" });
    setPage(1);
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb" }}>
      {/* Header Section */}
      <header className="header">
        <div className="header-container">
          <h1 className="header-title">Employee Directory</h1>
          <div className="header-actions">
            <input
              type="text"
              placeholder="Search by name or email"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
            />
            <button className="filter-button" onClick={() => setFilterPanel(!filterPanel)}>
              Filter
            </button>
          </div>
        </div>
      </header>

      <div className="main-container">
        {/* Content Section */}
        <div className={`content-area ${filterPanel ? "with-filter" : ""}`}>
          <div className="controls">
            {/* Sorting and pagination controls */}
            <div className="controls-left">
              <div className="control-group">
                <span className="control-label">Sort:</span>
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="select sort-select"
                >
                  <option value="--Select--">--Select--</option>
                  <option value="firstName">First Name</option>
                  <option value="department">Department</option>
                </select>
              </div>
              <div className="control-group">
                <span className="control-label">Show:</span>
                <select
                  value={limit.toString()}
                  onChange={(e) => setLimit(Number(e.target.value))}
                  className="select"
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>
            </div>
            <button onClick={openAddForm} className="add-button">
              Add Employee
            </button>
          </div>

          {/* Employee List */}
          <div className="employee-grid">
            {currentItems.map((emp) => (
              <div key={emp.id} className="employee-card">
                <h3 className="employee-name">
                  {emp.firstName} {emp.lastName}
                </h3>
                <div className="employee-details">
                  <div className="employee-detail">
                    <span className="detail-label">Email:</span> {emp.email}
                  </div>
                  <div className="employee-detail">
                    <span className="detail-label">Department:</span> {emp.department}
                  </div>
                  <div className="employee-detail">
                    <span className="detail-label">Role:</span> {emp.role}
                  </div>
                </div>
                <div className="employee-actions">
                  <button className="action-button" onClick={() => editEmployee(emp)}>
                    Edit
                  </button>
                  <button className="action-button" onClick={() => removeEmployee(emp.id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="pagination">
            <button
              className="pagination-button"
              disabled={page === 1}
              onClick={() => setPage(page - 1)}
            >
              Previous
            </button>
            <span className="pagination-info">
              Page {page} of {total}
            </span>
            <button
              className="pagination-button"
              disabled={page === total}
              onClick={() => setPage(page + 1)}
            >
              Next
            </button>
          </div>
        </div>

        {/* Filter Sidebar Panel */}
        {filterPanel && (
          <div className="filter-sidebar">
            <h3 className="filter-title">Filter Employees</h3>
            <div>
              <div className="filter-group">
                <label className="filter-label" htmlFor="filter-firstName">
                  First Name
                </label>
                <input
                  id="filter-firstName"
                  className="filter-input"
                  value={filterInputs.firstName}
                  onChange={(e) =>
                    setFilterInputs({ ...filterInputs, firstName: e.target.value })
                  }
                />
              </div>
              <div className="filter-group">
                <label className="filter-label" htmlFor="filter-department">
                  Department
                </label>
                <select
                  id="filter-department"
                  className="filter-select"
                  value={filterInputs.department}
                  onChange={(e) =>
                    setFilterInputs({ ...filterInputs, department: e.target.value })
                  }
                >
                  <option value="">Select department</option>
                  <option value="all">All Departments</option>
                  {departments.map((dept) => (
                    <option key={dept} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>
              <div className="filter-group">
                <label className="filter-label" htmlFor="filter-role">
                  Role
                </label>
                <select
                  id="filter-role"
                  className="filter-select"
                  value={filterInputs.role}
                  onChange={(e) =>
                    setFilterInputs({ ...filterInputs, role: e.target.value })
                  }
                >
                  <option value="">Select role</option>
                  <option value="all">All Roles</option>
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
              <div className="filter-actions">
                <button onClick={applyFilterChanges} className="filter-apply">
                  Apply
                </button>
                <button onClick={clearFilters} className="filter-reset">
                  Reset
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p className="footer-text">© 2025 Dibya Devs. All rights reserved.</p>
      </footer>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">{editable ? "Edit Employee" : "Add Employee"}</h2>
            <div>
              <div className="form-group">
                <label className="form-label" htmlFor="firstName">
                  First name
                </label>
                <input
                  id="firstName"
                  className="form-input"
                  value={employeeForm.firstName}
                  onChange={(e) =>
                    setEmployeeForm({ ...employeeForm, firstName: e.target.value })
                  }
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="lastName">
                  Last name
                </label>
                <input
                  id="lastName"
                  className="form-input"
                  value={employeeForm.lastName}
                  onChange={(e) =>
                    setEmployeeForm({ ...employeeForm, lastName: e.target.value })
                  }
                />
              </div>
              <div className="form-group-row">
                <div>
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input"
                    value={employeeForm.email}
                    onChange={(e) =>
                      setEmployeeForm({ ...employeeForm, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="department">
                    Department
                  </label>
                  <select
                    id="department"
                    className="form-select"
                    value={employeeForm.department}
                    onChange={(e) =>
                      setEmployeeForm({ ...employeeForm, department: e.target.value })
                    }
                  >
                    <option value="">Select department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="role">
                  Role
                </label>
                <select
                  id="role"
                  className="form-select"
                  value={employeeForm.role}
                  onChange={(e) =>
                    setEmployeeForm({ ...employeeForm, role: e.target.value })
                  }
                >
                  <option value="">Select role</option>
                  {roles.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>
              <div className="modal-actions">
                <button className="modal-cancel" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button onClick={submitForm} className="modal-save">
                  {editable ? "Save" : "Add"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
