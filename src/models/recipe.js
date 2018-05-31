import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RecipeSchema = new Schema ({
    name: {
        type: 'string',
        required: true
    },
    body: {
        type: 'string',
        required: false
    },
    particepent: {
        type: Schema.Types.ObjectId,
        ref: 'Particepents'
    },
    ingredients: []
})

export default mongoose.model('Recipe', RecipeSchema);