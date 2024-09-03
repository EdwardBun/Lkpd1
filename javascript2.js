let a = 1;

function tambah() {
    a++;
    let b = document.getElementById('tambah');
    let c = document.createElement('div');
    c.innerHTML = `
        <label>Opsi ${a} : </label> <br>
        <input type="text" placeholder="Poin">
        <input type="text" name="name" id="" placeholder="Opsi"><br>
    `;
    b.appendChild(c);
}