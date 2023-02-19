import { MDBDataTableV5 } from 'mdbreact';
import React, { useState } from "react";

const Poruke = ({poruke}) => {

    console.log(poruke)
      const [datatable, setDatatable] = React.useState({

        columns: [
          {
            label: 'ime',
            field: 'ime',
            width: 150,
            attributes: {
              'aria-controls': 'DataTable',
              'aria-label': 'ime',
            },
          },
          {
            label: 'email',
            field: 'email',
            width: 200,
          },
          {
            label: 'poruka',
            field: 'poruka',
            width: 270,
          }

        ],
        rows:  poruke.map(p=>{
            return{
                ime: p.ime,
                email: p.email,
                poruka: p.poruka
            }


        })

    })      


      return <div className='tabelaPoruka'><MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} /></div>;
    }

export default Poruke