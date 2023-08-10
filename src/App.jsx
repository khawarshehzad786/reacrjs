import React, { useRef } from 'react'
import './App.css';
import { useDownloadExcel } from 'react-export-table-to-excel'
const App = () => {
  const tableref=useRef(null)
  
  const data = [{
    id:1,
    name:"Khawar",
    email:"Khawar@gmail.com"
  },
  {
    id:2,
    name:"Shehzad",
    email:"shehzad@gmail.com"
  },
  ]
  const {onDownload}=useDownloadExcel({
    currentTableRef:tableref.current,
    filename:'excelsheet',
    sheet:'userData'
  })
  return (
    <>
<h1>React Table</h1>
<button style={{backgroundColor:"blue",color:"#fff"}} onClick={onDownload}>Export Excel</button>
<table 
ref={tableref}
>
  <thead >
    <td>id</td>
    <td>name</td>
    <td>email</td>
  </thead>
  <tbody>
 
      {
        data.map((ks)=>{
          return(
            <tr>
                <td>{ks.id}</td>
                <td>{ks.name}</td>
                <td>{ks.email}</td>

            </tr>
          )
        })
      }

  </tbody>
</table>

    </>
  )
}

export default App