let login = document.querySelector('.login');
let pass = document.querySelector('.pass');
let email = document.querySelector('.email');
let addUser = document.querySelector('.addUser');
let editUserBut = document.querySelector('.editUser');
let tab = document.querySelector('#tab');
let arrObj = [];
let id = 0;
let userIndex;
let tr;
let obj = {};
addUser.addEventListener('click', function () {
    let log = login.value;
    let pas = pass.value;
    let eml = email.value;
    id += 1;
    obj = { id, log, pas, eml };
    arrObj.push(obj);
    console.log(arrObj);
    render();
    login.value = '';
    pass.value = '';
    email.value = '';
});
function render() {
    tab.innerHTML = `
    <tr id="tr1">
    <td class="tr">#</td>
    <td class="tr">Login </td>
    <td class="tr">Password </td>
    <td class="tr">Email </td>
    <td class="tr">Edit </td>
    <td class="tr">Delete</td>
    </tr> 
    `;
    for (let i = 0; i < arrObj.length; i++) {
        let o = arrObj[i];
        tab.innerHTML += `
            <tbody id="tab1">
                <tr class="tabw">
                    <td class="ret">${i + 1}</td> 
                    <td class="tdB">${o.log}</td>
                    <td class="tdB">${o.pas}</td> 
                    <td class="tdB">${o.eml}</td>
                    <td><button id="but" class="edit class="tdB"" onclick="editUser()">Edit</button></td>
                    <td><button id="del" class="delete class="tdB"" onclick="deleteUser()">Delete</button></td>
                </tr>
            </tbody> `;
    }
}
function deleteUser() {
    let del = document.querySelectorAll('.delete');
    for (let i = 0; i < del.length; i++) {
        if (event.target == del[i]) {
            arrObj.splice(i, 1);
        }
    }
    render();
}
function editUser() {
    addUser.style.display = 'none';
    editUserBut.style.display = 'block';
    let arrTr = document.getElementsByTagName('tr');
    let edit = document.querySelectorAll('.edit');
    for (let i = 0; i < edit.length; i++) {
        if (event.target == edit[i]) {
            tr = arrTr[i + 1];
            userIndex = i;
            obj = arrObj[i];
            login.value = obj.log;
            pass.value = obj.pas;
            email.value = obj.eml;
        }
    }
}
class Obj {
    log;
    pas;
    eml;
    constructor(log, pas, eml) {
        this.log = log;
        this.pas = pas;
        this.eml = eml;
    }
}
editUserBut.addEventListener('click', function () {
    let log = login.value;
    let pas = pass.value;
    let eml = email.value;
    let obj1 = new Obj(log, pas, eml);
    arrObj[userIndex] = obj1;
    if (event.target == editUserBut) {
        editUserBut.style.display = 'none';
        addUser.style.display = 'block';
    }
    render();
    login.value = '';
    pass.value = '';
    email.value = '';
});
