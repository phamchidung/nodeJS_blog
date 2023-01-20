module.exports = {
    multipleMongooseToObject: function (mongooses) {
        // convert mongoose object to object literal
        return mongooses.map((mongoose) => mongoose.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
