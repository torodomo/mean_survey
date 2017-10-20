const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PollSchema = new mongoose.Schema({
	question: {
		type: String
	},
    _options: [ {
        type: Schema.Types.ObjectId,
        ref: 'Option',
    } ],
    creator: {
        type: String
    }
}, {timestamps: true})
// Our poll has its question and its creator, along with its options
// Each option is its own schema so that is why our _options field is
// and array of options from its Schema


const Poll = mongoose.model('Poll', PollSchema)
