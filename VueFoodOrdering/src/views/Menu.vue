<template>
<div>
<main>
<h2>Our Menu Items</h2>
<GetMenuItems myData="/menuItems.json"/>
</main>
</div>
</template>

<script>
import GetMenuItems from '@/components/GetMenuItems.vue'
export default {
name: 'Menu',
components: {
GetMenuItems
},
data: function()
{
    return{
        addedItems: localStorage.getItem('orderList')
    }
  },
}
</script>
