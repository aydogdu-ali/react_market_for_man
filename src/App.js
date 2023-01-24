import List from './components/List';
import Alert from './components/Alert';
import './App.css';
import { useState } from 'react';

function App() {
  const [text, SetText] = useState("")
  const [list, setList] = useState([])
  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState()
  const [alert, setAlert] = useState({show:false, type:"", message:""})



const handleSubmit= (e)=>{
  e.preventDefault()
 console.log("tıklandı")
 
 // input dan hernagi bir değer yoksa gösterilecek uyarı mesajını tanımladım.
  if(!text){
  showAlert(true,"danger","lütfen ürün ekleyin")
  
  }
  else if (text && edit){

}

  else {
    // inputtan veri gelmiş ise eklendiğine dair uyarı bilgi mesajı verdim
    showAlert(true, "success","ürün eklendi")

    // girilen ürünün Dom'da gösterilmesi için statete tutuyoruz.
    const newItem = {id: new  Date().getTime().toLocaleString(), title: text}
    setList ([...list, newItem])
    // yeni ürün girilmesi için inputu tenizliyoruz.
    SetText("")
  }
}
// alert mesajlarını duruma göre aldığı parametreye göre döndüreceği bir fonksiyon tanımladım.
const showAlert = (show = false, type="", message="") => {
  setAlert({show, type, message});
};

const clearAllList = ()=>{
  showAlert(true, "danger", "Listeniz Temizlendi")

}

// tüm alışveriş listemizi siliecek fonksiyonu tanımlıyoruz.
const handleClear =()=>{
setList("")
//bilgi mesajını veriyoruz.
clearAllList([])
}

//listeden ürün çıkarma fonksiyonu

const removeItem =(id)=>{
  showAlert(true, "danger", `şeçtiğiniz ürün silindi`);
   setList(list.filter((item) => item.id !== id));


}
  return (
    <div className="App">
      <h2>Alışveriş Listesi</h2>

      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <input
          type="text"
          placeholder="2 ekmek alirmisin lütfen?"
          value={text}
          onChange={(e) => SetText(e.target.value)}
        />
        <button className="ekle-btn" type="submit">
          {edit ? "Düzenle" : "Ekle"}
        </button>
      </form>
      {list.length > 0 && (
        <div className="container">
          <List list={list} removeItem={removeItem} />
          <button className="temizle-btn" onClick={handleClear}>
            Tümünü Sil
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
