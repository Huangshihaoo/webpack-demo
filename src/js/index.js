import './css.js';
import '../css/test.scss'

window.addEventListener('load',() => {
    document.querySelector('.btn').addEventListener('click',() => {
        window.alert('message...');
    })
    document.querySelector('.getdata').addEventListener('click', async ()=>{
        console.log(111);
      let res =  await fetch('/api/getdata');
        let data = await res.text()
        console.log(data);
    })
})