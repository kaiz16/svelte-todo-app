<script>
    export let disabled = false
    export let loading = false
    let customClass = ''
    export { customClass as class }
    let disabledClass = 'cursor-not-allowed opacity-80 hover:opacity-80'
    let enabledClass = 'cursor-pointer'
</script>

<button
    on:click
    {disabled}
    class="
        {customClass} 
        bg-white
        text-gray-700
        text-xs
        font-medium
        border
        border-gray-300
        rounded-md
        shadow-sm
        flex 
        flex-row 
        items-center 
        space-x-2
        py-2
        px-3
        focus:outline-none
        hover:opacity-80
        transition-all 
        duration-300
        {disabled ? disabledClass : enabledClass}
    "
>
    {#if loading}
        <svg class="w-3 h-3 animate-spin" viewBox="0 0 24 24">
            <path
                fill="currentColor"
                d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"
            />
        </svg>
    {/if}
    <slot />
</button>
