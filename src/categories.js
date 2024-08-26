window.onload = (event) => {
    //const encodeData = window.location.hash.substring(1);
    //const data = JSON.parse(atob(encodeData));
    //console.log(data);
    const createCategories = document.getElementById('createCategories');
    createCategories.addEventListener('click', function(event){
        console.log('Hice click');
        window.location.href = './createCategories.html';
    });

    loadCategories();

};

async function loadCategories() {
    try {
        const response = await fetch('http://localhost:3000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const categories = await response.json();
        console.log(categories);

        const tableBody = document.getElementById('categoriesTBody');
        tableBody.innerHTML = '';

        categories.forEach(categorie => {
            const row = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = categorie.category_id;

            const nameCell = document.createElement('td');
            nameCell.textContent = categorie.category_name;

            const descriptionCell = document.createElement('td');
            descriptionCell.textContent = categorie.description;

            row.appendChild(idCell);
            row.appendChild(nameCell);
            row.appendChild(descriptionCell);

            tableBody.appendChild(row);
        });


    } catch (error) {
        console.error(error);
    }
    
}