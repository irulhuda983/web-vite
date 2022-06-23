<template>
    <div class="w-full box-border bg-gray-50 oveflow-x-hidden">
        <Header />
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
    components: { Header, Footer},
    setup() {
        
    },
}
</script>