<script lang="ts">
    export let visible: Boolean = false;
    let classes = "portrait:hidden"

    let toggleVisibility = (visibility) => {
        visible = visibility;
        classes = visible ? "portrait:flex-column portrait:absolute" : "portrait: hidden";
    }
</script>

<div class="flex items-center {classes}">
    <slot/>
</div>