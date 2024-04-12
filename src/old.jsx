////СТАРЫЙ КОД//////

//вызов списка терминов из локал стор
let terms = restoreTermList();

const descList = document.getElementById('desc-list')
const reactRoot = createRoot(descList)
syncTermList()

//сохранение в локалсторж
function saveTermList(terms) {
    localStorage.setItem('termList', JSON.stringify(terms))
}

// обновление списка
function syncTermList() {
    saveTermList(terms)
    reactRoot.render(<TermList terms={terms} onDel={delItem} />)
}


//вывод из локал стор
function restoreTermList() {
    const rawTermList = localStorage.getItem("termList")
    if (!rawTermList) {
        return []
    }

    return JSON.parse(rawTermList)
}




//удаление из списка 
function delItem(id) {
    terms = terms.filter((term) => term.id !== id);
    syncTermList()
}


//добавление карточки 
function addTerm(title, desc) {
    terms.push({
        id: crypto.randomUUID(),
        title,
        desc,
    })

    terms.sort((term1, term2) => (term1.title < term2.title ? -1 : 1))
    syncTermList()
}





const form = document.getElementById('add-description');


form.addEventListener('submit', (event) => {
    // Отменяем поведение по умолчанию
    event.preventDefault();

    // Получаем значения полей формы
    const title = form.elements['title'].value;
    const desc = form.elements['description'].value;

    // Сбрасываем форму
    form.reset();

    addTerm(title, desc);
});


