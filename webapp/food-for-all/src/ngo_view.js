import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss'
import './styles.css';
import styles from './ngo_view.scss';
import {ngo_initialRows, ngo_headers, delhi_ngo} from './common_vars'
import { Button, DataTable,OverflowMenu ,OverflowMenuItem} from 'carbon-components-react';

const initialRows=ngo_initialRows
const headers=ngo_headers
const ngo_name = delhi_ngo
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
class ngoview extends React.Component {
  handleSelectAll = selectAll => () => {
    selectAll();
  };

  goback = () => () => {
    this.props.setHomeView()
  }
  render() {
    return (
      <div >
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
            <div className='App-link' style={{backgroundColor:"rgb(243, 213, 223)",height:'4rem',display:'flex',alignItems:'center',marginBottom:'2rem',justifyContent:'center'}} >{ngo_name} NGO View: Locations Looking for Aid</div>
            <div style={{display:'flex',justifyContent:'space-between',paddingLeft:'2rem',paddingRight:'2rem'}}>
             <Button onClick={this.goback()} >
              Back
            </Button>
            <Button onClick={this.handleSelectAll(selectAll)}>
              Select All
            </Button>
            </div>
            <TableContainer >
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
                            itemText="Fulfill"/><OverflowMenuItem {...overflowMenuItemProps}
                            itemText="Decline Request"/></OverflowMenu>
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
      </div>
    );
  }
}export default ngoview;


