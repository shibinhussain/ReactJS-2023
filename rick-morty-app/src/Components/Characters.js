import { useQuery } from '@apollo/client';
import { DataGrid } from '@mui/x-data-grid';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import { GET_CHARACTERS } from '../Query';

const columns = [
  { field: 'name', headerName: 'Name', width: 300 },
  { field: 'status', headerName: 'Status', width: 100 },
  { field: 'species', headerName: 'Species', width: 100 },
  { field: 'gender', headerName: 'Gender', width: 100 },
];

const Characters = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

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
      <DataGrid
        rows={data.characters.results}
        columns={columns}
        pageSize={10}
      />
    </div>
  );

  //   return data.characters.results.map(({ id, name, status }) => (
  //     <div key={id}>
  //       <ul>
  //         <li>
  //           <b>NAME:</b> {name} <b>Status:</b> {status}
  //         </li>
  //       </ul>
  //       <br />
  //     </div>
  //   ));
};

export default Characters;
