<script>
    import Page from '@/components/Page.svelte'
    import Breadcrumb from '@/components/Breadcrumb.svelte'
    import PrimaryButton from '@/components/PrimaryButton.svelte'
    import WhiteButton from '@/components/WhiteButton.svelte'
    import store from '@/stores/todos'
    import FormInput from '@/components/FormInput.svelte'
    import { PlusCircle } from 'svelte-hero-icons'
    import { goto } from '$app/navigation'

    $: pages = [
        {
            name: 'Add Todo',
            href: '/add-todo',
            current: true,
        },
    ]
</script>

<Page>
    <Breadcrumb slot="breadcrumb" homeLink="/" {pages} />
    <form
        class="mt-10 space-y-2"
        on:submit|preventDefault={() => {
            store.addTodo()
            goto('/todos')
        }}
    >
        <FormInput
            id="addTodo"
            name="addTodo"
            required
            label="What needs to be done?"
            placeholder="Eg: Write code"
            icon={PlusCircle}
            bind:value={$store.newTodo}
        />
        <div class="flex space-x-2">
            <PrimaryButton
                on:click={() => {
                    store.addTodo()
                    goto('/todos')
                }}>Add Todo</PrimaryButton
            >
            <a href="/todos">
                <WhiteButton>Cancel</WhiteButton>
            </a>
        </div>
    </form>
</Page>
