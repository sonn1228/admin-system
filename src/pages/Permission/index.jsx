import permissionService from '@/services/permissionService';
import React, { useEffect, useState, useCallback } from 'react';
import { Container, Typography, List, ListItem, ListItemText, Paper, CircularProgress, Box, Avatar } from '@mui/material';
import { Lock, LockOpen } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
}));

const PermissionIcon = styled(Avatar)(({ theme, isAdmin }) => ({
  backgroundColor: isAdmin ? theme.palette.primary.main : theme.palette.success.main,
  marginRight: theme.spacing(2),
}));

function Permission() {
  const [permissions, setPermissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPermissions = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await permissionService.getAllPermission();
      setPermissions(Array.isArray(response.data) ? response.data : []);
    } catch {
      setError('Failed to load permissions.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPermissions();
  }, [fetchPermissions]);

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
        Permission Management
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" mb={2}>
        Manage and view system permissions
      </Typography>

      {loading && (
        <Box display="flex" justifyContent="center" py={4}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Typography color="error" textAlign="center" sx={{ py: 2 }}>
          {error}
        </Typography>
      )}

      {!loading && !error && (
        <StyledPaper elevation={2}>
          {permissions.length > 0 ? (
            <List disablePadding>
              {permissions.map(({ id, name, description }) => {
                const isAdmin = name.toLowerCase().includes('admin');
                return (
                  <ListItem key={id} sx={{ py: 1.5, borderBottom: '1px solid', borderColor: 'grey.200' }}>
                    <PermissionIcon isAdmin={isAdmin}>{isAdmin ? <Lock /> : <LockOpen />}</PermissionIcon>
                    <ListItemText
                      primary={<Typography variant="subtitle1">{name}</Typography>}
                      secondary={<Typography variant="body2" color="text.secondary">{description || 'No description available'}</Typography>}
                    />
                  </ListItem>
                );
              })}
            </List>
          ) : (
            <Box py={4} textAlign="center">
              <Typography>No permissions available</Typography>
            </Box>
          )}
        </StyledPaper>
      )}
    </Container>
  );
}

export default Permission;
