import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

// Styled component cho container
const NotFoundContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  backgroundColor: theme.palette.grey[100],
  textAlign: 'center',
  padding: theme.spacing(3),
}));

function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/'); // Chuyển hướng về trang chủ
  };

  return (
    <NotFoundContainer>
      <Typography variant="h1" component="h1" color="primary" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Trang không tìm thấy
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Rất tiếc, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleGoHome}
      >
        Về trang chủ
      </Button>
    </NotFoundContainer>
  );
}

export default NotFound;