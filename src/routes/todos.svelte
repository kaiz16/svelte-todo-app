<script>
    import Page from '@/components/Page.svelte'
    import Breadcrumb from '@/components/Breadcrumb.svelte'
    import TableCard from '@/components/TableCard.svelte'
    import TableHeader from '@/components/TableHeader.svelte'
    import TableData from '@/components/TableData.svelte'
    import PrimaryButton from '@/components/PrimaryButton.svelte'
    import WhiteButton from '@/components/WhiteButton.svelte'
    import store from '@/stores/todos'

    $: pages = [
        {
            name: 'Todos',
            href: '/todos',
            current: true,
        },
    ]
</script>

<Page>
    <Breadcrumb slot="breadcrumb" homeLink="/" {pages} />
    <div slot="actions">
        <a href="/add-todo">
            <WhiteButton>Add Todo</WhiteButton>
        </a>
    </div>
    <TableCard>
        <tr class="w-full" slot="headers">
            {#each $store.todoHeaders as header}
                <TableHeader>
                    {header}
                </TableHeader>
            {/each}
        </tr>

        {#each $store.todoDatas as data}
            <tr>
                <TableData>
                    {data.id}
                </TableData>
                <TableData class={data.done ? 'line-through' : ''}>
                    {data.todo}
                </TableData>
                <TableData>
                    {data.done ? 'Yes' : 'No'}
                </TableData>
                <TableData>
                    <div class="flex space-x-2">
                        <PrimaryButton on:click={() => store.updateTodo(data)}
                            >Done</PrimaryButton
                        >
                        <WhiteButton on:click={() => store.deleteTodo(data)}
                            >Delete</WhiteButton
                        >
                    </div>
                </TableData>
            </tr>
        {/each}
    </TableCard>
</Page>
