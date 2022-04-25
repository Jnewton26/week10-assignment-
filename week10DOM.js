var arrHead = new Array();	// ARRAY FOR HEADER
arrHead = ['', 'First Name', 'Last Name', 'Age'];
// console.log(arrHead)

// THIS CREATES HEADERS OF TABLE
function createTable() {
    var empTable = document.createElement('table');
    empTable.setAttribute('id', 'empTable'); // ID FOR THE TABLE

    var tr = empTable.insertRow(-1);
    for (var h = 0; h < arrHead.length; h++) {
        var th = document.createElement('th'); // CREATES ACTUAL HEADERS
        th.innerHTML = arrHead[h];
        tr.appendChild(th);
    }

    var div = document.getElementById('cont');
    div.appendChild(empTable);  // ADDS TABLE TO CONTAINER
}

// THIS ADDS AN EMPTY ROW TO THE TABLE
function addRow() {
    var empTab = document.getElementById('empTable');

    var rowCnt = empTab.rows.length;   // TABLE ROW COUNT
    var tr = empTab.insertRow(rowCnt); // THE ROW
    tr = empTab.insertRow(rowCnt);

    for (var c = 0; c < arrHead.length; c++) {
        var td = document.createElement('td'); // DEFINITION OF TABLE
        td = tr.insertCell(c);

        if (c == 0) {      // FIRST COLUMN WITH BUTTON
            var button = document.createElement('input');

            // SET INPUT ATTRIBUTES 
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Remove');

            // ADDS 'ONCLICK' EVENTS
            button.setAttribute('onclick', 'removeRow(this)');

            td.appendChild(button);
        }
        else {
            // NEXT COLUMNS WILL HAVE A TEXT BOX
            var ele = document.createElement('input');
            ele.setAttribute('type', 'text');
            ele.setAttribute('value', '');

            td.appendChild(ele);
        }
    }
}

// THIS IS FUNCTION TO DELETE A ROW
function removeRow(oButton) {
    var empTab = document.getElementById('empTable');
    empTab.deleteRow(oButton.parentNode.parentNode.rowIndex);
}

function submit() {
    var myTab = document.getElementById('empTable');
    var arrValues = new Array();

    // LOOP THROUGH EACH ROW 
    for (row = 1; row < myTab.rows.length - 1; row++) {
        // LOOP THROUGH EACH SELL IN A ROW
        for (c = 0; c < myTab.rows[row].cells.length; c++) {
            var element = myTab.rows.item(row).cells[c];
            if (element.childNodes[0].getAttribute('type') == 'text') {
                arrValues.push("'" + element.childNodes[0].value + "'");
            }
        }
    }

    document.getElementById('output').innerHTML = arrValues;
    //console.log (arrValues);   

}