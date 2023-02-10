class Features {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: "i", //i = means case insensitive
            },
        } : {

        }
        this.query = this.query.find({ ...keyword })
        return this;
    };

    filter() {
        const copiedQuery = { ...this.queryStr }
        // REmoving some fields for category

        const removeFields = ["keyword", "page", "limit"];
        removeFields.forEach((key) => delete copiedQuery[key]);

        // Filter for price and rating
        let queryStr = JSON.stringify(copiedQuery);

        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, key => `$${key}`) //sare gt,lt,gte,lte k0 replace kardega $gt,$lt,$gte,$lte respectively

        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    };
};

export default Features;