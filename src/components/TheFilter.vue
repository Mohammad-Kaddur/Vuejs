<template>
    <div class="filter col-3 ">
        <h3>Filter</h3>
        <!-- Category -->
        <div class="box-filter pb-4">
            <div class="filter-products  mt-3 mb-3"><span>Category</span><ion-icon name="chevron-down-outline" role="img"
                    class="md flip-rtl hydrated"></ion-icon>
            </div>
            <div class="filter-products-flex mt-3">
                <input type="text" placeholder="Search" v-model="text">
                <div class="checkbox mt-3 mb-3 d-flex" v-for="category in searchCategoryData" :key="category.id">
                    <input :id="'category_' + category.id" type="checkbox" :value="category.id" @change="selectValue">
                    <label :for="'category_' + category.id" class="cursor-pointer m-0 ps-2 pe-2">
                        <span>{{ category.attributes.title }}</span>
                    </label>
                </div>
            </div>
        </div>
        <!-- Price -->
        <div class="box-filter pb-4">
            <div class="filter-products  mt-3 mb-3">
                <span>Price</span>
                <ion-icon name="chevron-down-outline" role="img" class="md flip-rtl hydrated"></ion-icon>
            </div>
            <div class="filter-products">
                <div class="input-filter-price">
                    <input id="price-to" class="" type="number" placeholder="Up to" min="1" v-model="priceFrom">
                    <label for="price-to" class="">TL</label>
                </div>
                <div class="input-filter-price">
                    <input id="price-from" class="" type="number" placeholder="From" min="0" v-model="priceUpTo">
                    <label for="price-from" class="">TL</label>
                </div>
                <button type="submit" @click="search">Search</button>
            </div>
        </div>
        <!-- Brand -->
        <div class="box-filter pb-4">
            <div class="filter-products  mt-3 mb-3"><span>Brand</span><ion-icon name="chevron-down-outline" role="img"
                    class="md flip-rtl hydrated"></ion-icon>
            </div>
            <div class="filter-products-flex mt-3">
                <input type="text" placeholder="Search">
                <div class="checkbox mt-3 mb-3 d-flex">
                    <input id="large" type="checkbox" value="large">
                    <label for="large" class="cursor-pointer m-0 ps-2 pe-2"><span>HP</span>
                    </label>
                </div>
            </div>
        </div>
        <!-- Size -->
        <div class="box-filter pb-4">

            <div class="filter-products  mt-3 mb-3"><span>Size</span><ion-icon name="chevron-down-outline" role="img"
                    class="md flip-rtl hydrated"></ion-icon>
            </div>
            <div class="filter-products-flex mt-3">
                <input type="text" placeholder="Search">
                <div class="checkbox mt-3 mb-3 d-flex">
                    <input id="large" type="checkbox" value="large">
                    <label for="large" class="cursor-pointer m-0 ps-2 pe-2"><span>HP</span>
                    </label>
                </div>
            </div>
        </div>
        <!-- Color -->
        <div class="box-filter pb-4">

            <div class="filter-products  mt-3 mb-3"><span>Color</span><ion-icon name="chevron-down-outline" role="img"
                    class="md flip-rtl hydrated"></ion-icon>
            </div>
            <div class="filter-products-flex mt-3">
                <input type="text" placeholder="Search">
                <div class="checkbox mt-3 mb-3 d-flex">
                    <input id="large" type="checkbox" value="large">
                    <label for="large" class="cursor-pointer m-0 ps-2 pe-2"><span>HP</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            selectedCategories: [],
            text: '',
            priceFrom: null,
            priceUpTo: null,
        };
    },
    emits: ['filter-changed'],
    computed: {
        getCategoryData() {
            const data = this.$store.getters['category/getCategoreis'];
            return data
        },
        // searchCategoryData() {
        //     const searchItem = this.text.toLowerCase();
        //     return this.getCategoryData.filter((category) => {
        //         return category.attributes.title.toLowerCase().includes(searchItem)
        //     })
        // }
    },
    created() {
        this.loadCategoreis()
    },
    methods: {
        async loadCategoreis() {
            try {
                await this.$store.dispatch("category/actionProducts");
            } catch (error) {
                this.error = error.message || "Product Not Found";
            }
        },
        search() {

        },
        // selectValue(event) {
        //     const inputValue = event.target.value;
        //     const isChecked = event.target.checked;

        //     if (isChecked) {
        //         this.selectedCategories.push(inputValue);
        //     } else {
        //         this.selectedCategories = this.selectedCategories.filter((cat) => cat !== inputValue);
        //     }

        //     this.$emit('filter-changed', this.selectedCategories);
        // },
    },
    searchCategory(event) {
        const data = event.target.value
        this.text += data
        console.log(this.text)
    },


}

</script>


<style scoped>
/* Start Filter */
.box-filter {
    border-bottom: 1px solid #eee;
}

.filter-products {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    font-weight: 600;
    gap: 10px;
}

.input-filter-price {
    position: relative;
}

.input-filter-price input {
    width: 100%;
    padding: 5px 10px 5px 30px;
    border: 1px solid #aaa;
}

.input-filter-price label {
    position: absolute;
    top: 50%;
    left: 6px;
    transform: translateY(-50%);
    font-weight: normal;
}

.filter-products-flex {
    display: flex;
    flex-direction: column;
}

.filter-products-flex input {
    border: 1px solid #aaa;
    height: 30px;
}

.filter-products-flex .checkbox {
    align-items: center;
}

.filter-products-flex .checkbox input {
    padding: 20px;
}

.filter-products-flex .checkbox label {
    width: 100%;
}

/* End Filter */
</style>