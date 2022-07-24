<script>
    let customClass = ''
    export { customClass as class }
</script>

<div class="{customClass} my-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
            class="
              shadow
              overflow-hidden
              border-b border-gray-200
              sm:rounded-lg
          "
        >
            <table aria-describedby="tableCard" class="table-fixed min-w-full">
                <thead class="bg-gray-50">
                    <slot name="headers" />
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <slot />
                </tbody>
            </table>
        </div>
    </div>
</div>
