console.log('hellooooo')
(async function(){
    const callData1 = await fetch('https://reqres.in/api/users?page=1')
    const callData2 = await fetch('https://reqres.in/api/users?page=2')
    const data1 = await callData1.json()
    const data2 = await callData2.json()
    console.log(data1)
    console.log(data2)
    const finalData = [...data1.data,...data2.data];
    for(var i = 0; i < 11; i++){
        document.getElementById(`avatar${i+1}`).src = finalData[i].avatar;
        document.getElementById(`id${i+1}`).innerHTML = finalData[i].id;
        document.getElementById(`email${i+1}`).innerHTML = finalData[i].email;
        document.getElementById(`fname${i+1}`).innerHTML = finalData[i].first_name;
        document.getElementById(`lname${i+1}`).innerHTML = finalData[i].last_name;
    }
}())