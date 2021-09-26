/* *************************
 *** POST JOURNAL ***
 ************************** */
function postJournal() { 

    const accessToken = localStorage.getItem('SessionToken')
    let title = document.getElementById('title').value;
    let date = document.getElementById('date').value;
    let entry = document.getElementById('entry').value;

    let newEntry = {
        journal: {
            title: title,
            date: date,
            entry: entry
        }
    }

    fetch(`http://localhost:3000/journal/create`, {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            }),
            body: JSON.stringify(newEntry)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            displayMine()
        })
        .catch(err => {
            console.error(err)
        })
}


/* *************************
 *** UPDATE JOURNAL ***
 ************************** */
function editJournal(postId) { 
    // console.log('editJournal Function Called')
    console.log(postId);

    const fetch_url = `http://localhost:3000/journal/update/${postId}`;
    const accessToken = localStorage.getItem('SessionToken');

    let card = document.getElementById(postId);
    let input = document.createElement('input');

    if (card.childNodes.length < 2) {
        card.appendChild(input);
        input.setAttribute('type', 'text');
        input.setAttribute('id', 'updatedEntry');
        input.setAttribute('placeholder', 'Edit your journal entry');
    } else {
        let updated = document.getElementById('updatedEntry').value;
        let newEntry = {
            journal: {
                entry: updated
            }
        }

        fetch(fetch_url, {
                method: "PUT",
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`
                }),
                body: JSON.stringify(newEntry)
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                displayMine();
            })
            .catch(err => {
                console.error(err)
            })

        card.removeChild(card.lastChild)
    }
}


/* *************************
 *** DELETE JOURNAL ***
 ************************** */
function deleteJournal(postId) { 
    // console.log('deleteJournal Function Called')
    console.log(postId);
    const fetch_url = `http://localhost:3000/journal/delete/${postId}`;
    const accessToken = localStorage.getItem('SessionToken');

    fetch(fetch_url, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayMine();
        })
        .catch(err => {
            console.error(err)
        })
}