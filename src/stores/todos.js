import { writable } from 'svelte/store'
const store = () => {
    const state = {
        todoHeaders: ['ID', 'Todo', 'Done?', 'Actions'],
        todoDatas: [
            {
                id: 1,
                todo: 'Todo 1',
                done: false,
            },
        ],
        newTodo: '',
    }

    const { subscribe, set, update } = writable(state)

    const methods = {
        setTodos(todoDatas) {
            update((state) => {
                state.todoDatas = todoDatas
                return state
            })
        },
        addTodo() {
            update((state) => {
                const lastTodo = state.todoDatas[state.todoDatas.length - 1]
                const id = lastTodo.id + 1
                state.todoDatas.push({
                    id,
                    todo: state.newTodo,
                    done: false,
                })
                state.newTodo = ''
                return state
            })
        },
        deleteTodo(todo) {
            update((state) => {
                state.todoDatas = state.todoDatas.filter(
                    (t) => t.id !== todo.id
                )
                return state
            })
        },
        updateTodo(todo) {
            update((state) => {
                const index = state.todoDatas.findIndex((t) => t.id === todo.id)
                state.todoDatas[index].done = !state.todoDatas[index].done
                return state
            })
        },
    }

    return {
        subscribe,
        set,
        update,
        ...methods,
    }
}

export default store()
