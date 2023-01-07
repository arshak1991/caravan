const mongoose = require("mongoose");
const mongoDB = require("../config/mongo_common.config");
const autoIncrement = require('simple-mongoose-autoincrement');


const Schema = mongoose.Schema;

const planningSchema = new Schema({
    ID: {
        type: Number,
        unique : true
    },
    UUID: {
        type: String,
        default: null
    },
    // carrier: {
    //     type: Schema.Types.ObjectId,
    //     ref: "carriers"
    // },
    equipment: {
        type: Schema.Types.ObjectId,
        ref: "equipments"
    },
    assets: {
        type: Schema.Types.ObjectId,
        ref: "assets"
    },
    driver: {
        type: Schema.Types.ObjectId,
        ref: "drivers"
    },
    depo: {
        type: Schema.Types.ObjectId,
        ref: "depos"
    },
    shift: {
        type: Schema.Types.ObjectId,
        ref: "shifts"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },

    nickname: {
        type: String,
        default: null
    },
    flowType: {
        type: Number,
        default: null
    },

    orders: [{
        type: Schema.Types.ObjectId,
        ref: "orders"
    }],
    stops: {
        type: Number,
        default: null
    },
    ordersCount: {
        type: Number,
        default: null
    },

    start: {
        type: Object,
        default: null
    },
    end: {
        type: Object,
        default: null
    },
    feet: {
        type: Number,
        default: null
    },
    weight: {
        type: Number,
        default: null
    },
    cube: {
        type: Number,
        default: null
    },
    pallet: {
        type: Number,
        default: null
    },
    emptymile: {
        type: Number,
        default: null
    },

    totalDistance: {
        type: Number,
        default: null
    },
    totalDuration: {
        type: Number,
        default: null
    },

    status: {
        type: Schema.Types.ObjectId,
        ref: "statuses"
    },
    loadType: {
        type: Schema.Types.ObjectId,
		ref: "transporttypes",
    },
    freezed: {
        type: Number,
        default: null
    },

    loadCost: {
        type: String,
        default: null
    },
    loadCostPerMile: {
        type: String,
        default: null
    },
    fuelSurcharge: {
        type: Number,
        default: null
    },

    startAddress: {
        type: String,
        default: null
    },
    endAddress: {
        type: String,
        default: null
    },
    startTime:  {
        type: Date,
        default: null
    },
    endTime: {
        type: Date,
        default: null
    },
    comment: {
        type: String,
        default: null
    },
    totalcases:  {
        type: String,
        default: null
    },

    feelRates: {
        type: Number,
        default: null
    },
    permileRates: {
        type: Number,
        default: null
    },
    return: {
        type: Number,
        default: null
    },
    planType: {
        type: String,
        enum: ['Manual', 'Auto']
    },
    carTypes: {
        type: Array,
        default: null
    },
    stopLocations: {
        type: Array,
        default: null
    },
    busy: {
        type: Number,
        default: 0
    },
    changed: {
        type: Array,
        default: null
    },
    warning: {
        type: Number,
        default: null
    },
    warningData: {
        type: Object,
        default: {}
    },
    warningMessage: {
        type: Array,
        default: []
    },
    disabled: {
        type: Number,
        default: null
    },
    confirmed: {
        type: Number,
        default: 0
    },
    pieceTotalQuantity: {
        type: Number,
        default: 0
    },
    lastLocations: {
        type: Object,
        default: null
    },
    finishRequest: {
        type: Number,
        default: 0
    },
    startedTime: {
        type: Date,
        default: null
    },
    finishedTime: {
        type: Date,
        default: null
    },
    Deadhead: {
        type: Number,
        default: 0
    },
    depotType: {
        type: Number,
        default: null
    }
},{ timestamps: true });
planningSchema.plugin(autoIncrement, { field: 'ID' });
let plannings = mongoDB.model("plannings", planningSchema);
module.exports = plannings;
