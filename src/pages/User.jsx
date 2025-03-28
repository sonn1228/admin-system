import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { toast } from "react-hot-toast";

function User() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [editingId, setEditingId] = useState(null);

  // Fetch users from an API (e.g., a mock endpoint)
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      toast.error("Failed to fetch users");
      console.error(error);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Create or Update user
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        // Update user
        const response = await axios.put(
          `https://jsonplaceholder.typicode.com/users/${editingId}`,
          formData
        );
        setUsers(
          users.map((user) => (user.id === editingId ? response.data : user))
        );
        toast.success("User updated successfully");
        setEditingId(null);
      } else {
        // Create user
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/users",
          formData
        );
        setUsers([...users, response.data]);
        toast.success("User created successfully");
      }
      setFormData({ name: "", email: "" });
    } catch (error) {
      toast.error("Operation failed");
      console.error(error);
    }
  };

  // Edit user
  const handleEdit = (user) => {
    setFormData({ name: user.name, email: user.email });
    setEditingId(user.id);
  };

  // Delete user
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
      toast.success("User deleted successfully");
    } catch (error) {
      toast.error("Failed to delete user");
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>

      {/* Form for Create/Update */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          variant="outlined"
          style={{ marginRight: "10px" }}
        />
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          variant="outlined"
          style={{ marginRight: "10px" }}
        />
        <Button type="submit" variant="contained" color="primary">
          {editingId ? "Update" : "Add"} User
        </Button>
      </form>

      {/* User Table */}
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => handleEdit(user)}
                    style={{ marginRight: "10px" }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default User;
