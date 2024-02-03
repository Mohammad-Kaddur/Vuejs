<!-- <template>
    <div class="border m-auto mb-5" style="width: fit-content;">
        Products Data
    
        <div v-for="category in categoryData" :key="category.id">
            <product-cart v-for="prod in category.attributes.products.data " :key="prod.id" :id="prod.id"
      :title="prod.attributes.title" :price="prod.attributes.price"></product-cart>
         
        </div>
    </div>
</template>
  
<script>
export default {
    components: {},
    data() {
        return {
            selectedProduct: null,
            addColor: "",
            isAddedClass: false,
            isCbx2Checked: false,
            isShowLoaders: true,
        };
    },
    props: ["id", "title", "desc", "images"],
    computed: {
        categoryData() {
            return this.$store.getters['category/getCategoreis'].filter(
                (category) => category.attributes.title === this.title)
        }
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
    }
};
</script>
  
<style scoped>
.check {
    cursor: pointer;
    position: relative;
    margin: auto;

    -webkit-tap-highlight-color: transparent;
    transform: translate3d(0, 0, 0);
}

.check:before {
    content: "";
    position: absolute;
    top: -15px;
    left: -15px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(34, 50, 84, 0.03);
    opacity: 0;
    transition: opacity 0.2s ease;
}

.check svg {
    position: relative;
    z-index: 1;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: #c8ccd4;
    stroke-width: 1.5;
    transform: translate3d(0, 0, 0);
    transition: all 0.2s ease;
}

.check svg path {
    stroke-dasharray: 60;
    stroke-dashoffset: 0;
}

.check svg polyline {
    stroke-dasharray: 22;
    stroke-dashoffset: 66;
}

.check:hover:before {
    opacity: 1;
}

.check svg {
    stroke: var(--accent-color, #a3e583);
}

/* #### */
.check svg {
    stroke: var(--accent-color, #a3e583);
}

/* 
#cbx2:checked + .addClassToPath {
  stroke-dashoffset: 60;
  transition: all 0.3s linear;
}

#cbx2:checked + .check svg polyline {
  stroke-dashoffset: 42;
  transition: all 0.2s linear;
  transition-delay: 0.15s;
} */
/* #### */
/* ############################################## */
.relative {
    position: relative;
}

.add-to-cart-button {
    outline: none;
    border-radius: 5px;
    padding: 10px;
    background-color: #000;
    color: #fff;
    border: none;
    cursor: pointer;
    margin-top: 10px;
}

.button-cart-checkbox {
    display: none;
    position: absolute;
    left: 50%;
    top: 68%;
    transform: translate(-50%, -50%);
}

/* ############ */
.btn {
    width: 140px;
    height: 50px;
    background: linear-gradient(to top, #00154c, #12376e, #23487f);
    color: #fff;
    border-radius: 50px;
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
    overflow: hidden;
}

.btn span {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: top 0.5s;
}

.btnTextOne {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
}

.btnTextTwo {
    position: absolute;
    width: 100%;
    top: 150%;
    left: 0;
    transform: translateY(-50%);
}

.btnTextOneShow {
    top: -100%;
}

.btnTextTwoShow {
    top: 50%;
}

/* ############ */
</style> -->
