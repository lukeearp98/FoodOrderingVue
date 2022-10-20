<template>
<div>
<main>
<h2>BBC Restaurant News</h2>
<p>Here is the latest news regarding pubs and restaurants.</p>
<GetNewsItems myData="https://newsapi.org/v2/everything?domains=bbc.co.uk&qInTitle=(restaurant OR cafe OR pub)&apiKey=46ab659208ce4623880ae3db62201a3d"/>
</main>
</div>
</template>

<script>
import GetNewsItems from '@/components/GetNewsItems.vue'
export default {
name: 'News',
components: {
GetNewsItems
}
}
</script>
