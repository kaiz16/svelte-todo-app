<script>
    import { Icon } from 'svelte-hero-icons'

    import { createEventDispatcher } from 'svelte'
    const dispatch = createEventDispatcher()

    export let id
    export let name
    export let required = false
    export let autocomplete = false
    export let label = ''
    export let value
    export let placeholder = ''
    export let type = 'input'
    export let disabled = false
    export let min = ''
    export let max = ''
    export let icon = ''
    let customClass = ''
    export { customClass as class }
    let disabledClass = 'cursor-not-allowed opacity-80 hover:opacity-80'
    let enabledClass = ''
    const onInput = (e) => {
        // Convert to number from string if type === number OR range
        value = type.match(/^(number|range)$/)
            ? +e.target.value
            : e.target.value
        dispatch('input', value)
    }
</script>

<div>
    {#if label}
        <label
            for="input"
            class="
        block
        text-sm 
        font-medium 
        text-gray-700"
        >
            {label}
        </label>
    {/if}
    <div class="p-0 border-none relative">
        {#if icon}
            <div
                class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
            >
                <Icon src={icon} class="flex-shrink-0 h-4 w-4 text-gray-700" />
            </div>
        {/if}

        <input
            {id}
            {name}
            class="
         {customClass}
          shadow-sm
          block
          w-full
          py-2 px-3
          sm:text-sm
          border
          rounded-md
          outline-none
          focus:outline-none
          focus-visible:outline-none
          focus:ring-primary
          focus:border-primary
          focus-visible:ring-primary
          focus-visible:border-primary
          {disabled ? disabledClass : enabledClass}
          {icon ? 'pl-10' : null}
      "
            {value}
            {placeholder}
            {type}
            {disabled}
            {min}
            {max}
            {required}
            {autocomplete}
            on:input={onInput}
        />
    </div>
</div>
