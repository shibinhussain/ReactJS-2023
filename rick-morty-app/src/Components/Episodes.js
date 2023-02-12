import { useQuery } from '@apollo/client';
import { DataGrid } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import { GET_EPISODES } from '../Query';

const columns = [
  { field: 'name', headerName: 'Name', width: 300 },
  { field: 'air_date', headerName: 'Air Date', width: 300 },
];

const Episodes = () => {
  const { loading, error, data } = useQuery(GET_EPISODES);

  if (loading) return <CircularProgress />;
  if (error)
    return (
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        <strong>{error.message}</strong>
      </Alert>
    );

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid rows={data.episodes.results} columns={columns} pageSize={10} />
    </div>
  );
};

export default Episodes;
