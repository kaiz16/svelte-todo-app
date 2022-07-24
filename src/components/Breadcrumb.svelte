<script>
    import { Icon, ChevronRight, Home } from 'svelte-hero-icons'
    export let pages = [
        {
            name: 'Home',
            current: true,
            href: '/',
        },
    ]
    export let homeLink = '/'
</script>

<nav class="flex" aria-label="Breadcrumb">
    <ol class="flex items-center space-x-4">
        <li>
            <div>
                <a
                    class="text-gray-400 hover:text-gray-500 cursor-pointer"
                    href={homeLink}
                >
                    <Icon src={Home} class="flex-shrink-0 h-5 w-5" />
                    <span class="sr-only">Home</span>
                </a>
            </div>
        </li>
        {#each pages as page}
            <li>
                <div class="flex items-center">
                    <Icon
                        src={ChevronRight}
                        class="flex-shrink-0 h-5 w-5 text-gray-400"
                    />

                    <a
                        href={page.href}
                        class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                        aria-current={page.current ? 'page' : undefined}
                    >
                        {page.name}
                    </a>
                </div>
            </li>
        {/each}
    </ol>
</nav>
