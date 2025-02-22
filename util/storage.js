const TODOS_STORAGE_KEY = 'TODOS'

export default {
    get() {
        let save = JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || [];
        // console.log(save);
        return save;
    },
    set(todos) {
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
    }
}