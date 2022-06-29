const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/product', { useNewUrlParser: true, useUnifiedTopology: true });


const productSchema = new mongoose.Schema({
    name: {
        type: String
    },
    onSale: {
        type: Boolean,
        default: true
    }
})

// //instance methods
// productSchema.methods.toggleFuc = function () {
//     this.onSale = !this.onSale; //將instance的onSale property改為相反
//     return this.save()
// }

//static method
productSchema.statics.toFalse = function () {
    return this.updateMany({}, { onSale: false })
}
//model
const Product = mongoose.model('Product', productSchema)

//instance
const pen = new Product({
    name: 'pen',
    onSale: true
})
pen.save();

//use function
const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'pen' })
    console.log(foundProduct)
    await foundProduct.toggleFuc();
    console.log(foundProduct)
}
Product.toFalse().then(res => { console.log(res) })