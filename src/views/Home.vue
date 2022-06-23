<template>
    <div class="w-full box-border overflow-x-hidden">
        <!-- hero -->
        <div class="w-full bg-dark-purple pt-32 2xl:pt-44 xl:pt-32 text-white px-10 lg:px-20 box-border mb-20 pb-16">
            <div class="w-full box-border mb-20 lg:grid lg:grid-cols-2">
                <div class="box-border mb-24 lg:mb-0">
                    <p class="text-orange-300 text-lg font-semibold"><small>Nama Perusahaan</small></p>
                    <h1 class="mb-4 text-3xl xl:text-7xl lg:text-5xl font-bold leading-tight font-family-lato">Platform Periklanan Untuk <span class="text-sky-400">Brand Anda</span></h1>
                    <p class="mb-10 text-gray-200 text-sm lg:text-base">
                        <span class="font-bold text-white xl:text-base lg:text-sm">Lorem ipsum</span>, dolor sit amet consectetur adipisicing elit. Quasi, deserunt quidem! Laborum eius minus ea rem possimus aliquid veritatis dicta eveniet blanditiis odio, sit repellendus commodi provident molestiae aliquam dolor numquam.
                    </p>

                    <button class="bg-white outline outline-gray-500 rounded-2xl px-5 py-2 text-sky-700 font-bold outline-offset-4 text-lg flex justify-between items-center">
                        <span class="mr-8">Dapatkan Sekarang</span>
                        <span class="text-white block w-14 h-14 rounded-full bg-sky-400 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>
                </div>
                <div class="box-border flex items-center justify-center">
                    <div class="relative box-border w-52 lg:w-96">
                        <div class="rounded-full lg:w-24 lg:h-24 w-14 h-14 absolute right-12 lg:right-20 -top-5 lg:-top-12 bg-sky-400 shadow-2xl shadow-skyblue"></div>
                        <div class="w-auto -rotate-12">
                            <MobileApp />
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full box-border grid lg:grid-cols-3">
                <div class="box-border lg:px-5 py-3 flex items-center justify-center space-x-7">
                    <div class="flex-none rounded-full w-20 h-20 bg-sky-400/20 backdrop-blur-xl flex items-center justify-center">
                        <i class="block text-sky-500 w-10 h-10">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" class="w-full h-full fill-current">
                                <path d="M24,20.5c0,1.93-1.57,3.5-3.5,3.5H3.5c-3.951-.009-4.805-5.612-1.085-6.81,4.524,6.35,14.648,6.348,19.17,0,1.397,.46,2.415,1.762,2.415,3.31Zm-2-10.5c0,5.514-4.486,10-10,10C-1.248,19.497-1.244,.501,12,0c5.514,0,10,4.486,10,10Zm-6,2c0-1.359-.974-2.51-2.315-2.733l-3.041-.506c-1.087-.211-.641-1.826,.356-1.761h2.268c.356,0,.688,.191,.867,.501,.277,.478,.89,.643,1.366,.364,.479-.276,.642-.888,.365-1.366-.535-.925-1.531-1.499-2.598-1.499h-.268v-1c-.006-1.308-1.995-1.307-2,0v1c-3.435-.019-4.184,5.083-.685,5.733l3.041,.506c1.087,.211,.641,1.826-.356,1.761h-2.268c-.356,0-.688-.191-.867-.501-.277-.478-.89-.643-1.366-.364-.479,.276-.642,.888-.365,1.366,.535,.925,1.531,1.499,2.598,1.499h.268v1c.006,1.308,1.995,1.307,2,0v-1c1.654,0,3-1.346,3-3Z"/>
                            </svg>
                        </i>
                    </div>
                    <div class="flex-1">
                        <h3 class="text-xl font-semibold mb-px">Harga Terbaik</h3>
                        <p class="text-gray-300 text-xs">Harga Terjangkau dan Kualitas Terbaik</p>
                    </div>
                </div>

                <div class="lg:border-l-2 lg:border-r-2 border-gray-400 box-border lg:px-5 py-3 flex items-center justify-center space-x-7">
                    <div class="flex-none rounded-full w-20 h-20 bg-sky-400/20 backdrop-blur-xl flex items-center justify-center">
                        <i class="block text-sky-500 w-10 h-10">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" class="w-full h-full fill-current">
                                <path d="M24,20.5c0,1.93-1.57,3.5-3.5,3.5H3.5c-3.951-.009-4.805-5.612-1.085-6.81,4.524,6.35,14.648,6.348,19.17,0,1.397,.46,2.415,1.762,2.415,3.31Zm-2-10.5c0,5.514-4.486,10-10,10C-1.248,19.497-1.244,.501,12,0c5.514,0,10,4.486,10,10Zm-6,2c0-1.359-.974-2.51-2.315-2.733l-3.041-.506c-1.087-.211-.641-1.826,.356-1.761h2.268c.356,0,.688,.191,.867,.501,.277,.478,.89,.643,1.366,.364,.479-.276,.642-.888,.365-1.366-.535-.925-1.531-1.499-2.598-1.499h-.268v-1c-.006-1.308-1.995-1.307-2,0v1c-3.435-.019-4.184,5.083-.685,5.733l3.041,.506c1.087,.211,.641,1.826-.356,1.761h-2.268c-.356,0-.688-.191-.867-.501-.277-.478-.89-.643-1.366-.364-.479,.276-.642,.888-.365,1.366,.535,.925,1.531,1.499,2.598,1.499h.268v1c.006,1.308,1.995,1.307,2,0v-1c1.654,0,3-1.346,3-3Z"/>
                            </svg>
                        </i>
                    </div>
                    <div class="flex-1">
                        <h3 class="text-xl font-semibold mb-px">Jaminan Kepuasan</h3>
                        <p class="text-gray-300 text-xs">Hasil Cetak Kami Terjamin Kualitasnya</p>
                    </div>
                </div>
                
                <div class="box-border lg:px-5 py-3 flex items-center justify-center space-x-7">
                    <div class="flex-none rounded-full w-20 h-20 bg-sky-400/20 backdrop-blur-xl flex items-center justify-center">
                        <i class="block text-sky-500 w-10 h-10">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" class="w-full h-full fill-current">
                                <path d="M24,20.5c0,1.93-1.57,3.5-3.5,3.5H3.5c-3.951-.009-4.805-5.612-1.085-6.81,4.524,6.35,14.648,6.348,19.17,0,1.397,.46,2.415,1.762,2.415,3.31Zm-2-10.5c0,5.514-4.486,10-10,10C-1.248,19.497-1.244,.501,12,0c5.514,0,10,4.486,10,10Zm-6,2c0-1.359-.974-2.51-2.315-2.733l-3.041-.506c-1.087-.211-.641-1.826,.356-1.761h2.268c.356,0,.688,.191,.867,.501,.277,.478,.89,.643,1.366,.364,.479-.276,.642-.888,.365-1.366-.535-.925-1.531-1.499-2.598-1.499h-.268v-1c-.006-1.308-1.995-1.307-2,0v1c-3.435-.019-4.184,5.083-.685,5.733l3.041,.506c1.087,.211,.641,1.826-.356,1.761h-2.268c-.356,0-.688-.191-.867-.501-.277-.478-.89-.643-1.366-.364-.479,.276-.642,.888-.365,1.366,.535,.925,1.531,1.499,2.598,1.499h.268v1c.006,1.308,1.995,1.307,2,0v-1c1.654,0,3-1.346,3-3Z"/>
                            </svg>
                        </i>
                    </div>
                    <div class="flex-1">
                        <h3 class="text-xl font-semibold mb-px">Pengiriman Cepat</h3>
                        <p class="text-gray-300 text-xs">Packing Aman dan Juga Cepat Sampai Tujuan</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- end hero -->

        <!-- service -->
        <section class="w-full box-border px-10 lg:px-20 mb-20 overflow-x-hidden">
            <div class="mb-10">
                <h3 class="text-center text-3xl font-bold">Service Kami</h3>
            </div>

            <div class="w-full box-border grid lg:grid-cols-4 gap-3 lg:gap-6">
                <div class="rounded-xl box-border p-5 bg-white">
                    <h3 class="font-semibold mb-5">Wrapping Stiker</h3>
                    <p class="text-xs text-gray-500 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nihil! Animi voluptates atque, molestiae maxime impedit deserunt quasi cum nesciunt quidem veritatis obcaecati quam sapiente eaque excepturi odio. Pariatur, excepturi?</p>
                </div>

                <div class="rounded-xl box-border p-5 bg-white">
                    <h3 class="font-semibold mb-5">Cutting Stiker</h3>
                    <p class="text-xs text-gray-500 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nihil! Animi voluptates atque, molestiae maxime impedit deserunt quasi cum nesciunt quidem veritatis obcaecati quam sapiente eaque excepturi odio. Pariatur, excepturi?</p>
                </div>

                <div class="rounded-xl box-border p-5 bg-white">
                    <h3 class="font-semibold mb-5">Car Branding</h3>
                    <p class="text-xs text-gray-500 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nihil! Animi voluptates atque, molestiae maxime impedit deserunt quasi cum nesciunt quidem veritatis obcaecati quam sapiente eaque excepturi odio. Pariatur, excepturi?</p>
                </div>

                <div class="rounded-xl box-border p-5 bg-white">
                    <h3 class="font-semibold mb-5">Car Branding</h3>
                    <p class="text-xs text-gray-500 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nihil! Animi voluptates atque, molestiae maxime impedit deserunt quasi cum nesciunt quidem veritatis obcaecati quam sapiente eaque excepturi odio. Pariatur, excepturi?</p>
                </div>
                
            </div>
        </section>
        <!-- end service -->

        <!-- product -->
        <section class="w-full box-border px-5 lg:px-20 mb-20 lg:flex overflow-x-hidden">
            <div class="lg:flex-none w-52 box-border mb-10 lg:mb-0">
                <h3>Kategori</h3>
            </div>

            <div class="flex-1 box-border">
                <h3 class="mb-5 text-xl border-b font-bold text-[#161933]">
                    <span class="inline-block border-b-2 border-[#161933]">Product</span>
                </h3>

                <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div class="box-border rounded shadow-xl cursor-pointer border border-gray-200 hover:border-orange-400 overflow-hidden" v-for="i in 8" :key="i">
                        <div class="w-full box-border h-54 flex items-center justify-center overflow-hidden border-b border-gray-200">
                            <img src="../assets/img/image-mobil.png" alt="" class="h-full object-cover">
                        </div>

                        <div class="w-full p-2 lg:p-3 box-border">
                            <a href="#" class="block font-medium mb-1 lg:mb-3 text-sm lg:text-base">Stiker Mobile Warna Merah keren</a>
                            <div class="text-xs text-gray-700 mb-2 text-xs">Lorem ipsum dolor sit amet.</div>
                            <div class="flex items-center justify-between text-sm">
                                <strong class="text-orange-500 text-base">Rp 200.000</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <button class="mt-10 bg-orange-400 text-white flex items-center justify-between px-5 py-2 rounded text-xs">
                    <span class="mr-7">Selengkapnya</span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </span>
                </button>
            </div>
        </section>
        <!-- end product -->

        <!-- banding -->
        <section class="w-full box-border px-10 lg:px-20 mb-20 bg-dark-purple text-white py-10 text-sm font-light overflow-x-hidden">
            <div class="text-[#fab800] font-semibold leading-7 mb-2">Nama Perusahaan</div>
            <div class="text-[#f1f1f2] mb-10 text-2xl">Dipercaya oleh jutaan orang di indonesia</div>
            <div class="leading-7 mb-5">Sejak 2017, kami telah menjangkau jutaan orang dan menghasilkan lebih dari 2.500 kampanye di 30 kota besar di Indonesia.</div>

            <button class="bg-orange-500 px-10 py-7 rounded font-semibold mb-20 flex items-center justify-center space-x-4 border border-orange-500 hover:bg-transparent hover:text-orange-500">
                <div class="w-7 h-7 lg:w-10 lg:h-10">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" class="w-full h-full fill-current">
                    <g id="WA_Logo">
                        <g>
                            <path style="fill-rule:evenodd;clip-rule:evenodd;" d="M20.463,3.488C18.217,1.24,15.231,0.001,12.05,0    C5.495,0,0.16,5.334,0.157,11.892c-0.001,2.096,0.547,4.142,1.588,5.946L0.057,24l6.304-1.654    c1.737,0.948,3.693,1.447,5.683,1.448h0.005c6.554,0,11.89-5.335,11.893-11.893C23.944,8.724,22.708,5.735,20.463,3.488z     M12.05,21.785h-0.004c-1.774,0-3.513-0.477-5.031-1.378l-0.361-0.214l-3.741,0.981l0.999-3.648l-0.235-0.374    c-0.99-1.574-1.512-3.393-1.511-5.26c0.002-5.45,4.437-9.884,9.889-9.884c2.64,0,5.122,1.03,6.988,2.898    c1.866,1.869,2.893,4.352,2.892,6.993C21.932,17.351,17.498,21.785,12.05,21.785z M17.472,14.382    c-0.297-0.149-1.758-0.868-2.031-0.967c-0.272-0.099-0.47-0.149-0.669,0.148s-0.767,0.967-0.941,1.166    c-0.173,0.198-0.347,0.223-0.644,0.074c-0.297-0.149-1.255-0.462-2.39-1.475c-0.883-0.788-1.48-1.761-1.653-2.059    s-0.018-0.458,0.13-0.606c0.134-0.133,0.297-0.347,0.446-0.521C9.87,9.97,9.919,9.846,10.019,9.647    c0.099-0.198,0.05-0.372-0.025-0.521C9.919,8.978,9.325,7.515,9.078,6.92c-0.241-0.58-0.486-0.501-0.669-0.51    C8.236,6.401,8.038,6.4,7.839,6.4c-0.198,0-0.52,0.074-0.792,0.372c-0.272,0.298-1.04,1.017-1.04,2.479    c0,1.463,1.065,2.876,1.213,3.074c0.148,0.198,2.095,3.2,5.076,4.487c0.709,0.306,1.263,0.489,1.694,0.626    c0.712,0.226,1.36,0.194,1.872,0.118c0.571-0.085,1.758-0.719,2.006-1.413c0.248-0.694,0.248-1.29,0.173-1.413    C17.967,14.605,17.769,14.531,17.472,14.382z"/>
                        </g>
                    </g>
                    </svg>
                </div>
                <span class="text-xl lg:text-3xl">Hubungi Kami</span>
            </button>

            <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
                <div class="px-5 box-border" v-for="i in 4" :key="i">
                    <div class="font-semibold text-3xl mb-2 relative">
                        <div class="w-px h-full bg-orange-500 absolute top-0 bottom-0 -left-5"></div>
                        <span>500+</span>
                    </div>
                    <p class="text-xs text-gray-400">BRANDS TRUSTED STIKER</p>
                </div>
            </div>
        </section>
        <!-- end branding -->

        <!-- promo -->
        <section class="w-full box-border px-20 mb-20 py-10 text-sm font-light overflow-x-hidden">
            <div class="mb-10">
                <h3 class="text-center text-3xl font-bold mb-5">Paket dan Promo</h3>
                <div class="text-center text-neutral-500">
                    Jangan sampai ketinggalan promo dari kami.
                </div>
            </div>

            <div class="w-full box-border grid lg:grid-cols-4 gap-14">
                <div class="rounded box-border px-8 py-7 shadow-promo text-neutral-500" v-for="i in 4" :key="i">
                    <div class="flex space-x-5 mb-8">
                        <div class="flex w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center">
                            <i class="inline-block w-5 h-5 text-orange-500">
                                <svg xmlns="http://www.w3.org/2000/svg" id="light" data-name="Layer 1" viewBox="0 0 24 24" class="w-full h-full fill-current"><path d="M11.24,24a2.262,2.262,0,0,1-.948-.212,2.18,2.18,0,0,1-1.2-2.622L10.653,16H6.975A3,3,0,0,1,4.1,12.131l3.024-10A2.983,2.983,0,0,1,10,0h3.693a2.6,2.6,0,0,1,2.433,3.511L14.443,8H17a3,3,0,0,1,2.483,4.684l-6.4,10.3A2.2,2.2,0,0,1,11.24,24Z"/></svg>
                            </i>
                        </div>
                        <div>
                            <h5 class="text-xl font-semibold">Basic</h5>
                            <p class="text-xs">Paket Murah</p>
                        </div>
                    </div>
                    
                    <div class="w-full pb-5 px-4 border-b">
                        <div class="flex items-center space-x-3 mb-2" v-for="n in 5" :key="n">
                            <div class="flex w-5 h-5 rounded-full bg-green-300 flex items-center justify-center text-light">
                                <i class="inline-block w-3 h-3 text-green-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                    </svg>
                                </i>
                            </div>

                            <span class="font-semibold text-xs">Lorem, ipsum dolor.</span>
                        </div>
                    </div>

                    <div class="flex items-center justify-center flex-col box-border py-5">
                        <div class="mb-5 font-bold text-2xl">Rp 100.000</div>

                        <button class="rounded bg-orange-500 px-14 py-2 text-white font-bold">Pilih</button>
                    </div>
                </div>
            </div>
        </section>
        <!-- end promo -->

        <!-- call testimonial -->
        <section class="w-full box-border px-20 mb-20 py-10 text-sm font-light overflow-x-hidden">
            <div class="mb-10">
                <h3 class="text-center text-3xl font-bold mb-5">Kata Pelanggan Kami</h3>
                <!-- <div class="text-center text-neutral-500">
                    Jangan sampai ketinggalan promo dari kami.
                </div> -->
            </div>

            <div class="w-full box-border grid lg:grid-cols-4 gap-8">
                <div class="rounded-xl box-border p-5 shadow-promo text-neutral-500 bg-white" v-for="i in 4" :key="i">
                    <div class="w-full box-border flex items-center justify-center mb-5">
                        <div class="w-24 h-24 rounded-full bg-gray-400 box-border overflow-hidden">
                            <img src="" alt="">
                        </div>
                    </div>
                    <div class="w-full text-center italic">
                        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit, ipsum?"
                    </div>
                </div>
            </div>
        </section>
        <!-- end testimony -->
    </div>
</template>

<script>
import MobileApp from '../components/Ilustrasi/MobileApp.vue'
export default {
    components: { MobileApp },
    setup() {
        
    },
}
</script>