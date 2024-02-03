<template>
    <div>
        <div class="container p-4">
            <h2 class="mb-4">Send The Order.</h2>
            <div class="main-content-address row justify-content-between gap-4 flex-column-reverse flex-lg-row">
                <form class="col-12 col-lg-7 p-4" @submit.prevent="submitForm">
                    <div class="row">
                        <div class="box-one col-12 col-sm-6">
                            <div>
                                <label for="fName">Full Name</label>
                                <input type="text" id="fName" v-model.trim="fullName" placeholder="full name" />
                            </div>
                            <div>
                                <label for="phoneNumber">phone number</label>
                                <input type="text" id="phoneNumber" v-model.trim="phoneNumber" placeholder="full name" />
                            </div>
                            <div>
                                <label for="email">Email</label>
                                <input type="email" id="email" v-model.trim="email" placeholder="full name" />
                            </div>
                        </div>
                        <div class="box-two col-12 col-sm-6">
                            <div>
                                <label for="address">address</label>
                                <textarea id="address" v-model.trim="address" class="text-address p-2" cols="30"
                                    rows="5"></textarea>
                            </div>
                        </div>
                    </div>
                    <button class="button" type="submit">Send The Order</button>
                </form>
                <div class="the-box-order col-12 col-lg-4 p-4">
                    <h3 class="mb-4 fw-bold">{{ cartTotal }}.00 TL</h3>
                    <!-- ################### -->
                    <div class="mb-4 d-flex justify-content-between align-items-start" v-for="cart in cartItems"
                        :key="cart.id">
                        <div class="d-flex align-items-center">
                            <div v-for="img in cart.image.data" :key="img.id">
                                <img :src="`http://localhost:1337` + img.attributes.formats.thumbnail.url" :alt="title"
                                    class="me-3" />
                            </div>
                            <div class="">
                                <div class="nameProduct fw-bold"> {{ cart.title }}</div>
                                <div>
                                    <span class="qty">Qty</span> <span class="fw-bold">{{ cart.qty }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="fw-bold">{{ cart.price }}.00 TL</div>
                    </div>
                    <!-- ################### -->
                    <div class="total-price fw-bold d-flex justify-content-between align-items-center">
                        <div class="fs-4">Total:</div>
                        <div>{{ cartTotal }}.00 TL</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fullName: '',
            phoneNumber: '',
            email: '',
            address: ''

        }
    },
    computed: {
        cartTotal() {
            return this.$store.getters['cart/totalSum'];
        },
        cartItems() {
            return this.$store.getters['cart/products'];
        }
    },
    methods: {
        async submitForm() {

            const actionPayload = {
                fullName: this.fullName,
                phoneNumber: this.phoneNumber,
                email: this.email,
                address: this.address,
            };
            try {
                await this.$store.dispatch('order/postDataForm', actionPayload);

                const redirectUrl = '/' + (this.$route.query.redirect || 'coaches');
                this.$router.replace(redirectUrl);
            } catch (err) {
                this.error = err.message || 'Failed to authenticate, try later.';
            }
        },
    }
}
</script>

<style scoped>
/* Start Check out */
.text-address {
    resize: none;
    border-radius: 5px;
}

.the-box-order {
    box-shadow: 0px 0px 5px 0px #eee, 0px 0px 5px 0px #eee, 0px 0px 10px 1px #eee;
    border-radius: 8px;
    height: fit-content;
}

.the-box-order h3 {
    font-size: 30px;
}

.the-box-order img {
    width: 50px;
    border-radius: 5px;
}

.the-box-order .qty {
    color: #aaa;
}

.main-content-address form {
    box-shadow: 0px 0px 5px 0px #eee, 0px 0px 5px 0px #eee, 0px 0px 10px 1px #eee;
    border-radius: 8px;
    height: fit-content;
}

.main-content-address .box-two,
.main-content-address .box-one {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
}

.main-content-address .box-two div,
.main-content-address .box-one div {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    font-weight: bold;
}

.main-content-address .box-two div input,
.main-content-address .box-one div input,
.main-content-address .box-two div label,
.main-content-address .box-one div label {
    margin-bottom: 15px;
}

/* End Check out */
</style>
