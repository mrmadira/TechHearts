import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ngo_view.scss';
import { Button, DataTable,OverflowMenu ,OverflowMenuItem} from 'carbon-components-react';
import {admin_initialRows} from './common_vars'
import {admin_headers} from './common_vars'

const initialRows=admin_initialRows
const headers=admin_headers

const {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
  TableSelectAll,
  TableSelectRow,
} = DataTable;
const overflowmenuprops = {
  ariaLabel: 'Menu',
  direction: 'bottom',
  flipped: true,
  iconDescription: '',
  light: true,
}
const overflowMenuItemProps = {
  className: 'some-className',
  disabled: false,
  requireTitle: false
}


// Inside of your component's `render` method
class adminview extends React.Component {
  handleSelectAll = selectAll => () => {
    selectAll();
  };
  goback = () => () => {
    this.props.setHomeView()
  }
  render() {
    return (
      <DataTable
        rows={initialRows}
        headers={headers}
        render={({
          rows,
          headers,
          getHeaderProps,
          getSelectionProps,
          selectAll,
        }) => (
          <React.Fragment>
            <div className='App-link' style={{backgroundColor:"rgb(243, 213, 223)",height:'4rem',display:'flex',alignItems:'center',marginBottom:'2rem',justifyContent:'center'}} >Admin View: State-wise Aid Seeker(s)</div>
<div style={{display:'flex',justifyContent:'space-between',paddingLeft:'2rem',paddingRight:'2rem'}}>
             <Button onClick={this.goback()} >
              Back
            </Button>
            <Button onClick={this.handleSelectAll(selectAll)}>
              Select All
            </Button>
            </div>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableSelectAll {...getSelectionProps()} />
                    {headers.map(header => (
                      <TableHeader {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                    <TableHeader />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    
                      initialRows[row.id].accepted !== 'false'?
                      <TableRow key={row.id} >
                          <TableSelectRow {...getSelectionProps({ row })}  style={{backgroundColor:'#bf294c'}}/>                      
                              <TableCell key={row.cells[0].id} style={{backgroundColor:'#ea9aa9'}}>{row.cells[0].value} </TableCell >
                              <TableCell key={row.cells[1].id} style={{backgroundColor:'#ea9aa9'}}>{row.cells[1].value} </TableCell >
                              <TableCell key={row.cells[2].id} style={{backgroundColor:'#ea9aa9'}}>{row.cells[2].value} </TableCell >
                              <TableCell key={row.cells[3].id} style={{backgroundColor:'#ea9aa9'}}>{row.cells[3].value} </TableCell >
                              <TableCell key={row.cells[4].id} style={{backgroundColor:'#ea9aa9'}}>{row.cells[4].value} </TableCell >
                              <TableCell key={row.cells[5].id} style={{backgroundColor:'#ea9aa9'}}>{row.cells[5].value} </TableCell >
                              <TableCell key={row.id} style={{backgroundColor:'#ea9aa9'}}>
                              
                              <OverflowMenu {...overflowmenuprops} >
                              <OverflowMenuItem {...overflowMenuItemProps}
                            itemText="Alert local NGOs"/><OverflowMenuItem {...overflowMenuItemProps}
                            itemText="Alert national NGOs"/></OverflowMenu>
                            </TableCell >
                          
                            </TableRow>
                        :
                        <TableRow>
                        <TableSelectRow {...getSelectionProps({ row })} />
                          
                              <TableCell key={row.cells[0].id} style={{backgroundColor:'#9dc39e'}} >{row.cells[0].value} </TableCell >
                              <TableCell key={row.cells[1].id} style={{backgroundColor:'#9dc39e'}}>{row.cells[1].value} </TableCell >
                              <TableCell key={row.cells[2].id} style={{backgroundColor:'#9dc39e'}}>{row.cells[2].value} </TableCell >
                              <TableCell key={row.cells[3].id} style={{backgroundColor:'#9dc39e'}}>{row.cells[3].value} </TableCell >
                              <TableCell key={row.cells[4].id} style={{backgroundColor:'#9dc39e'}}>{row.cells[4].value} </TableCell >
                              <TableCell key={row.cells[5].id} style={{backgroundColor:'#9dc39e'}}>{row.cells[5].value} </TableCell >
                              <TableCell key={row.id} style={{backgroundColor:'#9dc39e'}}>Fulfilled</TableCell >
                           
                    </TableRow>
                  ))}
                </TableBody>

              </Table>
            </TableContainer>
          </React.Fragment>
        )}
      />
    );
  }
}export default adminview;
