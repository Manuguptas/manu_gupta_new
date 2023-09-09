// =============hobbis=============
// let HobbisBtn = document.getElementById('HobbisBtn');

// const addNewNode = (Text = '') => {
//     const note = document.createElement('div');
//     note.classList.add('note');

//     const htmldata = `
//     <section>
//     <div class="box">
//     <div class="inputBox">
//     <input type="textarea" placeholder="Your Hobbis">
//     </div> 

//     </div>
//     </section>`;
//     note.insertAdjacentHTML('beforeend',htmldata);
//     console.log(note)

//     document.body.appendChild(note);
//     // document.body.prepend(note);

// }
// HobbisBtn.addEventListener('click', () => addNewNode());

// ======================================================================================
// ===================AcademicBtn====================
// let AcademicBtn = document.querySelector('#AcademicBtn');

// const addNewNodes = (Text = '') => {
//     const notes = document.createElement('div');
//     notes.classList.add('notes');

//     const htmldatas = `
//     <section>
//     <div class="box">
//     <div class="inputBox">
//     <input type="textarea" placeholder="Your Qualification">
//     <input type="text" class="jsADD" placeholder="percentage">

//     </div> 
//     </div>
//     </section>`;
//     // <div class="inputBox">
//     // <input type="text" class="jsADD" id="percentage" placeholder="percentage">
//     // </div>
//     // <div class="inputBox">
//     // <input type="text" class="jsADD" id="passing" placeholder="Year of passing">
//     // </div>
//     notes.insertAdjacentHTML('beforeend',htmldatas);
//     console.log(notes)

//     document.body.appendChild(notes);
//     // notes.insertBefore(jsADD,notes)

// }
// AcademicBtn.addEventListener('click', () => addNewNodes());

function morebutton(e) {
    event.preventDefault()
    const notes = document.createElement('div');
    notes.classList.add('notes');

    const htmldatas = `
    <div class="table">
    <thead>
    <tr>
    <td class="AcademicTemp stylE">Mark</td>

    </tr>
    </div>
    </thead>`;

    notes.insertAdjacentHTML('beforeend', htmldatas);
    console.log(notes)

    document.body.prepend(notes);
    //  notes.insertBefore(jsADD,notes)
}

// ======================ADD collage space==============
// let button = document.querySelector('.button-28');
//  button.addEventListener('click',(e)=>{
function buttoN() {
    event.preventDefault();


    let wkfild = document.getElementById("Workfld").value;

    if (wkfild == "") {
        alert('Please enter your work exprience!');

    }
    else {
        let box = document.getElementById('workTemp');
        let li = document.createElement('li');
        li.textContent = wkfild;
        box.appendChild(li);

    }

};

// ============================== languge btn =====================
function button(r) {
    event.preventDefault();
    let languge = document.getElementById('languge').value;
    if (languge == '') {
        alert('Please enter value');
    }
    else {
        let lan = document.getElementById('lagT');
        let li = document.createElement('li');
        li.textContent = languge;
        lan.appendChild(li);
    }
}

//======================print button================ 
function printBTN(){
    print();
}

//========================= submit button======================

function SubmitBtn() {
    let email = document.getElementById('email').value;
    let EmailT = document.getElementById('EmailT');

    let nameFild = document.getElementById('nameFild').value;
    let nameTamp = document.getElementById('nameTamp');

    let contactNum = document.getElementById('contactNum').value;
    let contactTamp = document.getElementById('contactTamp');

    // let email = document.getElementById('email').value;
    // let emailTamp = document.getElementById('emailTamp');

    let dateBrith = document.getElementById('dateBirth').value;
    let dateBrithTamp = document.getElementById("dateBrithTamp");

    let gender = document.getElementById('gender').value;
    let genderTemp = document.getElementById('genderTemp');

    let address = document.getElementById('address').value;
    let addressTamp = document.getElementById('addressTamp');

    let hobbis = document.getElementById('hobbis').value;
    let hobbisTamp = document.getElementById('hobbisTamp');

    let languge = document.getElementById('languge').value;
    let langugeTamp = document.getElementById('languageTamp');

    let booklink = document.getElementById('booklink').value;
    let facebooktamp = document.getElementById('facebooktamp');

    let Academic = document.getElementById('Academic').value;
    let AcademicTemp = document.getElementById('AcademicTemp');

    let passing = document.getElementById('passing').value;
    let passingTemp = document.getElementById('passingTemp');

    let percentage = document.getElementById('percentage').value;
    let percentageTemp = document.getElementById('percentageTemp');

    let collageName = document.querySelector('.collageName').value;
    let clgTemp = document.getElementById('clgTemp');

    let CLGpercentage = document.querySelector('.CLGpercentage').value;
    let clgPsTamp = document.querySelector('#clgPsTamp');

    let CLGpassing = document.querySelector('.CLGpassing').value;
    let clgperTamp = document.querySelector('#clgperTamp');
    
    let datess = document.getElementById('datAS').value;
    let DateT = document.getElementById('DateT');

    

    DateT.innerHTML = datess;
    EmailT.innerHTML = email;
    clgperTamp.innerHTML = CLGpassing;
    clgPsTamp.innerHTML = CLGpercentage;
    clgTemp.innerHTML = collageName;
    percentageTemp.innerHTML = percentage;
    passingTemp.innerHTML = passing;
    AcademicTemp.innerHTML = Academic;
    hobbisTamp.innerHTML = hobbis;
    addressTamp.innerHTML = address;
    facebooktamp.innerHTML = booklink;
    dateBrithTamp.innerHTML = dateBrith;
    genderTemp.innerHTML = gender;
    contactTamp.innerHTML = contactNum;
    nameTamp.innerHTML = nameFild;

    document.getElementById('CV-template').style.display='grid';
    document.querySelector('.hideUse').style.display='none';
}