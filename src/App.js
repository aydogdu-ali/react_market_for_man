import List from './components/List';
import Alert from './components/Alert';
import './App.css';
import { useState } from 'react';

function App() {
  const [text, SetText] = useState("")
  const [list, setList] = useState([])
  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState()
  const [alert, setAlert] = useState({show:false, message:"", type:""})

const handleSubmit= (e)=>{
  e.preventDefault()
  console.log("Merhaba Ali")

}

  return (
    <div className="App">
      <h2>Alışveriş Listesi</h2>

      <form onSubmit={handleSubmit}>
        {alert.show && <Alert/>}
        <input type="text" 
        placeholder='2 ekmek alırmısın?'
        value = {text}
        onChange = {(e)=>SetText(e.target.value)}/>
        <button  className='ekle-btn' type='submit'>{edit ? "Düzenle": "Ekle"}</button>
      </form>
      <div className="container">
        <h2>Listem</h2>
        <List />
        <button className='temizle-btn'>Tümünü Sil</button>
      </div>
    </div>
  );
}

export default App;
