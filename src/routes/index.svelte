<script>
    import Page from '@/components/Page.svelte'
    import PrimaryButton from '@/components/PrimaryButton.svelte'
</script>

<Page>
    <div slot="actions" class="flex space-x-2">
        <a href="/todos">
            <PrimaryButton>View Todos</PrimaryButton>
        </a>
        <a href="/add-todo">
            <PrimaryButton>Add Todo</PrimaryButton>
        </a>
    </div>
</Page>
