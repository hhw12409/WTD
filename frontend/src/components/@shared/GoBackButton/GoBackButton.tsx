import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import FlexBox from '../FlexBox/FlexBox';

const GoBackButton = () => {
  const navigate = useNavigate();

  const onMoveToPrevPage = () => {
    navigate(-1);
  };

  return (
    <FlexBox
      alignItems="center"
      justifyContent="center"
      onClick={onMoveToPrevPage}
      style={{ cursor: 'pointer' }}
    >
      <ArrowBackIosNewIcon />
      <span>back</span>
    </FlexBox>
  );
};

export default GoBackButton;
