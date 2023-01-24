import List from './components/List';
import Alert from './components/Alert';
import './App.css';
import { useEffect, useState } from 'react';


// localStorage attığımız veriyi çağıtıryoruz.
const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};


function App() {
  const [text, SetText] = useState("")
  const [list, setList] = useState(getLocalStorage());
  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState("")
  const [alert, setAlert] = useState({show:false, type:"", message:""})



const handleSubmit= (e)=>{
  e.preventDefault()
 console.log("tıklandı")
 
 // input dan hernagi bir değer yoksa gösterilecek uyarı mesajını tanımladım.
  if(!text){
  showAlert(true,"danger","lütfen ürün ekleyin")
  
  }
  // ürün versa ve değiştirilmek isteniyorsa
  else if (text && edit){
    setList(
      list.map((item)=>{
        if(item.id===editId){
          return {...item, title:text}
        }
      return item
      })
    )
    SetText("")
    setEditId("")
    setEdit(false)
    showAlert(true, "success", `${text} değiştirildi` )
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
  
  
   setList(list.filter((item) => item.id !== id));
    const itemName = list.find((item) => item.id === id);
     SetText(itemName.title);
    showAlert(true, "danger", `şeçtiğiniz ${itemName.title}  ürün silindi`);
    SetText("")
  
}

// seçtiğimiz ürünü değiştirmek için fonksiyon tanımlıyoruz.

const editItem = (id)=>{
  const itemEdit = list.find((item)=>item.id ===id)
  setEdit(true)
  setEditId(id)
  SetText(itemEdit.title);
  
}

// ürünlerimizi LocalStorage kaydediyoruz.

 useEffect(() => {
   localStorage.setItem("list", JSON.stringify(list));
  
 }, [list]);


  return (
    <div className="App">
      <h2>Alışveriş Listesi</h2>

      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
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
          <List list={list} removeItem={removeItem} editItem={editItem} />
          <button className="temizle-btn" onClick={handleClear}>
            Tümünü Sil
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
