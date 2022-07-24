<script>
    let customClass = ''
    export { customClass as class }
</script>

<th
    scope="col"
    class="
        {customClass}
        w-[100px]
        px-6
        py-3
        text-left text-[11px]
        font-semibold
        text-gray-500
        uppercase
        tracking-wider
      "
>
    <slot />
</th>
